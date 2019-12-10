---
title: "Remote logging for mobile apps"
published: true
---

![Photo by Mildly Useful on Unsplash](/assets/mildly-useful-249033-unsplash.jpg)
*Photo by [Mildly Useful](https://unsplash.com/@usefulcollective) on Unsplash*

Hello! In this article, I'm going to review some of the existing services that provide you the possibility to perform logging in production in a safe way. No more struggle with attaching log files to feedback and spending hours on figuring out what went wrong without any clues.

Generally, logging in production is considered harmful, because you can expose sensitive information from your application to hackers. It's a serious security trait, but disabling logs in production may not be the best solution: you won't be able to see the state of your app during investigation of the strange crashes or suspicious feedbacks coming from users. So, it's needed to find healthy compromise between security and logging.

In our practice, we had incorrect server responses in app, and they were handled without exceptions, however it wasn't intended to show this state to user. In fact, this should have prevent them from interacting with app further.
During our investigation, everything seemed to be just fine. We've asked our support engineers to send us logs from user's device (we had possibility to do so), and we've spent a lot of time figuring out what and when went wrong. We've finally found the root cause and fixed it, but it made us think about enabling live logging in production.

There are several services, and I'm going to compare them by price, ease-to-use and available features. Some services provide logging as a side feature, while most of their offered functionality is about crash handling and analytics.

## Bugfender

[Bugfender](https://bugfender.com) is a dedicated service for improving quality of the apps. They provide an SDK for each major platform, not only mobile.

Bugfender, besides remote logging,  allow you to collect crashes from users and see information about users' devices, so you can debug crashes with all the necessary context.

Bugfender SDK can be easily wrapped by `Timber.Tree`. [Here](http://support.bugfender.com/supported-logging-frameworks) is the list of all supported logging frameworks with examples. So, it's quite easy to start using it.

It's quite expensive, but there is a very limited free plan. You can check their pricing [here](https://bugfender.com/pricing/).

## Crashlytics

[Crashlytics](https://firebase.google.com/docs/crashlytics/) is now part of Firebase, so it's extremely easy to integrate and use by following [these instructions](https://firebase.google.com/docs/crashlytics/get-started). Crash reporting works like a charm and helps fix crashes easily. Their SDK allow you to share logs, but you can only see logged info together with exception information. If your app uses exceptions for any incorrect situation, either fatal or non-fatal, it can be enough for you. In my case, it was not enough.

For convenience, you can create your own `Timber.Tree`  to log to Crashlytics. They don't provide it from scratch, but it's easy to write one by yourself, just like [this](https://gist.github.com/jonfinerty/3e24867df66cd6e14c5937a72ed6d50a).

## Loggly

[Loggly](https://www.loggly.com) is very expensive, but advanced service in terms of logging. They allow you to see insights in your logs and analyse them easily. There is a free plan though, but it's very limited even for hobbyist developers, as for me. Paid plans offer integrations with various services like JIRA or Github, log history and many more, you can check [here](https://www.loggly.com/plans-and-pricing/).

They're providing `Timber.Tree`, so you basically don't need to bother with writing your own and can start with Loggly right away. [Here](https://www.loggly.com/docs/android-logs/) are the instructions for setup Loggly for Android.

## Hyperlog

[Hyperlog](https://github.com/hypertrack/hyperlog-android) is a free and open source library to send your logs to [ELK](https://www.elastic.co/elk-stack) or [RequestBin](https://requestbin.fullcontact.com/), service for inspecting HTTP payloads.

ELK goes for Elasticsearch, Logstash, Kibana - services for storing, collecting and monitoring logs. Despite they are mostly used for web apps, we can send logs from our apps to ELK as well. Deployment and configuring of the ELK stack is out of scope of this article, but you can find details [here](https://logz.io/learn/complete-guide-elk-stack/). You can also choose one of the ELK stack providers, there are quite a lot of them.

Basically, Hyperlog is a `Timber.Tree`, so you can start using it right after you get ELK stack up and running (hope it's not your responsibility). You can find more details about HyperLog setup and usage in [this amazing article](https://android.jlelse.eu/android-remote-logger-library-for-debugging-343443bd38b7).

## Custom LogService for ELK

This is the most complex solution you can implement, so most of the teams will unlikely use it. However, if your organization wants to have everything onsite and don't trust third-parties, you can go for it.

Not only you will need ELK stack to be set up, but you will need to write your own `LogService`. There are plenty of existing implementations (e.g. [this](https://github.com/Labgoo/android-logstash-logger) or [this](https://gist.github.com/PatrykGala/55603fe4259d812fdc0ffbc9e63eaabc)), but they are outdated. I would suggest not to use them and write your own log sender with help of `WorkManager` or use HyperLog.

Basically, this approach is free of charge, if you have all the required infrastructure. You will only invest tremendous amount of time to make it work for you. So, I would recommend to consider your resources before starting deploying ELK and writing everything from scratch.

---------

In this article, I've reviewed some remote logging solutions for Android in terms of features and price. Feel free to share and discuss it. Hope that it will be useful for you.
