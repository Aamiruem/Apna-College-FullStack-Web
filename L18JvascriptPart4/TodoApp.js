// let todo = [];
// // let prompt = require("prompt-sync")();
// let req = prompt("please enter your request: ");

// while (true) {
//     if (req === "quit") {
//         console.log("Quitting app...");
//         break;
//     }

//     if (req === "list") {
//         console.log("-------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(`${i}: ${todo[i]}`);
//         }
//         console.log("-------------");
//     } else if (req === "add") {
//         let task = prompt("Please enter the task you want to add: ");
//         todo.push(task);
//         console.log("Task added.");
//     } else if (req === "delete") {
//         let idx = parseInt(prompt("Please enter the index of the task you want to delete: "));
//         if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
//             todo.splice(idx, 1);
//             console.log("Task deleted.");
//         } else {
//             console.log("Invalid index.");
//         }
//     } else {
//         console.log("Invalid request.");
//     }

//     req = prompt("please enter your request: ");
// }






let todo = [];
// let prompt = require("prompt-sync")();

while (true) {
    let req = prompt("Please enter your request (list/add/delete/quit): ").toLowerCase();

    if (req === "quit") {
        console.log("Quitting app...");
        break;
    }
    else if (req === "list") {
        console.log("-------------");
        for (let task of todo) {
            console.log(task);
        }
        console.log("-------------");
    }
    else if (req === "add") {
        let task = prompt("Please enter the task you want to add: ");
        todo.push(task);
        console.log("Task added.");
    }
    else if (req === "delete") {
        let idx = parseInt(prompt("Please enter the index of the task you want to delete: "));
        if (!isNaN(idx) && idx >= 0 && idx < todo.length) {
            todo.splice(idx, 1);
            console.log("Task deleted.");
        } else {
            console.log("Invalid index.");
        }
    }
    else {
        console.log("Invalid request. Please enter 'list', 'add', 'delete', or 'quit'.");
    }
}
