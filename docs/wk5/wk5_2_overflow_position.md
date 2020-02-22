# 



# Overflow

!>  For this section we will refer to the page **[CSS overflow Property](https://www.w3schools.com/cssref/pr_pos_overflow.asp)** by W3Schools.

Using the reference above, look at the following [`overflow` properties](https://www.w3schools.com/css/css_overflow.asp):

| Value   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| visible | Default. The overflow is not clipped. The content renders outside the element's box. |
| hidden  | The overflow is clipped, and the rest of the content will be invisible. |
| scroll  | The overflow is clipped, but a scroll-bar is added to see the rest of the content. |
| auto    | Similar to `scroll`,  but it adds scrollbars only when necessary. |
| initial | Sets this property to its default value. [Read about *initial*](https://www.w3schools.com/cssref/css_initial.asp) |
| inherit | Inherits this property from its parent element. [Read about *inherit*](https://www.w3schools.com/cssref/css_inherit.asp) |



<br>

The live demo from MDN web docs concisely illustrate the `overflow` property:



<iframe class="interactive" frameborder="0" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/overflow.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>
<br>

> For `overflow` to have an effect, the block-level container must have either a set height (`height` or `max-height`) or `white-space` set to `nowrap`.



<br>

# Position

The [**`position`** property](https://www.w3schools.com/cssref/pr_class_position.asp) sets how an element is positioned in a document.

It is followed by the properties [`top`](https://developer.mozilla.org/en-US/docs/Web/CSS/top), [`right`](https://developer.mozilla.org/en-US/docs/Web/CSS/right), [`bottom`](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom), and [`left`](https://developer.mozilla.org/en-US/docs/Web/CSS/left) , which set it's location.



**Elements can have two position states:**

- **Not positioned**: using the default value of `static`, meaning they follow the regular document flow.
- **Positioned**: using `relative`, `absolute`, `fixed`, or `sticky`. 

<br>

The `position` property can take the following values:



| Value    | Description                                                  |
| -------- | ------------------------------------------------------------ |
| static   | Default value. Elements render in order, as they appear in the document flow. |
| absolute | The element is positioned relative to its first positioned (not static) ancestor element. |
| fixed    | The element is positioned relative to the browser window.    |
| relative | The element is positioned relative to its normal position.   |
| sticky   | The element is positioned based on the user's scroll position. |
| initial  | Sets this property to its default value. [Read about *initial*](https://www.w3schools.com/cssref/css_initial.asp) |
| inherit  | Inherits this property from its parent element. [Read about *inherit*](https://www.w3schools.com/cssref/css_inherit.asp) |



!>  For the remainder of this section we will refer to the page **[CSS Layout - The position Property](https://www.w3schools.com/css/css_positioning.asp)** by W3Schools.



<br>

**Live demo from MDN web docs:**

(*Note: the `position: -webkit-sticky;` line is there for compatibility issues with older browsers*)

<iframe class="interactive" frameborder="0" height="400" src="https://interactive-examples.mdn.mozilla.net/pages/css/position.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>
<br>

# Z-index: Stack Order

>  The `z-index` property specifies the stack order of an element.
>
> 
>
> **Note:** `z-index` only works on positioned elements (position: absolute, position: relative, position: fixed,  or position: sticky).



<br>

An element with greater stack order is always in front of an element with a lower stack order.

<br>

![image-20200222155333220](assets/image-20200222155333220.png ':size=500')

<br>

In the live demo below  ([from MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index)) you can change the `z-index` property of the yellow container:



<iframe class="interactive" width="100%" height="400" frameborder="0" src="https://interactive-examples.mdn.mozilla.net/pages/css/z-index.html" title="MDN Web Docs Z-index Example"></iframe>


<br>








# No more Hacks



!> From here on no more `<br>` hacks for vertical positioning or `&nbsp;` for horizontal spacing. **You must make full use of the box model and positioning.**



<iframe align="middle" src="https://giphy.com/embed/YOkrK8agZLEk2cXeLi" height="150" frameBorder="0" class="giphy-embed"></iframe>
<br>




# References & Diving Deeper

> Recommended readings:
>
> - **[CSS Layout - Overflow](https://www.w3schools.com/css/css_overflow.asp)** by W3Schools
> - [**Position article**](https://css-tricks.com/almanac/properties/p/position/) by CSS Tricks



<br>

# Hands-on

## Exercises

1. Do the following exercises from W3Schools:

   - [CSS Overflow](https://www.w3schools.com/css/exercise.asp?filename=exercise_overflow1)
   - [CSS Positioning](https://www.w3schools.com/css/exercise.asp?filename=exercise_positioning1) 

<br>

## Lab 1 - Positioning the hero page

Revisit the [Lab 2 - The hero page done on week 4)](../wk4/wk4_1_background_heroes_border.md#Hands-on) and use the `position` property to center the content.

- Remove all `<br>`'s used for vertical spacing.

