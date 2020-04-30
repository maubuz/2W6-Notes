This lesson was based on the page [DOM tree](https://javascript.info/dom-nodes) by javescript.info

# The DOM

The **Document Object Model** (**DOM**) represents the HTML page content as objects. This representation takes the form of an logical tree. 



The “root” object is called `window`. It has two roles:

1. It represents the “browser window” and provides methods to query and control it.
2. It is a global object accessible to all running instances of JavaScript code.

<br>



The `document` object is the main “entry point” to the page. Each branch of the tree ends in a node, and each node contains objects.



![THE DOM!](https://www.kirupa.com/html5/images/DOM_js_72.png)

<p align="center"><a href="https://www.kirupa.com/html5/finding_elements_dom_using_querySelector.htm"><em>The DOM Tree by Kirupa</em></a></p>
<br>

>  While the browser is reading the HTML file and rendering the page, it is in parallel also building a Document Object Model.

<br>

The DOM is a collection of nodes and every tree node is an object.

There are 3 types of nodes:

- Element nodes;
- Attribute nodes;
- Text nodes (including comments).



<br>

In the example below:

- the white square boxes are elements ( `<p>` and `<a>` )

- the green boxes are text nodes

- the white box with rounds edges is an attribute node

  <br>

![image-20200427081031517](assets/image-20200427081031517.png)

<p align="center"><a href="https://www.oreilly.com/pub/au/383"><em>Learning Web Design by Jennifer Robbins</em></a></p>
<br>

## White Spacce & Comments

See the code below and it's corresponding DOM Tree:

```html
<html>
    <head>
      <title>The DOM</title>
    </head>
    <body>
      The truth of the DOM
    </body>
</html>
```

<svg width="690" height="320"><g transform="translate(20,30)"><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M7,0L7,30L40.333333333333336,30"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M7,0L7,180L40.333333333333336,180"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M7,0L7,210L40.333333333333336,210"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M40.333333333333336,210L40.333333333333336,240L73.66666666666667,240"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M40.333333333333336,30L40.333333333333336,60L73.66666666666667,60"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M40.333333333333336,30L40.333333333333336,90L73.66666666666667,90"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M40.333333333333336,30L40.333333333333336,150L73.66666666666667,150"></path><path class="link" style="fill: none; stroke: rgb(190, 195, 199); stroke-width: 1px;" d="M73.66666666666667,90L73.66666666666667,120L107,120"></path><g class="node" transform="translate(0,0)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text></g><g class="node" transform="translate(33.33333206176758,30)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text></g><g class="node" transform="translate(33.33333206176758,180)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text ↵␣␣</text></g><g class="node" transform="translate(33.33333206176758,210)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text></g><g class="node" transform="translate(66.66666412353516,240)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text 
  The truth of the DOM.</text></g><g class="node" transform="translate(66.66666412353516,60)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text ↵␣␣␣␣</text></g><g class="node" transform="translate(66.66666412353516,90)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(206, 224, 244); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text><text dy="4.5" dx="16.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TITLE</text></g><g class="node" transform="translate(100,120)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text The DOM</text></g><g class="node" transform="translate(66.66666412353516,150)" style="opacity: 1;"><rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(255, 222, 153); cursor: pointer;"></rect><text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text><text dy="4.5" dx="5.5" style="font: 14px Consolas, Lucida Console, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text ↵␣␣</text></g></g></svg></img>

<p align="center"><a href="https://javascript.info/dom-nodes"><em>DOM tree by JavScript.info</em></a></p>
<br>

The text inside elements forms *text nodes*, labeled as `#text`.

A text node contains only a string. It may not have children and is always a leaf of the tree.



> Spaces, newlines and comments are totally valid characters, like letters and digits.
>
> They form text nodes and become a part of the DOM



<br>

To see the DOM of a simple page use the [Live DOM Viewer](https://software.hixie.ch/utilities/js/live-dom-viewer/#)

<br>

## The DOM API

The DOM provides an API (application programming interface) for how to get, change, add, or delete HTML elements.

The API defines:

- The HTML elements as **objects**  
- The **properties** of all HTML elements  
- The **methods** to access all HTML elements
- The **events** for all HTML elements

<br>

### The Window Object

The window object represents an open window in a browser. It has many properties and methods that can be accessed via it's API.

<br>

Examples of **Window Properties:**

| Property                                                     | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [closed](https://www.w3schools.com/jsref/prop_win_closed.asp) | Returns a Boolean value indicating whether a window has been closed or not |
| [console](https://www.w3schools.com/jsref/obj_console.asp)   | Returns a reference to the Console object, which provides methods for logging information to the browser's console ([See Console object](https://www.w3schools.com/jsref/obj_console.asp)) |
| [innerHeight](https://www.w3schools.com/jsref/prop_win_innerheight.asp) | Returns the height of the window's content area (viewport) including scrollbars |
| [screenX](https://www.w3schools.com/jsref/prop_win_screenx.asp) | Returns the horizontal coordinate of the window relative to the screen |
| [pageYOffset](https://www.w3schools.com/jsref/prop_win_pagexoffset.asp) | Returns the pixels the current document has been scrolled (vertically) from the upper left corner of the window |
| [document](https://www.w3schools.com/jsref/dom_obj_document.asp) | Returns the Document object for the window ([See Document object](https://www.w3schools.com/jsref/dom_obj_document.asp)) |

<br>

Examples of **Window Methods:**

| Method                                                       | Description                                              |
| ------------------------------------------------------------ | -------------------------------------------------------- |
| [alert()](https://www.w3schools.com/jsref/met_win_alert.asp) | Displays an alert box with a message and an OK button    |
| [close()](https://www.w3schools.com/jsref/met_win_close.asp) | Closes the current window                                |
| [prompt()](https://www.w3schools.com/jsref/met_win_prompt.asp) | Displays a dialog box that prompts the visitor for input |
| [resizeTo()](https://www.w3schools.com/jsref/met_win_resizeto.asp) | Resizes the window to the specified width and height     |

<br>

For a larger list of the Window's methods and properties see  [this page from W3C Schools.](https://www.w3schools.com/jsref/obj_window.asp)



Similarly, the [**Document Object** also has a list of common properties and methods](https://www.w3schools.com/jsref/dom_obj_document.asp), which we will explore shortly. 

<br>





Below we use the **onclick event** and access the **innerHeight** property of the **browser window object**.

We then output it as an alert message:

<br>

<iframe height="293" style="width: 100%;" scrolling="no" title="wk11-innerHeight-ex2" src="https://codepen.io/maujac/embed/dyYvGGm?height=293&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/dyYvGGm'>wk11-innerHeight-ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

Note: there many types of "events" we can use to trigger actions. The **onclick event**  is just one example. We will look into others later.



<br>

In the following example we will change the content  (the `innerHTML`) of the `<p>` element with `id="demo"`. 

<br>

<iframe height="333" style="width: 100%;" scrolling="no" title="wk11-DOM_JavaScript-ex1" src="https://codepen.io/maujac/embed/XWmMbGQ?height=333&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/XWmMbGQ'>wk11-DOM_JavaScript-ex1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

In this case, `getElementById` is a **method**, while `innerHTML` is a  **property** of the `<p>` element.

<br>

There are many DOM API methods and properties for selecting and manipulating the DOM.

We just looked at the two most common:

<br>

Method **getElementById** - used to access an HTML element that is identified with the specified id;

Property **innerHTML** - getting or replacing the content of an element;

<br>

Below are some comment DOM API methods available:



## Finding HTML Elements

The following methods belong to the Document object and can be used to select HTML elements on the page:

| Method                                                       | Description                   |
| ------------------------------------------------------------ | ----------------------------- |
| [document.getElementById(*id*)](https://www.w3schools.com/js/js_htmldom_elements.asp) | Find an element by element id |
| [document.getElementsByTagName(*name*)](https://www.w3schools.com/js/js_htmldom_elements.asp) | Find elements by tag name     |
| [document.getElementsByClassName(*name*)](https://www.w3schools.com/js/js_htmldom_elements.asp) | Find elements by class name   |



<br>

## Changing HTML Elements

| Property                                                     | Description                                   |
| ------------------------------------------------------------ | --------------------------------------------- |
| *element*.innerHTML = *new html content*                     | Change the inner HTML of an element           |
| [*element*.*attribute = new value*](https://www.w3schools.com/js/js_htmldom_html.asp) | Change the attribute value of an HTML element |
| [*element*.style.*property = new style*](https://www.w3schools.com/js/js_htmldom_css.asp) | Change the style of an HTML element           |
| **Method**                                                   | **Description**                               |
| *element*.setAttribute*(attribute, value)*                   | Change the attribute value of an HTML element |

<br>

**Examples**

<iframe height="401" style="width: 100%;" scrolling="no" title="wk11-find_change-ex3" src="https://codepen.io/maujac/embed/PoPpZQr?height=401&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/PoPpZQr'>wk11-find_change-ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

# Dev Tools Console

You can use the Console tab in the Dev Tools to use the DOM API in real time:

<br>

![image-20200424023739578](assets/image-20200424023739578.png) 

<br>

Once the console is loaded you can just start typing.

<br>

We will use the console to manipulate some of the elements in the example above.

Lets change the following:

- The background color of the element with `id="tips"` ;
- The text inside `<h1>` ;



<br>

# Walking the DOM

Since the DOM has a tree structure, it is possible to "walk" or move inside it from one object to another.

<br>

![image-20200427080634078](assets/image-20200427080634078.png)



<p align="center"><a href="https://javascript.info/dom-nodes"><em>DOM tree by JavScript.info</em></a></p>
<br>

>  We will focus on navigation that take only **element nodes** into account since Element nodes represent HTML tags and form the structure of the page.
>
> (as opposed to all nodes, which can include **text nodes**).



In order to navigate between **element nodes only** you can use the following methods:

<br>

- `children` – only those children that are element nodes.
- `firstElementChild`, `lastElementChild` – first and last element children.
- `previousElementSibling`, `nextElementSibling` – neighbor elements.
- `parentElement` – parent element.

<br>

For your information, the equivalent methods for selecting any node, **including text nodes**:

-  `parentNode`, `childNodes`, `firstChild`, `lastChild`, `previousSibling`, `nextSibling`.

<br>

In the example below, we move inside the DOM in order to select and modify related elements:

<iframe height="472" style="width: 100%;" scrolling="no" title="wk11-walking-ex4" src="https://codepen.io/maujac/embed/bGVqEzE?height=472&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/bGVqEzE'>wk11-walking-ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

# References & Diving Deeper

**Quick Reference:**



![dom-tree](assets/dom-tree.png)

<p align="center"><a href="https://blog.scrapinghub.com/2016/10/27/an-introduction-to-xpath-with-examples"><em>DOM Tree by Valdir Stumm</em></a></p>
<br>

Start here:

1. **[Common DOM API Methods & Properties](https://www.w3schools.com/js/js_htmldom_document.asp)** (short)



<br>

Can't find a method or property? Use Ctrl + F in pages below:



2. [**Window API**](https://developer.mozilla.org/en-US/docs/Web/API/Window) (complete)
2. [**Document API**](https://developer.mozilla.org/en-US/docs/Web/API/Document) (complete)
3. [**Nodes API**](https://developer.mozilla.org/en-US/docs/Web/API/Node) (complete)
4. [**Elements API**](https://developer.mozilla.org/en-US/docs/Web/API/Element) (complete)

   

<br>

**Recommended readings:**

- [DOM tree](https://javascript.info/dom-nodes) by javescript.info

<br>



# Hands-on



## Exercises

Complete the following exercises from W3C Schools:

1. [JS HTML DOM](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_dom_html1)

   