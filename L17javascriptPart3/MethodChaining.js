let msg = "  Hello  ";
let newMsg = msg.trim();

console.log("After trim: ", newMsg);
// we can also do this in one line
newMsg = newMsg.toUpperCase();
console.log("After Uppercase: ", newMsg);

// Method Chaining

let msg1 = "  Hello  ";

console.log(msg1.trim().toUpperCase());





function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem("name", myName);
        myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}
