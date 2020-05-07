# DOM Manipulation pt.2

Now that we've learned more JavaScript, we can expand on DOM manipulation.

<br>



# CSS-Selector Review

In addition to accessing elements by **Id** name, **Class** name or element **Type** you can use the same CSS-selector syntax that you use in the CSS file.

<br>

For example, using only CSS, let's select the `<p>` element inside the article of class "walmart" and set it's background color to lightblue:

<br>

<iframe height="355" style="width: 100%;" scrolling="no" title="wk13 - DOM_pt2 - querySelect - ex2" src="https://codepen.io/maujac/embed/wvKyLLV?height=355&theme-id=dark&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/wvKyLLV'>wk13 - DOM_pt2 - querySelect - ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

Similarly, lets select only the odd items in the `<ul>` element and change their background color:

<br>

<iframe height="270" style="width: 100%;" scrolling="no" title="wk13 - DOM_pt2 - querySelect_2 - ex3" src="https://codepen.io/maujac/embed/ExVQqwL?height=270&theme-id=dark&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/ExVQqwL'>wk13 - DOM_pt2 - querySelect_2 - ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

# querySelector & querySelectorAll



> Using the syntax of CSS-Selectors, it is possible to select DOM elements in JavaScript using `querySelector` and `querySelectorAll`



<br>

### querySelector Syntax

```javascript
element = document.querySelector(selectors);
```



<br>The method `querySelector()` returns the first [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element) within the document that matches the specified selector, or group of selectors.

If no matches are found, `null` is returned.

<br>

In the example below, the first element in the document with the class "`myclass`" is returned:

```javascript
const el = document.querySelector(".myclass");
```

<br>



Let's perform the same styling manipulation to the ad example used earlier:

<br>

 <iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - DOM_pt2 - querySelect - ex3" src="https://codepen.io/maujac/embed/zYvRgML?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/zYvRgML'>wk13 - DOM_pt2 - querySelect - ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

### querySelectorAll Syntax

```javascript
elementList = parentNode.querySelectorAll(selectors);
```



<br>The method  `querySelectorAll()` returns a static (not live) [`NodeList`](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) representing a list of the document's elements that match the specified group of selectors.

The returned `NodeList` can be manipulated like a regular Array object.

<br>

This example returns a list of all `div` elements with a class of either `note` or `alert`:

```javascript
const matches = document.querySelectorAll("div.note, div.alert");
```

<br>



Let's perform the same styling manipulation to Item list example used earlier:

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - DOM_pt2 - querySelectAll - ex5" src="https://codepen.io/maujac/embed/ExVQqwL?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/ExVQqwL'>wk13 - DOM_pt2 - querySelectAll - ex5</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



### querySelectAll vs getElements



The method `getElements` returns a `HTMLCollection` object while `querySelectAll` returns a `NodeList`.

<br>

The `HTMLCollection` object and the `NodeList` object have slightly different types of methods.

`NodeList` acts much more like an Array object, while a `HTMLCollection`  is a more basic (primitive) type of Array.

For example, the `forEach()` method is only available to `NodeList` objects.

In the other hand, an `HTMLCollection` returns a list of elements that is alive, in other words, the list is constantly represents the state of the DOM.

This means that when elements are added or removed to the DOM, an `HTMLCollection` will be updated with those changes.

<br>

### Attribute selectors: a css "detour"

When we covered [advanced CSS selectors in week 8](https://mau-jac.github.io/2W6-UI/#/./wk8/advanced_selectors) I mentioned that it is possible to select HTML elements using attribute selectors and invited you to become familiar with them, but I did not cover them.

> **Attribute selectors** select elements based on an attribute or attribute value



<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - DOM pt2 - attribute selectors - ex2" src="https://codepen.io/maujac/embed/yLYPvMd?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/yLYPvMd'>wk13 - DOM pt2 - attribute selectors - ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

Since `querySelect` and `querySelectAll` use the name syntax notation as CSS selectors, you can also use **attribute selectors** as your query criteria.

<br>

>  A common application of `querySelect` with **attribute selectors** is when accessing a specific `<input>`  item from a `<form>` .
>
>  Forms normally have multiple `<input>` elements but their `type = `  attributes are different

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - DOM pt2 - querySelect_form_type - ex3" src="https://codepen.io/maujac/embed/LYpOQOy?height=265&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/LYpOQOy'>wk13 - DOM pt2 - querySelect_form_type - ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



## textContent vs innerText

There are many ways of accessing the text content of an element node:

 

*element*.`textContent` 

​		Returns the actual text inside the html file, regardless of styling (ex. display: none).



*element.*`innerText` 

​		Only returns the text that is displayed in the window. It considers modifications done via CSS.

<br>

Below, some text is hidden with  `display: none`. Notice how the outputs of `innerText` and `textContent` will differ:

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - DOM manipulation pt2 - ex1" src="https://codepen.io/maujac/embed/wvKPyvj?height=265&theme-id=light&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/wvKPyvj'>wk13 - DOM manipulation pt2 - ex1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



# DOM Element manipulation pt.2



### Element classes

| Property or Method                                           | Description                                                |
| ------------------------------------------------------------ | ---------------------------------------------------------- |
| [*element*.`className`](https://www.w3schools.com/jsref/prop_html_classname.asp) | returns a string with the class(es) name(es) of an element |
| [*element.*`classList.add( "class-name" )`](https://www.w3schools.com/jsref/prop_element_classlist.asp) | returns the class name(s) of an element as an array        |



### Element Id's

| Property or Method                                           | Description                                     |
| ------------------------------------------------------------ | ----------------------------------------------- |
| [*element.*`id`](https://www.w3schools.com/jsref/prop_html_id.asp) | returns the value of an element's id  attribute |



### Element Attributes

| Property or Method                                           | Description                                |
| ------------------------------------------------------------ | ------------------------------------------ |
| [*element.*`setAttribute( attribute-name, "value" )`](https://www.w3schools.com/jsref/met_element_setattribute.asp) | adds the specified attribute to an element |

<br>

Below, the only thing differentiating the text input field from a button is the **type attribute**:

<br>

<iframe height="292" style="width: 100%;" scrolling="no" title="wk13 - DOM_pt2 - attributes - ex1" src="https://codepen.io/maujac/embed/VwvQNRo?height=292&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/VwvQNRo'>wk13 - DOM_pt2 - attributes - ex1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>