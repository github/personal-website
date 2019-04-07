---
title: "Working with XML using Retrofit2"
published: true
---

Hello!

Sometimes you need to work with some API that was created years ago, or contains more semantics that JSON allows. That APIs mostly created with XML. It’s pretty ugly format, hard to read by humans, but it’s still relevant, and sadly we need to know how to work with it. It’s not so obvious in Java as it appears to be. I’ve spent two days struggling figuring out why it’s not working. Internet has not so much relevant information about it, so I decided to write it myself. I’ve used it in Android project, but since Retrofit2 is a general Java library, you can use it in Java projects as well.

*Disclaimer: SimpleXML project is no longer maintained, so use this guide at your own risk. If you’re going to use Retrofit2 not on Android, you can use [JAXB converter](https://github.com/square/retrofit/tree/master/retrofit-converters/jaxb) (Android doesn’t support JAXB).*

So, let’s get started. First of all, I recommend to use [SimpleXML framework ](http://simple.sourceforge.net)to work with XML in Java, because with it you will write less code than with native instruments such as XPP or javax.xml.*. And, what is most important for us, it’s already integrated with Retrofit2, so you don’t need to include it separatedly in your project, just use Retrofit Converter.

So, our dependencies will look like this:

    compile "com.squareup.retrofit2:retrofit:$retrofitVersion"

    compile "com.squareup.retrofit2:converter-simplexml:$retrofitVersion"

If you use RxJava in your project, you can add RxJava adapter to simplify work with API:

    // RxJava 1.x
    compile "com.squareup.retrofit2:adapter-rxjava:$retrofitVersion"

    // RxJava 2.x
    compile "com.squareup.retrofit2:adapter-rxjava2:$retrofitVersion"

Retrofit config may look like this (don’t forget to make it singleton or wrap with DI (Dagger or Guice)):

    ServerAPI api = new Retrofit.Builder()
                    .baseUrl(ServerAPI.ENDPOINT)
                    .client(new OkHttpClient()) //you can customize it
                    .addConverterFactory(
        SimpleXmlConverterFactory.createNonStrict(
            new Persister(new AnnotationStrategy() // important part!
          )
        )
                    .addCallAdapterFactory(RxJavaCallAdapterFactory.createWithScheduler(Schedulers.io())) // rx stuff
                    .build().create(ServerAPI.class);

Important note: to make SimpleXML work as expected, you should use AnnotationStrategy. To avoid SimpleXML crashes because of empty XML tags, you should use non-strict mode. It’s higly recommended, even if you pretty sure that your XML will never have empty tags. Shortly, you should construct converter factory like this:

    SimpleXmlConverterFactory.createNonStrict(
            new Persister(new AnnotationStrategy()))

This approach requires additional configuration for your POJOs. Look at this example (pay attention to the comments):

    @Root(strict = false) // only works in non-strict mode
    public class Category {
        [@Text](http://twitter.com/Text)(required = false) // will be null in forged POJO object 
        private String text;    // if empty

    @Attribute(name = "id", required = false)
        private int id;

    public Category() {} // empty constructor required
    }

In short:

* all Root annotations should have strict parameter set to **false**

* all fields annotations should have required parameter set to **false**

You probably will need to perform special operations on your data while serializing/deserializing. To do this, you can use custom converter (described [here](http://simple.sourceforge.net/download/stream/doc/tutorial/tutorial.php#converters)).

If you get stuck with SimpleXML somewhere, you can always refer to official [tutorial](http://simple.sourceforge.net/download/stream/doc/tutorial/tutorial.php). It’s pretty big and sometimes not so clear and understandable, but it’s still the main source of info about this library.

P.S. You also can customize OkHttp client for extended features, e.g. logging, caching headers rewrite, etc. To do this, follow [this instructions](https://github.com/square/okhttp/wiki/Recipes).

Further reading:

* [Retrofit tutorial](http://square.github.io/retrofit/)

* [SimpleXML website](http://simple.sourceforge.net/)

Thanks for reading! All feedbacks are appreciated.
