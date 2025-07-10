// alert(), prompt(), and confirm() in JavaScript
// These are browser - based functions used for simple user interactions.They block code execution until the user responds.

// 1. alert() - Display a Message
// Shows a popup with a message and an "OK" button.

//     Syntax: alert(message)

// javascript
alert("Welcome to our website!"); // Basic alert
alert(`Today is ${new Date().toDateString()}`); // With dynamic content
// 2. prompt() - Get User Input
// Shows a popup with:

// A message

// An input field

// "OK" and "Cancel" buttons

// Returns:

// The entered string if "OK" is clicked

// null if "Cancel" is clicked

// javascript
const userName = prompt("Please enter your name:");

if (userName) {
    alert(`Hello, ${userName}!`);
} else {
    alert("You didn't enter a name.");
}
// Default Value in prompt()
// You can provide a default input value:

// javascript
const ages = prompt("Enter your age:", "18"); // "18" is the default
// 3. confirm() - Yes / No Confirmation
// Shows a popup with:

// A question

// "OK"(true) and "Cancel"(false) buttons

// Returns true if "OK" is clicked, false if "Cancel" is clicked

// javascript
const wantsSubscription = confirm("Would you like to subscribe to our newsletter?");

if (wantsSubscription) {
    alert("Thank you for subscribing!");
} else {
    alert("Maybe next time!");
}
// Key Characteristics
// Blocking Behavior: Pauses JavaScript execution until the user responds

// Styling Limitations: Cannot be customized(appearance depends on the browser)

// No HTML: Only plain text is supported in messages

// Modern Alternatives
// For better user experience, modern web apps typically use:

// Modal libraries(SweetAlert, Bootstrap Modals)

// Custom HTML dialogs(<dialog> element)

//     Form-based inputs

//     Complete Example
//     javascript
// Get user information
    
    const name = prompt("What's your name?");
    const age = prompt("How old are you?", "18");
    const isStudent = confirm("Are you a student?");

    // Display summary
    alert(`
    User Details:
    Name: ${name}
    Age: ${age}
    Student: ${isStudent ? "Yes" : "No"}
    `);
