// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// // Event delegation approach (recommended)
// ul.addEventListener("click", function (event) {
//     if (event.target.classList.contains("delete")) {
//         let par = event.target.parentElement;
//         console.log(par);
//         par.remove();
//     }
// });











// Select the first <button> element from the page and store in 'btn'
let btn = document.querySelector("button");

// Select the first <ul> element from the page and store in 'ul'
let ul = document.querySelector("ul");

// Select the first <input> element from the page and store in 'inp'
let inp = document.querySelector("input");


// Add a "click" event listener to the button
btn.addEventListener("click", function () {
    // Create a new <li> element (a list item)
    let item = document.createElement("li");

    // Set the text inside <li> equal to whatever is typed in the input box
    item.innerText = inp.value;

    // Create a new <button> element for deleting the item
    let delBtn = document.createElement("button");

    // Give text "delete" to this delete button
    delBtn.innerText = "delete";

    // Add a CSS class "delete" to the delete button
    delBtn.classList.add("delete");

    // Put the delete button inside the <li> item
    item.appendChild(delBtn);

    // Add the new <li> (with text + delete button) into the <ul>
    ul.appendChild(item);

    // Clear the input box after adding the item
    inp.value = "";
});


// Event delegation approach (better way to handle many delete buttons)
ul.addEventListener("click", function (event) {
    // Check if the thing clicked has the class "delete"
    if (event.target.classList.contains("delete")) {
        // Get the parent element of the delete button (which is the <li>)
        let par = event.target.parentElement;

        // Just to check in console what is being removed
        console.log(par);

        // Remove that <li> from the <ul>
        par.remove();
    }
});
