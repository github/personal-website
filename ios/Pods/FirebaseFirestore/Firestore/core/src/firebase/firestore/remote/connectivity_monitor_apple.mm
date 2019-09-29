/*
 * Copyright 2018 Google
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

#include "Firestore/core/src/firebase/firestore/remote/connectivity_monitor.h"

#if defined(__APPLE__)

#include <SystemConfiguration/SystemConfiguration.h>
#include <dispatch/dispatch.h>
#include <netinet/in.h>

#include <memory>

#include "Firestore/core/src/firebase/firestore/util/executor_libdispatch.h"
#include "Firestore/core/src/firebase/firestore/util/hard_assert.h"
#include "Firestore/core/src/firebase/firestore/util/log.h"
#include "absl/memory/memory.h"

namespace firebase {
namespace firestore {
namespace remote {

namespace {

using NetworkStatus = ConnectivityMonitor::NetworkStatus;
using util::AsyncQueue;
using util::ExecutorLibdispatch;

NetworkStatus ToNetworkStatus(SCNetworkReachabilityFlags flags) {
  if (!(flags & kSCNetworkReachabilityFlagsReachable)) {
    return NetworkStatus::Unavailable;
  }
  if (flags & kSCNetworkReachabilityFlagsConnectionRequired) {
    return NetworkStatus::Unavailable;
  }

#if TARGET_OS_IPHONE
  if (flags & kSCNetworkReachabilityFlagsIsWWAN) {
    return NetworkStatus::AvailableViaCellular;
  }
#endif
  return NetworkStatus::Available;
}

SCNetworkReachabilityRef CreateReachability() {
  // Pseudoaddress that monitors internet reachability in general.
  sockaddr_in any_connection_addr{};
  any_connection_addr.sin_len = sizeof(any_connection_addr);
  any_connection_addr.sin_family = AF_INET;
  return SCNetworkReachabilityCreateWithAddress(
      nullptr, reinterpret_cast<sockaddr*>(&any_connection_addr));
}

void OnReachabilityChangedCallback(SCNetworkReachabilityRef /*unused*/,
                                   SCNetworkReachabilityFlags flags,
                                   void* raw_this);

}  // namespace

/**
 * Implementation of `ConnectivityMonitor` based on `SCNetworkReachability`
 * (iOS/MacOS).
 */
class ConnectivityMonitorApple : public ConnectivityMonitor {
 public:
  explicit ConnectivityMonitorApple(
      const std::shared_ptr<AsyncQueue>& worker_queue)
      : ConnectivityMonitor{worker_queue} {
    reachability_ = CreateReachability();
    if (!reachability_) {
      LOG_DEBUG("Failed to create reachability monitor.");
      return;
    }

    SCNetworkReachabilityFlags flags;
    if (SCNetworkReachabilityGetFlags(reachability_, &flags)) {
      SetInitialStatus(ToNetworkStatus(flags));
    }

    SCNetworkReachabilityContext context{};
    context.info = this;
    bool success = SCNetworkReachabilitySetCallback(
        reachability_, OnReachabilityChangedCallback, &context);
    if (!success) {
      LOG_DEBUG("Couldn't set reachability callback");
      return;
    }

    // It's okay to use the main queue for reachability events because they are
    // fairly infrequent, and there's no good way to get the underlying dispatch
    // queue out of the worker queue. The callback itself is still executed on
    // the worker queue.
    success = SCNetworkReachabilitySetDispatchQueue(reachability_,
                                                    dispatch_get_main_queue());
    if (!success) {
      LOG_DEBUG("Couldn't set reachability queue");
      return;
    }
  }

  ~ConnectivityMonitorApple() {
    if (reachability_) {
      bool success =
          SCNetworkReachabilitySetDispatchQueue(reachability_, nullptr);
      if (!success) {
        LOG_DEBUG("Couldn't unset reachability queue");
      }

      CFRelease(reachability_);
    }
  }

  void OnReachabilityChanged(SCNetworkReachabilityFlags flags) {
    queue()->Enqueue(
        [this, flags] { MaybeInvokeCallbacks(ToNetworkStatus(flags)); });
  }

 private:
  SCNetworkReachabilityRef reachability_ = nil;
};

namespace {

void OnReachabilityChangedCallback(SCNetworkReachabilityRef /*unused*/,
                                   SCNetworkReachabilityFlags flags,
                                   void* raw_this) {
  HARD_ASSERT(raw_this, "Received a null pointer as context");
  static_cast<ConnectivityMonitorApple*>(raw_this)->OnReachabilityChanged(
      flags);
}

}  // namespace

std::unique_ptr<ConnectivityMonitor> ConnectivityMonitor::Create(
    const std::shared_ptr<AsyncQueue>& worker_queue) {
  return absl::make_unique<ConnectivityMonitorApple>(worker_queue);
}

}  // namespace remote
}  // namespace firestore
}  // namespace firebase

#endif  // defined(__APPLE__)
