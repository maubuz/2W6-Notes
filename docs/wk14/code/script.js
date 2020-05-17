const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');

canvas.width = 500;
canvas.height = 400;

class Bubble {
    constructor(x, y) {

        this.xPos = x;
        this.yPos = y;
        this.directionX = true;
        this.radius = 10;
        this.speed = 3;
        /* Initialize the bubble's properties. */
    }

    draw() {
        /* Code concerning the drawing of the bubble should go here. */
        context.beginPath();
        context.arc(this.xPos, this.yPos, this.radius, 0, 2 * Math.PI);
        context.closePath();
        context.stroke();
    }

    update() {

        if (this.xPos + this.radius > canvas.width) {
            this.directionX = false;
        } 
        if (this.directionX) {
            this.xPos += this.speed;
        } else if( !this.directionX){
            this.xPos -= this.speed;
        }


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

animate();