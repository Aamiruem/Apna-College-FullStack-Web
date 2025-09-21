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











// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let started = false;
// let level = 0;

// let h2 = document.querySelector("h2");

// // Start game on key press
// document.addEventListener("keypress", function () {
//     if (started == false) {
//         console.log("Game started");
//         started = true;
//         levelUp();
//     }
// });

// function gameFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("flash");
//     }, 250);
// }

// function userFlash(btn) {
//     btn.classList.add("flash");
//     setTimeout(function () {
//         btn.classList.remove("userFlash");
//     }, 250);
// }

// function levelUp() {
//     userSeq = []; // reset user sequence at new level
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() * 4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);

//     gameSeq.push(randColor); // store game sequence
//     console.log("Game sequence:", gameSeq);

//     gameFlash(randBtn);
// }


// function checkAns(idx) {
//     if (userSeq[idx] === gameSeq[idx]) {
//         if (userSeq.length == gameSeq.length) {
//             setTimeout(levelUp, 1000);
//         }
//     } else {
//         h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart.`;

//         // document.querySelector("body").style.backgroundColor = "red";
//         // setTimeout(function () {
//         //     document.querySelector("body").style.backgroundColor = "white";
//         // }, 150);
//         // reset();

//         playSound("wrong");
//         document.body.classList.add("game-over");
//         setTimeout(() => {
//             document.body.classList.remove("game-over");
//         }, 200);
//         reset();
//     }
// }

// // function btnPress() {
// //     let btn = this;
// //     userFlash(btn);

// //     let userColor = btn.classList[1]; // get the color from class
// //     userSeq.push(userColor);

// //     console.log("User sequence:", userSeq);
// // }




// function btnPress() {
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length - 1);
// }


// // Attach click listeners to all buttons
// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//     btn.addEventListener("click", btnPress);
// }

// //for sound use
// function playSound(color) {
//     let audio = new Audio(`${color}.mp3`);
//     audio.play();
// }

// function reset() {
//     started = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
//     h2.innerHTML = "Press any key to start";
// }









let gameSeq = [];
        let userSeq = [];

        let btns = ["yellow", "red", "purple", "green"];

        let started = false;
        let level = 0;

        let h2 = document.querySelector("h2");

        // Start game on key press
        document.addEventListener("keypress", function() {
            if (started == false) {
                console.log("Game started");
                started = true;
                levelUp();
            }
        });

        function gameFlash(btn) {
            btn.classList.add("flash");
            setTimeout(function() {
                btn.classList.remove("flash");
            }, 250);
        }

        function userFlash(btn) {
            btn.classList.add("userFlash");
            setTimeout(function() {
                btn.classList.remove("userFlash");
            }, 250);
        }

        function levelUp() {
            userSeq = []; // reset user sequence at new level
            level++;
            h2.innerText = `Level ${level}`;

            let randIdx = Math.floor(Math.random() * 4); // Fixed: should be 4, not 3
            let randColor = btns[randIdx];
            let randBtn = document.querySelector(`#${randColor}`);

            gameSeq.push(randColor); // store game sequence
            console.log("Game sequence:", gameSeq);

            gameFlash(randBtn);
        }

        function checkAns(idx) {
            if (userSeq[idx] === gameSeq[idx]) {
                if (userSeq.length == gameSeq.length) {
                    setTimeout(levelUp, 1000);
                }
            } else {
                h2.innerHTML = `Game Over! Your score was <b>${level}</b><br>Press any key to restart.`;

                playSound("wrong");
                document.body.classList.add("game-over");
                setTimeout(() => {
                    document.body.classList.remove("game-over");
                }, 200);
                reset();
            }
        }

        function btnPress() {
            let btn = this;
            userFlash(btn);

            let userColor = btn.getAttribute("id");
            userSeq.push(userColor);

            checkAns(userSeq.length - 1);
        }

        // Attach click listeners to all buttons
        let allBtns = document.querySelectorAll(".btn");
        for (btn of allBtns) {
            btn.addEventListener("click", btnPress);
        }

        // For sound use (placeholder - you'll need actual sound files)
        function playSound(color) {
            console.log(`Playing sound for ${color}`);
            // Uncomment below when you have sound files
            let audio = new Audio(`${color}.mp3`);
            audio.play();
        }

        function reset() {
            started = false;
            gameSeq = [];
            userSeq = [];
            level = 0;
            h2.innerHTML = "Press any key to start";
        }
