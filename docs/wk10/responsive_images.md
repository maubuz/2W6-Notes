#

This lesson was based on the pages [**Image Optimization**](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization) by developers.google.com.



# Optimization & Responsive Images



## Why optimize images ?

Page load times is directly related to [bounce rates](https://support.google.com/analytics/answer/1009409?hl=en) and  inversely proportional to sales conversion.

This means **Fast = $$$**

<br>

- [Every 100ms improvement brings Walmart up to 1% incremental revenue](https://www.slideshare.net/devonauerswald/walmart-pagespeedslide/46)

- [Cloudflare reports that going from 5.7s to 2.4s load time triples the conversion rate](https://www.cloudflare.com/learning/performance/more/website-performance-conversion-rates/)
- [Akamai reports that a two-second delay in web page load time increase bounce rates by 103%](https://www.akamai.com/uk/en/about/news/press/2017-press/akamai-releases-spring-2017-state-of-online-retail-performance-report.jsp)

<br>

**How do we lower page load time?**

Let's look at what we are loading:

<br>

![bytes_moved](assets/bytes_moved.svg ':size=600')

<p align="center"><a href="https://httparchive.org/reports/page-weight?view=grid"><em>HTTP Archive - Page Weight Report</em></a></p>

<br>

Most of the data moved over the Internet are videos.

However:

- Videos are typically not downloaded at initial load time;
- Most pages don't serve videos (every 2 out of 76 resource requests are videos);





The next largest asset type slowing down load times are images.

<br>

**In order to reduce image load times we will focus on the following approaches:**



1. **Choosing the right image format;**
2. **Optimize compression;**
3. **Use responsive images;**
4. **Lazy-load images;**



<br>

> Image optimization is both an art and science: an art because there is  no one definitive answer for how best to compress an image,  and a science because there are many techniques that can significantly reduce the size of an image. 
>
>  -  Ilya Grigorik , web performance engineer at Google



# Choosing the image format

There are five widely used image formats for the web:

<br>

|                          **Format**                          | **Type** | **Transparency** | **Animation** | **Lossy** | **Lossless** |
| :----------------------------------------------------------: | :------: | :--------------: | :-----------: | :-------: | :----------: |
| [GIF](http://en.wikipedia.org/wiki/Graphics_Interchange_Format) |  Raster  |       Yes        |      Yes      |    No     |     Yes      |
| [PNG](http://en.wikipedia.org/wiki/Portable_Network_Graphics) |  Raster  |       Yes        |      No       |    No     |     Yes      |
|          [JPEG](http://en.wikipedia.org/wiki/JPEG)           |  Raster  |        No        |      No       |    Yes    |     No*      |
|          [WebP](http://en.wikipedia.org/wiki/WebP)           |  Raster  |       Yes        |      Yes      |    Yes    |     Yes      |
|   [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG)    |  Vector  |       Yes        |      Yes      |    No     |     Yes      |

*Is part of the jpeg standard but rarely supported by programs and browsers.

<br>

While there is no definite answer, below is a recommendation based on a few basic questions:

<br>

![image_selection_diagram](assets/image_selection_diagram.svg)

<p align="center"><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization#eliminating_and_replacing_images"><em>Adapted from "Image Optimization" by developers.google.com</em></a></p>
<br>

## Vector vs. Raster images

If the image type permits, SVG's should be preferred as they are resolution independent, typically smaller and always deliver sharp results.

Raster images should be used for complex scenes with lots of irregular shapes and details

<br>

Note that **SVG images can also be optimized via lossless compression** (see more below).

<br>

The .svg image below has 3.7 kB in size while the .png equivalent has 9.5 kB. Thats 2.5x smaller.

<br>



![webpage](assets/webpage.svg ':size=256')

![webpage](assets/webpage.png)

<p align="center"><a href="https://www.flaticon.com/authors/eucalyp" title="Eucalyp"><em>Eucalyp</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</em></a></p>

# Optimizing Compression

Image compressors use a variety of techniques to reduce the number of required bits per pixel to reduce file size of the image.

<br>

There are two types of compression:

- Lossy
- Lossless

<br>

Image optimization is typically a function of lossy **and** lossless compression. 

Differences in image formats are largely due to how compatible they are to lossy and lossless algorithms.

<br>

## Lossy

Some **information is lost** during compression. Image after compression is of lower definition. This process is irreversible.

When done properly, the loss in quality is barely noticeable. 

<br>

Lossy compression algorithms reduce image size by:

- Simplifying or reducing the number of pixels;
- Reducing the number of colors.

<br>

![img](https://technofaq.org/wp-content/uploads/2018/02/lossy-compression-600x172.png ':size=800')

<p align="center"><a href="https://technofaq.org/posts/2018/02/pitfalls-to-avoid-when-choosing-images-for-your-webpage/"><em>Image by technofaq.org</em></a></p>
<br>

For example, in the animation below, pixels are merged to progressively simplify the image:

<br>

![jpg_king_of_the_hill](assets/jpg_king_of_the_hill.gif)

<br>

In the image below, the same picture is exported using different color palettes (colors available to "paint" the image). From left to right (PNG): 32-bit (4 channels, 16M colors), 7-bit (128 colors), 5-bit (32 colors).

<br>

![artifacts](assets/artifacts.png)

<p align="center"><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization#eliminating_and_replacing_images"><em>Image Optimisation - developers.google.com</em></a></p>
<br>

## Lossless

No **information is lost** during compression. Image before and after compression are **identical**. Lossless compression shrinks images by replacing and substituting patterns in bits of pixel data.



This is done similarly to how .zip files are compressed. This process is perfectly reversible.



For example, in the image below (pixels are laid out as a  pixel array), patterns are simplified by listing the repetitions:



![img](https://technofaq.org/wp-content/uploads/2018/02/LossessImageRow-600x167.png)

<p align="center"><a href="https://technofaq.org/posts/2018/02/pitfalls-to-avoid-when-choosing-images-for-your-webpage/"><em>Image by technofaq.org</em></a></p>
<br>

## Compression Tools

From a practical perspective, the compression type and quality levels are chosen when the image is created or using conversion software.



Some online services offer the ability to optimize and further compress images:



- [TinyPNG](https://tinypng.com/) and [TinyJPG](https://tinyjpg.com/)
- [CompressPNG](https://compresspng.com/) and [CompressJPEG](https://compressjpeg.com/)
- [SVGOMG](https://jakearchibald.github.io/svgomg/)



<br>

> Always optimize compression before adding images to your production website!

  

# Responsive images

The simplest and most effective image optimization techniques is to  ensure that we are not shipping any more pixels than needed to display  the asset at its intended size in the browser.



Many front-end developers ship larger assets than necessary and rely on the browser to rescale them - which also consumes extra CPU resources.



There are two approaches in native HTML to ensure the right image size is used for the right viewport width:

-  `srcset` attribute.
- `<picture>` element.

<br>

![Diagram: low-resolution image sent to standard screen desktop devices and all mobile devices versus high-resolution image sent to retina desktop devices](https://www.internetingishard.com/html-and-css/responsive-images/responsive-images-overview-890631.png ':size=600')

<p align="center"><a href="https://www.internetingishard.com/html-and-css/responsive-images/"><em>Image by Interneting is Hard</em></a></p>
<br>



## `srcset` attribute



[Responsive Images: If you’re just changing resolutions, use srcset](https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/) by CSS-Tricks

[Responsive Images the Simple Way](https://cloudfour.com/thinks/responsive-images-the-simple-way/) by CloudFour





![Labeled screenshot of responsive image code example, showing the srcset attribute, pointing out that it contains image URLs and the widths of those images, and that the browser picks the best source from the set, including retina.](https://29comwzoq712ml5vj5gf479x-wpengine.netdna-ssl.com/wp-content/uploads/2020/03/srcset.png)





## Art Direction and the `<picture>` element



[Watching img.currentSrc](https://cloudfour.com/examples/img-currentsrc/) by CloudFour and inspired by Google Chrome Team

![a cute kitten](https://cloudfour.com/examples/img-currentsrc/images/kitten-small.png)



<br>



# References & Diving Deeper

Recommended readings:



 - [**Image Optimization**](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization) by developers.google.com on Web Fundamentals

   

 Recommended video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2QYpkrX2N48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>