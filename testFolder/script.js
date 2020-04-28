
// Object Creation Long notation

// let person = new Object();  // Create new person object

// person.firstName = "John";
// person.lastName = "Tremblant";
// person.age = 27;

// // console.log(person);

// ==========
// Object Literal Creation 

// let address = {};           // Create new address object

// address.street = "Sherbrooke";
// address.number = 1234;

// console.log(address);

// let car = {
//     make: "Toyota",
//     year: 2019,
//     color: "red"
// };
// console.log(car);

// ==========
// Nested Object Literals

// let person = {
//     firstName: "John",
//     lastName: "Tremblant",
//     age: 27,
//     address: {
//         street: "Sherbrooke",
//         number: 1234
//     }
// };

// console.log(person);
// console.log(person.address.street);

// ==============
// Scope Example

// let myVar = "Global variable";

// function funB() {

//     function myFunc() {
//         let myvar = "Function's variable";

//         console.log(myVar);
//     }
//     myFunc();
// }

// funB();

// =================
// Function Declaration

// function calcRectArea(width, height) {
//     return width * height;
// }

// console.log(calcRectArea(2, 10)); // 20

// function greeting() {
//     console.log("Hello!");
// }

// greeting(); // "Hello!"

// =================
// Function Expression vs Declaration

// let myVar = function foo(a, b) { return a + b; }

// console.log( myVar(1,3) );

// ================
// Function Expression inside Objects

// let myObj_1 = {
//     greeting: "Hello!"
// };

// console.log(myObj_1.greeting);

let myObj_2 = {
    action: function speak(sentence) {
        console.log("Hi there! " + sentence)
    }
};

myObj_2.action('Whats up?');