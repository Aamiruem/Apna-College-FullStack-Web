// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2")

// document.addEventListener("keypress", function () {
//     if (started == false) {
//         console.log("game is started");
//         started = true;
//         levelUp();
//     }
// })

// function btnFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 2000)
// }

// function levelUp() {
//     level++;
//     h2.innerText = `Level ${level}`;
//     let randIdx = Math.floor(Math.random() * 3)
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     console.log(randIdx);
//     console.log(randColor)
//     console.log(randBtn);
//     btnFlash(randBtn);
// }


// function btnPress() {
//     console.log("btn was pressed");
//     let btn = this;
//     btnFlash(btn);
// }

// let allBtns = document.querySelectorAll("..btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }











let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// Start game on key press
document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game started");
        started = true;
        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 300);
}

function levelUp() {
    userSeq = []; // reset user sequence at new level
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * btns.length);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor); // store game sequence
    console.log("Game sequence:", gameSeq);

    btnFlash(randBtn);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    let userColor = btn.classList[1]; // get the color from class
    userSeq.push(userColor);

    console.log("User sequence:", userSeq);
}

// Attach click listeners to all buttons
let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
