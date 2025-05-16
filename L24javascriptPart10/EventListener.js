// let btn = document.querySelector("button");
// console.dir(btn);
// btn.onclick = function (event) {
//     console.log(event);
//     console.log("button was clicked");
//     console.log(event.clientX);
//     alert("button was clicked");
// };

// for(btn of btns) {
//     console.dir(btn);
//     btn.onclick = function (event) {
//         console.log(event);
//         console.log("button was clicked");
//         console.log(event.clientX);
//         alert("button was clicked");
//     };
// }




//this is a button event listener example
let btns = document.querySelectorAll("button");
console.dir(btns);
btns.addEventListener(click, "sayHello");

function sayHello() {
    console.log("Hello");
}

function sayName() {
    console.log("Hello");
}


btn.addEventListener("click", function (event) {
    console.log(event);
    console.log("button was clicked");
    console.log(event.clientX);
    alert("button was clicked");
});
