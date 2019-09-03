---
title: "Notes from RSConf Mobile Day"
published: true
---


Hello! Just wanted to share my quick notes from the [RSConf Mobile day](https://rsconf.by)'s most important sessions. These notes are chaotic and quite

## Wake up, Neo

Talk was about common problems in software development.

Security is broken: more than 1 billion people are affected. And we don't pay much attention.

Our apps are broken or incredibly complex or unusable.

Inclusivity is an ability of a group to include different people.

Diversity is when we already have different people in our group.

To build better apps, we need a diverse team to have insights from different sides of life.

* Fight for quality
* Break unacceptable patterns
* Stay hungry, stay foolish

## Autotests

No one knows exactly how to write tests, but many people tried and failed.

Appium sucks.

Speaker mentioned Kakao and Kaspresso.

There is also a [Barista](https://github.com/SchibstedSpain/Barista) that has a few useful `@Rule`s

`AndroidJUnitRunner` isn't configurable and breaks after first broken test.

AndroidX Orchestrator can continue running tests, but it requires Google Play Services.

There are also [Spoon](https://github.com/square/spoon) and [Composer](https://github.com/gojuno/composer) libs for instrumentation.

Spoon can generate beautiful HTML reports, but requires a bit of inconvenient configuration steps. Plus, it wasn't updated for a long time, and Composer claims to replace it.

[Marathon](https://github.com/Malinskiy/Marathon) combines all the features of Spoon, Orchestrator and Composer, but it's slightly hard to integrate.

To fix flaky test, we need to add a little wait before action. Code was provided in slides.

To rerun each test clearly from scratch, we can use `adb pm clear`. But it will increase run time of the tests.

All of this is handled in Kaspresso library by Kaspersky Labs, partly authored by the speaker. They talked about it a lot in the past, but it's still wasn't released.
