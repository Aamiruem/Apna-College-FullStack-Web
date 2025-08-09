// A lexicalScope.js file would usually demonstrate lexical scope in JavaScript — meaning a function can access variables from the scope where it was defined, not where it’s called.

//     Here’s a simple example you could put in lexicalScope.js:

// javascript
// Copy
// Edit
// lexicalScope.js

const myVar = "I am in the global scope";

function outerFunction() {
    const outerVar = "I am in the outer scope";

    function innerFunction() {
        console.log(myVar);   // Access from global scope
        console.log(outerVar); // Access from outerFunction's scope
    }

    return innerFunction;
}

const myInner = outerFunction();
myInner(); // This still remembers outerVar even after outerFunction has finished
// How This Works
// Lexical scope means that functions remember the scope in which they were declared, not where they are called.

// In the example:

// innerFunction can access:

// outerVar(from outerFunction)

// myVar(from global scope)

// Even after outerFunction() is done running, innerFunction still has access to outerVar — this is called a closure.
