let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

// Event listener for <div>
div.addEventListener("click", function () {
    console.log("div was clicked");
});

// Event listener for <ul>
ul.addEventListener("click", function (event) {
    console.log("ul was clicked");
});

// Event listeners for each <li>
for (let li of lis) {
    li.addEventListener("click", function (event) {
        event.stopPropagation(); // Prevent bubbling up to ul and div
        console.log("li was clicked");
    });
}
