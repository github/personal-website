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
to bother with some boring to write stuff and used a lot of third-party dependencies. Also, I thought that it's completely OK to mix up Rx and non-Rx ways. Spoiler: it's absolutely not.

All of a sudden, after a few months of Bookcrossing Mobile being in Beta release, Google introduced replacement of Support libraries with AndroidX. I've immediately downloaded new Android Studio and launched migration. And... everything was broken. I'm sure some of you have seen this in your projects, but for me it was disappointing.
