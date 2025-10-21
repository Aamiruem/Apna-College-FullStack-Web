// Exactly ✅
// These are fun public APIs that return random data — perfect for learning how to use fetch() in JavaScript!
// Let’s go through them one by one 👇

// 🧩 1. Cat Facts API

// URL: https://catfact.ninja/fact

// 📤 What it does: Sends a random cat fact in JSON format.

// Example Output:

// {
//   "fact": "Cats have five toes on their front paws, but only four on the back ones.",
//   "length": 78
// }


// JS Example:

// fetch("https://catfact.ninja/fact")
//   .then(res => res.json())
//   .then(data => console.log(data.fact));


// 🧠 Output in console:

// Cats have five toes on their front paws, but only four on the back ones.

// 🎲 2. Bored API

// URL: https://www.boredapi.com/api/activity

// 📤 What it does: Suggests a random activity to do when you’re bored.

// Example Output:

// {
//   "activity": "Take a bubble bath",
//   "type": "relaxation",
//   "participants": 1,
//   "price": 0.1
// }


// JS Example:

// fetch("https://www.boredapi.com/api/activity")
//   .then(res => res.json())
//   .then(data => console.log("Try this:", data.activity));


// 🧠 Output:

// Try this: Take a bubble bath

// 🐶 3. Dog API

// URL: https://dog.ceo/api/breeds/image/random

// 📤 What it does: Sends a random cute dog image URL.

// Example Output:

// {
//   "message": "https://images.dog.ceo/breeds/labrador/n02099712_5643.jpg",
//   "status": "success"
// }


// JS Example (show image in browser):

// <img id="dog" width="300">
// <script>
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then(res => res.json())
//   .then(data => {
//     document.getElementById("dog").src = data.message;
//   });
// </script>


// 🖼️ Output → Displays a random dog picture on your webpage 🐕💕

// 💡 Summary
// API	Purpose	Example Data
// 🐱 Cat Fact API	Random cat facts	"Cats sleep for 70% of their lives"
// 🎲 Bored API	Suggests activities	"Learn a new language"
// 🐶 Dog API	Random dog images	"https://dog.ceo/...jpg"

// Would you like me to combine all three into a single HTML + JS page with buttons like “Get Cat Fact 🐱”, “Get Dog 🐶”, “I’m Bored 🎲”?
