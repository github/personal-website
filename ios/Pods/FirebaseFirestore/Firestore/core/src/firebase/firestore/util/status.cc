/*
 * Copyright 2015, 2018 Google
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

#include "Firestore/core/src/firebase/firestore/util/status.h"

#include <ostream>
#include <utility>

#include "Firestore/core/src/firebase/firestore/util/string_format.h"
#include "absl/memory/memory.h"

namespace firebase {
namespace firestore {
namespace util {

Status::Status(Error code, absl::string_view msg) {
  HARD_ASSERT(code != Error::Ok);
  state_ = absl::make_unique<State>();
  state_->code = code;
  state_->msg = static_cast<std::string>(msg);
}

void Status::Update(const Status& new_status) {
  if (ok()) {
    *this = new_status;
  }
}

Status& Status::CausedBy(const Status& cause) {
  if (cause.ok() || this == &cause) {
    return *this;
  }

  if (ok()) {
    *this = cause;
    return *this;
  }

  absl::StrAppend(&state_->msg, ": ", cause.error_message());

  // If this Status has no accompanying PlatformError but the cause does, create
  // a PlatformError for this Status ahead of time to preserve the causal chain
  // that Status doesn't otherwise support.
  if (state_->platform_error == nullptr &&
      cause.state_->platform_error != nullptr) {
    state_->platform_error =
        cause.state_->platform_error->WrapWith(code(), error_message());
  }

  return *this;
}

Status& Status::WithPlatformError(std::unique_ptr<PlatformError> error) {
  HARD_ASSERT(!ok(), "Platform errors should not be applied to Status::OK()");
  state_->platform_error = std::move(error);
  return *this;
}

void Status::SlowCopyFrom(const State* src) {
  if (src == nullptr) {
    state_ = nullptr;
  } else {
    state_ = absl::make_unique<State>(*src);
  }
}

const std::string& Status::empty_string() {
  static std::string* empty = new std::string;
  return *empty;
}

std::string Status::ToString() const {
  if (state_ == nullptr) {
    return "OK";
  } else {
    std::string result;
    switch (code()) {
      case Error::Cancelled:
        result = "Cancelled";
        break;
      case Error::Unknown:
        result = "Unknown";
        break;
      case Error::InvalidArgument:
        result = "Invalid argument";
        break;
      case Error::DeadlineExceeded:
        result = "Deadline exceeded";
        break;
      case Error::NotFound:
        result = "Not found";
        break;
      case Error::AlreadyExists:
        result = "Already exists";
        break;
      case Error::PermissionDenied:
        result = "Permission denied";
        break;
      case Error::Unauthenticated:
        result = "Unauthenticated";
        break;
      case Error::ResourceExhausted:
        result = "Resource exhausted";
        break;
      case Error::FailedPrecondition:
        result = "Failed precondition";
        break;
      case Error::Aborted:
        result = "Aborted";
        break;
      case Error::OutOfRange:
        result = "Out of range";
        break;
      case Error::Unimplemented:
        result = "Unimplemented";
        break;
      case Error::Internal:
        result = "Internal";
        break;
      case Error::Unavailable:
        result = "Unavailable";
        break;
      case Error::DataLoss:
        result = "Data loss";
        break;
      default:
        result = StringFormat("Unknown code(%s)", code());
        break;
    }
    result += ": ";
    result += state_->msg;
    return result;
  }
}

std::ostream& operator<<(std::ostream& out, const Status& status) {
  out << status.ToString();
  return out;
}

void Status::IgnoreError() const {
  // no-op
}

std::string StatusCheckOpHelperOutOfLine(const Status& v, const char* msg) {
  HARD_ASSERT(!v.ok());
  std::string r("Non-OK-status: ");
  r += msg;
  r += " status: ";
  r += v.ToString();
  return r;
}

}  // namespace util
}  // namespace firestore
}  // namespace firebase
