This lesson was based on the page **[Responsive Images the Simple Way](https://cloudfour.com/thinks/responsive-images-the-simple-way/)** by CloudFour


# Responsive images

The simplest and most effective image optimization techniques is to  ensure that we are not sending any more pixels than necessary in order to display an asset in the browser.



Many front-end developers ship larger assets than necessary and rely on CSS for rescaling - which requires extra bandwidth and extra CPU resources.

<br>

In the example below, we are forcing mobile and tablet users to download two 1200x800px images, and then asking the browser to reduce their size.

<iframe height="487" style="width: 100%;" scrolling="no" title="wk10-srcset-ex1" src="https://codepen.io/maujac/embed/abvBvdB?height=487&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/abvBvdB'>wk10-srcset-ex1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

We will learn how to make these images responsive.

<br>

**There are two approaches in HTML to ensure the right image size is used for the right viewport width:**

-  `srcset` attribute - for serving different sizes of the same image.
- `<picture>` element - for serving a different image altogether at a new layout configuration.

<br>



## Retina Screens & CSS Pixels

Retina screens and other modern displays have two to three times more pixels than a traditional screens. This is referred to as a **Display Pixel Ratio** (DPR) of 2x or 3x.



When talking about DPR, we need to make the distinction between CSS pixels (also called logical resolution) and hardware pixels (also known as physical resolution).



All the pixel dimensions declared via styling are CSS pixels.

```css
img { width: 200px; }
```



<br>

Traditionally one CSS pixel mapped to one hardware pixel, however, that is not the case with higher DPR devices. 



If you are curious:

**CSS Pixel = (hardware pixel) / DPR**

<br>

![Diagram: standard-resolution screen with 4 pixels versus high-resolution screen with 16 pixels](https://www.internetingishard.com/html-and-css/responsive-images/standard-vs-retina-resolution-64f6b6.png ':size=600')

<p align="center"><a href="https://www.internetingishard.com/html-and-css/responsive-images/"><em>Standart vs Retina Resolution by Interneting is Hard</em></a></p>
<br>

This means that a container of size  200x100 CSS pixels will be display at 400x200 hardware pixels in a retina display of 2x.

<br>

We can interpret this from two different angles:

- For an image of standard resolution to take the same amount of space in a retina display it needs to be 2x or 3x as big;
- An image will look 2x or 3x smaller in a retina display compared to a standard display.

<br>

![Diagram: High-resolution image shrunk to half size and displayed on retina screen](https://www.internetingishard.com/html-and-css/responsive-images/retina-2x-image-dimensions-5a4673.png)

<br>

## `srcset` attribute

You can use the `srcset` attribute in order to serve a different sized copy of the same image depending on the user’s viewport width (also called resolution switching).

<br>



> This is particularly useful because it detects hardware pixels and lets the browser choose the appropriate image to download.
>
> In other words, **it works for displays with higher DPR and standard screens**.

<br>

![Diagram: low-resolution image sent to standard screen desktop devices and all mobile devices versus high-resolution image sent to retina desktop devices](https://www.internetingishard.com/html-and-css/responsive-images/responsive-images-overview-890631.png ':size=600')

<p align="center"><a href="https://www.internetingishard.com/html-and-css/responsive-images/"><em>The srcset attribute by Interneting is Hard</em></a></p>
<br>

## `srcset` syntax

The `srcset` attribute is used within the `<img>` tag in order to give the browser multiple download options.



It must always include a fallback image in the regular `src` attribute in case the browser does not support the `srcset` attribute.

<br>

```html
<img alt="<alternative text>" src="<fallback image>" 
     srcset="<path to small-image> <small width>w,
             <path to medium-image> <medium width>w,
             <path to large-image> <large width>w ">
```

*Multiple line breaks were used within the same opening `<img>` tag to facilitate readability. Everything could have been declared in the same line.

<br> `srcset` is a comma-separated list of URLs paired with the actual widths of the images.

<br>

>  The width of the image must be included along with the **w** unit. This **w** unit is in pixels and is unique to the syntax of `srcset`.

<br> 

![Labeled screenshot of responsive image code example, showing the srcset attribute, pointing out that it contains image URLs and the widths of those images, and that the browser picks the best source from the set, including retina.](https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/srcset.png)

<p align="center"><a href="https://cloudfour.com/thinks/responsive-images-the-simple-way/"><em>The srcset attribute by CloudFour</em></a></p>
<br>

We will convert the images from the first example into responsive images with the `srcset` attribute:



```html
<img src="https://source.unsplash.com/Dl39g6QhOIM/300x200" alt="cranky cat"
     srcset="https://source.unsplash.com/Dl39g6QhOIM/300x200 300w,
             https://source.unsplash.com/Dl39g6QhOIM/600x400 600w,
             https://source.unsplash.com/Dl39g6QhOIM/1200x800 1200w" >
```

<iframe height="431" style="width: 100%;" scrolling="no" title="wk10-srcset-ex2" src="https://codepen.io/maujac/embed/qBOqZob?height=431&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/qBOqZob'>wk10-srcset-ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

In order to observe `srcset` working:

1. Open the Dev Tools, open the "Networking" tab

   ![image-20200421110648501](assets/image-20200421110648501.png)

2. Refresh the page

3. Highlight the image to see the size of the downloaded asset

   ![image-20200421110803829](assets/image-20200421110803829.png)





<br>

## Art Direction and the `<picture>` element



The `<picture>` element is another HTML method that gives us the ability to download different assets depending on viewport widths.



>  Unlike the `srcset` attribute, the `<picture>` element is used to completely change the type of image being served.



<br>

**Below is an example:**

```html
 <picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture> 
```



<br>

Notice the following:

- The `<picture>` element uses a nested `<source>` element, in the same way that the `<audio>` and `<video>` elements.

- Each `<source>`  element includes a different asset source and **optionally a media query that defines when to use it.**
- A fallback image must always be included.



<br>

The `<picture>` element is normally used to completely change images in favor of a new image that best fits the new screen layout.

**This is known as art direction and is mostly a visual design choice.**

<br>

![Mobile web page with tall-cropped image and desktop web page with wide-cropped image](https://www.internetingishard.com/html-and-css/responsive-images/art-directed-mobile-image-91ca9e.png ':size=700')

<br>

[**Here is an example**](https://cloudfour.com/examples/img-currentsrc/) from CloudFour and inspired by Google Chrome Team

![a cute kitten](https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png)

<p align="center"><a href="https://cloudfour.com/examples/img-currentsrc/"><em>Art Direction by CloudFour</em></a></p>

<br>

> **We will not use the `<picture>` element in this course.**
>
> For now focus on the `srcset` attribute in order to serve responsive images.



<br>

If you would like to learn more about the `<picture>` element, see the [HTML Picture Element page by W3C Schools](https://www.w3schools.com/htmL/html_images_picture.asp)

<br>

## Image Resizing Tools

If you would like to serve smaller versions of an image but only have access to the large sized version, you can use the online tools below to export smaller versions:

- [PicResize.com](https://picresize.com/)
- [ResizeImage.net](https://resizeimage.net/)
- [ImageResizer.com](https://imageresizer.com/)
- [Adobe Photoshop Express](https://photoshop.adobe.com/)

<br>

## References & Diving Deeper

Recommended readings:

 - [**Responsive Images**](https://www.internetingishard.com/html-and-css/responsive-images/) by Interneting is Hard

 - **[Responsive Images the Simple Way](https://cloudfour.com/thinks/responsive-images-the-simple-way/)** by CloudFour

   

 Recommended video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2QYpkrX2N48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>