
// const { faker } = require("@faker-js/faker");

// let createRandomUser = ()=> {
//     return {
//     userId: faker.string.uuid(),
//     username: faker.internet.userName(),
//     email: faker.internet.email(),
//     avatar: faker.image.avatar(),
//     password: faker.internet.password(),
//     birthdate: faker.date.birthdate(),
//     registeredAt: faker.date.past(),
//     };
// }
// console.log(createRandomUser())






const { faker } = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');

app.set("view engine ", "ejs");
app.use("views", path.join(__dirname, "/views"));
app.use(express.static("public"));

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamir@786'
});


let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let getRandomUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
};



app.get("/", (req, res) => {
    let q = `SELECT count(*) From user`;
});

try {
    connection.query(q, (err, result) => {
    if (err) throw err;
        console.log(result);
        res.send(result);
        // console.log(result[0]);
        // console.log(result[0].id);
});
} catch (err) {
    console.log(err);
    res.send("some err in database");
}
// connection.end();







// let data = [];

// for (let i = 1; i < 100; i++) {
//     data.push(getRandomUser());
    // console.log(getRandomUser());
// }




// let user = [
// ["123", "234_newuser", "abc@gmail.come", "abc"],
// ["1453", "267_newuser", "afdf@gmail.come", "abcd"],
// ];






app.get('/', (req, res) => {
    res.send('Hello from Delta App Server! welcome to home page');
});
app.listen("8080", () => {
    console.log("Server is running on port 8080");  // server is running on port 8080
});






// let getRandomUser = ()=> {
//     return [
//     faker.string.uuid(),
//     faker.internet.userName(),
//     faker.internet.email(),
//     faker.internet.password(),
//     ];
// }
// console.log(getRandomUser());
