// let p = document.querySelector('p');
// p.addEventListener('click', function () {
//     this.style.color = 'green';
// });

// let box = document.querySelector('.box');

// box.addEventListener('click', function () {
//     this.style.backgroundColor = 'red';
// });

// box.addEventListener('mouseover', function () {
//     this.style.backgroundColor = 'blue';
// });

// box.addEventListener('mouseout', function () {
//     this.style.backgroundColor = 'yellow';

//     setTimeout(() => {
//         this.style.backgroundColor = 'orange';
//     }, 1000);

//     setTimeout(() => {
//         this.style.backgroundColor = 'red';
//     }, 2000);
// });



let p = document.querySelector("p");
p.addEventListener("click", function () {
    console.log("para was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function () {
    console.log("mouse inside div");
});
