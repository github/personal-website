---
title: Geo CZE (A geography project)
layout: post
---

In February, our teacher for geography assigned a project in which every student had to ask his relatives where they have been in the Czech Republic and put it into a table (and also draw a map). I found that a bit boring, so I thought of a better idea: a fully interactive map made into a web application. First I wanted to use the lazy approach to do the project: [MapFling](https://mapfling.com/). Unfortunately, the website was down on the day I wanted to start on. So I opened my browser and searched for some good maps APIs. I didn't want to use the Google Maps API, because it's too expensive just for a simple project. Then I found an API from [OpenLayers](https://openlayers.org/) which looked ok for the job. The only drawback with this solution is that the design is not as modern as eg. [LeafletJS](https://leafletjs.com/).  So I got to work and on April 11, I published the code on [GitHub](https://github.com/filiptronicek/Geo_cze) 
<img src="https://flpsawsmcdn.imfast.io/image_1_.webp" width="100%">

I had to have the table with my datasets somewhere, but I found just letting the visitor download an Excell spreadsheet not suitable for my UX. So I had an idea: what if I made the table in HTML with ``<a>  `` tags pointing to a function in JavaScript, which will generate an ``<iframe>`` with a Google Map showing the selected place? So instead of having the table manually written in I put the names of the places to JavaScript arrays (I was lazy making the arrays myself so I made a short Python script to sort it out: link [here](https://gist.github.com/filiptronicek/08301660a0a0be48ac67739240e9679e)). Then I grabbed every item from each array and added [this function](https://gist.github.com/filiptronicek/a1b0ac9444f63fe15264163aefaaa263). Then I just created the [about]() page and the project was done. You can check it out [here](https://geocze.netlify.com/)

<img src="https://flpsawsmcdn.imfast.io/Screenshot_2019-05-18-Zem%C4%9Bpis-projekt.webp" width="100%">   

<img src="https://flpsawsmcdn.imfast.io/Annotation-2019-05-18-210453.webp" width="100%">