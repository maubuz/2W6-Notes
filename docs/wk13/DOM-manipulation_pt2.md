# DOM Manipulation pt.2

Now that we've learned more JavaScript, we can go back to 





# querySelector & querySelectorAll

In addition to accessing elements by Id name, Class name or element Type you can use the same CSS-selector syntax that you use in the CSS file.





<br>

### querySelectAll vs getElements



One returns an HTMLCollection object while the other returns a NodeList.

They have different types of methods available and we need to understand how to iterate through them.

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





[**Exercises: JavaScript conditional statements and loops - Exercises, Practice, Solution**](https://www.w3resource.com/javascript-exercises/javascript-conditional-statements-and-loops-exercises.php)



<br>