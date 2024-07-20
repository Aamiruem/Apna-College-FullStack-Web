// Qs5.Write a JavaScript program to strip leading and trailing spaces from a string.
const prompt = require("prompt-sync")();

let str = prompt("please enter a string");
console.log(` original string = ${str} `);

console.log(` string without space = ${str.trim()} `);
