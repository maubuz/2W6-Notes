# Inline vs Block-level Elements

All elements in HTML are of type Inline or Block. This determines how much space these elements take in the page.



<dl style="border: 1px solid gray; padding: 20px 20px 30px 20px; border-radius: 20px;
:">
    <dt><strong>Block-level elements</strong></dt>
    <dd>Always starts on a new line and takes up the full  width available (stretches out to the left and right as far as it can).</dd>
    <br>
    <dt><strong>Inline elements</strong></dt>
    <dd>Only occupy the space bounded by the tags defining the element (continues on the same line).</dd>
</dl>



### Block-level examples: headings and paragraphs

Headings and paragraph elements are block-level by default:



*Code*

```html
<h4>Two consecutive headings</h4><h5>start in different lines</h5>
```

*Result*

<div style="background-color: rgb(2448, 248, 246)">
	<h4>Two consecutive headings</h4><h5>start in different lines</h5>
</div>



*Code*

```html
<p>Paragraphs also take the full width</p><p>of the screen</p>
```

*Result*

<div style="background-color: rgb(248, 248, 246)">
	<p>Paragraphs take the full width</p><p>of the screen</p>
</div>



### Inline examples: text formatting tags

Most text formating tags are inline elements by default



*Code*

```html
<p>Text <strong>formating elements</strong> only take the <mark>space they</mark> need</p>
```

Result

<div style="background-color: rgb(248, 248, 246)">
	<p>Text <strong>formating elements</strong> only take the <mark>space they</mark> need</p>
</div>



# Document Flow

The document flow describes **the way elements are arranged in a sequence, one after the other**.



- **Block-level elements flow by stacking vertically**, since the element before and the one after must start in a new line.
- **Inline elements flow horizontally**, since they can align consecutively on the same line.


![image-20200131213741204](wk03_HTML_Flow_Containers.assets/image-20200131213741204.png)

<p align="center"><a href="https://learn-the-web.algonquindesign.ca/topics/css-layout-cheat-sheet"><em>CSS layout cheat sheet</em></a> <em>- algonguindesign.ca</em></p>

<br>

The document flow is up and down at a block-level element and left to right at inline elements.



![img](https://mdn.mozillademos.org/files/16125/mdn-horizontal.png)

<p align="center"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow"><em>Block and inline layout in normal flow</em></a> <em> - MDN web docs</em></p>

<br>

The document flow becomes particularly important when creating website layouts with more than a single main column.



# Div and Span Elements


## The `<div>` Element

The `<div>` element is a **generic block-level division** in the document.

**Divs are normally used as a parent container to wrap around one or multiple elements.**


In the example below, each block-level element was given a border of a different colour with CSS:

- `<div>` element has a green border
- `<h3>` element has a blue border
- `<p>` element has a red border.


*Code*

```html
<div>
    <h3>HTML Containers</h3>
	<p>Div's help group content together</p>
</div>
```

*Result*

<div style="background-color: rgb(248, 248, 246)">
<div style="border: 3px solid green;">
    <h3 style="border: 3px solid blue;">HTML Containers</h3>
	<p style="border: 3px solid red;">Div's help group content together</p>
    </div></div>



## The `<span>` Element

The `<span>` element is a **generic inline division** in the document.

**Spans are normally used to style inline elements within a paragraph.**


In the example below two `<span>` elements are used within a paragraph. Each element was given a different colour using CSS:

- `<p>` element has a red border
- the first `<span>` element has a blue border
- the  second `<span>` element has a green border


*Code*

```html
<p>Span elements <span>do not</span> break the <span>flow of the</span> document</p>
```

*Result*

<div style="background-color: rgb(248, 248, 246)">
<p style="border: 3px solid red;">Span elements <span style="border: 3px solid blue;">do not</span> break the <span style="border: 3px solid green;">flow of the</span> document</p>
</div>


## Inline or Block ?

It might be difficult to remember at first if an elements is inline or block-level.

**See the [list of inline and block-level elements](https://www.w3schools.com/html/html_blocks.asp).**



## HTML Structural Elements

**Div's and Span's are generic meaningless container elements.**

We can target them using Ids and Classes for styling (see below), however, they add absolutely no value to HTML markup and no extra structural information for the browser.

**Avoid overuse of meaningless containers. We will learn to use more descriptive and semantically appropriate HTML elements.**

