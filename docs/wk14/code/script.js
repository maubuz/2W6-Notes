class Person {
    constructor(name, surname, city, str) {
        this.firstName = name;
        this.lastName = surname;
        this.address = {
            city: city,
            street: str
        };
    }

    greeting() {
        console.log("Hello!");
    }

    introduceMyself() {
        console.log("Hi, my name is " + this.firstName);
        console.log("I live in " + this.address.city);
    }
}

let me = new Person("Mauricio", "Buschinelli", "Montreal", "Broadway", 1000);
me.introduceMyself();

const canvas = document.getElementsByTagName('canvas')[0];
const context = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;


let xPos = 50;
let radius = 20;
let velocity = 2;

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();

    if (xPos === (canvas.width - radius) || xPos === radius ) {
        velocity *= -1

    }
        context.arc(xPos+=velocity, 100, radius, 0, 2 * Math.PI);

    context.closePath();
    context.stroke();
}

animate();