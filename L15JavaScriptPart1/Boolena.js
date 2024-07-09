let isTrue = true;
let isFalse = false;


let boolObject1 = new Boolean(false); // Boolean object



let value1 = Boolean(1); // true
let value2 = Boolean(0); // false



let value3 = !!1; // true
let value4 = !!0; // false



if (false) { /* this code will not run */ }
if (0) { /* this code will not run */ }
if ("") { /* this code will not run */ }
if (null) { /* this code will not run */ }
if (undefined) { /* this code will not run */ }
if (NaN) { /* this code will not run */ }

if (true) { /* this code will run */ }
if (1) { /* this code will run */ }
if ("non-empty string") { /* this code will run */ }
if ({}) { /* this code will run */ } // empty object is truthy
if ([]) { /* this code will run */ } // empty array is truthy






let isLoggedIn = true;

if (isLoggedIn) {
  console.log("Welcome!");
} else {
  console.log("Please log in.");
}



let isTrue1 = true;
console.log(isTrue.toString()); // "true"



let boolObject = new Boolean(true);
console.log(boolObject.valueOf()); // true



let age = 18;
let isAdult = age >= 18;

if (isAdult) {
  console.log("You are an adult.");
} else {
  console.log("You are not an adult.");
}
