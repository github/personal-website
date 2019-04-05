---
title: "Remote logging for mobile apps"
published: false
---

Hello! In this article, I'm going to review some of the existing services that provide you the possibility to perform logging in production in a safe way. No more struggle with attaching log files to feedback and spending hours on figuring out what went wrong without any clues.

Generally, logging in production is considered harmful, because you can expose sensitive information from your application to hackers. It's a serious security trait, but disabling logs in production may not be the best solution: you won't be able to see the state of your app during investigation of the strange crashes or suspicious feedbacks coming from users. So, it's needed to find healthy compromise between security and logging.

In our practice, we had incorrect server responses in app, and they were handled without exceptions, however it wasn't intended to show this state to user. In fact, this should have prevent them from interacting with app further.
During our investigation, everything seemed to be just fine. We've asked our support engineers to send us logs from user's device (we had possibility to do so), and we've spent a lot of time figuring out what and when went wrong. We've finally found the root cause and fixed it, but it made us think about enabling live logging in production.

There are several services, and I'm going to compare them by price, ease-to-use and available features. Some services provide logging as a side feature, while most of their offered functionality is about crash handling and analytics.

## Bugfender

Bugfender is a dedicated service for improving quality of the apps. They provide an SDK for each major platform, not only mobile. They allow you to cosllect crashes from users and see information about users' devices, so you can debug crashes with all the necessary context. It's quite expensive, but features appear to be worth it.

## Crashlytics

Crashlytics is now part of Firebase, so it's extremely easy to integrate. Crash reporting works like a charm and helps fix crashes easily. Their SDK allow you to log something, but you can only see logged info together with exception information. If your app uses exceptions for any incorrect situation, either fatal or non-fatal, it can be enough for you. In my case, it was not enough.

For convenience, you can create your own `Timber.Tree`  to log to Crashlytics. They don't provide it from scratch, but it's trivial to write one by yourself.

## Loggly

Loggly is very expensive, but advanced service in terms of logging . They allow you to see insights in your logs and analyse them easily. There is a free plan though, but it's very limited even for hobbyist developers, as for me. Paid plans offer integrations with various services like JIRA or Github, log history and many more, you can check here.
They're providing `Timber.Tree`, so you basically don't need to bother with writing your own and can start with Loggly right away.

## Papertrail (now InsightOps)

They have free plan but it's very limited. However, paid plans are reasonably priced.

## Hyperlog

Hyperlog is an open source library to push logs to Logstash, which is a part of ELK stack created for analysing logs. It can also send your logs to RequestBin, service for inspecting HTTP payloads.

ELK goes for Elasticsearch, Logstash, Kibana - services for storing, collecting and monitoring logs. Despite they are mostly used for web apps, we can send logs from our apps to ELK as well. Deployment of the ELK stack is out of scope of this article, so you can find details here.

Basically, Hyperlog is a `Timber.Tree`, so you can start using it right after you get ELK stack up and running (hope it's not your responsibility).

## Hosted ELK stack with custom LogService

This is the most complex solution you can implement, so most of the teams will unlikely use it. However, if your organization wants to have everything onsite and don't trust third-parties, you can go for it.

Not only you will need ELK stack to be set up, but you will need to use Hyperlog mentioned above or write your own `LogService` to gather and send logs to Elasticsearch. There are plenty of existing implementations (e.g. this or this), but they are outdated. I would suggest not to use them and write your own log sender with help of `WorkManager` or use HyperLog.