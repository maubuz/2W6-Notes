This section is based on the page [Introduction to browser events](https://javascript.info/introduction-browser-events) by javascript.info



# DOM Events

An **event** is a signal that something has happened. All DOM nodes generate such signals.

Here’s a list of the most useful DOM events, just to take a look at:



### **Mouse events:**

| Event name               | Description                                                  |
| ------------------------ | ------------------------------------------------------------ |
| `click`                  | When the mouse clicks on an element.                         |
| `contextmenu`            | When the mouse right-clicks on an element.                   |
| `mouseover` / `mouseout` | When the mouse cursor comes over / leaves an element.        |
| `mousedown` / `mouseup`  | When the mouse button is pressed / released over an element. |
| `mousemove`              | When the mouse is moved.                                     |



### **Form element events:**

| Event name | Description                                                  |
| ---------- | ------------------------------------------------------------ |
| `submit`   | When the visitor submits a `<form>`.                         |
| `focus`    | When the visitor focuses on an element, e.g. on an `<input>`. |



### **Keyboard events:**

| Event name | Description                        |
| ---------- | ---------------------------------- |
| `keydown`  | When the visitor presses the key.  |
| `keyup`    | When the visitor releases the key. |



### **Document & other events:**

| Event name         | Description                                                |
| ------------------ | ---------------------------------------------------------- |
| `DOMContentLoaded` | When the HTML is loaded and processed, DOM is fully built. |
| `load`             | The event occurs when an object has loaded                 |



<br>

> For a complete list of events see [**MDN's Event reference page**](https://developer.mozilla.org/en-US/docs/Web/Events)

<br>

**Events are constantly being fired in the browser,  it's only a matter of <u>how we handle them</u>.**

<br>

# Event Handlers

To trigger an action when a specific event happens, we can assign an **event handler** to the event.

An event handler is a JavaScript function.



There are three ways of assigning an event handler to an event:

- As a HTML in-line attribute;
- As a DOM property on a element;
- Using an event listener.



## Handles as HTML Attributes

A handler can be set in HTML with an attribute named  `on<event>`.

This the method that we have been using so far in the course.

For example, to assign a handler to the  `click` event for a `<button>` element, we can use the  `onclick` attribute:



<iframe height="265" style="width: 100%;" scrolling="no" title="wk12 - Lab 2 - solution" src="https://codepen.io/maujac/embed/BaoJKRx?height=265&theme-id=dark&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/BaoJKRx'>wk12 - Lab 2 - solution</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

Note that we could have written an complete JavaScript command inside the HTML event-handler attribute:

<iframe height="166" style="width: 100%;" scrolling="no" title="wk13 - events - ex1" src="https://codepen.io/maujac/embed/OJyzNww?height=166&theme-id=dark&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/OJyzNww'>wk13 - events - ex1</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

However, this is highly inconvenient, error-prone and not recommended. Keep your structure (HTML) and your functionality (JavaScript) separated.

<br>

## Handlers as DOM Properties

We can assign an event handler to an HTML element using the DOM property `on<event>`  syntax.

The example below uses the `mouseover` event:

<br>

<iframe height="279" style="width: 100%;" scrolling="no" title="wk13 - events - ex2" src="https://codepen.io/maujac/embed/GRpyqGa?height=279&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/GRpyqGa'>wk13 - events - ex2</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

### Syntax differences

There is an important syntax difference between the two methods listed above:

- Handlers assigned as HTML attributes **take bracket**s `( )`  in the function call:

  ```javascript
  onclick="changeColors()"
  ```

- Handlers assigned as DOM properties **do not take brackets** `( )` in the function call:

  ```javascript
  // right
  zone.onmouseover = activate;
  
  // wrong
  zone.onmouseover = activate();
  ```



If we add parentheses, `activate()` becomes a function call.

The last line actually takes the *result* of the function execution, which is `undefined` (since the function returns nothing), and assigns it to the `onmouseover` event.

<br>

## Handlers via Event Listeners

Event handlers assigned as HTML attributes or as DOM properties have **one major limitation**:

- **Events can only be handled by a single event handler**



If more than one handler is assigned to the same element, only the last assignment will be effective:

```javascript
input.onclick = myHandler;
// ...
input.onclick = myAwesomeHandler // replaces the previous handler
```



<br>

> The method **addEventListener( )** is used to assign one or more handlers to a single event.
>
> **This is the recommended method for adding event handlers to events**



It uses the following syntax:

```javascript
element.addEventListener("event", handler, [options]);
```



- **event** - name of event (e.g. `"click"` or  `"mouseover"`);
- **handler** - event handler function;
- **options** - optional object with the properties `once`, `capture`, or `passive`.
- (see [docs for optional object](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) )





<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - events - addEventListener - ex3" src="https://codepen.io/maujac/embed/BaoJLOR?height=265&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/BaoJLOR'>wk13 - events - addEventListener - ex3</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

> An event handler function is also called a **callback function**.
>
> The idea is that when the specified event happens, anyone listening for that event will be **"called back".**



<br>

### Removing event listeners

To remove an added handler, use the method `removeEventListener`, with the same syntax as `addEventHandler`:

```javas
element.removeEventListener(event, handler, [options]);
```



<br>

# Event Object

As soon as an event happens, the browser automatically creates an **event object** and stores details about the event as **object properties**.



Some properties of the event object:

- **event.type** - type of event (e.g. `"click"` ,  `"mouseover"` or  `"keydown"` );
- **event.target** - element that originally triggered the event;
- **event.currentTarget** - element that handled the event (see event bubbling for contrast with `event.target` );
- **event.clientX / event.clientY** - window-relative coordinates of the cursor, for **mouse events**.
- **event.key** - key value of the key represented by the event, for **keyboard events**.



<br>

There are many more properties, some are generic to all events, others are specific to certain event types.



For example:

- The `"keydown"` event has a `key` property which stores the key value of the key pressed. A `"click"`  event does not have the same property. 
- In turn, the  `"click"` event has the `"clientY"`  property, which returns the vertical coordinate of the mouse pointer, relative to the current window.  A `"keydown"` event returns a meaningless value for the same property.

<br>

Below is a list of common event object types:

| Event Object                                                 | Description                                    |
| ------------------------------------------------------------ | ---------------------------------------------- |
| [AnimationEvent](https://www.w3schools.com/jsref/obj_animationevent.asp) | For CSS animations                             |
| [ClipboardEvent](https://www.w3schools.com/jsref/obj_clipboardevent.asp) | For modification of the clipboard              |
| [DragEvent](https://www.w3schools.com/jsref/obj_dragevent.asp) | For drag and drop interaction                  |
| [FocusEvent](https://www.w3schools.com/jsref/obj_focusevent.asp) | For focus-related events                       |
| [InputEvent](https://www.w3schools.com/jsref/obj_inputevent.asp) | For user input                                 |
| [KeyboardEvent](https://www.w3schools.com/jsref/obj_keyboardevent.asp) | For keyboard interaction                       |
| [MouseEvent](https://www.w3schools.com/jsref/obj_mouseevent.asp) | For mouse interaction                          |
| [PageTransitionEvent](https://www.w3schools.com/jsref/obj_pagetransitionevent.asp) | For navigating to, and away from, web pages    |
| [ProgressEvent](https://www.w3schools.com/jsref/obj_progressevent.asp) | For the progress of loading external resources |
| [StorageEvent](https://www.w3schools.com/jsref/obj_storageevent.asp) | For changes in the window's storage area.      |
| [TouchEvent](https://www.w3schools.com/jsref/obj_touchevent.asp) | For touch interaction                          |
| [TransitionEvent](https://www.w3schools.com/jsref/obj_transitionevent.asp) | For CSS transitions                            |
| [UiEvent](https://www.w3schools.com/jsref/obj_uievent.asp)   | For user interface interaction                 |
| [WheelEvent](https://www.w3schools.com/jsref/obj_wheelevent.asp) | For mousewheel interaction                     |



<br>

See the [Event API documentation](https://developer.mozilla.org/en-US/docs/Web/API/Event) for details on event properties and types.

- For an list of generic event properties (common to all event types), [see the "Properties" section](https://developer.mozilla.org/en-US/docs/Web/API/Event#Properties).

- For an extensive list of all available event types see the ["Interfaces based on Event" section](https://developer.mozilla.org/en-US/docs/Web/API/Event#Introduction).



<br>

## Capturing event objects

When writing an event handler, it is possible to "capture" the event object created by the browser.

Once captured, the event details (stored as object properties) can be used inside the event handler.

<br>

![image-20200505101131744](assets/image-20200505101131744.png ':size=600')

<p align="center"><a href="https://www.fraghero.com/pokemon-lets-go-players-found-way-make-catching-easier-every-time/"><em>Image by fraghero.com</em></a></p>

<br>

To capture the event that triggered the callback function:

1. List the event as a function argument in the function declaration
2. Use the event object inside the function.



The event object is automatically passed to the callback function as the first argument.



<br>

<iframe height="250" style="width: 100%;" scrolling="no" title="wk13 - events - event-capture - ex4" src="https://codepen.io/maujac/embed/RwWxMZe?height=250&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/RwWxMZe'>wk13 - events - event-capture - ex4</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

Note that:

- The name of the "event argument" can be anything.  Common names are "event" or "e".
- When assigning an event handler HTML attributes, the event object must be included in attribute description.



<br>

<iframe height="200" style="width: 100%;" scrolling="no" title="wk13 - events -  - ex5" src="https://codepen.io/maujac/embed/xxwpjze?height=265&theme-id=dark&default-tab=html" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/xxwpjze'>wk13 - events -  - ex5</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

# Event Bubbling

In the example below, we add an event listener for the "click" event on the `<div>` . However, the event is also being fired when we click on the `<button>`.



<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - events - bubbling - ex6" src="https://codepen.io/maujac/embed/gOaoKrR?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/gOaoKrR'>wk13 - events - bubbling - ex6</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

If we inspect the `event.target`  and the `event.currentTarget` we will notice that:

- `event.currentTarget`  always returns the `<div>`  as expected;
- `event.target`  sometimes returns the `<button>`  if we click on the button.

<br>

This is happening due to **Event Bubbling**:

> **When an event happens on an element, it first runs the handlers on that element, then on its parent, then all the way up on other ancestors.**



<br>

Consider 3 nested elements `FORM > DIV > P` with a handler on each of them:

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - events - bubbling_ex2 - ex7" src="https://codepen.io/maujac/embed/oNjpyGz?height=265&theme-id=dark&default-tab=html,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/oNjpyGz'>wk13 - events - bubbling_ex2 - ex7</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>



<br>

A click on the inner `` first runs `onclick`:

1. On that `<p>`.
2. Then on the outer `<div>`.
3. Then on the outer `<form>`.
4. And so on upwards till the `document` object.



<br>

![image-20200505111114930](assets/image-20200505111114930.png)

<p align="center"><a href="https://javascript.info/bubbling-and-capturing"><em>Bubbling and capturing by jhavascript.info</em></a></p>



<br>



## Event target vs currentTarget

As you saw above, a handler on a parent element can always get the details about where it actually happened.

> **The most deeply nested element that caused the event is called a "target" element, accessible as `event.target`.**



<br>

If we have a single handler on `form.onclick`, then it can “catch” all clicks inside the form. No matter where the click happened, it bubbles up to `<form>` and runs the handler.

<br>

> **`event.currentTarget` returns the element who is firing the event handler.**



<br>

## Stoping bubbling

A bubbling event goes from the target element all the way to the `document` object. 

**To stop the event bubbling** at a specific use the method `event.stopPropagation()`.



<br>

<iframe height="381" style="width: 100%;" scrolling="no" title="wk13 - events - stop_bubbling - ex8" src="https://codepen.io/maujac/embed/jObYKQR?height=381&theme-id=dark&default-tab=js" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/jObYKQR'>wk13 - events - stop_bubbling - ex8</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

<br>

> Don’t stop bubbling without a need.
>
> Most of the time bubbling is convenient and can be used in your favour.

<br>

## Preventing default behaviour

Sometimes it is desireble to stop a default behaviour without necessarily stoping bubbling.



>  This is done with the method: `event.preventDefault()`;



For example, by default, when a `<button>` element is clicked inside a `<form>` , the form is submitted automatically. 



A common example of stoping defaiult behaviour is to stop the `<button>` from submitting without necesseraly stoping the `"click"` event from bubbling.

<br>

<iframe height="265" style="width: 100%;" scrolling="no" title="wk13 - events - preventDefault - ex9" src="https://codepen.io/maujac/embed/LYpeBEj?height=265&theme-id=dark&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/maujac/pen/LYpeBEj'>wk13 - events - preventDefault - ex9</a> by Mauricio Buschinelli
  (<a href='https://codepen.io/maujac'>@maujac</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>





<br>

# Hands-on - wk13



## Lab 1 - Baloon

Write a page that displays a balloon (using the balloon emoji, 🎈).  When you press the up arrow, it should inflate (grow) 10 percent, and  when you press the down arrow, it should deflate (shrink) 10 percent.

You can control the size of text (emoji are text) by setting the `font-size` CSS property (`style.fontSize`) on its parent element. Remember to include a unit in the value—for example, pixels (`10px`).

The key names of the arrow keys are `"ArrowUp"` and `"ArrowDown"`. Make sure the keys change only the balloon, without scrolling the page.

When that works, add a feature where, if you blow up the balloon past a  certain size, it explodes. In this case, exploding means that it is  replaced with an 💥 emoji, and the event handler is removed (so that you can’t inflate or deflate the explosion).

<br>

<details>
    <summary>Display hints</summary>
    <ul>
        <li>You’ll want to register a handler for the "keydown" event and look at event.key to figure out whether the up or down arrow key was pressed.</li><br>
        <li>The current size can be kept in a binding so that you can base the new size on it. It’ll be helpful to define a function that updates the size—both the binding and the style of the balloon in the DOM—so that you can call it from your event handler, and possibly also once when starting, to set the initial size.</li><br>
        <li>You can change the balloon to an explosion by replacing the text node with another one (using replaceChild) or by setting the textContent property of its parent node to a new string.</li>
    </ul>
</details>



<br>



