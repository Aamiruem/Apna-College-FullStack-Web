const sum = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const mod = (a, b) => a % b;

const pow = (a, b) => a ** b;

const cube = (a) => Math.pow(a, 3);

const square = (a) => Math.pow(a, 2);

const abs = (a) => Math.abs(a);

const sqrt = (a) => Math.sqrt(a);

const cubeRoot = (a) => Math.cbrt(a);
const g = 9.8;
const PI = 3.14;



// module.exports = {
//     sum,
//     subtract,
//     multiply,
//     divide,
//     mod,
//     pow,
//     cube,
//     square,
//     abs,
//     sqrt,
//     cubeRoot,
//     g,
//     PI
// }

// module.exports = "Hello Kamran";

// module.exports = {};



let obj = {
    sum: sum,
    subtract: subtract,
    multiply: multiply,
    divide: divide,
    mod: mod,
    pow: pow,
    cube: cube,
    square: square,
    abs: abs,
    sqrt: sqrt,
    cubeRoot: cubeRoot,
    g: g,
    PI: PI
}
module.exports = obj;
