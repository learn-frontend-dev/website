---
layout: post
title: Chapter 4 - HTML - The Introduction
chapter: 5
readTime: 4 minutes
tags:
  - html
---

As we learnt in the [Preface]({{/learn/preface | url}}), HTML is the web technology that you use to write the content of your webpage in a structured way. It is very important to know how to write HTML correctly, because that will decide how much your webpage is accessible to a wide range of Web users ranging from human to bots (autonomous program that can read your website over the Internet).

HTML is the short form of Hyper Text Markup Language. It was original designed for hyper-documents (simply known as webpages) - documents that can be interlinked through hyperlinks. So in essence HTML lets you write webpages and link them.

## Tags

Essence of HTML are the numerous Tags it offers. **Tag** is something which you wrap your content with to give a particular meaning. The syntax for using a tag called `test` is as follows:

```html
<test>Your content here</test>
```

Notice the content is enclosed between in Start tag (`<test>`) and an End tag (`</test>`).

Let's see with an example. Suppose I have my webpage as `index.html` file. Inside it I can simply put a text as follows:

```html
This is very important content.
```

Plain text, works just fine. But what if I want to make the word "important" a little more strongly visible to grab user's intention, to symbolize importance. There is a particular tag in HTML for that, called **Strong**. This is how I can use it:

```html
This is very <strong>important</strong> content.
```

Similarly there are more tags, each made for a special purpose like representing tables, hyperlinks, footers, quotes etc. More about tags in next chapter.
