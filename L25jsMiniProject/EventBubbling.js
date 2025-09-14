let div = document.querySelector("div");
let ul = document.querySelector("ul");
let list = document.querySelectorAll("li");

// Event listener for <div>
div.addEventListener("click", function () {
    console.log("div was clicked");
});

// Event listener for <ul>
ul.addEventListener("click", function (event) {
    event.stopPropagation(); //stop bubbling up to div
    console.log("ul was clicked");
});

// Event listeners for each <li>
for (let li of list) {
    li.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent bubbling up to ul and div
        console.log("li was clicked");
    });
}
