---
title: "Understanding Gradle for Android developers"
published: false
---

Hello! For a long time I wanted to migrate my [Bookcrossing Mobile](https://github.com/fobo66/BookcrossingMobile) app to Gradle Kotlin DSL.
But I've used remote Groovy function for loading API keys from `.properties` files. Here is a [gist](https://gist.github.com/fobo66/17d5116b5c7bccf5f28036f401f3c09d).
Despite it's a simple function, I didn't wanted to write this for each of my projects, thus this gist was created.

I wanted to share this code in more common way, via plugin, so I decided to create my own plugin. After I was done with it, I realized how little I know and understand about Gradle.
Official docs are not clear enough and spread across different pages, and articles across the internet are often outdated. Getting the knowledge about Gradle helped me
understand how Android build system works, how can we effectively configure our builds and how to effectively automate some tedious tasks. So, I decided to write this article.

First of all, I'll explain a little bit about what are build systems, with small historical reference to GNU make as an example, then I walk you through the components of Gradle,
and in the end we will fixate our knowledge on the concrete example of the Android Gradle plugin.

To read this article, you don't need any specific knowledge, but familiarity with Android development will help, since I will use a lot of terms related to it.
