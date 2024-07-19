// splice => removes / replace / add elements in place

// splice(start, deleteCount, item0........itemN)
// splice(start, deleteCount) => removes elements from start index to deleteCount
// splice(start) => removes elements from start index to end
// splice(start, deleteCount, item0........itemN) => removes elements from start index to deleteCount and add item0........itemN at start index
// splice(start, deleteCount, item0........itemN) => removes elements from start index to deleteCount and add item0........itemN at start index


let colors = ["red", "yellow", "blue", "orange", "pink", "white"];

console.log(colors);

// console.log(colors.splice());
// console.log(colors.splice(4));

// console.log(colors.splice(0));

// console.log(colors.splice(0, 1));

// console.log(colors.splice(2, 4));

// console.log(colors.splice(0, 6));

console.log(colors.splice(-1));

// console.log(colors.splice(-2));

// console.log(colors.splice(-3, -2));
// console.log(colors);
// console.log(colors.splice(-1, -3));
// console.log(colors.splice(-5, -3, "black", "green")); 

// console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW"));
console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes"));
console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes", "Ferrari"));


console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti"));
console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini"));
console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini", "Rolls Royce"));
console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini", "Rolls Royce", "McLaren"));

console.log(colors);

console.log(colors.splice(0, 0, "Audi", "BMW", "Mercedes", "Ferrari", "Bugatti", "Lamborghini", "Rolls Royce", "McLaren", "Honda"));
console.log(colors);
