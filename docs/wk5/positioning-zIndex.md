# Positioning & Z-index

## Position

The [**`position`**](https://www.w3schools.com/cssref/pr_class_position.asp) property is used to place an element somewhere in the page with respect to itself or an ancestor.

`position` is followed by the properties [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top), [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right), [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom), and [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left) , which work as anchors for specifying distances.

<br>

>  Elements can have **two position states: positioned and not positioned**: 



- **Not positioned**: The default value of `static`.  Elements follow the regular document flow (business as usual).

- **Positioned**: Four possible values that behave differently, `relative`, `absolute`, `fixed`, or `sticky`.

<br>

![image-20200223090144780](assets/image-20200223090144780.png ':size=600')

<p align="center"><strong>Positioned vs Non-Positioned</strong> , <a href="https://internetingishard.com/html-and-css/advanced-positioning/"><em>Interneting is Hard</em></a></p>

<br>

The `position` property can take the following values:



| Value                                                        | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [static](https://www.w3schools.com/css/css_positioning.asp)  | Default value. Elements render in order, as they appear in the document flow. |
| [absolute](https://www.w3schools.com/css/css_positioning.asp) | Positioned relative to its first positioned ancestor element. |
| [fixed](https://www.w3schools.com/css/css_positioning.asp)   | Positioned relative to the browser window.                   |
| [relative](https://www.w3schools.com/css/css_positioning.asp) | Positioned relative to its normal position.                  |
| [sticky](https://www.w3schools.com/css/css_positioning.asp)  | Positioned based on the user's scroll position.              |

<br>

We will use the code below to illustrate four `position` values.

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk7 - Positioning_baseline" src="https://codepen.io/maujac/embed/yLVQMyX?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/yLVQMyX'>wk7 - Positioning_baseline</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

### Position Static

*Add to the starting code:*

```css
#second {
    ...
	position: static;    
}
```

<br>

**All elements** have `position: static` **by default**.

Elements with `position: static` are **not positioned** and follow the normal document flow.

![img](https://i.giphy.com/media/ehJ4vNWRhinhMMvLxp/giphy.webp ':size=200')

<br>

### Position Relative

*Add to the starting code:*

```css
#second {
    ...
    position: relative;
    top: 50px;		/* top, right, bottom, left are valid anchor points */
    left: 30px;
}
```

<br>

**Rules:**

1. Element is positioned **relative to it's original position** in the page.

   <br>

2. **Other elements are not affected** even after the element with `position: relative` is moved with `top`,  `right`, `left`, `bottom`.

<br>

![image-20200223090937692](assets/image-20200223090937692.png ':size=600')

<p align="center">Position Relative to its normal document flow, <a href="https://internetingishard.com/html-and-css/advanced-positioning/"><em>Interneting is Hard</em></a></p>

<br>

### Position Absolute

*Add to the starting code:*

```css
#second {
    ...
    position: absolute;
    top: 20px;		/* top, right, bottom, left are valid anchor points */
    left: 20px;
}
```

<br>

**Rules:**

1. The element is **"removed" from the document flow and is ignored by other elements**.

   - Other elements act as if it was never there.

   <br>

2. It's position is **relative to the nearest positioned ancestor**.

   - Ex.: parent, grand-parent, etc, with a `display` value other than `static` (the default for all elements).

   <br>

3. **If there are no positioned ancestors, it's position is relative to the `<body>` element.**

   - The `<body>` element is always positioned.

<br>

![relative_illustration](assets/relative_illustration.png ':size=600')

<p align="center">Position relative without (left) and with (right) a positioned ancestor, <a href="https://internetingishard.com/html-and-css/advanced-positioning/"><em>Interneting is Hard</em></a></p>

<br>

> When adding `position: absolute` to an element, it is common to add `position: relative` to the parent (without actually moving it with `top`,  `right`, `left`, `bottom`) .

<br>

```css
section {
    ...
    position: relative;		/* not moved since no top, right, left, bottom */
}

#second {
    ...
    position: absolute;
    top: 20px;
    left: 20px;
}
```

<br>

### Position Fixed

*Add to the starting code:*

```css
h1 {
    position: fixed;
	top: 20px;
}
```

<br>

**Rules:**

1. Element is **removed from the flow** of the page (same as `absolute`) and **is placed relative to the `<body>`.**

   <br>

2.  The element is **fixed in the page regardless of scrolling**.

   <br>

### Position Sticky

*Add to the starting code:*

```css
section {
    ...
    position: sticky;
    top: 20px;
}
```

<br>

**Rules:**

1. **Initially**, the element **behaves like `position: relative`** with no displacement.

   <br>

2. **Once the scrolling limit is hit**, as defined by  `top`,  `right`, `left`, `bottom`,  it **behaves like `position: fixed`**.

<br>

> Note that for an element to "stick", it's parent needs to be big enough for it to "slide" inside of it.
>
> For example, the `div` elements would not stick because the `<section>` is only as high as the `div`.  There is no room for "sliding".

<br>

## Interactive summary

**[Live demo](https://developer.mozilla.org/en-US/docs/Web/CSS/position) from MDN web docs:**

(*Note: the `position: -webkit-sticky;` line is there for compatibility issues with older Safari browsers*)

<iframe class="interactive" frameborder="0" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/position.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>

<br>

## Z-index: Stacking Order

The [`z-index`](https://www.w3schools.com/CSSref/pr_pos_z-index.asp) property specifies the stack order of an element.



>  **Note:** `z-index` only works on positioned elements (position: absolute, position: relative, position: fixed,  or position: sticky).

<br>

An element with greater stack order is always in front of an element with a lower stack order.

The default value of `z-index` is 0.

<br>

![image-20200222155333220](assets/image-20200222155333220.png ':size=500')

<br>

> Note that HTML elements have a natural stacking context even without `z-index`.
>
> This is a more advanced topic which is not covered in the course. See [The stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) by MDN Web Docs for more.

<br>

**Live demo [from MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index):**

Change the `z-index` of the **yellow container**:

<br>

<iframe class="interactive" width="100%" height="400" frameborder="0" src="https://interactive-examples.mdn.mozilla.net/pages/css/z-index.html" title="MDN Web Docs Z-index Example"></iframe>

<br>


## References & Diving Deeper

> Recommended readings:
>
> - **[CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)** by W3Schools.
> - [**Position article**](https://css-tricks.com/almanac/properties/p/position/) by CSS Tricks

<br>

## Hands-on

### Exercises

1. [CSS Positioning](https://www.w3schools.com/css/exercise.asp?filename=exercise_positioning1) 

<br>

### Lab 4 - Positioning the hero page

Revisit the [Lab 2 of week 4 (the hero page)](https://mau-jac.github.io/2W6-UI/#/./wk4/wk4_1_background_heroes_border?id=lab-2-the-hero-page) with your new skills:

- Bring the image into the html as an `<img>` tag.

- Use flexbox for centering and alignment of elements. 

- Use the `position` property for the layering order.

- Do not use `<br>` for spacing.

  <br>

*Staring code*

<iframe height="265" style="width: 100%;" scrolling="no" title="Positioning - Lab 4 - Start" src="https://codepen.io/maujac/embed/ExNGxzb?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/ExNGxzb'>Positioning - Lab 4 - Start</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

