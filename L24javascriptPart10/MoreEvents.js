// 1. Name + Submit button
let input = document.querySelector("#name");
let button = document.querySelector("#btn");
let output = document.querySelector("#output");

input.addEventListener("keydown", function (event) {
    console.log("Key pressed:", event.key);
});

button.addEventListener("click", function () {
    let name = input.value.trim();
    output.innerText = name ? `Hello, ${name}!` : "Please enter your name.";
});

// 2. Form with input#user
let form = document.querySelector("form");
let user = document.querySelector("#user");

form.addEventListener("submit", function (event) {
    event.preventDefault();
    console.log("Form submitted");
});

user.addEventListener("input", function () {
    console.log("input event");
    console.log("final value =", this.value);
});

user.addEventListener("change", function () {
    console.log("change event");
    console.log("final value =", this.value);
});

// 3. Live preview input
let inp = document.querySelector("#liveInput");
let p = document.querySelector("#preview");

inp.addEventListener("input", function () {
    console.log("input event");
    console.log("final value =", this.value);
    p.innerText = this.value;
});

inp.addEventListener("change", function () {
    console.log("change event");
    console.log("final value =", this.value);
});
