This lesson was based on the page **[CSS Media Queries - Examples](https://www.w3schools.com/css/css3_mediaqueries_ex.asp)** by W3Schools and **[Using media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)** by MDN web docs.



# Media Queries

CSS Media queries can be used to check many [**user-agent properties**](https://developer.mozilla.org/en-US/docs/Glossary/user_agent), such as:

- width and height of the viewport
- width and height of the device
- orientation (is the tablet/phone in landscape or portrait mode?)
- resolution



This is particularly important in Web Design because it allows us to change and adapt the layout of a page to best fit in the user's screen.



# Media Query Syntax

```css
@media not|only|all mediatype and|not|only (expressions) {
  CSS-Code;
}
```

* the `not|only` on the `mediatype` is optional. `all` is assumed by default.

<br>

![media query syntax](http://blog.mycode.website/wp-content/uploads/2018/01/mobile-media-query-componets.png ':size=600')

<p align="center"><a href="https://blog.mycode.website/media-queries/"><em>Media Queries</em></a></p>
<br>

**Example Syntax**

```css
.description { flex: 1; }

@media screen and (min-width: 650px) and (max-width: 900px) {
    .description { flex: 50%; }
}
```



## Media Types

| Value  | Description                                            |
| ------ | ------------------------------------------------------ |
| all    | Used for all media type devices                        |
| print  | Used for printers                                      |
| screen | Used for computer screens, tablets, smart-phones etc.  |
| speech | Used for screen readers that "reads" the page out loud |

<br>



## Media Features to be Queried

The most commonly used media features are **width**, **height, orientation and resolution**, however, there are many other features that can be queried:



| Name                                                         | Summary                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`any-hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover) | Does any available input mechanism allow the user to hover over elements? |
| [`any-pointer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer) | Is any available input mechanism a pointing device, and if so, how accurate is it? |
| [`aspect-ratio`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/aspect-ratio) | Width-to-height aspect ratio of the viewport                 |
| [`color`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color) | Number of bits per color component of the output device, or zero if the device isn't color |
| [`color-gamut`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-gamut) | Approximate range of colors that are supported by the user agent and output device |
| [`color-index`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/color-index) | Number of entries in the output device's color lookup table, or zero if the device does not use such a table |
| [`display-mode`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/display-mode) | The display mode of the application, as specified in the web app manifest's [`display`](https://developer.mozilla.org/en-US/docs/Web/Manifest#display) member |
| [`forced-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/forced-colors) | Detect whether user agent restricts color palette            |
| [`grid`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/grid) | Does the device use a grid or bitmap screen?                 |
| [`height`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/height) | Height of the viewport                                       |
| [`hover`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/hover) | Does the primary input mechanism allow the user to hover over elements? |
| [`inverted-colors`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/inverted-colors) | Is the user agent or underlying OS inverting colors?         |
| [`light-level`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/light-level) | Light level of the environment                               |
| [`monochrome`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/monochrome) | Bits per pixel in the output device's monochrome frame buffer, or zero if the device isn't monochrome |
| [`orientation`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/orientation) | Orientation of the viewport                                  |
| [`overflow-block`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-block) | How does the output device handle content that overflows the viewport along the block axis? |
| [`overflow-inline`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/overflow-inline) | Can content that overflows the viewport along the inline axis be scrolled? |
| [`pointer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/pointer) | Is the primary input mechanism a pointing device, and if so, how accurate is it? |
| [`prefers-color-scheme`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) | Detect if the user prefers a light or dark color scheme      |
| [`prefers-contrast`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast) | Detects if the user has requested the system increase or decrease the amount of contrast between adjacent colors |
| [`prefers-reduced-motion`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion) | The user prefers less motion on the page                     |
| [`prefers-reduced-transparency`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-transparency) | The user prefers reduced transparency                        |
| [`resolution`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/resolution) | Pixel density of the output device                           |
| [`scan`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scan) | Scanning process of the output device                        |
| [`scripting`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/scripting) | Detects whether scripting (i.e. JavaScript) is available     |
| [`update`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/update-frequency) | How frequently the output device can modify the appearance of content |
| [`width`](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/width) | Width of the viewport including width of scrollbar           |

<br>

> Most of the media features listed above can be used in combination with the **min-** or **max-** prefix.
>
> Some features will simply return a true or false boolean (eg. `is-hover`), while others might return a value (eg. `resolution` or `width`).

<br>

### Example 1

<iframe height="500" style="width: 100%;" scrolling="no" title="wk8 - Ex_MediaQueries_1a" src="https://codepen.io/maujac/embed/OJVdrdq?height=500&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/OJVdrdq'>wk8 - Ex_MediaQueries_1a</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

### Example 2

<iframe height="500" style="width: 100%;" scrolling="no" title="wk8 - Ex_MediaQueries_1" src="https://codepen.io/maujac/embed/wvaNMPZ?height=500&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/wvaNMPZ'>wk8 - Ex_MediaQueries_1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>



# Viewport Sizes in Dev Tools

Both Chrome and Firefox have specific features in their Dev Tools to facilitate responsive design:



## In Firefox



![image-20200330080039759](assets/image-20200330080039759.png ':size=500')



<br>

![image-20200330080227012](assets/image-20200330080227012.png ':size=500')



<br>

## In Chrome



![image-20200330080541643](assets/image-20200330080541643.png ':size=500')



<br>

![image-20200330080613874](assets/image-20200330080613874.png ':size=500')

<br>

# Combining query expressions



It is possible to combine media query expressions with AND and OR logic. 

- AND logic uses the ***and*** keyword.

- OR logic uses the **" , "** (comma).



**AND logic syntax**

```css
@media screen and (min-width: 600px) and (max-width: 900px) {
  div.example {
    font-size: 50px;
    background: yellow;
  }
}
```



**OR logic syntax**

```css
/* When the width is between 600px and 900px OR above 1100px */
@media screen and (min-width: 600px) and (max-width: 900px), (max-width: 1100px) {
  div.example {
    font-size: 50px;
    background: yellow;
  }
}
```



<br>

# Print Mediatype

Depending on the type of content in your page you can apply a specific styling when printing. Some examples are:

- Recipes
- Instructions
- Contact information



Use the print media type:

```css 
@media print {
    body {
        color: black;
    }
}
```



<br>

# The Cascade and Media Queries

> Media Queries still respect the order of declaration in the CSS Cascade.
>
> In other words, if you reapply a conflicting style below the media query, this new style will be applied.



```css
@media screen and (max-width: 500px){
    body { color: red; }
}

body { color: blue; }
```



In the example above, the color of the text will always be blue.



<br>

# Finding Query Breakpoints

Media query breakpoints are the specific screen width values that will trigger the media query.



There are currently hundreds of screen sizes to be considered, so choosing these values and how many break points can be complicated. Below are common breakpoints used today:

<br>

![commonly used break points](http://blog.mycode.website/wp-content/uploads/2018/01/br2.png)

<p align="center"><a href="https://blog.mycode.website/media-queries/"><em>Media Queries</em></a></p>
<br>

>  There is no consensus on the screen sizes to be used as breakpoints.
>
>  In this course we will use the three breakpoints below:
>
>  - **mobile**: 320px;
>  - **tablet**: 720px;
>  - **desktop**: 1024px;



<br>

![Device screen sizes and query break points](https://miro.medium.com/max/730/1*il1k_A3GthG45NWeD7w6DA.png)

<p align="center"><a href="https://uxplanet.org/responsive-design-best-practices-c6d3f5fd163b"><em>Responsive Design Best Practices</em></a></p>
<br>

Some designers suggest that [**we don't need device specific breakpoints**](https://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints/) on what makes the most sense to our individual design. Therefore, we should introduce breakpoints when we feel that the design no longer looks good for smaller or larger screen sizes.

<br>



# Mobile First

Since we can now adapt website layouts to any screen size, we are faced with the question of **for what format should we design first ?**

- Start with desktop screens and resize to mobile sizes ?

  or

- Start with mobile sizes and resize to desktop ?



> It is good practice to design for mobile first, then adapt the layout for wider screens.

<br>



![mobile-first-media-query illustration](https://i0.wp.com/www.silocreativo.com/en/wp-content/uploads/2016/12/media-query-for-mobile-first.png?resize=666%2C500&quality=100&strip=all&ssl=1 ':size=450')

<p align="center"><a href="https://www.silocreativo.com/en/media-queries-css-work/"><em>Media Queries in CSS. How do They Work?</em></a></p>
<br>

There three good reasons for this:



1. This creates lighter websites for mobile users since the browser only has to apply the first few lines of CSS.



2. The processing of complex media queries and the rendering of intricate layouts are done by larger devices, which presumably has higher computational power.



3. Mobile layouts are simpler and therefore easier to implement and faster to code. Complexity should be added gradually as screen sizes increase.



<br>

## Making sites Mobile

When using the mobile first approach, a breakpoint should be "activated" whenever we reach a new minimum screen size.

<br>

Use the following steps:

1. Create and link the base `index.html` and `style.css` normally.
2. Resize your viewport to the mobile size you are interested in.
3. Add all your styling in `style.css` so that your page looks good at the mobile viewport.
4. Once the page is complete, resize your viewport to the next size up (table, desktop, etc).
5. Add media queries to `style.css` as required in order to **overwrite the base css style created in step 3**.

<br>

> Use `min-width: value px` when introducing breakpoints in mobile first development.

<br>

# The Viewport Meta Tag

Many pages are not mobile optimized, and break (or at least look bad) when rendered at a small viewport width.

Therefore, narrow screen devices (e.g. mobiles) render pages in a virtual window or viewport, which is **usually wider than the screen, and then shrink the  rendered result down** so it can all be seen at once.



>  The "viewport meta tag" let web developers control the viewport's size and scale of a site and request that the site be **loaded at the correct device width.**



<br>

```css
<meta name="viewport" content="width=device-width, initial-scale=1">
```



<br>

Make sure to include this in your website when using Media Queries or the browser might not load the correct page layout.

For more information please see [Using the viewport meta tag to control layout on mobile browsers](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag) by MDN web docs.

<br>



# References & Diving Deeper

> Recommended reading: [**Responsive Web Design Basics**](https://developers.google.com/web/fundamentals/design-and-ux/responsive/) by Google's Web Fundamentals page



# Hands-on



## Exercises

1. Edit the website code in the dev tools and complete this [Dev Tools Warm-up](https://activities.learn-the-web.algonquindesign.ca/dev-tool-dynamo/).



## Lab 1

Follow **[this tutorial by Simmons College](http://web.simmons.edu/~grovesd/comm328/demo/media-query-exercises/mq-ex1-instructions)** and create a responsive website from scratch **using mobile-first development**.

- The staring code is provided below.
- Use Flexbox whenever appropriate.

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk8 - MQ_lab_1" src="https://codepen.io/maujac/embed/NWbVYjg?height=265&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/NWbVYjg'>wk8 - MQ_lab_1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



