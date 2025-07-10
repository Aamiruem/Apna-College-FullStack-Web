let popcorn = "XL";
let price;


if (popcorn == "XL") {
    price = "250";
} else if (popcorn == "L") {
    price = "200";
} else if (popcorn == "M") {
    price = "150";
} else if (popcorn == "s") {
    price = "100";
} else {
    price = "Invalid size";
}
console.log("Price of " + popcorn + " popcorn is " + price);
















const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter popcorn size (XL, L, M, or S): ', (size) => {
    size = size.toUpperCase(); // Convert input to uppercase for case-insensitive comparison

    let price;

    if (size === "XL") {
        price = 250;
    } else if (size === "L") {
        price = 200;
    } else if (size === "M") {
        price = 100;
    } else if (size === "S") {
        price = 50;
    } else {
        console.log("Invalid size entered. Please choose XL, L, M, or S.");
        readline.close();
        return;
    }

    console.log(`Price for size ${size}: Rs. ${price}`);
    readline.close();
});








const readlines = require('readlines').createInterface({
    input: process.stdin,
    output: process.stdout
});

readlines.question('Enter popcorn size (XL, L, M, or S): ', (size) => {
    size = size.toUpperCase();
    let price;

    switch (size) {
        case 'XL':
            price = 250;
            break;
        case 'L':
            price = 200;
            break;
        case 'M':
            price = 100;
            break;
        case 'S':
            price = 50;
            break;
        default:
            console.log("Invalid size entered. Please choose XL, L, M, or S.");
            readline.close();
            return;
    }

    console.log(`Price for size ${size}: Rs. ${price}`);
    readlines.close();
});
