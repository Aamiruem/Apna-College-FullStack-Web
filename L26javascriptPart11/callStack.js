// 🔹 What is the Call Stack?

// The call stack is a data structure (LIFO = Last In, First Out) that keeps track of the functions being executed.

// When a function is called, it’s added (pushed) to the stack.

// When the function returns, it’s removed (popped) from the stack.

// 🔹 Example:
function first() {
  console.log("Inside first");
  second();
  console.log("End of first");
}

function second() {
  console.log("Inside second");
  third();
  console.log("End of second");
}

function third() {
  console.log("Inside third");
}

first();

// 🔹 Call Stack Execution (Step by Step):

// first() is called → pushed to stack.
// Stack: [first]

// Inside first, it calls second() → pushed.
// Stack: [first, second]

// Inside second, it calls third() → pushed.
// Stack: [first, second, third]

// third finishes → popped.
// Stack: [first, second]

// second finishes → popped.
// Stack: [first]

// first finishes → popped.
// Stack: [] (empty).
