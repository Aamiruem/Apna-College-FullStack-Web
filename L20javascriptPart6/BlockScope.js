// Block Scope => Variables declared inside a {} Block cannot be accessed from outside the block

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






// {
//     let a = 25;
// }

// console.log(a);



// for(let i = 1; i<= 5; i++){
//     console.log(i);// block scope
// }

// console.log(i);



let age = 25;
if(age >= 18){
    let message = "Adult";
    console.log(message);
} else{
    let message = "Not Adult";
}





// they can not be accessed outside the loop in the function
// let age1 = 25;
// if(age1 >= 18){
//     let message = "Adult";
//     console.log(message);
// } else{
// }
// let message = "Not Adult"; // this is show error



function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        let z = 7;
        console.log(x, y, z);
    }
}





function outerFunc(){
    let x = 5;
    let y = 6;

    function innerFunc(){
        let z = 7;
        console.log(x, y, z);
    }
}
outerFunc();

