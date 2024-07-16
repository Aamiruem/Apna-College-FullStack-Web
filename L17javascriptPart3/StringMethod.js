let str = "Random Numbers";

console.log(str.length);

console.log(str.trim().length);

console.log(str.toUpperCase());

console.log(str.toLowerCase());
console.log(str.slice(0,5));
console.log(str.slice(0,5).toUpperCase());
console.log(str.replace("Random","Randomly"));
console.log(str.replace("Random","Randomly").toUpperCase());
console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5));
console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5).length);

console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5).length+str.replace("Random","Randomly").toUpperCase().slice(0,5).length);

console.log(str.replace("Random","Randomly").toUpperCase().slice(0,5).length+str.replace("Random","Randomly").toUpperCase().slice(0,5).length+str.replace("Random","Randomly").toUpperCase().slice(0,5).length);

console.log(str.includes("Random"));
console.log(str.includes("Randomly"));
