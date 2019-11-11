---
title: "Problems with migration projects to AndroidX"
published: false
---

Hello! Recently I decided to get back to my old project, [Bookcrossing Mobile](https://github.com/fobo66/BookcrossingMobile) app,
to update it to the recent SDK versions and try out new things and approaches in Android development. Luckily, it was fine now,
migration went smoothly, much better than at first attempt year ago.

However, there were some important points that I've discovered during migration, and I believe these point can simplify developer's life in
the future. Hope that they will be useful for you.

## Background

Bookcrossing Mobile app was started as a pet project of mine. Due to limited resources development went slowly and often I didn't wanted
to bother with some boring to write stuff and used a lot of third-party dependencies. Also, I thought back then that it's completely OK to mix up Rx and non-Rx ways. _Spoiler: it's absolutely not._

All of a sudden, after a few months of Bookcrossing Mobile being in Beta release, Google introduced replacement of Support libraries with AndroidX.
I've immediately downloaded new Android Studio and launched migration. And... everything was broken. I'm sure some of you have seen this in your projects,
but for me it was frustrating experience. The only option was to wait until developers of the libraries I've used will upgrade to AndroidX.

I've checked status of the dependencies time after time, but with no luck. Only
after a year and a half I've finally got some time to work on this project again.

Surprisingly, little has changed in terms of AndroidX support. Some libraries
have migrated, but the majority of them stayed on support libraries.

Now when I'm finished with this, it's time to retrospect on what was wrong and how
you can avoid my mistakes and save a lot of time in the future when you'll
face some huge inevitable refactoring.

## Third-party dependencies are evil

Most of the pain was caused by the need of replacing abandoned third-party dependencies. My initial laziness in implementing some simple things turned against me. Some libs were easy to replace, and some require a lot of work.

Despite the amount of stars of Github, devekopers can lose interest or free time to work on their projects.
