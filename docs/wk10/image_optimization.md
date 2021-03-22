This lesson was based on the pages [**Image Optimization**](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization) by developers.google.com, **[Responsive Images the Simple Way](https://cloudfour.com/thinks/responsive-images-the-simple-way/)** by CloudFour and 



# Images Optimization



## Why optimize images ?

Page load times is directly related to [bounce rates](https://support.google.com/analytics/answer/1009409?hl=en) and  inversely proportional to sales conversion.

<br>

![img](https://lh3.googleusercontent.com/Iouf796d7faP2oEH6aIUXIYIXzJ_DYKpus5qkqZ33pwblQCpd0Ws28lPiqysg7KaHJSOk9iC1fNzdEQok6xFT2vBY-0pLl8C1QYuIFVBxMWm6dO6tyEWJWv5HF7roNmXkHp4rO31taM)

<p align="center"><a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-load-time/"><em>Google/SOASTA Research, 2016</em></a></p>

<br>

**Fast = $$$**

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

Most of the data moved over the Internet are videos, **however**:



- Videos are typically not downloaded at initial load time (you have to hit play);
- Most pages don't serve videos (only 2 out of 76 resource requests are videos);

<br>

> The next largest asset type slowing down load times are images.

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



## Choosing the image format

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

### Why not stick to Webp?

*If Webp is so great, why not use it everywhere?*

Unfortunately, browser support is not universal quite yet (it will probably be by the time you graduate). 

<br>

> To understand the level of browser support for any given HTML or CSS feature, visit the site:
>
> [caniuse.com](https://caniuse.com/?search=webp)

<br>

### Vector vs. Raster images

If the image type permits, SVG's should be preferred as they are resolution independent, typically smaller and always deliver sharp results.

Raster images should be used for complex scenes with lots of irregular shapes and details

<br>

![Picture](https://www.seekacreative.co.nz/uploads/3/0/6/7/30679021/vector-raster_orig.jpg ':size=500')

<p align="center"><a href="https://www.seekacreative.co.nz/resources/vector-vs-raster-files"><em>Vector vs Raster Files</em></a></p>

<br>

Note that **SVG images can also be optimized via lossless compression** (see more below).

<br>

## Optimizing Compression

Image compressors use a variety of techniques to lower the number of required bits per pixel in order to reduce file size.

<br>

There are two types of compression:

- Lossy
- Lossless

<br>

Differences in image formats are largely due to how compatible they are with lossy and lossless compression algorithms.

<br>

### Lossy

In lossy compression some **information is lost** during. An image after compression is of lower definition. 

**This process is irreversible.** However, when done properly, the loss in quality is barely noticeable. 

<br>

![img](https://technofaq.org/wp-content/uploads/2018/02/lossy-compression-600x172.png)

<p align="center"><a href="https://technofaq.org/posts/2018/02/pitfalls-to-avoid-when-choosing-images-for-your-webpage/"><em>Image by technofaq.org</em></a></p>

<br>

> Lossy compression algorithms reduce image size by:
>
> - Simplifying or reducing the number of pixels;
> - Reducing the number of colors (color palette).

<br>

**Simplifying pixels**

It is possible to "group" neighboring pixels and apply the same color to the whole group.

For example, in the animation below, pixels are grouped to progressively simplify the image:

<br>

![jpg_king_of_the_hill](assets/jpg_king_of_the_hill-1616382777381.gif)

<br>

**Reducing the color palette**

In the image below, the same picture is exported using different color palettes (colors available to "paint" the image).

From left to right (PNG): 32-bit (4 channels, 16M colors), 7-bit (128 colors), 5-bit (32 colors).

<br>

![artifacts](assets/artifacts-1616382777382.png)

<p align="center"><a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization#eliminating_and_replacing_images"><em>Image Optimisation - developers.google.com</em></a></p>

<br>

### Lossless

In lossless compression no **information is lost** during compression. Image before and after compression are **identical**.

> Lossless compression shrinks images by replacing and substituting patterns observed in the pixel grid.



This is done similarly to how `.zip` files are compressed. **This process is perfectly reversible.**

<br>

For example, in the image below (pixels are laid out as a  pixel array), patterns are simplified by listing the repetitions in color (run-length encoding).

<br>

![img](https://technofaq.org/wp-content/uploads/2018/02/LossessImageRow-600x167.png)

<p align="center"><a href="https://technofaq.org/posts/2018/02/pitfalls-to-avoid-when-choosing-images-for-your-webpage/"><em>Image by technofaq.org</em></a></p>

<br>

## Compression Tools

The compression type and quality levels are chosen when the image is created or when using conversion software.

<br>

Some online services offer the ability to optimize and further compress images:



- [TinyPNG](https://tinypng.com/) and [TinyJPG](https://tinyjpg.com/)
- [CompressPNG](https://compresspng.com/) and [CompressJPEG](https://compressjpeg.com/)
- [SVGOMG](https://jakearchibald.github.io/svgomg/)
- [ezgif.com](https://ezgif.com/optimize) 

<br>

> In practice, image optimization is typically a combination of lossy **and** lossless compression. 
>
> Always optimize compression before adding images to your production website!

<br>