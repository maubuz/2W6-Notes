This lesson was based on the page **[CSS Selectors](https://www.w3schools.com/CSS/css_selectors.asp)** by W3Schools.



# CSS Selectors Types



CSS selectors can be divided into five categories:



| Selector Type                                                | Function                                                     |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Simple selectors                                             | select elements based on name, id, class                     |
| [Combinator selectors](https://www.w3schools.com/CSS/css_combinators.asp) | select elements based on a specific relationship between them |
| [Pseudo-class selectors](https://www.w3schools.com/CSS/css_pseudo_classes.asp) | select elements based on a certain state                     |
| [Pseudo-elements selectors](https://www.w3schools.com/CSS/css_pseudo_elements.asp) | select and style a part of an element                        |
| [Attribute selectors](https://www.w3schools.com/CSS/css_attribute_selectors.asp) | select elements based on an attribute or attribute value     |



So far we've seen simple selectors, such as the **class selector**:

<iframe height="433" style="width: 100%;" scrolling="no" title="wk8 - Ex simple selectors_1" src="https://codepen.io/maujac/embed/jOPdJNG?height=433&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/jOPdJNG'>wk8 - Ex simple selectors_1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

And some combinator selectors such as the **descendant selector**:

<iframe height="400" style="width: 100%;" scrolling="no" title="wk8 - Ex simple selectors_2" src="https://codepen.io/maujac/embed/gOpqEbM?height=400&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/gOpqEbM'>wk8 - Ex simple selectors_2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

## Combinator Selectors

**A combinator is something that explains the relationship between the selectors.**



There are four different combinators in CSS:



| Combinator Symbol |                             Name                             | Description                                                  |
| :---------------: | :----------------------------------------------------------: | ------------------------------------------------------------ |
|      (space)      | [descendant selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator) | selects nodes that are **descendants** of the first element. |
|       **>**       | [Child selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator) | selects nodes that are **direct children** of the first element. |
|       **+**       | [adjacent sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_combinator) | selects **subsequent adjacent siblings**.                    |
|       **~**       | [general sibling selector](https://developer.mozilla.org/en-US/docs/Web/CSS/General_sibling_combinator) | selects **all subsequent siblings**.                         |



<br>

### >  Child Selector

Selects nodes that are **direct children** of the first element.

<iframe height="423" style="width: 100%;" scrolling="no" title="wk8 - child selector_ex4" src="https://codepen.io/maujac/embed/ExjrMXz?height=423&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/ExjrMXz'>wk8 - child selector_ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

### +  Adjacent Sibling Selector

Selects **subsequent adjacent siblings**.

<iframe height="400" style="width: 100%;" scrolling="no" title="wk8 - Ex combinator selectors_2" src="https://codepen.io/maujac/embed/gOpqEbM?height=400&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/gOpqEbM'>wk8 - Ex combinator selectors_2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

### ~  General Sibling Selector

Selects **all subsequent siblings**

<iframe height="376" style="width: 100%;" scrolling="no" title="wk8 - general sibling_ex5" src="https://codepen.io/maujac/embed/BaNMbmd?height=376&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/BaNMbmd'>wk8 - general sibling_ex5</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

## Pseudo Selectors

CSS offers us the ability to select elements or part of elements that are not actually described in the HTML document.



>  The word **pseudo** is used because these elements are not described in the HTML document but we can select and style them like any other element.



<br>

### Pseudo-Classes Selectors

**Pseudo-class selectors enables the selection of elements based on a special state of an element.**



Common examples are : 

- `a:visited` - for hyperlink that have already been visited;
- `a:hover` - for hyperlinks that have the mouse over them;

<br>



<iframe height="394" style="width: 100%;" scrolling="no" title="wk8 - pseudo-class hover_ex6" src="https://codepen.io/maujac/embed/WNvmvKG?height=394&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/WNvmvKG'>wk8 - pseudo-class hover_ex6</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

### List of common pseudo-classes

This list does not includes all pseudo-classes, only the most commonly used.

<br>

| Selector                                                     | Example             | Example description                                          |
| ------------------------------------------------------------ | ------------------- | ------------------------------------------------------------ |
| [:active](https://www.w3schools.com/cssref/sel_active.asp)   | a:active            | Selects the active link                                      |
| [:checked](https://www.w3schools.com/cssref/sel_checked.asp) | input:checked       | Selects every checked `<input>` element                      |
| [:disabled](https://www.w3schools.com/cssref/sel_disabled.asp) | input:disabled      | Selects every disabled `<input>` element                     |
| [:empty](https://www.w3schools.com/cssref/sel_empty.asp)     | p:empty             | Selects every `<p>` element that has no children             |
| [:enabled](https://www.w3schools.com/cssref/sel_enabled.asp) | input:enabled       | Selects every enabled `<input>` element                      |
| [:first-child](https://www.w3schools.com/cssref/sel_firstchild.asp) | p:first-child       | Selects every `<p>` elements that is the first child of its parent |
| [:first-of-type](https://www.w3schools.com/cssref/sel_first-of-type.asp) | p:first-of-type     | Selects every `<p>` element that is the first `<p>` element of its parent |
| [:focus](https://www.w3schools.com/cssref/sel_focus.asp)     | input:focus         | Selects the `<input>` element that has focus                 |
| [:hover](https://www.w3schools.com/cssref/sel_hover.asp)     | a:hover             | Selects links on mouse over                                  |
| [:in-range](https://www.w3schools.com/cssref/sel_in-range.asp) | input:in-range      | Selects `<input>` elements with a value within a specified range |
| [:invalid](https://www.w3schools.com/cssref/sel_invalid.asp) | input:invalid       | Selects all `<input>` elements with an invalid value         |
| [:lang(*language*)](https://www.w3schools.com/cssref/sel_lang.asp) | p:lang(it)          | Selects every `<p>` element with a lang attribute value starting with "it" |
| [:last-child](https://www.w3schools.com/cssref/sel_last-child.asp) | p:last-child        | Selects every `<p>` elements that is the last child of its parent |
| [:last-of-type](https://www.w3schools.com/cssref/sel_last-of-type.asp) | p:last-of-type      | Selects every `<p>` element that is the last `<p>` element of its parent |
| [:link](https://www.w3schools.com/cssref/sel_link.asp)       | a:link              | Selects all unvisited links                                  |
| [:not(selector)](https://www.w3schools.com/cssref/sel_not.asp) | :not(p)             | Selects every element that is not a `<p>` element            |
| [:nth-child(n)](https://www.w3schools.com/cssref/sel_nth-child.asp) | p:nth-child(2)      | Selects every `<p>` element that is the second child of its parent |
| [:nth-last-child(n)](https://www.w3schools.com/cssref/sel_nth-last-child.asp) | p:nth-last-child(2) | Selects every `<p>` element that is the second child of its parent, counting from the last child |
| [:nth-of-type(n)](https://www.w3schools.com/cssref/sel_nth-of-type.asp) | p:nth-of-type(2)    | Selects every `<p>` element that is the second `<p>` element of its parent |
| [:only-of-type](https://www.w3schools.com/cssref/sel_only-of-type.asp) | p:only-of-type      | Selects every `<p>` element that is the only `<p>` element of its parent |
| [:only-child](https://www.w3schools.com/cssref/sel_only-child.asp) | p:only-child        | Selects every `<p>` element that is the only child of its parent |
| [:optional](https://www.w3schools.com/cssref/sel_optional.asp) | input:optional      | Selects `<input>` elements with no "required" attribute      |
| [:required](https://www.w3schools.com/cssref/sel_required.asp) | input:required      | Selects `<input>` elements with a "required" attribute specified |
| [:root](https://www.w3schools.com/cssref/sel_root.asp)       | root                | Selects the document's root element                          |
| [:target](https://www.w3schools.com/cssref/sel_target.asp)   | #news:target        | Selects the current active #news element (clicked on a URL containing that anchor name) |
| [:valid](https://www.w3schools.com/cssref/sel_valid.asp)     | input:valid         | Selects all `<input>` elements with a valid value            |
| [:visited](https://www.w3schools.com/cssref/sel_visited.asp) | a:visited           | Selects all visited links                                    |



<br>

There are too many pseudo-classes for us to explore in the course. We will only look at a few:

- :not( )
- :nth-child(n)
- :focus



<br>

###  ':not( )'

Selects every element that is not a the specified element.

<br>



<iframe height="338" style="width: 100%;" scrolling="no" title="wk8 - pseudo-class not_ex7" src="https://codepen.io/maujac/embed/poJYjZO?height=338&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/poJYjZO'>wk8 - pseudo-class not_ex7</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

### ':nth-child(n)' 

Selects every element that is the nth child of its parent

In the example bellow, all `<li>` elements that are the 2nd child of any parent will be selected.

The same will happen to the `<p>` element that is a 2nd child of any given parent.

<br>

<iframe height="331" style="width: 100%;" scrolling="no" title="wk8 - pseudo-class n-child_ex8" src="https://codepen.io/maujac/embed/XWbGmOL?height=331&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/XWbGmOL'>wk8 - pseudo-class n-child_ex8</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

### ':focus'

Selects the element that has the browser focus

<br>

<iframe height="288" style="width: 100%;" scrolling="no" title="wk8 - pseudo-class focus_ex9" src="https://codepen.io/maujac/embed/eYNXJZO?height=288&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/eYNXJZO'>wk8 - pseudo-class focus_ex9</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

## Pseudo-Elements Selectors

**A CSS pseudo-element represent entities that are not included in HTML.**



Common examples are:

- To style the first letter  (with `::first-letter`) , or line (with `::first-line`), of an element.
- Insert content before  (with `::before`), or after  (with `::after`), the content of an element.



In previous versions of CSS, pseudo-element were identified with single  `:` , however, is now used with double `::` . You might see it used with both notations.



### List of common pseudo-classes

This list does not includes all pseudo-classes, only the most commonly used.

<br>

| Selector                                                     | Example         | Example description                                          |
| ------------------------------------------------------------ | --------------- | ------------------------------------------------------------ |
| [::after](https://www.w3schools.com/cssref/sel_after.asp)    | p::after        | Insert something after the content of each `<p>` element     |
| [::before](https://www.w3schools.com/cssref/sel_before.asp)  | p::before       | Insert something before the content of each `<p>` element    |
| [::first-letter](https://www.w3schools.com/cssref/sel_firstletter.asp) | p::first-letter | Selects the first letter of each `<p>` element               |
| [::first-line](https://www.w3schools.com/cssref/sel_firstline.asp) | p::first-line   | Selects the first line of each `<p>` element                 |
| [::selection](https://www.w3schools.com/cssref/sel_selection.asp) | p::selection    | Selects the portion of an element that is selected by a user |



<br>

### '::first-letter' & '::first-line'

This selector is used to **add a style to the first letter or line** of the specified element or selector.

> `::first-letter`  and `::first-line`  selectors can only be used with block-level elements.



<br>

<iframe height="409" style="width: 100%;" scrolling="no" title="wk8 - pseudo-element letter/line_ex10" src="https://codepen.io/maujac/embed/bGdZpLE?height=409&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/bGdZpLE'>wk8 - pseudo-element letter/line_ex10</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<br>

### '::before' & '::after'

**Insert some content before or after an element.**



> When content is inserted with `::before` and `::after`, the special css property `content:` must be used as illustrated bellow. A url can also be used (see example).



```css
p::before {
    content: "Note: ";
}
```



<br>

<iframe height="384" style="width: 100%;" scrolling="no" title="wk8 - pseudo-element before/after_ex11" src="https://codepen.io/maujac/embed/VwLRaJJ?height=384&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/VwLRaJJ'>wk8 - pseudo-element before/after_ex11</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>

### '::selection'

The `::selection` selector matches the portion of an element that is selected by a user.



> Only a few CSS properties can be applied to the ::selection selector: color, background, cursor, and outline.



<br>

<iframe height="305" style="width: 100%;" scrolling="no" title="wk8 - pseudo-element select_ex12" src="https://codepen.io/maujac/embed/WNvmxXd?height=305&theme-id=light&default-tab=css,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/WNvmxXd'>wk8 - pseudo-element select_ex12</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

## Hands-on

### Exercises

1.  Complete the [**exercises on Pseudo-classes** from W3Schools](https://www.w3schools.com/CSS/exercise.asp?filename=exercise_pseudo_classes1).
2.  Complete the [**exercises on Pseudo-elements** from W3Schools](https://www.w3schools.com/CSS/exercise.asp?filename=exercise_pseudo_elements1).
3.  Complete the [**exercises on attribute selectors** from W3Schools](https://www.w3schools.com/CSS/exercise.asp?filename=exercise_attribute_selectors1).
4.  Complete all levels of the [**CSS Dinner game**](https://flukeout.github.io/).



