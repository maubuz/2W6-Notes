

# DOM Manipulation Review

Last class we looked at manipulating the DOM via it's API. The DOM is comprised at it's root of a Window object.

<br>

Here are two documentation pages for the Window object API's:

- [The Window Object](https://www.w3schools.com/jsref/obj_window.asp) by W3C Schools (best for beginners)
- [Window's web API](https://developer.mozilla.org/en-US/docs/Web/API/Window) by MDN web docs (more complete and less beginner friendly)

<br>

**Example of using a window method**

<br>

## A "read the docs" example

We tried to use the `window.resizeTo()` method in order to resize an open window, but **it failed!**

The syntax and use of the method was correct and we were able to reproduce this [copy-paste example from W3C Schools](https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_win_resizeby_resizeto). 

<br>

```
<body>
    <button onclick="openWin()">Create window</button>
    <button onclick="resizeWinTo()">Resize to 800px * 600px</button>

    <script>
        function openWin() {
          var myWindow = window.open("", "", "width=250, height=250");
        }

        function resizeWinTo() {
          myWindow.resizeTo(800, 600);
        }
    </script>
</body>
```

<br>

However, when using `window.resizeTo(800,600)` in the Dev Tools console we got `undefined`. **What was wrong?!**

<br>

A search return points us to [a StackOverflow question](https://stackoverflow.com/questions/7602078/javascripts-window-resizeto-isnt-working), where someone points out that in order to resize windows there are two rules:

<br>

> Two rules:
>
> 1. Can't resize a window/tab that hasn't been created by window.open.
> 2. Can't resize a tab if the tab is in a window with more than one tab.

<br>

However, this answer is from 2011 and therefore it is important to verify it with a reference from the documentation.

The only additional information listed in the MDN documentation for `window.resizeToo()` is a note in the compatibility table:

![image-20200425115421243](assets/image-20200425115421243.png)

<br>

This tells us that we cannot use and points us to a Bug report where we can read the discussion on why this limitation was implement..

Also, the **See also** section suggests that we look at similar method `window.resizeBy()` . In the page for `window.resizeBy()` we find this section:

<br>

> ### Creating and resizing an external window
>
> For security reasons, it's no longer possible in Firefox for a  website to change the default size of a window in a browser if the  window wasn’t created by `window.open()`, or contains more than one tab. See the comparability table for details on the change.

<br>

Our search is done. **We now understand what is happening, why it's happening and how to properly use the method.**

<br>

## Inserting elements in the DOM

We've already inserted simple elements in the DOM using the `getElementById` method and the `innerHTML` propert.

<br>

<iframe height="342" style="width: 100%;" scrolling="no" title="wk11 - inserting_1 -ex6" src="https://codepen.io/maujac/embed/gOaRKjY?height=342&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/gOaRKjY'>wk11 - inserting_1 -ex6</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

However, this method can easily lead to typos and missed syntax.

<br>

Instead, use following method for **adding and deleting HTML elements**:

<br>

1. Create a new element and store it in a variable with  `createElement`
2. Add the content of the new element with `createTextNode` or `innerHTML` 
3. Select the note to receive the new element
4. Append the new node to the selected element with:
   1.  `appendChild` if the new content should go as the last child
   2. Select a middle sibbling node and use `insertBefore` to insert in the middle of the parent

<br>

Use the following methods:

<br>

| Method                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [document.createElement(*element*)](https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement) | Create an HTML element                                       |
| [Node.removeChild(*element*)](https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild) | Remove an HTML element                                       |
| [Node.appendChild(*element*)](https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild) | Add an HTML element                                          |
| [Node.replaceChild(*new, old*)](https://developer.mozilla.org/en-US/docs/Web/API/Node/replaceChild) | Replace an HTML element                                      |
| [Node.insertBefore(*newChild*,*referenceChild*)](https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore) | Inserts a node before a *reference node* as a child of a specified *parent node*. |

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk11 - creating_elements -ex8" src="https://codepen.io/maujac/embed/abvwjBX?height=265&theme-id=light&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/abvwjBX'>wk11 - creating_elements -ex8</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

## Next Steps in the DOM

The next steps in terms of DOM manipulation is to learn:

- the document methods `querySelect` and `querySelectAll` 
  - (allows us to use CSS selectors to access element )
- window **events** and event **callback functions**
  - (allows us to trigger functions based on DOM events like `onclick` and `onkeypress` )

<br>

However, to trully benefity from these concepts we need to learn JavaScript. We will go back to the DOM shortly.

<br>



# JavaScript

## Origins

JavaScript was created during the browser wars in the mid 90's. In an ambitious maneuver to outperform Microsoft's Internet Explorer (IE), the team behind Netscape Navigator commissioner Brendan Eich to create a powerfull, dynamic, language  that could run in the browser.  Brendan created JavaScript in 10 days.

Microsoft reverse engineered Netscape's JavaScript interpreter and dominated the market-share by including IE with Windows.

Netscape had to cease it's opperations. As a last move, they open sourced JavaScript. Brendan and others behind Netscape Navigator went on to cofound the Mozilla foundation.



## Adding JavaScript to HTML

What are the places that we can run JavaScript in the HTML document?

**In-line**

- Attached to a window event such as `onClick`

  ```html
  <button onclick="alert('Inline JavaScript!')">
      Click me for JS
  <button>
  ```



<br>

**In the HTML document**, inside the `<script>` element.

- Normally done just before the end of the `<body>`.

  ```html
  ... rest of the body
  
      <script>
          console.log('JavaScript inside the HTML document!');
      </script>
  </body>
  ```

  

<br>**External file**

- By including a `src =` attribute to the `<script>` tag inside the HTML document

  ```html
  ... rest of the body
  
  	<script src='code.js'></script>
  </body>
  ```

- Then inside the file *code.js*:

  ```javascript
  // Inside code.js file
  
  console.log("Linking to an external JS file!");
  ```



<br>

The example below illustrates all 3 cases:

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk12 - JavaScript - executing -ex2" src="https://codepen.io/maujac/embed/XWmgXXJ?height=265&theme-id=light&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/XWmgXXJ'>wk12 - JavaScript - executing -ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

## Variable Types & Dynamic Typing

JavaScript is a dynamic typed language.

This means that you don't tell the engine what type of data a variable holds, **it figures it out while the code is running**.



Because of this, the same variable can hold different types of values inside the same execution environment.

<br>

In contrast, in static typed languages such as Java or C#, variable types must declared and respected.

```c#
bool isNew = "hello!"; // gives an error in C#
```



However, in JavaScript the sequence of lines below are valid:

```javascript
let isNew = true;  // no error in JavaScript
isNew = 1;
isNew = "It's all good";
```

<br>

### Variable Declaration

In order to declare a variable, use the keywords **let** or **const**:

**let** - Declares a block scope local variable, optionally initializing it to a value.

**const** - creates a read-only reference to a value which must be specified in the same statement. Constants are block scoped.

<br>

Examples of `let`:

<iframe height="306" style="width: 100%;" scrolling="no" title="wk12 - JavaScript -  -ex3" src="https://codepen.io/maujac/embed/eYpRJRN?height=306&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/eYpRJRN'>wk12 - JavaScript -  -ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

Examples of `const`:

<iframe height="265" style="width: 100%;" scrolling="no" title="wk12  - const -ex4" src="https://codepen.io/maujac/embed/eYpRzQo?height=265&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/eYpRzQo'>wk12  - const -ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



<br>

#### The `var` keyword

Older versions of JavaScript only used the keyword **var** for declaring variables. It is a large source of JavaScript bugs and is not recommended if you are new to the language. 



>  Do not use the the keyword **var** for declaring variables.
>
> It can create unexpected results due to scoping conflicts.



To illustrate this:

```javascript
var i = 5;
for (var i = 0; i < 10; i++) {
  // some statements
}
console.log(i);
```

What would you expect the value of `i` to be ?

<details>
    <summary>Output</summary>
    <ul>
        <li>i = 10</li>
        <li>One would likely expect i to stay unchanged outside of the for-loop scope.</li>
    </ul>
</details>

See  the [JavaScript let page by W3C Schools](https://www.w3schools.com/JS/js_let.asp) for more information on the differences between `let` and `var` .

<br>

## Primitive Types

Primitive types are the most basic variable types in JavaScript.

A primitive type is a type of data that holds a single value. In other words, variables that are not objects (more on objects later).

<br>

| Type        | Description                                                  |
| ----------- | ------------------------------------------------------------ |
| `undefined` | Lack of existence. The use of `undefined` should be reserved for the JavaScript engine. |
| `null`      | Lack of existence. Can be assigned to variables by developers . |
| `boolean`   | `true` or `false`                                            |
| `number`    | The only number type available. It's a floating point number (some decimals are always attached) |
| `string`    | A sequence of characters. Either ' ' or " " can be used. Most other languages consider strings as an array of characters, but in JavaScript it is a primitive type. |
| `symbol`    | New in ES6. Not covered in this course.                      |



<br>

See [JavaScript data types and data structures page](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures) by MDN web docs for more info on primitive types.

<br>

### The typeof Operator

If you would like to check the data type of a variable you can use the `typeof` operator.

`typeof` always returns a `string`.

```javascript
let a = "Hello";
let b = 1234;
let c = true;

typeof a;		// returns "string"
typeof b;		// returns "number"
typeof c;		// returns "boolean"
typeof window;  // returns "object"
```

 

<br>

### The undefined keyword.

Note that **`undefined`** is a special value in JavaScript and it means slightly different things when dealing with variables, methods or functions:

- A **variable** that has not been assigned a value is of type `undefined`. 
- A **method** or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value.
- A **function** returns `undefined` if a value was not [`returned`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return).

<br>

### The NaN special value

The `NaN` value in JavaScript is a special Global property which represents **Not-A-Number**.

For practical purpuses `Nan` can be considered as a primitive type. 

It is normally observed when performing arithimetic opperations to non-numeric variables.

<br>

## Arrays

Arrays in JavaScript work similarly to other languages.



- Initialization can happen in a single line or in over multiple line breaks (for readability)
- Arrays have the `length` property
- Array elements can be accessed and modified using thier index position

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk12  - arrays -ex5" src="https://codepen.io/maujac/embed/mdewOmg?height=265&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/mdewOmg'>wk12  - arrays -ex5</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



Unline most languages, it is possible to **hold multiple data types** inside an array:

```javascript
let myArray = [123, "Hello!" , true, null];		// allowed
```

<br>

### Array Methods

Array objects contain several methods. Below are some commonly used:

| Method                                                       | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [concat()](https://www.w3schools.com/jsref/jsref_concat_array.asp) | Joins two or more arrays, and returns a copy of the joined arrays |
| [find()](https://www.w3schools.com/jsref/jsref_find.asp)     | Returns the value of the first element in an array that pass a test |
| [forEach()](https://www.w3schools.com/jsref/jsref_foreach.asp) | Calls a function for each array element                      |
| [includes()](https://www.w3schools.com/jsref/jsref_includes_array.asp) | Check if an array contains the specified element             |
| [indexOf()](https://www.w3schools.com/jsref/jsref_indexof_array.asp) | Search the array for an element and returns its position     |
| [isArray()](https://www.w3schools.com/jsref/jsref_isarray.asp) | Checks whether an object is an array                         |
| [join()](https://www.w3schools.com/jsref/jsref_join.asp)     | Joins all elements of an array into a string                 |
| [pop()](https://www.w3schools.com/jsref/jsref_pop.asp)       | Removes the last element of an array, and returns that element |
| [push()](https://www.w3schools.com/jsref/jsref_push.asp)     | Adds new elements to the end of an array, and returns the new length |
| [shift()](https://www.w3schools.com/jsref/jsref_shift.asp)   | Removes the first element of an array, and returns that element |
| [slice()](https://www.w3schools.com/jsref/jsref_slice_array.asp) | Selects a part of an array, and returns the new array        |
| [sort()](https://www.w3schools.com/jsref/jsref_sort.asp)     | Sorts the elements of an array                               |
| [splice()](https://www.w3schools.com/jsref/jsref_splice.asp) | Adds/Removes elements from an array                          |
| [toString()](https://www.w3schools.com/jsref/jsref_tostring_array.asp) | Converts an array to a string, and returns the result        |

See [JavaScript Array Reference](https://www.w3schools.com/jsref/jsref_obj_array.asp) by W3C Schools for a list of Array methods.

<br>

## Objects

In JavaScript objects are **name-value pairs** (also refered to as **key-value pairs**)

> Everything that is not a primitive type is an object, including functions and properties inside the object.



<br>

### Objects creation

The "classic" notation for creating a new objects the following:

```javascript
let person = new Object();		// creates a new person object
```

<br>

You can **access and add attributes** to to this object by using the "." (dot) operator:

```javascript
person.firstName = "John";
person.lastName = "Tremblant";
person.age = 27;

console.log(person);
```

<br>

![image-20200427130039068](assets/image-20200427130039068.png)

<br>

If we return the person object and expand it's properties, we can clearly see the list of key-value pairs:

![image-20200427211435669](assets/image-20200427211435669.png)

<br>

### Object Literals { }



Objects are more easily created using the **object literal { } shorthand notation**:

<br>

```javascript
let address = {};		// object literal to create a new object

address.street = "Sherbrooke";
address.number = 1234;

console.log(address);
```

![image-20200427130359702](assets/image-20200427130359702.png)

<br>

It is also possible to use the object literal to **create the object and it's properties at the same time**:

```javascript
let car = {				// using line breaks for readability
    manufacturer: "Toyota",
    year: 2019,
    color: "red"
};

console.log(car);
```

![image-20200427131153677](assets/image-20200427131153677.png)

<br>

An object can contain one or multiple other objects.

The object literal notation is very convenient for creating nested objects in "one shot":

<br>

<iframe height="328" style="width: 100%;" scrolling="no" title="wk12  - object literals -ex6" src="https://codepen.io/maujac/embed/yLYXVrP?height=328&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/yLYXVrP'>wk12  - object literals -ex6</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

The expnaded output is:

![image-20200427213222007](assets/image-20200427213222007.png)

<br>

## Functions

There are 3 different ways of creating functions in JavaScript:

- Function Declaration
- Function Expressions (Named & Anonymous)
- Arrow Functions

<br>

In this course **we will focus on Function Declarations**. We will only touch on Function Expressions.

<br>

### Function Declarations

Function declarations in JavaScript work similarly to other languages:

- Start the declaration with the keyword `function`
- Add a function **name**
- Optionally return something with the keyword `return`
- To invoke it use its name followed by parenthesis **( )**

<br>



<iframe height="326" style="width: 100%;" scrolling="no" title="wk12  - function declarations -ex7" src="https://codepen.io/maujac/embed/oNjwqyX?height=326&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/oNjwqyX'>wk12  - function declarations -ex7</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

Major differences from other languages:

<br>

- It is not necessary to specify the data type returned
- If parameters are expected but not provided the function **will not throw an error**.
  - If no default values are provided,  `NaN`  or  `undefined` will be provided.

<br>

<iframe height="318" style="width: 100%;" scrolling="no" title="wk12  - argumentless function -ex8" src="https://codepen.io/maujac/embed/ExVXErq?height=318&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/ExVXErq'>wk12  - argumentless function -ex8</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

### Global and Local Variables Inside Functions

The distinction between global and local variables is very important in JavaScript.

This topic is related to Scope Chain and Execution Environments, which will not be covered.

<br>

As a summary:

- Variables declared outside of any function are **Global variables**
  - Global variables are visible from any function
- Variables declared inside a function are **Local variables**
  - Local variables are only visible inside the function

> - If a variable is never declared locally but it is referenced, **it can be shadowed by a global variable with the same name** 



<br>

<iframe height="266" style="width: 100%;" scrolling="no" title="wk12  - local shadowing - ex9" src="https://codepen.io/maujac/embed/QWjgrbZ?height=266&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/QWjgrbZ'>wk12  - local shadowing - ex9</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>





<br>

## For-loops

There are several ways of using for-loops in Js. We will focus on two approaches:

- Classic `for( ) ` loop
- The `for...of` loop

<br>

### Classic for-loop

Works similarly as other languages:

<iframe height="245" style="width: 100%;" scrolling="no" title="wk12  - classic for-loop - ex11" src="https://codepen.io/maujac/embed/zYvzjjB?height=245&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/zYvzjjB'>wk12  - classic for-loop - ex11</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

#### Classic with a twist (optional)

Notice that the `limit` variable could also have been declared inside the for-loop statement.

In fact, multiple variables could have been declared inside the for-loop statement. Their declarations must be separated by a comma ",".

<br>

<iframe height="227" style="width: 100%;" scrolling="no" title="wk12  - for-loop-twist - ex12" src="https://codepen.io/maujac/embed/MWaoGRa?height=227&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/MWaoGRa'>wk12  - for-loop-twist - ex12</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>



### for...of

The `for...of` loop provides a method for directly accessing the items in the list (as opposed to using the array index).

<br>

<iframe height="219" style="width: 100%;" scrolling="no" title="wk12  - for-each - ex13" src="https://codepen.io/maujac/embed/XWmgYrp?height=219&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/XWmgYrp'>wk12  - for-each - ex13</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

### While-loops

While-loops also work similarly as other languages:

<iframe height="248" style="width: 100%;" scrolling="no" title="wk12  - while_loop - ex14" src="https://codepen.io/maujac/embed/KKdqedd?height=248&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/KKdqedd'>wk12  - while_loop - ex14</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

If you prefer `do...while` loops, they are also available. See [the do...while documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) for more info.

<br>

## If Statements

If statements work similarly to other languages

<iframe height="258" style="width: 100%;" scrolling="no" title="wk12  - if statements - ex10" src="https://codepen.io/maujac/embed/oNjwdoW?height=258&theme-id=light&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/oNjwdoW'>wk12  - if statements - ex10</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>



<br>

# References & Diving Deeper

#### JavaScript Reference Pages

1. [**JavaScript reference**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) by MDN web docs.
2. [**JavaScript Array Reference**](https://www.w3schools.com/jsref/jsref_obj_array.asp) by W3C Schools
3. [**Operator Precedence Table**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table) by MDN web docs



<br>

#### Code Style Guide for JavaScript

[Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)



#### WTF JavaScript (humour & quirks)

JavaScript has some particularities, specially if you are coming from other languages.

A good place to celebrate JavaScript quirks is [wtfjs.com](https://wtfjs.com/), where you will find a list of unexpected behavirous.



<br>



# Hands-on



## Exercises

Complete the following exercises from W3C Schools:

1. [JavaScript Arrays](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_arrays1) and [Array methods](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_array_methods1)
2. [Js Objects](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1)
3. [Js Strings](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_strings1) and [String Methods](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_string_methods1)
4. [Js Functions](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1)
5. 

