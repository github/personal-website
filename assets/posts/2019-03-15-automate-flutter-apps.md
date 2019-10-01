---
layout: post
title:  "Automate Flutter App Releases"
date:   2019-03-15
categories: [flutter, apps, ci, automation]
---

## TLDR

You can find the script [here](https://gist.github.com/AppleEducate/774b36e32d7efa882cca8dd16da6e74c).


<script src="https://gist.github.com/AppleEducate/774b36e32d7efa882cca8dd16da6e74c.js"></script>


Make your life easier and automate your builds to beta and production!


## What you need

- [Fastlane](https://fastlane.tools/) setup in each directory
- [build_runner](https://pub.dartlang.org/packages/build_runner) as a dependency
- Git Project in VCS


## Initial Setup

- Download [this file](https://gist.github.com/AppleEducate/774b36e32d7efa882cca8dd16da6e74c)
- Put it at the root level of your flutter project
- Open the terminal and navigate to your project location
- Enter this command: chmod +x release.sh


## Usage

Now you can call this script!

- For beta: `./release.sh beta`
- For production: `./release.sh release`


## Overview

- Bump the version numbers if you are using the version in the pubspec.yaml
- Release the apps with Fastlane
- Format all Dart Files
- Clean Project
- Rebuild classes
- Add commit messages
- Updates Cocoa Pods