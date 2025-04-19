let primary = ["red", "yellow", "blue"];

primary.indexOf("yellow"); // returns 1
primary.indexOf("green");  // returns -1 (not found)
primary.indexOf("Yellow"); // returns -1 (case-sensitive)
console.log(primary.indexOf("yellow")); // returns 1
console.log(primary.indexOf("green"));  // returns -1 (not found)
console.log(primary.indexOf("Yellow")); // returns -1 (case-sensitive)
console.log(primary.indexOf("red", 1)); // returns -1 (not found)


console.log(primary.includes("green"));   // false
console.log(primary.includes("yellow"))  // true
