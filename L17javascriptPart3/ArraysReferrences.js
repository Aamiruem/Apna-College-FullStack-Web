// Arrays References

let primary = ["red", "green", "blue", "yellow"];

let secondary = primary;

console.log(secondary);

console.log(primary);

console.log(secondary === primary);

console.log(secondary === primary);

console.log(secondary == primary);
// output: true true true true

secondary.push("pink");

console.log(primary);

console.log(secondary);

console.log(secondary === primary);

console.log(secondary == primary);
// output: [ 'red', 'green', 'blue', 'yellow', 'pink' ] [ 'red', 'green', 'blue', 'yellow', 'pink' ] true true true



let arr = ['a', 'b'];

let arrCopy = arr;

console.log(arrCopy);

console.log(arr);

console.log(arrCopy === arr);

console.log(arrCopy == arr);

arrCopy.push('c');

console.log(arr);

console.log(arrCopy);

console.log(arrCopy === arr);

console.log(arrCopy == arr);
// output: [ 'a', 'b' ] [ 'a', 'b' ] true true [ 'a', 'b', 'c' ] [ 'a', 'b', 'c' ] true true


arr.push('d');

console.log(arr);

console.log(arrCopy);

console.log(arrCopy === arr);

console.log(arrCopy == arr);
