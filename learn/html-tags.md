---
layout: post
title: Chapter 5 - HTML - Tags
chapter: 6
readTime: 4 minutes
tags:
  - html
---

In the previous chapter we saw how Tags in HTML help us wrap content to give meaning to it. Let's further dive into them.

## What does a Tag do?

Now we'll see what all things the browser do when we wrap a particular content inside a Tag.

Consider the following HTML:

```html
"Normal text <button>button text</button>"
```

This renders (shows) in the browser as follows:

"Normal text <button>button text</button>"

As you can notice, we have used the `button` tag above. What all changed when we used that tag to wrap the text "button text".

### Appearance

Firstly, we notice that a tag can change the appearance of the wrapped text. Similarly, the `strong` tag also changed it's content text to look a little more thick. It's this appearance that makes your webpage user recognize it by looking at it.

{% note %}
<strong>Point to Ponder</strong>: But what if your webpage user is completely or partially blind? We'll see that at <a href="#what-about-blind-users%3F">the end of this chapter</a>.
{% endnote %}

Note, not every tag changes appearance.

### Interactability

In the same example of `button` tag above, we see that the wrapped text now has some additional interaction available on it. You can now actually click that button with your mouse (or tap it with your finger on a touchscreen).

We'll later learn that we can make any code run on the click of that button with JavaScript.

### What about Blind users?

Do you know, not every user of your webpage can see. There are people who are completely or partially blind, color blind etc. How do they notice the changed appearance from a tag? For that, we first need to understand how the blind people use websites.
1. They don't use a mouse. And generally interact through a keyboard. Why? Because a mouse requires you to see the screen, whereas with keyboard you can cycle through different parts of a website using the Tab key.
{% note %}
<kbd>Tab</kbd> key on a website (even in general) is a way to move the keyboard focus from current to next focusable element. An element having focus means that we are ready to interact with it by pressing other keys like <kbd>Enter</kbd>, <kbd>Space</kbd> etc.
{% endnote %}
2. They use a special software called as a screen reader. When you focus a particular part of the website with the Tab key, the screen reader announce information about that particular focused thing of the website - so that the user can hear where they are right now.

Remember our button tag above? Let's say we have such a button tag wrapping the text "Click me". When a user sets focus on that button, the screen reader says "Click me, button". Hearing that, the user knows it's a button and they can click it using the Enter or Space key on their keyboard.
