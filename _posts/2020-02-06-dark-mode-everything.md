---
title: Dark mode-ing everything
layout: post
tags: [darkmode, css]
---

Dark mode's awesome, I love it. On every website I make I started implementing it. 
But why? I think, that the biggest part of that is the fact, that having a dark background is 1) something new, and 2) it feels natural - if it's dark outside, then it's nice to have dark mode on. 


In this article, I want to share a couple of tips for implementing dark mode on your websites. 
First, probably the most important thing of all is the ```prefers-color-scheme``` media query. It is supported in most browsers, including iOS Safari and Chrome on Android. The latest addition was on the brand new version of Edge.
![browser support](https://files.catbox.moe/ayc8i2.png)
For most occasions, it will be enough just to copy this script:
<script src="https://gist.github.com/filiptronicek/054069afbf9b1c9045daccd6ce06e54b.js"></script>

and for extended use with applying effects to images and links:
<script src="https://gist.github.com/filiptronicek/f084906be94b8060ddea98e65d6e23fc.js"></script>