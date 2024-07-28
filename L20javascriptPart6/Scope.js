// function scope

// function checkScope() {
//     let a = 1;
//     if (true) {
//         let b = 2;
//         var c = 3;
//     }
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// checkScope();




// console.log(b); // error b is not defined
// console.log(c); // error c is not defined
// console.log(a); // error a is not defined





// variable scope
// function checkScope2() {
//     if (true) {
//         let a = 1;
//         var b = 2;
//     }
//     console.log(a);
//     console.log(b);
// }

// checkScope2();
// console.log(a); // error a is not defined






function claSum(a, b){
    let sum = a+b;
    return sum;
}

console.log(claSum(1, 2));




let sum = 54; // Global Scope

function printSum(a, b){
    // let sum = a + b;  //function scope
    console.log(sum);
}
console.log(sum); // Global Scope
printSum(1, 3);
