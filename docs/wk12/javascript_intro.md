

# Intro to JavaScript

## Origins

JavaScript was created during the browser wars in the mid 90's. In an ambitious maneuver to outperform Microsoft's Internet Explorer (IE), the team behind Netscape Navigator commissioner Brendan Eich to create a powerful, dynamic, language  that could run in the browser.  Brendan created JavaScript in 10 days.

Microsoft reverse engineered Netscape's JavaScript interpreter and dominated the market-share by including IE with Windows.

Netscape had to cease it's operations. As a last move, they open sourced JavaScript. Brendan and others behind Netscape Navigator went on to co-found the Mozilla foundation, the creators of the Firefox browser.



## Adding JavaScript to HTML

What are the places that we can run JavaScript in the HTML document?

### In-line

Attached to a window event such as `onClick`

```html
<button onclick="alert('Inline JavaScript!')">
    Click me for JS
<button>
```



<br>

### Internal

Inside the `<script>` tag.

The `<script>` tag is normally **placed just before the end of the `<body>`.** Technically, the tag can be placed anywhere.

- The location of the `<script>` tag is important. See the note on *Position matters*, down bellow.

```html
<body>
    <h1>Welcome to our site!</h1>
    
... rest of the body

    <script>
        console.log('JavaScript inside the HTML document!');
    </script>
</body>
```



<br>

### External file

Include a `<script>` tag inside the HTML file with a `src =` attribute pointing to the script location.

- The location of the `<script>` tag is important.

> The recommendation is to placed in the `<head>` with the attribute `defer` 
>
> This way the code is fetched and parsed but not executed until the page is fully loaded.

<br>

Inside ***index.html***


```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My awesome page</title>
    <link rel="stylesheet" href="style.css">
    
    <script src="code.js" defer></script>		// Note the defer attribute
</head>

<body>
	<h1>Welcome to my awesome page!</h1>
    ... rest of the body
</body>
```



Inside the file ***code.js***:

```javascript
// Inside code.js file

console.log("Linking to an external JS file!");
```



<br>

!> In this course you are **expected to use external JS files** unless asked otherwise.

The example below illustrates all 3 cases:

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk12 - JavaScript - executing -ex2" src="https://codepen.io/maujac/embed/XWmgXXJ?height=265&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/XWmgXXJ'>wk12 - JavaScript - executing -ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

### Position Matters!

Remember that the html document is parsed (processed) from top to bottom.

This means that the `<script>` tag will be executed as soon as the browser sees it in the html file (unless the `defer` attribute is added to the tag.

>If your JS script is manipulating DOM elements, make sure the browser has already added those elements to the DOM by the time your script is run.


<br>

## Variable Types & Dynamic Typing

JavaScript is a dynamic typed language.

This means that you don't specify what type of data a variable holds, **the JS engine figures it out while the code is running**.



Because of this, the same variable can hold different types of values inside the same execution environment.

<br>

In contrast, in static typed languages such as Java or C#, variable types must declared and respected.

```c#
bool isNew = "hello!"; // gives an error in C#
```



However, in JavaScript the sequence of lines below are valid:

```javascript
let isNew = true;			// holding a boolean
isNew = 1;					// now a number
isNew = "It's all good";	// now a string
```

<br>

### Variable Declaration

> In order to declare a variable, use the keywords **let** or **const**:

**let** - Declares a block scope local variable, optionally initializing it to a value.

**const** - creates a read-only reference to a value which must be specified in the same statement. Constants are block scoped.

<br>

Examples of `let`:

<iframe height="323" style="width: 100%;" scrolling="no" title="wk12 - JavaScript -  -ex3" src="https://codepen.io/maujac/embed/eYpRJRN?height=323&theme-id=dark&default-tab=js,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/eYpRJRN'>wk12 - JavaScript -  -ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

Examples of `const`:

<iframe height="345" style="width: 100%;" scrolling="no" title="wk12  - const -ex4" src="https://codepen.io/maujac/embed/eYpRzQo?height=345&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/eYpRzQo'>wk12  - const -ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

#### The `var` keyword

Older versions of JavaScript only used the keyword **var** for declaring variables.

The scope of variables declared with `var` is a little counter intuitive, is a large source of JavaScript bugs and is not recommended if you are new to the language. 



>  Do not use the the keyword **var** for declaring variables. Stick to ***let*** and ***const***
>
> It can create unexpected results due to scoping "overlap".



To illustrate this:

<iframe height="265" style="width: 100%;" scrolling="no" title="Intro to JS - avoid var" src="https://codepen.io/maujac/embed/poRVddv?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/poRVddv'>Intro to JS - avoid var</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

What would you expect the value of `i` to be ?

One would likely expect i to stay unchanged outside of the for-loop scope.

<br>


See  the [JavaScript **Let page** by W3C Schools](https://www.w3schools.com/JS/js_let.asp) for more information on the differences between `let` and `var` .

<br>

## Primitive Data Types

Primitive types are the most basic variable types in JavaScript.

A primitive type is a type of data that holds a single value. In other words, variables that are not objects (more on objects later).

<br>

| Type                                                         | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [`undefined`](https://developer.mozilla.org/en-US/docs/Glossary/undefined) | Lack of existence. The use of `undefined` should be reserved for the JavaScript engine. |
| [`null`](https://developer.mozilla.org/en-US/docs/Glossary/Null) | Lack of existence. Can be assigned to variables by developers. |
| [`boolean`](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) | `true` or `false`                                            |
| [`number`](https://developer.mozilla.org/en-US/docs/Glossary/Number) | The only number type available. It's a floating point number (some decimals are always attached) |
| [`string`](https://developer.mozilla.org/en-US/docs/Glossary/String) | A sequence of characters. Either ' ' or " " can be used. Most other languages consider strings as an array of characters, but in JavaScript it is a primitive type. |
| [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) | Similar to numbers but can store much larger numbers. *Not covered in this course.* |
| [`symbol`](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) | New in ES6. *Not covered in this course.*                    |



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
- A **function** returns `undefined` if a value was not [`returned`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return).

<br>

Try the following code in the *Console* of the *Dev Tools*

<br>

**Undefined with variables:**

```js
let a;				// Variable declared but nothing assigned to it
console.log(a);		// undefined
```

<br>

**Undefined with functions:**

```js
// Declare two functions
function sayHi(name){
  console.log("Hi there ", name);		// Return nothing but print to console
}

function hiMessage(name){
  return ("Hello my friend ", name);	// Returns a string
}

// Now run them
sayHi("Larry");			// Logs to console but returns undefined

hiMessage("Meghrig")	// Does not log to console but returns a string
```



<br>

### The NaN special value

The `NaN` value in JavaScript is a special Global property which represents **Not-A-Number**.

For practical purpuses `Nan` can be considered as a primitive type. 

It is normally observed when performing arithmetic operations to non-numeric variables.

<br>

## Arrays

Arrays in JavaScript work similarly to other languages.



- Initialization can happen in a single line or in over multiple line breaks (for readability)
- Arrays have the `length` property
- Array elements can be accessed and modified using their index position

<br>

<iframe height="271" style="width: 100%;" scrolling="no" title="wk12  - arrays -ex5" src="https://codepen.io/maujac/embed/mdewOmg?height=271&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/mdewOmg'>wk12  - arrays -ex5</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>
<br>

In the example above, the array `cars` is declared and initialized immediately with some starting values.

It is also possible to initialize an empty array:

<br>

```js
let list = [];		// Initializing an empty array
list.push("first item!");
```

<br>

Unlike most languages, it is possible to **hold multiple data types** inside the same array:

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

In JavaScript objects are **name-value pairs** (also referred to as **key-value pairs**)

Everything that is not a primitive type is an object, including functions and properties inside the object.

<br>

> For simplicity, think of a JS object as a **variable that inside holds a collection of keys**. Each key is associated to a value.

<br>

### Objects creation

The "classic" notation for creating a new objects the following:

```javascript
let person = new Object();		// creates a new person object with no keys
```

<br>

You can **access and add keys (or attributes)** to to this object by using the "." (dot) operator:

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
let address = {};		// object literal to create a new empty object

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

The expanded output is:

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



<iframe height="331" style="width: 100%;" scrolling="no" title="wk12  - function declarations -ex7" src="https://codepen.io/maujac/embed/oNjwqyX?height=331&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/oNjwqyX'>wk12  - function declarations -ex7</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

Major differences from other languages:

<br>

- It is not necessary to specify the data type returned
- If parameters are expected but not provided the function **will not throw an error**.
  - If no default values are provided,  `NaN`  or  `undefined` will be provided.

<br>

<iframe height="323" style="width: 100%;" scrolling="no" title="wk12  - argumentless function -ex8" src="https://codepen.io/maujac/embed/ExVXErq?height=323&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
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

> - If a variable is referenced locally but has never been declared, JavaScript will try to find that variable in the global environment.
> - If the undeclared variable is found in the global environment, **will over-shadow the local variable with the same name** 



<br>

<iframe height="274" style="width: 100%;" scrolling="no" title="wk12  - local shadowing - ex9" src="https://codepen.io/maujac/embed/QWjgrbZ?height=274&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/QWjgrbZ'>wk12  - local shadowing - ex9</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

## For-loops

There are several ways of using for-loops in Js. We will focus on two approaches:

- Classic `for( ) ` loop
- The `for...of` loop

<br>

### Classic for-loop

Works similarly as other languages:

<iframe height="265" style="width: 100%;" scrolling="no" title="wk12  - classic for-loop - ex11" src="https://codepen.io/maujac/embed/zYvzjjB?height=265&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/zYvzjjB'>wk12  - classic for-loop - ex11</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>


<br>



### for...of

The `for...of` loop provides a method for directly accessing the items in the list (as opposed to using the array index).

<br>

<iframe height="228" style="width: 100%;" scrolling="no" title="wk12  - for-each - ex13" src="https://codepen.io/maujac/embed/XWmgYrp?height=228&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/XWmgYrp'>wk12  - for-each - ex13</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>




<br>

### While-loops

While-loops also work similarly as other languages:

<iframe height="258" style="width: 100%;" scrolling="no" title="wk12  - while_loop - ex14" src="https://codepen.io/maujac/embed/KKdqedd?height=258&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/KKdqedd'>wk12  - while_loop - ex14</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

If you prefer `do...while` loops, they also exist in JavaScript. See [the do...while documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while) for more info.

<br>

## If Statements

If statements work similarly to other languages

<iframe height="302" style="width: 100%;" scrolling="no" title="wk12  - if statements - ex10" src="https://codepen.io/maujac/embed/oNjwdoW?height=302&theme-id=dark&default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/oNjwdoW'>wk12  - if statements - ex10</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>




<br>

> Careful! **The equality operator "==" behaves differently** than most languages.
>
> This is a design decision that [Brendan Eich regrets](https://thenewstack.io/brendan-eich-on-creating-javascript-in-10-days-and-what-hed-do-differently-today/). See next lecture for details.



<br>

## References & Diving Deeper

#### JavaScript Reference Pages

1. [**JavaScript reference**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) by MDN web docs.
2. [**JavaScript Array Reference**](https://www.w3schools.com/jsref/jsref_obj_array.asp) by W3C Schools

   

<br>

## Hands-on

### Exercises

1. **Check your understanding of JavaScript Data Types** with exercise below from Algonquin College:

   1. [Type Trapper](https://activities.learn-the-web.algonquindesign.ca/type-trapper/)

   <br>

2. **Complete the following exercises from W3C Schools:**

   1. [JavaScript Arrays](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_arrays1) and [Array methods](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_array_methods1)
   2. [Js Objects](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_objects1)
   3. [Js Functions](https://www.w3schools.com/js/exercise_js.asp?filename=exercise_js_functions1)

   <br>

3. **Syntax Warm-up:**

   **Perform the following steps in the console of your browser (<u>use the Dev Tools and do not refresh the page</u>).**

   *Friends - array:*

   1. Create a variable called `my_friends`  and assign it an array with four of your friends’ names inside.
   2. Show the user a dialog that displays  the third name in your list of  `my_friends`.

   *Name - string comparison*

   1. Create a variable called `my_name` and  assign it a string value that is your first name.
   2. Write a simple expression: if the value of `my_name` is identical to Jennifer, output to the console: “That’s my name too!”

   *Age - numeric comparison*

   1. Create a variable called `my_age` and assign it your age.
   2. If `my_age`is greater than 18, show the user a dialog that says “high!.” If not, show the user a dialog that says “low.”

   *Person - object literals*

   1. Create a `person` object using the object literal notation.
   2. This person should have the following properties (keys), which point to the variables you declared in the previous steps.
      - name
      - friends
      - age
   3. Output the person object to the console;

   <br>

Solution [available here](https://codepen.io/maujac/pen/KKdZMzp)

<br>

### Lab 1 - Multiply Two Numbers

Write a function that will receive 3 numbers as input and it should return the multiplication of these
3 numbers.

**Input:** three numbers

**Output:** number

**Example**: inputs are (2,3,4), output is 24.

<br>

Solution [available here](https://codepen.io/maujac/pen/qBOpNdP)

<br>

### Lab 2 - Colors on Click

Use the code below to change the color of the `<h1>` element when the button is clicked.

Use the provided function to generate a random index number. 

<br>

**Implement the following steps:**

1. Create a global array containing 3 valid HTML color names.

2. On click, change the `<h1>` background color to any of the 3 colors. 

   <br>

<iframe height="378" style="width: 100%;" scrolling="no" title="wk12 - Lab 2" src="https://codepen.io/maujac/embed/OJygwjW?height=378&theme-id=dark&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/OJygwjW'>wk12 - Lab 2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

Solution [available here](https://codepen.io/maujac/pen/BaoJKRx)