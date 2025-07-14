// QS For the given String

let msg = "help!";

// Trim it & convert it to Uppercase

// sol:

let newMsg = msg.trim().toUpperCase();
console.log(newMsg);



// QS. For the String-> let name = "Apnacollege", Predict the output for the following:

// name.slice(4, 9)
// name.indexOf("na")
// name.replace("Apna", "Our")
// name.replaceAll("a", "o")
// name.repeat(2)


// solution:
let name = "Apnacollege";
console.log(name.slice(4, 9)); // "Colle"
console.log(name.indexOf("na")); // na is at starting index 2
console.log(name.replace("Apna", "Our")); // "OurCollege"
console.log(name.replaceAll("a", "o")); // "opnoColleoge"
console.log(name.repeat(2)); // "ApnaCollegeApnaCollege"


// QS Separate college part in above string and replace with l and t

// solution:

console.log(name.slice(4, 11)); // "College"
console.log(name.slice(4).replace('l', 't').replace('l', 't')); // cottege
