---
title: "#Teamtrees"
layout: post
---

In the evening of the 25th of October, 2019 (UTC), I stumbled upon a tweet from @MrBeastYT
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">October 25th is going to be the largest youtube collaboration of all time. If you&#39;re a creator and want in, reply to this tweet! <a href="https://twitter.com/MarkRober?ref_src=twsrc%5Etfw">@MarkRober</a> <a href="https://twitter.com/smartereveryday?ref_src=twsrc%5Etfw">@smartereveryday</a> will help me dm the replies.</p>&mdash; MrBeast (@MrBeastYT) <a href="https://twitter.com/MrBeastYT/status/1183512754101112833?ref_src=twsrc%5Etfw">October 13, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
I quickly started looking into what it is, and I've fallen in love with it since. TeamTrees is run by the [Arbor Day Foundation](https://www.arborday.org/), which agreed to cooperate with a lot of big creators on YouTube, to raise $20,000,000 by 1/1/2020. 
But ok, this is a blog about technologies and stuff like that, so how dare I talk about this?
Don't worry, this was just the buildup. About 30 minutes in the research of what TeamTrees is, I noticed how lame the counter of planted trees on the site is.
![teamtrees.org counter](https://fotup.app/s/D3Cz43Xz.png) 

I needed to do something so much better. I would like it so, that it would regularly update when the number on the website changes and I would like to make it a rich full-screen (with dark mode (uwu) experience. So I sat down by my computer and wrote a simple Python API 
<script src="https://gist.github.com/filiptronicek/1b70c8bb692014204885823aabd90a91.js"></script>
I hosted the project with [Zeit now](https://zeit.co/), so I had my [API endpoint](https://en.wikipedia.org/wiki/Web_API) done. Now I went ahead to create the front-end. First I wanted to it with PHP, but for better flexibility, I settled with JavaScript.


You can find the final result [here](https://teamtrees.now.sh/) (repo [here](https://github.com/filiptronicek/teamtrees))

![my counter](https://fotup.app/s/RDtssK2b.png)

Then I realized there was no data to be found on the entire internet regarding stats for Teamtrees. So I made a simple script that got the data and saved it into a CSV. You can find all the data [here](https://github.com/filiptronicek/teamtrees-stats/tree/master/data) and here is the chart with the data until 8/11/2019:
![chart](https://fotup.app/s/t2qhC19A.png)

Thanks, people, see you again soon!