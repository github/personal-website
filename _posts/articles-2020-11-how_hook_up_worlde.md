---
title: How to hook up a Worlde EasyKey 25 to a Debian box and review of Worlde EasyKey 25.
published: true
---

Hello! This is my first article. It is NOT the same as the blog - the blog is solely for updates on me/software/other stuff; articles are for 
reviews/tutorials/other stuff. 

It took me about two hours to find this answer. And it took me about five minutes to DO this answer. So thank me later. :P

Let's get right into it.

0. If you've already been following a guide using JACK or something, **stop**. I never got it to work (the output from the Easykey was running on a different program
than the speakers so I couldn't connect them) and it bogs down my PC - I don't know about yours.

1. **Plug your musical keyboard into the computer** (normal keyboard helps too). I _strongly_ suggest using USB, there are adapters online if you have MIDI. However, 
if you can't for some reason (it doesn't work; you don't have an adapter and can't buy one; ~~you don't have USB~~ If you aren't living under a rock, you have USB)
then plug it into your MIDI port. Just realize, there may be a small loss of quality due to this. 

2. **Install a synthesizer.** I use Yoshimi, it's preinstalled on Elive Linux. On debian which is what this guide is for - simply run `sudo apt install yoshimi`; it
should work. You could also use another synthesizer if you prefer; I simply know and love Yoshimi. 

3. **Open the synth.** It needs to be running to be recognized by `aconnect`. 

4. **Install `aconnectgui`.** On Debian run `sudo apt install aconnectgui`. This will pull in `aconnect` too if you prefer the command line but I'm not helping 
with that.

5. **Launch aconnectgui.** You can run it from a terminal. I know it looks old but it's the way I did it.

6. **Connect the input/output/whateverput.** You need to click the cable icon at the top. Then, drag the \> protruding from "WORLDE easy key MIDI ONE" or something
similar, to the \< protruding from the input of your synthesizer. In my case, there's an input under the category "yoshimi". 

7. **Play away!** You will need to change the synth settings - in Yoshimi it defaults to a boring sound. 

8. I'm pretty sure notation software can be passed MIDI data in this way, but I will need to check. I'll update the article with information. :D

**THE ANSWER THAT HELPED ME CAN BE FOUND [HERE](https://askubuntu.com/a/236221/1034629).**
