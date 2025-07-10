let age = 19;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}


let color = "red";

if (color == "red") {
    console.log("Stop!");
} else if (color == "yellow") {
    console.log("Ready");
} else if (color == "green") {
    console.log("Go");
} else {
    console.log("Invalid color");
}




const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a day of the week: ", function (day) {
    day = day.toLowerCase(); // Make input case-insensitive

    if (day === "monday") {
        console.log("Start of the work week.");
    } else if (day === "tuesday") {
        console.log("Second day of the work week.");
    } else if (day === "wednesday") {
        console.log("Midweek day.");
    } else if (day === "thursday") {
        console.log("Almost the end of the work week.");
    } else if (day === "friday") {
        console.log("Last day of the work week.");
    } else if (day === "saturday") {
        console.log("Weekend! Time to relax.");
    } else if (day === "sunday") {
        console.log("Weekend! Time to prepare for the upcoming week.");
    } else {
        console.log("Invalid day of the week.");
    }

    rl.close();
});















const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a day of the week: ', (day) => {
    day = day.toLowerCase(); // Convert input to lowercase for case-insensitive comparison

    if (day === "monday") {
        console.log("Start of the work week.");
    } else if (day === "tuesday") {
        console.log("Second day of the work week.");
    } else if (day === "wednesday") {
        console.log("Midweek day.");
    } else if (day === "thursday") {
        console.log("Almost the end of the work week.");
    } else if (day === "friday") {
        console.log("Last day of the work week.");
    } else if (day === "saturday") {
        console.log("Weekend! Time to relax.");
    } else if (day === "sunday") {
        console.log("Weekend! Time to prepare for the upcoming week.");
    } else {
        console.log("Invalid day of the week.");
    }

    readline.close();
});
