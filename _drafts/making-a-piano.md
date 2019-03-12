---
layout: post
title:  "Building A Piano with Flutter"
categories: [flutter, music, ios, android]
---

## TLDR

You can find the final source code [here](https://github.com/AppleEducate/flutter_piano)/


## What you need

* [Flutter SDK](https://flutter.dev/docs/get-started/install) Installed ([More Info](https://flutter.dev/docs/get-started/codelab))
* A `.sf2` SoundFont File like [this one](https://github.com/AppleEducate/flutter_piano/blob/5k/assets/sounds/Piano.sf2)
* Physical iOS device (iOS Simulator does not work with this plugin for playing the sounds) or Android Emulator/Device

## Setting Up

You can either create a new project with Android Studio or VSCode using the GUI or navigate to the location you want your project and using this command in the terminal: `lutter create -i swift -a kotlin flutter_piano`. Make sure to include Swift and Kotlin Support!

Now that you have your project created it should look like this.

![app-icon](/assets/images/flutter_piano/starter.png){:width="75%"}


