document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector("button");
    btn.addEventListener("click", function () {
        console.dir(this.innerText);
        console.log("button was clicked");
        this.style.backgroundColor = "red";
        this.style.color = "white";
        this.style.fontSize = "20px";
        this.style.padding = "10px";
        this.style.border = "none";
        this.style.borderRadius = "5px";
        this.style.cursor = "pointer";
        this.style.transition = "all 0.3s ease";
        this.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.5)";
    });
});




// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");

// btn.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// p.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function () {
//     console.dir(this.innerText);
//     this.style.backgroundColor = "blue";
// });



// after Removing the redundant code and adding the event listener to the button, the code becomes more concise and easier to read. The event listener is now added directly to the button element, and the function is defined inline. This makes it clear that the function is only relevant to the button click event, and it avoids the need for separate function declarations for each element.



let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "blue";
}

btn.addEventListener("click", changeColor);
p.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
// The code above adds event listeners to multiple elements (button, paragraph, h1, and h3) and changes their background color to blue when clicked. The changeColor function is defined once and reused for all elements, making the code more efficient and easier to maintain.
