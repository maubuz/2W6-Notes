#

This lesson was based on the page **[Video and audio content](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)** by MDN web docs,  **[Lesson 9: Adding Media](https://learn.shayhowe.com/html-css/adding-media/#adding-video)** by Shay Howe.



# Audio & Video

[Adding Media](https://learn.shayhowe.com/html-css/adding-media/#adding-video) by Shay Howe

[`<video>` The Video Embed element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video) by MDN web docs

[Multimedia and Embedding](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding) by MDN web docs



The [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5) specification includes native support for `<video>` and `<audio>` elements as well as new [JavaScript](https://developer.mozilla.org/en-US/docs/Glossary/JavaScript) [APIs](https://developer.mozilla.org/en-US/docs/Glossary/API) for controlling them. For now we will only focus on the HTML functionality.



# Audio Element

Use the  `<audio>` element to quickly add audio tracks to your page. Similarly to the `<img>` tag, it requires a `src=` attribute that points to the audio file.

<br>

```html
<audio src="./wk10/assets/bensound-summer.mp3" controls></audio>

<audio src="https://www.bensound.com/bensound-music/bensound-summer.mp3" controls></audio>
```

<h4>Local relative path</h4>
<audio src="./wk10/assets/bensound-summer.mp3" controls></audio>
<h4>Absolute URL path</h4>
<audio src="https://www.bensound.com/bensound-music/bensound-summer.mp3" controls></audio>

<br>

<br>

Notice the following:

-  The use of a **relative OR absolute path** (in case the file is hosted on another computer).



- The use of the  `controls` attribute.  Without `controls` the audio file would be part of the page but could not be accessed by the used (it could still be accessed via JavaScript however).



<br>

There are other attributes that can be assigned to the `<audio>` element:



| Attribute                                                    | Value                | Description                                                  |
| ------------------------------------------------------------ | -------------------- | ------------------------------------------------------------ |
| [autoplay](https://www.w3schools.com/tags/att_audio_autoplay.asp) | autoplay             | Specifies that the audio will start playing as soon as it is ready |
| [controls](https://www.w3schools.com/tags/att_audio_controls.asp) | controls             | Specifies that audio controls should be displayed (such as a play/pause button etc) |
| [loop](https://www.w3schools.com/tags/att_audio_loop.asp)    | loop                 | Specifies that the audio will start over again, every time it is finished |
| [muted](https://www.w3schools.com/tags/att_audio_muted.asp)  | muted                | Specifies that the audio output should be muted              |
| [preload](https://www.w3schools.com/tags/att_audio_preload.asp) | auto  metadata  none | Specifies if and how the author thinks the audio should be loaded when the page loads. Auto is the default. |
| [src](https://www.w3schools.com/tags/att_audio_src.asp)      | *URL*                | Specifies the URL of the audio file                          |



<br>

With the exception of `preload` and `src`, all other attributes are ***Boolean* attributes, meaning they don't require a value**.

<br>

To make sure someone will never comeback to your page, [add an audio track without controls, in autoplay, and looping](https://codepen.io/maujac/pen/vYNLpxx?editors=1000) (some browsers might block autoplay).



<br>

## Supported audio formats

Currently, there are 3 widely supported file formats for the `<audio>` element:

| Format | [MIME-type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) |
| ------ | ------------------------------------------------------------ |
| MP3    | audio/mpeg                                                   |
| OGG    | audio/ogg                                                    |
| WAV    | audio/wav                                                    |



<br>

## Audio Fallbacks & Sources

It is possible **and recommended** to supply more than one audio format for any given audio track. This works as a fallback sequence or files and guarantees browser support.

<br>

To do this, move the `src` attribute inside a `<souce>` element:

<br>

```html
<audio controls>
  <source src="jazz.ogg" type="audio/ogg">
  <source src="jazz.mp3" type="audio/mpeg">
  <source src="jazz.wav" type="audio/wav">
  <p> If you see this, your browser does not supports audio playback</p>
</audio>
```



<br>

Each `<source>` should be followed by a `type` attribute, which specifies the [MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type) of the file.

<br>

A **[MIME type](https://developer.mozilla.org/en-US/docs/Glossary/MIME_type)** (called "media type" or "content type") is a string sent along with a file indicating the type of the file (content format).  By using the MIME type browsers can choose to immediately skip videos they don't understand.

<br>

Notes on the `<audio>` tag:

<br>

- By default it has `display: inline`;
- Some styling properties apply such as: `margin` , `border` and `border-radius`;
- You can resize it with `width` property.

<br>

<iframe height="293" style="width: 100%;" scrolling="no" title="wk10 - audio_styling - Ex2" src="https://codepen.io/maujac/embed/vYNLREw?height=293&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/vYNLREw'>wk10 - audio_styling - Ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

# Video Element



Adding video is very similar to adding audio. Use the `<video>` tag and specify the target  `src` . 

<br>

```html
<video src="./wk10/assets/rabbit.webm" controls></video>
```

<video src="./wk10/assets/rabbit.webm" controls></video>



<br>

The `<video>` element supports the following attributes (in most browsers):



| Attribute                                                    | Value                | Description                                                  |
| ------------------------------------------------------------ | -------------------- | ------------------------------------------------------------ |
| [autoplay](https://www.w3schools.com/tags/att_video_autoplay.asp) | autoplay             | Specifies that the video will start playing as soon as it is ready |
| [controls](https://www.w3schools.com/tags/att_video_controls.asp) | controls             | Specifies that video controls should be displayed (such as a play/pause button etc). |
| [height](https://www.w3schools.com/tags/att_video_height.asp) | *pixels*             | Sets the height of the video player                          |
| [loop](https://www.w3schools.com/tags/att_video_loop.asp)    | loop                 | Specifies that the video will start over again, every time it is finished |
| [muted](https://www.w3schools.com/tags/att_video_muted.asp)  | muted                | Specifies that the audio output of the video should be muted |
| [poster](https://www.w3schools.com/tags/att_video_poster.asp) | *URL*                | Specifies an image to be shown while the video is downloading, or until the user hits the play button |
| [preload](https://www.w3schools.com/tags/att_video_preload.asp) | auto  metadata  none | Specifies if and how the author thinks the video should be loaded when the page loads |
| [src](https://www.w3schools.com/tags/att_video_src.asp)      | *URL*                | Specifies the URL of the video file                          |
| [width](https://www.w3schools.com/tags/att_video_width.asp)  | *pixels*             | Sets the width of the video player                           |



<br>

## Supported Video Formats

| Format | MIME-type  |
| ------ | ---------- |
| MP4    | video/mp4  |
| WebM   | video/webm |
| Ogg    | video/ogg  |



<br>

## Video Fallbacks & Sources

>  Like the `<audio>` element, **it is strongly recommended to use fallback video formats** using the `source` attribute and including the `type` attribute:

<br>

Note that the last paragraph will only be displayed if the video formats provided do not work.

<br>

```html
<video controls>
    
	<source src="./wk10/assets/mov_bbb.mp4" type="video/mp4">
	<source src="./wk10/assets/mov_bbb.ogg" type="video/ogg">
	<p>Browser can't open mp4 or webm videos. Download the video <a href="./wk10/assets/mov_bbb.mp4">here</a></p>
    
</video>
```

<video controls>
  <source src="./wk10/assets/mov_bbb.mp4" type="video/mp4">
  <source src="./wk10/assets/mov_bbb.ogg" type="video/ogg">
  <p>If you see this, your browser can't open mp4 or webm videos.</p>
</video>

    <p align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video"><em>The Video Embed element</em></a></p>

<br>



## Video Poster Attribute

The `poster` attribute allows us to specify an image, in the form of a URL, to be shown before a video is played.

<br>

```html
<video controls poster="./wk10/assets/bands_image.jpg">
    
	<source src="./wk10/assets/audio_bands.mp4" type="video/mp4">
	<source src="./wk10/assets/audio_bands.webm" type="video/webm">
    <p>Browser is unable to render video.</p>
    
</video>
```



<video controls poster="./wk10/assets/bands_image.jpg">
  <source src="./wk10/assets/audio_bands.mp4" type="video/mp4">
  <source src="./wk10/assets/audio_bands.webm" type="video/webm">
  <p>Browser is unable to render video. Download available <a href="./wk10/assets/mov_bbb.mp4">here</a></p>
</video>

<p align="center"><a href="https://www.videvo.net/"><em>Audio Levels Visualisation</em></a></p>



<br>

## Resizing Videos

Video resizing works very much like an  `<img>` element:

- By default the video window has the dimensions of the original video file;
- The video window can be resized using CSS;
- Videos can be made responsive (ex. using Flexbox).

<br>

In the example below we will resize a video that is natively very large:

<br>



```html
<div class="wrapper">
    <video controls>
        <source src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.ogv" type="video/ogg">
        <source src="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4" type="video/mp4">
        <p>Please <a href="http://learn.shayhowe.com/assets/misc/courses/html-css/adding-media/earth.mp4" download>download</a> the video.</p>
    </video>
</div>
```



<iframe height="585" style="width: 100%;" scrolling="no" title="wk10 - video_resizing - Ex3" src="https://codepen.io/maujac/embed/NWGxBBg?height=585&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/NWGxBBg'>wk10 - video_resizing - Ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

## Videos "in the wild"

The term "in the wild" means **examples of something being currently used on the internet**.

<br>

Let's take a look at the `<header>` section of the [Pexels Video website](https://www.pexels.com/videos/) to see the `<video>` element being used in production.

<br>

Use the Browser's Dev Tools to inspect the video banner being played in loop:

```html
<video autoplay="" loop="" muted="" poster="https://www.pexels.com/assets/videos/free-videos-7daa2ef41a140f70c757ce91913a4ecb90570b7d7cd2b401bae868350e02c83a.jpg">
    <source src="https://static.pexels.com/lib/videos/free-videos.mp4" type="video/mp4">
    <source src="https://static.pexels.com/lib/videos/free-videos.webm" type="video/webm">
</video>
```

<br>

The `<video>` element is being used with:

- `autoplay`
- `loop`
- `muted`
- `poster`
- 2 different `<souce>` files (mp4 & webm)



The empty values in `autoplay`, `loop` & `muted` are ignored since they are Boolean attributes.

<br>

<br>

# SVGs









# References & Diving Deeper

Recommended readings:



 -   **[Grid by Example](https://gridbyexample.com/examples/)** by Rachel Andrew.



 Recommended video:

<iframe width="560" height="315" src="https://www.youtube.com/embed/2QYpkrX2N48" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<br>