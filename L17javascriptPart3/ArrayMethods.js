// push=> add to end
//pop=> delete from end and returns it

// Unshift => add to start
// shift => delete from start and returns it


let cars = ["audi", "bmw", "xuv", "maruti"];
console.log(cars);
cars.push("honda");
console.log(cars);



cars.push("Toyota");
console.log(cars);

cars.unshift("Toyota");
console.log(cars);


cars.unshift("Ferrari");
console.log(cars);

cars.shift();
console.log(cars);


cars.pop("xuv");
console.log(cars);
// splice(start, deleteCount, item1, item2, item3, ...)
// console.log(cars.pop("xuv"));
console.log(cars.pop());
