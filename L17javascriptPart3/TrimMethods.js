// The trim() method in JavaScript is used to remove whitespace
// from both ends of a string (but not from the middle).

let rawString = "   Hello, World!   ";

let trimmedString = rawString.trim();

console.log(trimmedString); // Output: "Hello, World!"

/*
Explanation:
- "   Hello, World!   " contains spaces before and after the actual text.
- rawString.trim() removes all the leading (start) and trailing (end) white spaces.
- The original string remains unchanged; trim() returns a new string.
*/

// Note: It does not affect whitespace between words.
let spaced = "   Hello   World!   ";
console.log(spaced.trim()); // Output: "Hello   World!"



// Importing the prompt-sync package to take user input in Node.js.
// { sigint: true } allows the user to exit with Ctrl+C safely.

const prompt = require('prompt-sync')({ sigint: true });

// Asking the user to set a password
let password = prompt("Set your password: ");

// Using trim() to remove leading and trailing whitespaces from the password
let newPass = password.trim();

// Showing the trimmed password (for testing/demo purposes)
console.log(newPass); // e.g., if user enters "  Hello   World!  ", this will output: "Hello   World!"

// Asking the user to confirm the password
let confirmPassword = prompt("Confirm your password: ");

// Comparing the trimmed versions of both passwords
if(password.trim() === confirmPassword.trim()){
    console.log("Password matched"); // If both inputs match after trimming
}
else{
    console.log("Password not matched"); // If inputs don't match after trimming
}







// Trim.js
const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Set your password: ", function(password) {
  const trimmedPassword = password.trim();
  console.log("Trimmed Password:", trimmedPassword);
  readline.close();
});
