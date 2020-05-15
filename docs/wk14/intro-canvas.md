These notes were made by Vikram Singh

<br>

# 🖼 Starting With Canvas

## 👋 Getting Started

Canvas is an HTML element that we can use to dynamically create anything from simple graphics to fully interactive games on our webpage using JavaScript.

### Initialization

1. To declare a canvas element, simply put this into the `<body>` of your `index.html` file:

    - ```html
        <canvas></canvas>
      ```

    - This will create a canvas on the page with a default `width` of `300` and `height` of `150`.

        

2. Using CSS, give the `canvas` element a border.

    - This will make it easier to see in the browser.
    
      
3. In `main.js`, we need to get a handle on the canvas DOM element as well as get the canvas' context:

    - ```javascript
      const canvas = document.getElementsByTagName('canvas')[0];
      const context = canvas.getContext('2d');
      ```

    - The `context` is the object that contains all of the methods we need to create our drawings.
    
      <br>

### The canvas grid

Understanding how the canvas grid system works is crucial before we start drawing. As you can see in the diagram, the origin (0, 0) of the grid starts in the top-left corner. Everything we draw is relative to the origin.

![The Grid](7.2.1-Grid.png)

## 🔺 Drawing Shapes

With canvas, we can draw *rectangles* and we can draw *paths*. A path can be thought of as a list of points that are connected by lines. Anything other than a rectangle must be created using a path.

### Rectangles

Each of these three functions takes the same parameters. `x` and `y` specify the position on the canvas (relative to the origin) of the top-left corner of the rectangle. `width` and `height` provide the rectangle's size.

```javascript
fillRect(x, y, width, height); // Draws a filled rectangle.
strokeRect(x, y, width, height); // Draws a rectangular outline.
clearRect(x, y, width, height); // Clears the specified rectangular area.
```

For example:

```javascript
context.fillRect(25, 25, 100, 100);
context.clearRect(45, 45, 60, 60);
context.strokeRect(50, 50, 50, 50);
```

Renders this:

![Rectangles](7.2.2-Rectangles.png)

### Paths

When drawing shapes using paths, we must:

1. Begin the path using `beginPath()`.
   - Creates a new path. Once created, future drawing commands are directed into the path and used to build the path up. Internally, paths are stored as a list of sub-paths (lines, arcs, etc) which together form a shape. Every time this method is called, the list is reset and we can start drawing new shapes.
2. Use various functions to define the path.
3. Close the path using `closePath()`.
   - This method tries to close the shape by drawing a straight line from the current point to the start. If the shape has already been closed or there's only one point in the list, this function does nothing.
   - Note that the path, at this point, is invisible.
4. Stroke or fill the path to render it onto the screen.

For example, drawing a triangle would look something like this:

```javascript
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

context.beginPath();
context.moveTo(75, 50);
context.lineTo(100, 75);
context.lineTo(100, 25);
context.closePath();
context.fill();
```

### Arcs

To draw a circle, we must use the `arc` method:

```javascript
arc(x, y, radius, startAngle, endAngle, direction);
```

`x` and `y` are the coordinates of the center of the circle on which the arc should be drawn. `radius` is self-explanatory. The `startAngle` and `endAngle` parameters define the start and end points of the arc in **radians**, along the curve of the circle. These are measured from the x axis. The `direction` parameter is a boolean value which, when true, draws the arc counter-clockwise; otherwise, the arc is drawn clockwise.

>**Note**: Angles in the `arc` function are measured in **radians, not degrees**. To convert degrees to radians you can use the following JavaScript expression: `radians = (Math.PI / 180) * degrees`.

## 🏃‍♀️ Animation

Animation is simply viewing a series of pictures one after the other in a small period of time. This creates the illusion that things are moving on the page.

![Animation](7.2.3-Animation.gif)

If we think of animating our canvas like a flipbook, what we have to do is essentially:

1. Draw a shape on the canvas.
2. Erase the shape from the canvas.
3. Redraw that shape but in a slightly new position.
4. Repeat steps 1-3 ad infinitum.

To create this animation loop, we'll use the following function:

```javascript
function animate() {
    requestAnimationFrame(animate);
}
```

Anything in here now will be run over and over again. Therefore, we can do something like this:

```javascript
let x = 100;

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(x++, 100, 50, 0, 2 * Math.PI);
    context.closePath();
    context.stroke();
}

animate();
```

This will draw a circle on the screen, and on every frame, erase the canvas, and redraw the circle one pixel to the right of where it was before. This creates an animation of a circle travelling towards to the right of the page.

### Animated Bubble

Try implementing a `Bubble` class that contains the properties and functionalities of a bubble object. Here's a template to get you started:

```javascript
class Bubble {
    constructor(x, y) {
        /* Initialize the bubble's properties. */
    }

    draw() {
        /* Code concerning the drawing of the bubble should go here. */
    }

    update() {
        /* Code concerning the manipulation of the bubbles properties should go here. */
        this.draw();
    }
}

let bubble = new Bubble(100, 100);

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    bubble.update();
}
```

As for what the bubble should do, try implementing logic that:

1. Adds an event listener to the canvas and so that the bubble follows the mouse cursor around.
2. Has the bubble spawn in a random location every time the page is refreshed using [Math.random](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) instead of specifying coordinates upon instantiation.
3. Makes the bubble travel in a random direction and when it hits a wall, have it bounce off and travel in a different direction.
4. Creates an array of bubbles and has them change their colour upon collision.

>Notice how we've *encapsulated* all `Bubble` logic into its own class instead of having it inside of the `animate` function. The logic for drawing and updating the bubble has been *abstracted* away into their own separate functions.

## 📝 References

[This exercise steals heavily from the Mozilla developer docs on the Canvas API.](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) Much thanks to them 🙏🏽
