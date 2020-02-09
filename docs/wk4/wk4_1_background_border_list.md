# Include

- [x] Background
  - [x] Image
  - [x] color
- [x] Borders
- [ ] List styles
- [ ] Overflow
- [ ] The Cascade



# CSS Backgrounds

!>  For this section we will refer to the page **[CSS Backgrounds](https://www.w3schools.com/css/css_background.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                     | Description                                               |
| ------------------------------------------------------------ | --------------------------------------------------------- |
| [background-color](https://www.w3schools.com/cssref/pr_background-color.asp) | Sets the background color of an element                   |
| [background-image](https://www.w3schools.com/cssref/pr_background-image.asp) | Sets the background image for an element                  |
| [background-repeat](https://www.w3schools.com/cssref/pr_background-repeat.asp) | Sets how a background image will be repeated              |
| [background-position](https://www.w3schools.com/cssref/pr_background-position.asp) | Sets the starting position of a background image          |
| [background-size](https://www.w3schools.com/cssref/css3_pr_background-size.asp) * | Specifies the size of the background image(s)             |
| [background-attachment](https://www.w3schools.com/cssref/pr_background-attachment.asp) | Sets background image as fixed or scrolling with the page |
| [background](https://www.w3schools.com/cssref/css3_pr_background.asp) | Sets all the background properties in one declaration     |

** `background-size` is the only property is not covered in the W3S page listed above.*

<br>

There are other background properties such as `background-clip` and `background-origin` but we will only focus on the ones above for now.



## url(...) notation

In order to use images as the background we must use the `url(*address*)`  notation, which is different from hyper links or images.



## background-size

> T[his demo from W3Schools](https://www.w3schools.com/cssref/playit.asp?filename=playcss_background-size) illustrates **how use the `background-size` property**



## background-attachment

The `background-attachment` property can be confusing at first.  The [example below from MDN web docs](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) helps illustrate how they are different:

<iframe src="https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html" width="100%" height="500px"></iframe>
## Gradients

HTML can support the use of color gradients with the property `linear-gradient`.

Gradients can be useful as a background **if used with soft transitions**.

*Code*

```css
#grad {
  background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.2));
}
```

*Results*

<div style="background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,0.2)); height=200px">
<h4 style="text-align:right">
    Soft gradients
    </h4>
</div>



To learn more about gradients see the [W3Schools page on gradients](https://www.w3schools.com/css/css3_gradients.asp)



## Multiple background-images

It is possible to have two or more background-images superimposed.

- The reference for each background-image must be separated by a comma.

- The order will determine which image will be on top.

  <br>

See the d[emo below for an illustration](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image):

<br>

<iframe class="interactive" frameborder="0" height="360" src="https://interactive-examples.mdn.mozilla.net/pages/css/background-image.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>
## Background Shorthand Property

All the background properties mentioned above can be set at once using the [`background` shorthand property](https://www.w3schools.com/cssref/css3_pr_background.asp):

```css
body {
  background: lightblue url("img_tree.gif") no-repeat fixed center;
}
```

<br>

The property declaration must be done in the following order (*bg- is the abbreviation of background*)

```
background: bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;
```

It is ok if some values are missing from the shorthand "declaration".

> If you set the bg-size property using the shorthand notation you must also include the bg-position before it with a "/" in between.



# Borders

!>  For this section we will refer to the page **[CSS Borders](https://www.w3schools.com/css/css_border.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [border-style](https://www.w3schools.com/cssref/pr_border-style.asp) | Sets the background color of an element                      |
| [border-width](https://www.w3schools.com/cssref/pr_border-width.asp) | Sets the width of the four borders                           |
| [border-color](https://www.w3schools.com/cssref/pr_border-color.asp) | Sets the color of the four borders                           |
| [border](https://www.w3schools.com/cssref/pr_border.asp) (shorthand) | Sets all the border properties in one declaration            |
| [border-radius](https://www.w3schools.com/cssref/css3_pr_border-radius.asp) | Sets all the four border-*-radius properties for rounded corners |

<br>

## Border direction

You can specify direction for all border properties mentioned above.

Ex.:

- `border-top-width`
- `border-right-style`
- `border-left-color`
- `border-top-left-radius`



## Rounded Images

We can combine the HMTL `<img>` element with the CSS `border-radius` property to create rounded images:

```css
img {
    width: 200px;
	border-radius: 50%;
}
```

<a href="https://res.cloudinary.com/teepublic/image/private/s--zzyj1l_O--/t_Preview/b_rgb:191920,c_limit,f_jpg,h_630,q_90,w_630/v1446249400/production/designs/317428_1.jpg" align="center">
	<img src="https://res.cloudinary.com/teepublic/image/private/s--zzyj1l_O--/t_Preview/b_rgb:191920,c_limit,f_jpg,h_630,q_90,w_630/v1446249400/production/designs/317428_1.jpg" alt="Pikazard drawing" title="Pikazard!" style="width:200px; border-radius:50%">
</a>

## Border Shorthand Syntax

The `border` property is a shorthand property for:

- [border-width](https://www.w3schools.com/cssref/pr_border-width.asp)
- [border-style](https://www.w3schools.com/cssref/pr_border-style.asp) (required)
- [border-color](https://www.w3schools.com/cssref/pr_border-color.asp)



The expected order of declaration is as follows:

```css
border: border-width border-style border-color
```



In practice:

*Code*

```css
h4 {
	border: 2px dotted red;
}
```

*Result*

<h4 style="border: 2px dotted red;">Border shorthand notation</h4>
# TRBL "trouble" Shorthands

Most shorthand notations that use 4 values follow the "trouble" declaration order:

1. First entry sets the **top** value
2. Second entry sets the **right** value
3. Third entry sets the **bottom** value
4. Fourth entry sets the **left** value

<br>

For example:

```css
border-style: dotted solid double dashed;
```

- top border is dotted
- right border is solid
- bottom border is double
- left border is dashed

<br>

If the declaration uses only two values, the typical order is:

1. First entry sets **top** and **bottom** values
2. Second entry sets the **left** and **right** values



*Code*

```css
border-style: solid
border-width: 10px 2px;
```

*Result*

<h4 style="border-style: solid; border-width: 10px 2px; ">Two-value declaration</h4>


# List Styles

!>  For this section we will refer to the page **[CSS Lists](https://www.w3schools.com/css/css_list.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [list-style ](https://www.w3schools.com/cssref/pr_list-style.asp) (shorthand) | Sets all the properties for a list in one declaration        |
| [list-style-image](https://www.w3schools.com/cssref/pr_list-style-image.asp) | Specifies an image as the list-item marker                   |
| [list-style-position](https://www.w3schools.com/cssref/pr_list-style-position.asp) | Specifies the position of the list-item markers (bullet points) |
| [list-style-type](https://www.w3schools.com/cssref/pr_list-style-type.asp) | Specifies the type of list-item marker                       |

<br>

## List Style Position

Note that the **default value** of `list-style-position` is `outside`.

This means two things:

-  the markers will fall **outside the list items but inside the list itself**
- The **list items have a left padding** (empty space) by default.

*Code*:

```css
ul {
    border: solid 1px gray;
    width: 200px;
}
li {
    border:solid 1px blue;
}
```

*Result*:

<ul style="border:solid 1px gray; width:200px">
  <li style="border:solid 1px blue;">Coffee</li>
  <li style="border:solid 1px blue;">Tea</li>
  <li style="border:solid 1px blue;">Coca Cola</li>
</ul>

<br>

> Its common practice to use list-items in a navigation bar by resetting their default values:
>
> ```css
> ul {
>     list-style: none;
>     padding: 0px;
> }
> ```



In the example above the shorthand notation was used with only one value. **For non-specified values, their default values are loaded.**

# References & Diving Deeper

> I strongly encourage you to read the [**Backgrounds and borders**](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) page by MDN web docs.

Other resources:

- [CSS Backgrounds](https://www.w3schools.com/css/css_background.asp) by W3Schools
- [CSS Borders](https://www.w3schools.com/css/css_border.asp) by W3Schools
- [CSS Rounded Corners](https://www.w3schools.com/css/css3_borders.asp) (and shorthand notation)
- 



# Hands-on

## Exercises

Complete the following exercises by W3Schools:

- [CSS Background](https://www.w3schools.com/css/exercise.asp?filename=exercise_background1)
- [CSS Border](https://www.w3schools.com/css/exercise.asp?filename=exercise_border1)
- [CSS Rounded Corners](https://www.w3schools.com/css/exercise.asp?filename=exercise_css3_borders1)



## Lab 1

Create a simple "Hero" page with a call to action button.



A "Hero" section in typically when you have an large image that will represent the general message or feeling of you website.

<img src="assets/image-20200208113747755.png" alt="image-20200208113747755" style="width:400px;" />



The button must link to the contact us page provided in the zip file:



