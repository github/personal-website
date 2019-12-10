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
to bother with some boring to write stuff and used a lot of third-party dependencies. Also, I thought back then that it's completely OK
to mix up Rx and non-Rx ways. _Spoiler: it's absolutely not._

All of a sudden, after a few months of Bookcrossing Mobile being in Beta release, Google introduced replacement of Support libraries with
AndroidX. I've immediately downloaded new Android Studio and launched migration. And... everything was broken. I'm sure some of you have
seen this in your projects, but for me it was frustrating experience. The only option was to wait until developers of the libraries I've
used will upgrade to AndroidX. Even Jetifier was unable to help with the mess in third-party libraries.

I was busy with other stuff, so I was unable to invest much resources into refactoring. Only
after a year and a half I've finally got some time to work on this project again.

(Un)surprisingly, little has changed in terms of AndroidX support. Some libraries
have migrated, but the majority of them stayed on support libraries.

Biting the tongue, I've migrated app to AndroidX and replaced every library that hasn't migrated.

Now when I'm finished with this, it's time to retrospect on what was wrong and how
you can avoid my mistakes and save a lot of time in the future when you'll
face some huge inevitable refactoring.

## Check code quality of the third-party dependencies if possible

Most of the pain was caused by the need of replacing abandoned third-party dependencies. My initial
laziness in implementing some simple things turned against me. Some libs were easy to replace, and
some require a lot of work.

Despite the amount of stars of Github, developers can lose interest or free time to work on their
projects. Or these projects were not intended to be maintainable at all: developer
just wanted to fix his own problem and then decided to extract his solution to the library. This
library can solve one problem, but create another problem, and developer may not be
interested in solving this another problem because of various reasons. In addition, library
can contain some tricky workarounds that will make it unmaintainable if something inside Android
SDK will change in the future. It is especially the case e.g. for some RxJava wrappers around
permissions or `onActivityResult` handlers. In short, any third-party dependency is a risk.

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
are not followed, e.g. you perform network request in presenter (or even in Activity) instead
of data source or use data sources directly in the interactor instead of putting them in repository,
you'll have problems in the future, because you may not be able to easily substitute your components
or fix their implementation to comply with updated requirements.

## Abstract dependencies through the interface

I've noticed that developers often tend to use third-party libraries directly, without abstracting
them through an interface specific to the given circumstances. Most of the times it's fine,
but in case of huge refactoring or breaking changes in newer version of the library, you may have to
change the code in a lot of places, increasing chances to break it.

Of course, there are cases when it's impossible or unnecessary to abstract dependency, like in case of
third-party UI components or RxJava chains. And that's OK. But in other cases it will be more future-proof
to wrap third-party components into your custom interfaces, because then you will be able to replace one
dependency with another without much pain.

There are more benefits in this, and Uncle Bob will explain them better than me. I just wanted to
highlight the most valuable point in terms of replacing broken dependencies with new stuff.

## Write truly testable code

Testability can mean a lot, but I wanted to pay attention to the one particular aspect here. Tests increase
maintainability of your code, but they often are written without paying much attention to maintainability.
And from what I've seen, tests were the reason why projects have not been able to migrate to AndroidX.
Which means that code under tests was not actually testable, so authors used some cruel workarounds.

Signals of such faux testable code can be PowerMock or Robolectric listed in dependencies.

Well, Robolectric can be really useful in some cases, but as any other tool, it can be abused heavily,
making your tests fragile, so you'll need to maintain your tests separately from the codebase.

PowerMock itself is a code smell, but if you forced to use some legacy code and you forced to test it
somehow and you have no permission or no resources for refactoring, you have no other option. However,
in this case it's reasonable to explain to your management that next step in Android SDK evolution may
(and probably will) break your app completely, so you'll need to rewrite anything from scratch. Which
means a lot of time and money thrown away.

Try not to use Robolectric for things that are better tested as instrumented tests or Espresso UI tests,
like things involving permissions, `XmlPullParser`, SQLite, etc. Nowadays it's not a big deal to run
these kind of tests on CI, and they are not so slow (except you've got a really slow CI machine),
and with services like Bitrise, it can be extremely easy to setup.

So, if you think that your code is good but you cannot easily cover it with tests, it may not be as good
as you think.

## Conclusion

Follow SOLID principles from the beginning and your project will survive any Android SDK changes and
you will save your mental health adapting to any changes in SDK or business needs.
