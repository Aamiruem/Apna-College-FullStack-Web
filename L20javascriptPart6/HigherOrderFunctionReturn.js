// Higher-Order Function: Returns a function based on request
function oddEvenTest(request) {
    if (request === "odd") {
        return function (n) {
            console.log(n % 2 !== 0); // true if n is odd
        };
    } else if (request === "even") {
        return function (n) {
            console.log(n % 2 === 0); // true if n is even
        };
    } else {
        console.log("Wrong request");
    }
}

let oddFunction = oddEvenTest("odd");
let evenFunction = oddEvenTest("even");


const isOdd = oddEvenTest("odd");   // returns a function
const isEven = oddEvenTest("even"); // returns another function

isOdd(5);   // true ✅
isOdd(4);   // false ❌

isEven(10); // true ✅
isEven(3);  // false ❌

oddEvenTest("prime"); // "Wrong request" ❌

console.log(isOdd === oddFunction); // true
