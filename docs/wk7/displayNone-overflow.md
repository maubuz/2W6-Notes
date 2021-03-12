# Display None & Overflow

## Display: none

So far we've looked at four display values: `block`,  `inline`,  `inline-block`, and  `flex`.

> Setting `display: none` on an element causes it to disappear from the document as if it had never been added to the HTML.

Consider the same starter code used in the positioning lesson:

<iframe height="265" style="width: 100%;" scrolling="no" title="wk7 - Positioning_baseline" src="https://codepen.io/maujac/embed/yLVQMyX?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/yLVQMyX'>wk7 - Positioning_baseline</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

Apply `display: none` to any element to see it disappear from the screen.

For example:

```css
h1,
p {
    ...
    display: none;
}
```

<br>

Once `display: none` is added to any element, open the dev tools and inspect the element to toggle it's display value on and off. The changes can be seen instantly in the browser. 

<br>

![toogle-display](assets/toogle-display.gif)

<br>

> A common use of `display: none` is to toggle elements such as menus on and off, depending on what the use has selected.

<br>

In the example below, add `display: none` to the `<nav>`  to see it disappear.

```css
nav {
    ...
    display: none;
}
```

<br>

Then use the dev-tools to toggle it on and off.

<br>

## Overflow

!>  For this section we will refer to the page **[CSS overflow Property](https://www.w3schools.com/cssref/pr_pos_overflow.asp)** by W3Schools.

Using the reference above, look at the following [`overflow` properties](https://www.w3schools.com/css/css_overflow.asp):

| Value   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| visible | Default. The overflow is not clipped. The content renders outside the element's box. |
| hidden  | The overflow is clipped, and the rest of the content will be invisible. |
| scroll  | The overflow is clipped, but a scroll-bar is added to see the rest of the content. |
| auto    | Similar to `scroll`,  but it adds scrollbars only when necessary. |

<br>

The live demo from MDN web docs concisely illustrate the `overflow` property:



<iframe class="interactive" frameborder="0" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/overflow.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>

<br>

> For `overflow` to have an work, it can only be used with block-level elements that have either a set `height` (or `max-height`) or `white-space` set to `nowrap`.

<br>

## References & Diving Deeper

> Recommended readings:
>
> - **[CSS Layout - Overflow](https://www.w3schools.com/css/css_overflow.asp)** by W3Schools

<br>

## Hands-on

### Exercises

1. Do the following exercises from W3Schools:

- [CSS Overflow](https://www.w3schools.com/css/exercise.asp?filename=exercise_overflow1)