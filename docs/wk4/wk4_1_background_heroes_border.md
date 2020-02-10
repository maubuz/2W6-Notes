# 

# Code Validators: HTML & CSS

It is possible to validate both your HTML and your CSS using W3C's code validators:

- [**CSS Validation Service**](https://jigsaw.w3.org/css-validator/)

- [**Markup Validation Service**](https://validator.w3.org/)



Both services can validade code provided in three different ways:

1. By linking a URL to the source code;
2. By uploading a file with the source code;
3. By pasting source code directly into the validator.



> This tool is particularly useful if you get unexpected results and you don't understand why.



# CSS Backgrounds

!>  For this section we will refer to the page **[CSS Backgrounds](https://www.w3schools.com/css/css_background.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                                               | Description                                               |
| -------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| [background-color](https://www.w3schools.com/cssref/pr_background-color.asp)           | Sets the background color of an element                   |
| [background-image](https://www.w3schools.com/cssref/pr_background-image.asp)           | Sets the background image for an element                  |
| [background-repeat](https://www.w3schools.com/cssref/pr_background-repeat.asp)         | Sets how a background image will be repeated              |
| [background-position](https://www.w3schools.com/cssref/pr_background-position.asp)     | Sets the starting position of a background image          |
| [background-size](https://www.w3schools.com/cssref/css3_pr_background-size.asp) *      | Specifies the size of the background image(s)             |
| [background-attachment](https://www.w3schools.com/cssref/pr_background-attachment.asp) | Sets background image as fixed or scrolling with the page |
| [background](https://www.w3schools.com/cssref/css3_pr_background.asp)                  | Sets all the background properties in one declaration     |

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

See the [demo below for an illustration](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image):

<br>

<iframe class="interactive" frameborder="0" height="360" src="https://interactive-examples.mdn.mozilla.net/pages/css/background-image.html" title="MDN Web Docs Interactive Example" width="100%"></iframe>

> Combining a background-image image with a linear gradients is a great way to add a darker "overlay" to an image before adding text over it.



## Background Shorthand Property

All the background properties mentioned abover can be set at once using the [`background` shorthand property](https://www.w3schools.com/cssref/css3_pr_background.asp):

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

> If you set the bg-size property using the shorthand notation you must also include the bg-position just before it with a "/" in between.



---



# Sourcing Images



The following website are excellent sources of stock images that are free and licensed as creative commons:

- [Unsplash (site)](https://unsplash.com/)
- [Unsplash Source (API)](https://source.unsplash.com/)
- [Burst](https://burst.shopify.com/) (must sign-up or it's download only)
- [Pixabay](https://pixabay.com/)



## URL's for External Images

Once you find an external image, **you must obtain the URL to the image file, not the page that contains it**.

> If you would like to confirm whether you have the URL to the exact image, open the URL in a private browsing session. You should see only the image and nothing else.



**Follow the instruction bellow to be directed to the image's URL using a modern browser:**

1. Open the page containing the image;
2. Right-click on the image;
3. Select "View image" (Firefox) or "Open image in new tab" (Chromium)
   - Alternatively, you can select "Copy Image Location / Address" directly.
4. The image will open in it's natural size
5. Copy the URL from the address bar


![extracting URLs from web image](assets/image_url_extraction.gif ':size=500')



## Hosting or Referencing ?

For online images that you source you must decide whether to:

- Download the image and host it  yourself; or 
- Simply reference the external image via its URL.



>  In both cases make sure the image license allows you to use it.



**Download and host**

- You control whether or not it image is available.
- Must keep track of your server's storage space and file structure.

**External References**

- You have no control of the image's up-time (availability).

---

# Hero images

A "Hero" image is a large image at the top of your home page that will represent the general message or feeling of you website.


![Hero Image example](assets/image-20200208113747755.png ':size=400')

<p align="center"><a href="https://www.w3schools.com/howto/howto_css_hero_image.asp"><em>How TO - Hero Image by W3Schools</em></a></p>

**Why use a hero image:**

- Add a personal touch and engage the user.
- Transmit quality, credibility or trust.
- Give a "sneak preview" of your service or product.
- Introduce a "call to action"



[Learn more about hero images and see some examples here](https://www.optimizely.com/optimization-glossary/hero-image/).



---


# Height & Width

**It is recommended to set height and width of elements using CSS (instead of using HTML).**

!>  For this section we will refer to the page **[CSS Height and Width](https://www.w3schools.com/css/css_dimension.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                             | Description                           |
| -------------------------------------------------------------------- | ------------------------------------- |
| [height](https://www.w3schools.com/cssref/pr_dim_height.asp)         | Sets the height of an element         |
| [width](https://www.w3schools.com/cssref/pr_dim_width.asp)           | Sets the width of an element          |
| [max-height](https://www.w3schools.com/cssref/pr_dim_max-height.asp) | Sets the maximum height of an element |
| [max-width](https://www.w3schools.com/cssref/pr_dim_max-width.asp)   | Sets the maximum width of an element  |
| [min-height](https://www.w3schools.com/cssref/pr_dim_min-height.asp) | Sets the minimum height of an element |
| [min-width](https://www.w3schools.com/cssref/pr_dim_min-width.asp)   | Sets the minimum width of an element  |

<br>

> **Recommendation:** for content sections, you control the width and let the content control the height.
>
> **Note:** Width is often used for setting the size of block-level elements so that they don't take 100% of the space and auto positioning can occur (more on this later).



## Max,  Min & Responsive Pages

Using max and min width and height is a first step towards building responsive webpages.

They are useful for:

- Control the min or max size of a background-image.
- Setting limits to your page width so text lines are not too long.

---

# Borders

!>  For this section we will refer to the page **[CSS Borders](https://www.w3schools.com/css/css_border.asp)** by W3Schools.

Using the reference above, look at the following CSS properties:

| Property                                                                    | Description                                                      |
| --------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [border-style](https://www.w3schools.com/cssref/pr_border-style.asp)        | Sets the background color of an element                          |
| [border-width](https://www.w3schools.com/cssref/pr_border-width.asp)        | Sets the width of the four borders                               |
| [border-color](https://www.w3schools.com/cssref/pr_border-color.asp)        | Sets the color of the four borders                               |
| [border](https://www.w3schools.com/cssref/pr_border.asp) (shorthand)        | Sets all the border properties in one declaration                |
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


---

# Shorthand declarations


## Four values: TRBL "trouble"

Most shorthand notations that use 4 values follow the "trouble" declaration order:

1. First entry sets the **top** value
2. Second entry sets the **right** value
3. Thrid entry sets the **bottom** value
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


## Two values: top-bottom  left-right


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
---

# References & Diving Deeper

> Recommended reading: [**Backgrounds and borders**](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) page by MDN web docs.



Other resources:

- [CSS Backgrounds](https://www.w3schools.com/css/css_background.asp) by W3Schools
- [CSS Borders](https://www.w3schools.com/css/css_border.asp) by W3Schools
- [CSS Rounded Corners](https://www.w3schools.com/css/css3_borders.asp) (and shorthand notation)

  

---

# Hands-on

## Exercises

Complete the following exercises by W3Schools:

- [CSS Background](https://www.w3schools.com/css/exercise.asp?filename=exercise_background1)
- [CSS Border](https://www.w3schools.com/css/exercise.asp?filename=exercise_border1)
- [CSS Rounded Corners](https://www.w3schools.com/css/exercise.asp?filename=exercise_css3_borders1)
- [CSS Height / Width](https://www.w3schools.com/css/exercise.asp?filename=exercise_dimension1)



## Lab 1 - Code validators

Use the HTML and CSS validators (see top of this page) to correct the errors contained in the provided website.

**Note:** there might be errors that are syntactically correct and the validators will not flag.

[**Download Lab 1 files here**](https://drive.google.com/drive/folders/1_zFkurxx7Vw551XOofpHEwbr5-N2CdHI?usp=sharing)

!> This example site contains a "hack" not recommended for real development: using `&nbsp;` for creating horizontal spacing.


## Lab 2 - The hero page

Create the simple "Hero" page show below.

**Requirements**

- The html file will be provided and should not be modified.
- Create an external CSS file and include the following:
  - The page should stop expanding once a certain width is reached (as shown below).
  - Use the following image from **Unsplash**: https://unsplash.com/photos/aiBYhrzsQw4

[**Download the html file here**](https://drive.google.com/file/d/1SQOuQhGD0WYeFYMKOLlukYFwDj1gnnyf/view?usp=sharing)

!> This example site contains two "hacks" not recommended for real development: using `&nbsp;` for creating horizontal empty spacing and `<br>` for vertical empty spacing.

![Hero_1_lab](assets/Hero_1_lab.gif)

<details>
  <summary>Hints for Lab 2</summary>
  <ul>
    <li>Use a linear gradient in combination with the background image in order to make the image darker.</li>
    <li>Look at previous lessons to change text decorators.</li>
    <li>Add a thick border to the hyperlink to increase the spacing around it.</li>
    <li>Give a max width to the background's parent so that the image stops growing</li>
  </ul>

</details>

