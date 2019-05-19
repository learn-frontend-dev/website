---
layout: post
title: Chapter 5 - HTML - Tags
readTime: 4 minute
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

Do you know, not every user of your webpage can see. Their are people who are completely or partially blind, color blind etc. How do they notice thes changed appearance?

**Point**:
