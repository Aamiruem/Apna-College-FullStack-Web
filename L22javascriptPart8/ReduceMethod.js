// arr.reduce(reducer function with 2 variables for (accumulator, element));
// reducer function is a function that takes 2 variables and returns a value
// accumulator is the value that is returned from the previous iteration
// element is the value of the current iteration





let nums = [1, 2, 3, 4, 5];

let sum = nums.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// accumulator = result short form as res 

let num = [1, 2, 3, 4];

let sum1 = num.reduce((res, ele) => (res + ele));

console.log(sum1);
