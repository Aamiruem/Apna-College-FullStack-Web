// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let min = Math.min(arr);

// console.log(min);





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let min = Math.min(...arr); //three dot means spread value to find the min and max
console.log("min value = ", min);


// let arr2 = [...arr, 10, 11, 12, 13, 14, 15]; //spread operator
let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let max1 = Math.max(...arr); //three dot means spread value to find the min and max

console.log("max value = ", max1);
