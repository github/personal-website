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

## Check code quality of the third-party dependencies if possible

Most of the pain was caused by the need of replacing abandoned third-party dependencies. My initial laziness in implementing some simple things turned against me. Some libs were easy to replace, and some require a lot of work.

Despite the amount of stars of Github, developers can lose interest or free time to work on their projects. Or these projects were not intended to be maintainable at all: developer
just wanted to fix his own problem and then decided to extract his solution to the library. This library can solve one problem, but create another problem, and developer may not be
interested in solving this another problem because of various reasons. In short, any
third-party dependency is a risk.

To detect this kind of problems and reduce risks, consider checking the source code of the
dependency. If it's written in a clean way, well-understandable and doesn't contain any tricky
workarounds, then there is a high probability that it won't be abandoned or can be maintained
by the community.

Of course, there is no 100% insurance any library won't be abandoned. But when
code is good, you can maintain it by yourself (because it's open-source) or implement similar
code in your app using newer tools and in the way you need it in your app.

## Understand your architecture pattern and follow it everywhere

Architecture is your friend, but when you violate its rules, no matter intentionally or not,
it creates a tech debt that may break it. And when the pile of tech debt grows, it will bury
the whole project beneath its weight.

Aside pathos, architecture pattern (no matter which one in particular) gives you structure and
decoupling of dependencies, so you can easily make changes in the future. But if its rules
are not followed, e.g. you perform network request in presenter instead of data source or
use data sources directly in the interactor instead of putting them in repository, you'll have
problems in the future, because you may not be able to easily substitute your components or
fix their implementation to comply with updated requirements.

## Abstract dependencies through the interface
