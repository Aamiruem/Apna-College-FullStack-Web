let  color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("invalid color");
}


// let color = prompt("Enter your color: whatever you choose");

// switch (color.toLowerCase()) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid color");
// }





let days = 1;

switch (days) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}




// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter your color: whatever you choose\n', (color) => {
//     switch (color.toLowerCase()) {
//         case "red":
//             console.log("Stop");
//             break;
//         case "yellow":
//             console.log("Ready");
//             break;
//         case "green":
//             console.log("Go");
//             break;
//         default:
//             console.log("Invalid color");
//     }
//     rl.close();
// });




// let day = prompt("Enter a day of the week:");

// switch (day.toLowerCase()) {
//     case "monday":
//         console.log("Start of the work week.");
//         break;
//     case "tuesday":
//         console.log("Second day of the work week.");
//         break;
//     case "wednesday":
//         console.log("Midweek day.");
//         break;
//     case "thursday":
//         console.log("Almost the end of the work week.");
//         break;
//     case "friday":
//         console.log("Last day of the work week.");
//         break;
//     case "saturday":
//         console.log("Weekend! Time to relax.");
//         break;
//     case "sunday":
//         console.log("Weekend! Time to prepare for the upcoming week.");
//         break;
//     default:
//         console.log("Invalid day of the week.");
// }



const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a day of the week:\n', (day) => {
    switch (day.toLowerCase()) {
        case "monday":
            console.log("Start of the work week.");
            break;
        case "tuesday":
            console.log("Second day of the work week.");
            break;
        case "wednesday":
            console.log("Midweek day.");
            break;
        case "thursday":
            console.log("Almost the end of the work week.");
            break;
        case "friday":
            console.log("Last day of the work week.");
            break;
        case "saturday":
            console.log("Weekend! Time to relax.");
            break;
        case "sunday":
            console.log("Weekend! Time to prepare for the upcoming week.");
            break;
        default:
            console.log("Invalid day of the week.");
    }
    rl.close();
});
















// The switch statement is a control structure that allows you to execute different code blocks based on the value of an expression.It's a cleaner alternative to multiple if-else statements when checking a single variable against multiple possible values.

// Syntax
// javascript
switch (expression) {
    case value1:
        // Code to execute if expression === value1
        break;
    case value2:
        // Code to execute if expression === value2
        break;
    default:
    // Code to execute if no case matches
}
// How It Works
// The expression is evaluated once.

// Its value is compared with each case.

// If a match is found, the corresponding code block runs.

// break exits the switch (prevents "fall-through").

// If no match is found, the default case runs.

//     Example: Day of the Week
// javascript
const day = "Monday";

switch (day.toLowerCase()) {
    case "monday":
        console.log("Start of the work week!");
        break;
    case "tuesday":
        console.log("Second day of the week.");
        break;
    case "wednesday":
        console.log("Midweek day.");
        break;
    case "thursday":
        console.log("Almost Friday!");
        break;
    case "friday":
        console.log("Weekend is near!");
        break;
    case "saturday":
    case "sunday":
        console.log("It's the weekend! 🎉");
        break;
    default:
        console.log("Invalid day.");
}
// Output:

// text
// Start of the work week!
// Key Features
// 1️⃣ Case Sensitivity
// By default, switch is case -sensitive.

// Use toLowerCase() or toUpperCase() for case -insensitive checks.

// 2️⃣ break Statement
// Without break, execution "falls through" to the next case.

//         javascript
let fruit = "apple";

        switch (fruit) {
            case "apple":
                console.log("Apple selected.");
            // Missing break → falls through!
            case "banana":
                console.log("Banana selected."); // Also runs!
                break;
        }
//         Output:

//         text
// Apple selected.
// Banana selected.
// 3️⃣ Grouping Cases
// Multiple cases can share the same code:

//         javascript
        switch (day) {
            case "saturday":
            case "sunday":
                console.log("Weekend!");
                break;
            default:
                console.log("Weekday.");
        }
//         4️⃣ default Case
// Runs if no other case matches.

// Optional but recommended for handling unexpected values.

// When to Use switch vs if-else
//             switch	if-else
// Best for single - variable comparisons	Best for range checks & complex conditions
// More readable for many fixed cases	More flexible for dynamic conditions
// Uses strict equality(===)	Can use >, <, &&, `		`, etc.
//             Real - World Example: Calculator
//         javascript
        const operator = "+";
        const num1 = 10, num2 = 5;
        let result;

        switch (operator) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "*":
                result = num1 * num2;
                break;
            case "/":
                result = num1 / num2;
                break;
            default:
                result = "Invalid operator";
        }

        console.log(result); // Output: 15
// Conclusion
// Use switch for multiple fixed - value checks(like menus, days, calculator operations).

// Always include break to prevent fall - through(unless intentional).

//     default is useful for error handling.

// For complex conditions, if-else is better.
