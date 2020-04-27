

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

- (show process for inserting new notes)
- (read from a form input and insert)





## Event Listeners & Call back function



(add list of common events)



## querySelector & querySelectorAll

Use the CSS selectors that you know and love!



### querySelectAll vs getElements



One returns an HTMLCollection object while the other returns a NodeList.

They have different types of methods available and we need to understand how to iterate through them.

<br>

Now we need to take a short break from the DOM and focus on JavaScript so we can fully manipulate the DOM at will.

<br>



# JavaScript

## Origins

JavaScript was created during the browser wars in the mid 90's. In an ambitious maneuver to outperform Microsoft's Internet Explorer (IE), the team behind Netscape Navigator commissioner Brendan Eich to create a powerfull, dynamic, language  that could run in the browser.  Brendan created JavaScript in 10 days.

Microsoft reverse engineered Netscape's JavaScript interpreter and dominated the market-share by including IE with Windows.

Netscape had to cease it's opperations. As a last move, they open sourced JavaScript. Brendan and others behind Netscape Navigator went on to cofound the Mozilla foundation.



## Including JavaScript

- What are the places that we can run JavaScript in the HTML document?

- Inline

- Internally

- External file

  





## JavaScript Objects

In JavaScript objects are **name-value pairs**, this includes functions and variables inside the object.



## Execution Context

At any given moment, the JavaScript engine is wrapping code being run inside an execution context (this of this as a bubble or a mini-world). This context includes four components:

- The Global Object
- The special 'this' object (pointer)
- The Outer Environment
- Your Code

<img src="assets/image-20200426121718253.png" alt="image-20200426121718253" style="zoom:67%;" />



### The Global execution context :

Global means "not inside a function". When running any code, the JavaScript engine automatically creates the following:

- The Global execution object;
- The 'this' special object;



When JavaScript is run in your browser, the global execution context includes:



- The 'window' object as the Global execution object (top-level object, accessible to everyone)

- The special object 'this' points to the 'window'.

  

  ![image-20200426112411870](assets/image-20200426112411870.png)

  

  <br>

  <img src="assets/image-20200426111840198.png" alt="image-20200426111840198" style="zoom:60%;" />

<br>



When a function or variable is created in the browser's global execution context, they become part of the global object (aka. the window object).



![image-20200426115519942](assets/image-20200426115519942.png)



> Note that this is running environment is unique to JavaScript being run inside a browser.
>
> The global context would be different if you were running JavaScript in the sever using Node.Js

<br>



The specific execution environment changes when you go inside a function. The global execution context is like a universe and the specific execution context is like moving inside a planet. The specific execution environment between different functions cannot be shared.

<br>

![The Pact Worlds system.](https://starfinderwiki.com/mediawikisf/images/thumb/7/7a/Pact_Worlds_system.jpg/619px-Pact_Worlds_system.jpg)

<p align="center"><a href="https://starfinderwiki.com/sf/Pact_Worlds_system"><em>Pact Worlds system by starfinderwiki.com</em></a></p>


### The outer execution environment

The **outer execution environment** is the environment one level above the current environment. The global execution environment does not have a outer environment since it's the top level environment (it is absolute and available to everyone). 





## Hoisting

The code below will create an unexpected result:

```javascript
b(); 
console.log(a);

var a = "Hello World!";

function b() {
    console.log('Called b!');
}
```

Console result:

```javascript
Called b!
undefined
```



<br>

The function be is ran even though it is declared after it is being called. Also, trying to log `a` gives us `undefined`.

Notice how `undefined` is not the same as if variable `a` was never declared:

<br>

```javascript
b();
console.log(a);

function b() {
    console.log('Called b!');
}
```

Console result:

```javascript
Called b!
ReferenceError: a is not defined
```

<br>

### Creating an Execution Environment

The execution environment is created in two phases:

1. Creation phase.

2. Execution phase.

   

#### Creation phase

The following steps happen:

1. The parser is reading and interpreting your code
2. It recognizes the creating of variables and functions
3. Sets up memory space for them (variables and functions)
4. Maps what is the outer environment of this function (more on this later).



> By the time the code is executed line by line, **the variables and functions references already exists in memory** and thus, can be "accessed", even if they haven't been initialized yet.
>
> This is what is known as **hoisting**.



<br>

However, memory gets initialized differently for variables and for functions:



**Functions** are fully loaded in memory, meaning all execution lines are known.

**Variables** are initialized to `undefined` (as a placeholder) since it's true value will only be known during the execution phase.

<br>

> It is not recommended to rely on hoisting for the execution of your code.

<br>

#### Execution Phase

JavaScript simply runs your code line by line

<br>

## The undefined keyword.

Note that **`undefined`** is a special value in JavaScript and it means slightly different things when dealing with variables, methods or functions:

- A **variable** that has not been assigned a value is of type `undefined`. 
- A **method** or statement also returns `undefined` if the variable that is being evaluated does not have an assigned value.
- A **function** returns `undefined` if a value was not [`returned`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/return).



<br>

## Single Threaded & Synchronous

JavaScript is executed in a single threaded manner, meaning, one command or instruction at a time.

The browser has the ability to execute multiple processes in parallel (multi-threading), however the JavaScript process is executed in a single thread.



JavaScript is also run in a synchronous manner.

This means that code is executed one line at a time and in order. It waits for functions to terminate before moving onto the next line.



More on this when we talk about event listeners.

<br>

## Functions & Invocation

Invoking a function simply means:

1. Write the function name.
2. Add parenthesis "()" at the end.



Every time a new function is invoked, it creates a new execution environment which must finish before going moving to the line after the function:



```javascript
function a(){
    b();
    var c;
}
function b(){
    b();
    var d;
}
a();
var d;
```

<br>

In the code above, lines 1 to 8 are read but they are only function declarations, which is different than invoking the functions.

When a function is declared, it is not executed. Think of function declarations as an announcement that describes what will be done without necessarily doing it.

<br>

The code above will create the execution stack illustrated below. 



<img src="assets/image-20200426141730317.png" alt="image-20200426141730317" style="zoom:80%;" />



<br>

The code at the top of the stack is always the one being executed. Once an execution context is done, it is removed from the stack (also known as "popped") and the next execution context starts.

<br>

## Context & Variable Environments

Variable environment is where a variable "lives" and how they relate to each other in memory.



> Every execution environment has it's own unique set of variables which is not available outside of that environment.



## Outer Environments & Scope Chain

When a variable is referenced but is not present in the current execution environment, JavaScript will look at the **outer environment** in order to find the reference.



> A function's outer environment is determined by the **lexical environment** of that function.
>
> In other words, where is the function declaration is physically sitting in the lines of code.



An alternative way of determining where the outer context's reference points to is to ask "where is this function being declared or created?".



<br>

For example, in the code below, the lexical environment of function `b()`'s declaration is the global environment (the outermost point in the code).

This lexical level (where the code is physically written) is the same as function `a()`.



```javascript
function b() {
  console.log(myVar);
}

function a(){
  var myVar = 2;
  b();
}

var myVar = 1;
a();
```

<br>

Therefore, the **outer environment** of `b()` is the same as the **execution context ** where  `a()` is sitting, which also happens to be the global execution context.

<br>

### The Scope Chain

In order for JavaScript to keep track of what is the outer environment of each function, it maps all the lexical environment's during the creating phase. This map of outer environments is called the **scope chain**.

<br>

<img src="assets/image-20200426150200645.png" alt="image-20200426150200645" style="zoom:80%;" />

<br>

If the declaration of `b()` is moved inside `a()`, it's outer environment will be different.

```javascript
function a() {

    function b() {
        console.log(myVar);
    }
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

<br>

In this new scenario,  when JavaScript executes line 4 inside `b()` will not find a variable `myvar` declared and will look at it's outer environment for a reference to `myVar`.

<br>

<img src="assets/image-20200426153521500.png" alt="image-20200426153521500" style="zoom:80%;" />

<br>

> JavaScript will continue to move up the scope chain in order to find the variable reference. This can continue all the way to the global execution environment.



If we comment out line 6 and no longer declare `myVar` inside `a()`, the output of this code will be `1`.

```javascript
function a() {

    function b() {
        console.log(myVar);
    }
   // var myVar = 2;
    b();
}

var myVar = 1;
a();  // the console will output 1
```



This happens because function `b()` will look at it's outer environment for a declaration of `myVar`,  which is the execution environment of function `a()`. In turn, function `a()` will look at it's outer environment for a declaration of `myVar` and find it in the global execution environment.

<br>

The path of references of outer environments is the scope chain.

<br>

### Block Scoping with let

In the ES6 version of JavaScript, variables can be declared with the keyword `let`.

```javascript
if (a > b) {
    let c = true;
}
```

<br>

The keyword `let` creates a limited scope that exists only inside the curly braces "{ }".



> The limited scope created with `let`  is called **block scoping** and is the type of scope commonly expected in other programming languages.



<br>

Both `var` and `let ` can be very useful depending on the task at hand.

> For people who are new to JavaScript, it is recommended to use `let` since the scope is more  intuitive.

<br>

## Variable Types & Dynamic Typing

JavaScript is a dynamic typed language.

This means that you don't tell the engine what type of data a variable holds, **it figures it out while the code is running**.



Because of this, the same variable can hold different types of values inside the same execution environment.

<br>

In contrast, in static typed languages such as Java or C#, variable types must declared and respected.

```c#
bool isNew = "hello!"; // gives an error
```



However, in JavaScript the sequence of lines below are valid:

```javascript
let isNew = true;  // no error
isNew = "It's all good";
isNew = 1;
```

<br>

### Primitive Types

Remember, a primitive type is a type of data that holds a single value.

In other words, variables that are not objects (made of one or more key-value pairs).



- `undefined` - lack of existence. The use of `undefined` should be reserved for the JavaScript engine. We don't use it, we just observe it;
- `null` - lack of existence; We can use this;
- `boolean` - `true` or `false`;
- `number` - The only number type available. It's a floating point number (always some decimal attached);
- `string` - a sequence of characters. Either ' ' or " " can be used. Most other languages consider strings as a sequence of characters, but in JavaScript it is a primitive type.
- `symbol` - new in ES6. Not covered here.



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

##  Operators

### Operator Precedence & Associativity

Operator precedence determines which components in a expression get evaluated first.

Operator associativity determines the direction in which the expression is evaluated.



Which operator gets called first (has higher precedence) ?

```javascript
 if( a & b != c ) { ... }
```



The precedence (who is evaluated first) and the associativity (direction of evaluation, ei. left to right or right to left) is different for each operator.



The precedence is determined by a precedence level number, which can be found in the [operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) from MDN web docs.

<br>

## Coercion

Coercion means converting a value from one type to another. Also know as type casting in other languages.

Since JavaScript is a dynamically typed language, coercion happens ofter.



### Implicit coercion

>  Some coercions are intuitive while others are **super counter-intuitive**. 

<br>

For example, let's add the `number` and the `string`  '2' :

```javascript
let a = 1 + '2';
console.log(a);
// returns '12'
```

<br>

JavaScript coerced the `number` 1 into the  `string` '1' and concatenated it with the second string '2'.



>  Because JavaScript is a dynamically typed language, it is constantly trying to "guess" variable types.
>
> It will coerce variables in order to make a line of code executable.

<br>

Understanding coercion is very important so we can identify and debug unexpected behavior.

<br>

In the specific case of the `+` operator, if either of the operands (variables being added) is a string, it will perform string concatenation. Otherwise, it will perform numeric addition.

<br>

```javascript
1 + 2 + '3';	// "33"
'1' + 2 + 3;	// "123"

2 + 2 + 2;		// 6
2 + 2 + '2';	// "42"
'2' + 2 + 2;	// "222"
```

<br>

However, each operator might have a specific behavior and coercion mechanics.

<br>

### Explicit coercion

There are mechanisms we can use to *explicitly* cause values to be coerced, such as using the built-in type “wrapper” objects.

```javascript
String(42); // "42"
Boolean(42); // true
Number(true); // 1
```

<br>

For more information on coercion, see [JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/) by freeCodeCamp or [JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp) by W3C Schools.

<br>

## Comparison Operators

Combining operator precedence and associativity with coercion we can understand many "weird" comparisons of JavaScript. 

<br>

First, we must understand the following coercion rule:

> If a comparison operator receives an unexpected data type, JavaScript will try to coerce it into the expected type.

<br>

```javascript
3 == 3;		// true (as expected)
"3" == 3;	// true (due to coersion)
```

<br>

In the example above, JavaScript coerced the `string` 
"3" into the `number 3.



<br>

Consider the code below:

```javascript
console.log(3 < 2 < 1);   // outputs true;
```

<br>

When looking at the [operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table), we see that the "less than" sign has an associativity (evaluation direction) of left-to-right.

<br>

This means that `3 < 2` will be evaluated first:

```javascript
3 < 2 ;		// false
```

Which is intuitive and expected.

Looking at what is left:

```javascript
console.log( false < 1 );		//true
```

<br>

This is unexpected but can be explained by coercion.

The less than operator is expecting to receive two `numbers`, however, it receives a `boolean` and a `number`. 

JavaScript then tries to coerce the `boolean` `false` into a number.

<br>

To understand what will happen, we can use an explicit coercion with `Number( )`:

```javascript
Number(false);		// 0
```

<br>

Now we understand that the comparison `false < 1`  becomes:

```javascript
console.log( 0 < 1 );		// true
```

<br>

### The special || operator (don't cover)l

The `+` "sum" operator had a particular behavior when coercing different data types (see Implicit coercion above).



Similarly, the `||` (OR )  operator also has a special behavior. When comparing two different types, it will return the first type that can be coerced to `true`.



```javascript
undefined || 'hello';	// "hello"
Boolearn('hello');		// true

0 || 1;					// 1
Boolean(1);				// true

null || 'hello';		// "hello"
"" || 'hello';			// "hello"
```



<br>

### Equality

Due to coercion, some equality comparisons can be quite counter-intuitive, which makes the code very difficult to anticipate.



For example:

```javascript
false == 0;		// true
null == 0;		// false
null < 1;		// true

"" == 0;		// true
"" == false;	// true
```

<br>

The equality operator `==`  is know as **loose equality**.

In order to solve this ambiguity, we can use the "strict equality" operator `===` .

<br>

### Strict Equality ===

The strict equality operator, compares two variables **without trying to coerce their data types**.



```javascript
"3" === "3";	// true
"3" === 3;		// false
```

<br>

> Use `===` and `!==`  by default in your code.

<br>

### The Equality Table

To know what the  `==`  (loose equality operator) and the  `===`  (strict equality operator) will return when comparing data types, refer to [**the equality table**](https://dorey.github.io/JavaScript-Equality-Table/unified/)

<br>

![img](https://web-fundamentals.dev/static/df92e5e8e1ee04149b4b7bde883888c2/e11df/js-equality-table.png)

<p align="center"><a href="https://web-fundamentals.dev/js-type-coercion"><em>Type Coercion by web-fundamentals.dev/</em></a></p>
<br>

## Function default values

JavaScript does not throws an error if you do not pass an expected argument to a function:

```javascript
function greet(name){
    console.log('Hello ' + name);
}

greet();	// Output: 'Hello' undefined
```

<br>

## Objects & Object Literals

The classic notation for creating a new object in JavaScript is the following:

```javascript
let person = new Object();		// creates a new person object
```

<br>

You can then add attributes to to this object by using the "." (dot) operator:

```javascript
person.firstName = "John";
person.lastName = "Tremblant";
person.age = 27;
```



<div>
    <a class="jsbin-embed" href="https://jsbin.com/kilucaj/embed?js,console">JS Bin on jsbin.com</a><script src="https://static.jsbin.com/js/embed.min.js?4.1.7"></script>
</div>





<br>

## Code Style Guide for JavaScript

[Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)





## WTF JavaScript

JavaScript has some particularities, specially if you are coming from other languages.

A good place to celebrate JavaScript quirks is [wtfjs.com](https://wtfjs.com/), where you will find a list of unexpected behavirous





# To Clarify

- When to transform DOM collections into an array and when to not?

  - Eg.: querySelectorAll() (returns an NodeList Array) vs getElementsByClassName() (returns a HTMLCollection)

- How to iterate through a HTMLCollection vs a NodeList? NodeList has forEach, the other has not.

  - Verify: are for-loops are a safe for both.

- `this` and function context. (from [thecodebarbarian.com](https://thecodebarbarian.com/for-vs-for-each-vs-for-in-vs-for-of-in-javascript.html))

  - > . `for`, `for/in`, and `for/of` retain the outside scope's value of `this`, but the `forEach()` callback will have a different `this` *unless* you use an [arrow function](https://medium.freecodecamp.org/learn-es6-the-dope-way-part-ii-arrow-functions-and-the-this-keyword-381ac7a32881).

- 