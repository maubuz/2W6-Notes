# JavaScript: Some weird parts

JavaScript can seem a little weird at first, **unless you learn some of the things under the hood**.

Here we'll learn enough to not get caught off guard by JS.

<br>

# Primitive wrapper objects

You can think of primitive data types as infant variables that can't do anything other than store a single value inside.

Except for `null` and `undefined`, all primitive types have object equivalents that wrap around the them:

- [`String`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) for the string primitive.
- [`Number`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) for the number primitive.
- [`BigInt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt) for the number primitive.
- [`Boolean`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean) for the boolean primitive.

<br>

Here is how primitive wrapper objects work:

<br>

1. Primitives types are still primitive. Only a single value, as desired.
2. The language allows access to methods and properties of strings, numbers, booleans and symbols.
3. In order for that to work, a special “object wrapper” that provides the extra functionality is created, and then is destroyed.

<br>



> For all practical purpuses, consider the methods and properties associated with the wrapper objects to belong to the primitive types.



<br>

#  Operators

Like most languages, JavaScript has several types of operators. We will focus on the following:

- Arithmetic Operators
- Assignment Operators
- Comparison Operators
- Logical Operators



Below are commonly used operators. See the [**JavaScript Operators page**](https://www.w3schools.com/js/js_operators.asp) for full reference.

<br>

### Arithmetic Operators

| Operator | Description                                                  |
| -------- | ------------------------------------------------------------ |
| +        | Addition                                                     |
| -        | Subtraction                                                  |
| *        | Multiplication                                               |
| **       | Exponentiation ([ES2016](https://www.w3schools.com/js/js_es6.asp)) |
| /        | Division                                                     |
| %        | Modulus (Division Remainder)                                 |
| ++       | Increment                                                    |
| --       | Decrement                                                    |

<br>

### Assignment Operators

| Operator | Example | Same As   |
| -------- | ------- | --------- |
| =        | x = y   | x = y     |
| +=       | x += y  | x = x + y |
| -=       | x -= y  | x = x - y |
| /=       | x /= y  | x = x / y |



<br>

### Comparison Operators

| Operator | Description                                  |
| -------- | -------------------------------------------- |
| ==       | equal to                                     |
| ===      | Strick equality (equal value and equal type) |
| !=       | not equal                                    |
| !==      | Strick not equal value or not equal type     |
| >        | greater than                                 |
| <        | less than                                    |
| >=       | greater than or equal to                     |
| <=       | less than or equal to                        |
| ?        | ternary operator                             |

<br>

### Logical Operators

| Operator | Description |
| -------- | ----------- |
| &&       | logical and |
| \|\|     | logical or  |
| !        | logical not |

<br>



# Operator Precedence & Associativity

Operator precedence determines which components in a expression get evaluated first.

Operator associativity determines the direction in which the expression is evaluated (ei. left-to-right or right- to-left).

<br>

For example, which operator gets called first ?

```javascript
 if( a && b != c ) { ... }
```



<br>

The precedence is determined by a **precedence level number**. The heigher the level, the heigher the precedence priority.

<br>

Both the precedence level number and the associativity direction can be found in the [**operator precedence table**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) from MDN web docs.

<br>

> Precendence and associativity might seen like uncesserary details to learn, however, they largely determine how coercion happens in JavaScript.

<br>



# Coercion

Coercion means converting a value from one type to another. Also know as type casting in other languages.

Since JavaScript is a dynamically typed language, coercion happens very ofter.



## Implicit coercion

Implicit coercion is done automatically by the JavaScript engine. Some implicit coercions are intuitive while others are **very counter-intuitive**. 

<br>

For example, let's add the `number` 1 and the `string`  '2' :

```javascript
let a = 1 + '2';
console.log(a);
```

<details>
    <summary>Output</summary>
    <ul>
        <li>returns "12"</li>
    </ul>
</details>

<br>

JavaScript coerced the `number` 1 into the  `string` '1' and concatenated it with the second string '2'.



>  Because JavaScript is a dynamically typed language, it is constantly trying to "guess" variable types.
>
>  It will coerce variables in order to make a line of code executable.

<br>

**Each operator might have a specific coercion behavior.**

We will look at the addition operator and the equality operator.

<br>

### Addition & Coercion

With the   `+` operator, the following rule applies:

> If either of the operands is a string, it will perform string concatenation. Otherwise, it will perform numeric addition.

<br>

```javascript
1 + 2 + '3';  // ?
'1' + 2 + 3;

2 + 2 + 2;
2 + 2 + '2';
'2' + 2 + 2;
```

<details>
    <summary>Output</summary>
    <ul>
        <li>1 + 2 + '3';	// "33"</li>
		<li>'1' + 2 + 3;	// "123"</li>
        <li>2 + 2 + 2;		// 6</li>
		<li>2 + 2 + '2';	// "42"</li>
    </ul>
</details>

<br>

## Explicit coercion

There are mechanisms we can use to *explicitly* cause values to be coerced, such as using the built-in type “wrapper” objects.

```javascript
String(42); // "42"
Boolean(42); // true
Number(true); // 1
```

<br>

For more information on coercion, see [JavaScript type coercion explained](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/) by freeCodeCamp or [JavaScript Type Conversion](https://www.w3schools.com/js/js_type_conversion.asp) by W3C Schools.

<br>

# Comparison Operators

### Comparison & Coercion

Combining operator precedence and associativity with coercion we can understand many "weird" comparisons of JavaScript. 

<br>

First, we must understand the following coercion rule:

> When comparing values of different types, JavaScript converts the values to numbers.

<br>

```javascript
3 == 3;		// true (as expected)
"3" == 3;	// ?
```

<details>
    <summary>Output</summary>
    <ul>
        <li>returns true</li>
    </ul>
</details>

<br>

In the example above, JavaScript coerced the `string` 
"3" into the `number` 3.



<br>

### Example: precedence, associativity & coercion

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



## Equality

Due to coercion, some equality comparisons can be quite counter-intuitive, which makes the code very difficult to anticipate.



For example:

```javascript
false == 0;	
null == 0;	
null < 1;	

"" == 0;	
"" == false;
```

<details>
    <summary>Output</summary>
    <ul>
        <li>false == 0;  // true</li>
		<li>null == 0;	 // false</li>
        <li>null < 1;	 // true</li>
		<li>"" == 0;	 // true</li>
    </ul>
</details>



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

## Take-aways

> Use `===` and `!==`  by default in your code.

<br>

> When using the  `+` operator, if one of the operands is a string, it will perform string concatenation. Otherwise, it will perform numeric addition.

<br>

### The Equality Table

To know what the  `==`  (loose equality operator) and the  `===`  (strict equality operator) will return when comparing data types, refer to [**the equality table**](https://dorey.github.io/JavaScript-Equality-Table/unified/)

<br>

![img](https://web-fundamentals.dev/static/df92e5e8e1ee04149b4b7bde883888c2/e11df/js-equality-table.png)

<p align="center"><a href="https://web-fundamentals.dev/js-type-coercion"><em>Type Coercion by web-fundamentals.dev/</em></a></p>
<br>



# References & Diving Deeper

### JavaScript Reference Documentation Pages

[**JavaScript reference**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference) by MDN web docs.

<br>

### The Modern JavaScript Tutorial

[**Excellent learning resource (beginner to advanced)**](https://javascript.info/) by JavaScript.info

<br>

### Code Style Guide for JavaScript

[Principles of Writing Consistent, Idiomatic JavaScript](https://github.com/rwaldron/idiomatic.js)

<br>

### WTF JavaScript (humour & quirks)

A good place to celebrate JavaScript quirks is [wtfjs.com](https://wtfjs.com/), where you will find a list of unexpected behaviors.

<br>



# Hands-on



## Exercises

#### Exercise 1

Practice your equality skills by playing the [**JavaScript Equality Minesweeper**](https://eqeq.js.org/) by slikts

<br>

#### Exercise 2

Write a JavaScript for loop that will iterate from 0 to 15. For each  iteration, it will check if the current number is odd or even, and  display a message to the screen.

Example output :

"0 is even"

"1 is odd"

"2 is even"

<br>

#### Exercise 3

Write a JavaScript program which compute, the average marks of the  following students Then, this average is used to determine the corresponding letter grade of the whole class.

| **Student Name** | **Marks** |
| ---------------- | --------- |
| David            | 80        |
| Vinoth           | 77        |
| Divya            | 88        |
| Ishitha          | 95        |
| Thomas           | 68        |

<br>

The grades are computed as follows :

| **Range** | **Grade** |
| --------- | --------- |
| <60       | F         |
| <70       | D         |
| <80       | C         |
| <90       | B         |
| =100      | A         |

<br>

## Lab 4 - Login button

Use the code below to implement the following functionality:

- When a user clicks on the button "Log In" it should change to "Log out".
- Do the same when the button text is "Log out" ( Log out -> Log In ).



<iframe height="265" style="width: 100%;" scrolling="no" title="Lab 4 - Login" src="https://codepen.io/maujac/embed/KKdXzNP?height=265&theme-id=light&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true" loading="lazy">
  See the Pen <a href='https://codepen.io/maujac/pen/KKdXzNP'>Lab 4 - Login</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



