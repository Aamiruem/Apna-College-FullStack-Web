// set interval


// let count = 0;

// setInterval(() => {
//     console.log(count++);
// }, 1000);

// it will run the function after every 1 sec

// it will run forever until we stop it
// we can stop it by using clearInterval()
// clearInterval(id)




// setInterval( () => {
//     console.log("Hello");
// }, 2000);
// console.log();

// it will run the function after every 2 sec
// it will run forever until we stop it




// setInterval( () => {
//     console.log("Apna College");
// }, 2000);
// console.log();



let id = setInterval( () => {
    console.log("Apna College");
}, 2000);

clearInterval(id);
