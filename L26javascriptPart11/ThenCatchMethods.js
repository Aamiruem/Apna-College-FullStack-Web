// let request = savetoDb("apna college");// request = promises object

// request
//     .then((data)=> {
//         console.log("promise was resolved");
//         console.log(request)
//     })
//     .catch((data)=> {
//         console.log("promise was rejected");
//         console.log(request)
//     })





// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         resolve("success: data was saved");
        
//     } else{
//         reject("failure: week connection");
//     }
// });
// }

// savetoDb("apna college") // request = promises object
//     .then(()=> {
//         console.log("promise was resolved");
//     })
//     .catch(()=> {
//         console.log("promise was rejected");
//     })










// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         resolve("success: data was saved");
        
//     } else{
//         reject("failure: week connection");
//     }
// });
// }

// savetoDb("apna college") // request = promises object
//     .then(()=> {
//         console.log("data1 saved");
//         return savetoDb("kamran");
    
//     })
//     .then(() =>{
//         console.log("data2 saved");
//         return savetoDb("kamran");
//     })
//     .then(() =>{
//         console.log("data3 saved");
//     })
//     .catch(()=> {
//         console.log("promise was rejected");
//     })









// function savetoDb(data){
//     return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4){
//         resolve("success: data was saved");
        
//     } else{
//         reject("failure: week connection");
//     }
// });
// }

// savetoDb("apna college") // request = promises object
//     .then((result)=> {
//         console.log("data1 saved");
//         console.log("result of promise: " , result);
//         return savetoDb("kamran");
    
//     })
//     .then((result) =>{
//         console.log("data2 saved");
//         console.log("result of promise: " , result);
//         return savetoDb("kamran");
//     })
//     .then((result) =>{
//         console.log("data3 saved");
//         console.log("result of promise: " , result);
//     })
//     .catch((error)=> {
//         console.log("promise was rejected");
//         console.log("error of promise: " ,error);
//     })










// h1 = document.querySelector("h1");
// function changeColor(color, delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color changed!")
//         }, delay);
//     })
// }
// changeColor("red", 1000)
// .then(() =>{
//     console.log("red color was completed");
//     return changeColor("orange", 1000);
// })

// .then(() =>{
//     console.log("orange color was completed");
//     return changeColor("green", 1000);
// })

// .then(() =>{
//     console.log("green color was completed");
//     return changeColor("blue", 1000);
// })

// .then(() =>{
//     console.log("blue color was completed");
//     // return changeColor("orange", 1000);
// })







// function savetoDB(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = Math.floor(Math.random() * 10) + 1;
//         console.log(`Checking internet speed: ${internetSpeed}`);

//         setTimeout(() => {
//             console.log(`Attempting to save ${data} to database...`);
//             if (internetSpeed > 4) {
//                 resolve(`Data "${data}" saved successfully!`);
//             } else {
//                 reject("Failure: Weak internet connection.");
//             }
//         }, 1000);
//     });
// }

// // Dummy changeColor function (for testing)
// function changeColor(color, delay) {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             document.querySelector("h1").style.color = color;
//             resolve();
//         }, delay);
//     });
// }

// let request = savetoDB("Apna College");
// request
//     .then((result) => {
//         console.log("Promise was resolved");
//         console.log(result);
//         return changeColor("orange", 1000);
//     })
//     .then(() => {
//         console.log("Orange color was completed");
//         return changeColor("green", 1000);
//     })
//     .then(() => {
//         console.log("Green color was completed");
//         return changeColor("blue", 1000);
//     })
//     .then(() => {
//         console.log("Blue color was completed");
//         return changeColor("yellow", 1000);
//     })
//     .catch((err) => {
//         console.log("Promise was rejected");
//         console.log(err);
//     });











function saveToDBPromise(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        console.log(`Internet speed: ${internetSpeed}`);

        setTimeout(() => {
            console.log(`Saving "${data}" to database...`);
            if (internetSpeed > 4) {
                resolve(`Success: "${data}" saved.`);
            } else {
                reject(`Failure: Could not save "${data}" due to weak connection.`);
            }
        }, 1000);
    });
}

// Using the promise chain
saveToDBPromise("apnacollege")
    .then((result) => {
        console.log("Promise resolved:", result);
        return saveToDBPromise("hello world");
    })
    .then((result) => {
        console.log("Promise resolved:", result);
    })
    .catch((err) => {
        console.log("Some promise was rejected:");
        console.log(err);
    });
