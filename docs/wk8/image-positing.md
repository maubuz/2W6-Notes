# Image Positioning & Sizing

We will look at some image positioning strategies:

1. Using background images.
2. Using width inside a block level element.
3. Using Flexbox.
4. Using `object-fit`.

<br>

## Aspect Ratios

Respecting aspect ratio is extremely important when manipulating images.

*Here is a review from 420-1T6:*

<br>

The aspect ratio of an image or a screen is equal to it’s width divided by it’s height.

For example, for an image with dimensions 1920 x 1080 pixels, the aspect ration is:



![image-20201019081727580](https://mau-jac.github.io/1T6-F20/wk9/assets/image-20201019081727580.png)



>  An image can be cropped to a have a specific aspect ratio.
>
> However, if the image is stretched or shrunk without respecting it’s aspect ratio, the image will be deformed.



In the image below the landscape image is being cropped to multiple  images of different aspect ratios (follow the colored lines).



![Common aspect ratios in photography](https://photographylife.com/wp-content/uploads/2019/09/Aspect-Ratios-960x540.jpg)

<p align="center"><a href="https://photographylife.com/aspect-ratio"><em>Image being cropped to different aspect ratios</em></a></p><em></a></p>

<br>

An image can be resized while respecting the aspect ratio by changing the width and the height by the same amount.

**If the width and the height are changed by different amounts, the image is distorted.** 

![aspect_ratio_deforming](https://mau-jac.github.io/1T6-F20/wk9/assets/aspect_ratio_deforming.gif)

> This means that in order to fit an image into a rectangle of different aspect ratio, **we must decide what will be left out**

<br>

![image-AR-illustration](assets/image-AR-illustration.png)

<br>

## Positioning Background Images

**Advantages**

- Property `background-size` provides full control of how the image will fill available space.
- Property `background-position` allows to choose which part of the image will be displayed.

**Disadvantages**

- Image is not part of the page content and is invisible to screen readers and search engines.
- The size of the section must be driven by the content inside the container (rather than the image).
  - (Notice the `margin-bottom`, `padding` and `padding-top` in the CodePen example below)

<br>

Possible values of `background-size`:


| Value        | Description                                                  |
| ------------ | ------------------------------------------------------------ |
| auto         | Default value. Image displayed in original size              |
| *length*     | Sets the width and height of image in pixels. First value sets width, second value  sets height. |
| *percentage* | Sets the width and height of image in percent of  the parent element. First value sets width, second value  sets height. |
| cover        | Resize the background image to cover the entire container, even if it has to stretch the image or cut. |
| contain      | Resize the background image to make sure the image is fully visible (no parts cut off). |

<br>

<iframe class="interactive" src="https://interactive-examples.mdn.mozilla.net/pages/css/background-size.html" title="MDN Web Docs Interactive Example" loading="lazy" width="100%" height="400"></iframe>

<br>

<iframe class="interactive" src="https://interactive-examples.mdn.mozilla.net/pages/css/background-position.html" title="MDN Web Docs Interactive Example" loading="lazy" width="100%" height="400"></iframe>

<br>



We used `background-image` in the motorcyclist hero page:

<iframe height="265" style="width: 100%;" scrolling="no" title="Positioning - Lab 4 - end" src="https://codepen.io/maujac/embed/mdOZZoP?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/mdOZZoP'>Positioning - Lab 4 - end</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

## Setting Width and Height

The size of `<img>` elements can be controlled via CSS with the properties `width` and `height`.

> When only one value is set (`width` or `height`), **the other is auto-sized** to preserve the aspect ratio
>
> This is the recommended method for sizing with `width` and `height`

<br>

!> Avoid using `height` percentages on images **unless the height of the parent container is explicitly defined.** 

**[From the formal definition:](https://developer.mozilla.org/en-US/docs/Web/CSS/height#formal_definition)** If the height of the containing block is not specified explicitly  (i.e., it depends on content height), and this element is not absolutely positioned, the value computes to `auto`.

<br>

<iframe height="265" style="width: 100%; height: 400px"  scrolling="no" title="wk8 - Image_positioning_width" src="https://codepen.io/maujac/embed/dyOBXNB?height=265&theme-id=dark&default-tab=result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/dyOBXNB'>wk8 - Image_positioning_width</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

## Controlling Images with Flexbox

In order to fully leverage Flexbox and let images grow and shrink, do the following:

1. Put the `<img>` inside a flex item.
2. Control the size of the flex item as usual using the `flex` property
3. Set the `<img>` to `width: 100%` so it can fill and be resized by its flex-item;

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="Wk8 - image sizing Flexbox" src="https://codepen.io/maujac/embed/PobMYEV?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/PobMYEV'>Wk8 - image sizing Flexbox</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

## Object-fit

You might have noticed in the previous CodePen that the images had different heights.

This happened because all 3 images had the width (due to `flex: 1` on the `<div>` and `width: 100%` on the `<img>`).

**What if we wanted all images to have the same height and width while respecting it's aspect ratio?**

If all images don't have the same aspect ratio, this means that parts of the images would either overflow or leave gaps (as seen in the section *Aspect Ratio*).

> The property `object-fit` allows images to be placed inside a container similarly to `background-size`.
>
> We can then position these images with `object-position`, which is similar to `background-position`.

<br>

**Values of `object-fit`**

| Value      | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| fill       | This is default. The replaced content is sized to fill the element's     content box. If necessary, the object will be stretched or squished to fit |
| contain    | The replaced content is scaled to maintain its aspect ratio while fitting within the element's content box |
| cover      | The replaced content is sized to maintain its aspect ratio while filling the element's entire content box. The object will be clipped to fit |
| none       | The replaced content is not resized                          |
| scale-down | The content is sized as if none or contain were specified (would result in a smaller concrete object size) |

<br>

**Values of `object-position`**

| Value      | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| *position* | Specifies the position of the image or video inside its content box. First value controls the     x-axis and the second value controls the y-axis. Can be a string (left,     center or right), or a number (in px or %). Negative values are allowed |

<br>

<iframe class="interactive" src="https://interactive-examples.mdn.mozilla.net/pages/css/object-fit.html" title="MDN Web Docs Interactive Example" loading="lazy" width="100%" height="400"></iframe>

<br>

<iframe class="interactive" src="https://interactive-examples.mdn.mozilla.net/pages/css/object-position.html" title="MDN Web Docs Interactive Example" loading="lazy" width="100%" height="400"></iframe>

<br>



## References & Diving Deeper

> Recommended reading: [object-fit by CSS-Tricks](https://css-tricks.com/almanac/properties/o/object-fit/)

<br>

> Recommended video:
>
> <iframe width="560" height="315" src="https://www.youtube.com/embed/5CZyxnCdXuk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

