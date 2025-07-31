// 🔹 What is a Method ?
//     In JavaScript, a method is simply a function that is a property of an object.

//         javascript
// Copy
// Edit
let person = {
    name: "Aamir",
    greet: function () {
        console.log("Hello!");
    }
};

person.greet(); // ✅ "Hello!"
// 🔸 greet is a method of the person object.

// ✅ Declaring Methods – 3 Ways
// 1. Regular Function Expression
// javascript
// Copy
// Edit
let obj1 = {
    sayHi: function () {
        console.log("Hi!");
    }
};
obj1.greet()
// 2. ES6 Shorthand Syntax
// javascript
// Copy
// Edit
let obj2 = {
    sayHi() {
        console.log("Hi!");
    }
};
obj2.greet()
// 3. Arrow Function(⚠️ Be careful with this)
// javascript
// Copy
// Edit
let obj3 = {
    name: "Aamir",
    greet: () => {
        console.log(`Hello, ${this.name}`);
    }
};
obj3.greet(); // ⚠️ 'this' is not bound correctly
// Arrow functions don’t bind their own this, so they're not recommended for object methods when this is needed.

// 🔹 Accessing Object Properties inside Methods using this
// javascript
// Copy
// Edit
let car = {
    brand: "Toyota",
    start() {
        console.log(`${this.brand} is starting...`);
    }
};

car.start(); // ✅ Toyota is starting...
// 🧠 Built -in Methods in JavaScript
// ✅ Array Methods:
// push(), pop(), map(), filter(), reduce(), forEach(), etc.

// ✅ String Methods:
// toUpperCase(), toLowerCase(), slice(), includes(), replace(), etc.

// ✅ Object Methods:
// Object.keys(), Object.values(), Object.entries(), hasOwnProperty()

// 🔸 Custom Method Example
// javascript
// Copy
// Edit
let calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    }
};

console.log(calculator.add(5, 3)); // 8
console.log(calculator.subtract(10, 4)); // 6
// ✅ Summary Table
// Term	Meaning
// Function	Reusable block of code
// Method	Function that belongs to an object
// this	Refers to the object that called the method
