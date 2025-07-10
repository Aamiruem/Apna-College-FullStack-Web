function isGoodString(str) {
    if (str.length > 3 && str[0] === 'a') {
        console.log("Good string");
    } else {
        console.log("Not a good string");
    }
}

// Example:
isGoodString("apple");    // Good string
isGoodString("ant");      // Not a good string (length ≤ 3)
isGoodString("banana");   // Not a good string (doesn’t start with 'a')








let num = 12;
if ((num % 3 === 0) && ((num + 1 === 15) || (num - 1 === 11))) {
    console.log("safe");
} else {
    console.log("unsafe");
}

