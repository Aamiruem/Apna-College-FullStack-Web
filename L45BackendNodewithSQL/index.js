const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamirazad@786'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});


// CREATE TABLE user(
//     id INT PRIMARY KEY,
//     username VARCHAR(100) UNIQUE,
//     email VARCHAR(100) UNIQUE NOT NULL,
//     password VARCHAR(100) NOT NULL
// );


// let q = "SHOW TABLES";
let q = "INSERT INTO user (id, username, email, password) VALUES ?";

let users = [
    ["182", "234_newuser", "abcd@gmail.com", "abc"],
    ["234", "345_newuser", "def@gmail.com", "def"],
    ["345", "456_newuser", "ghi@gmail.com", "ghi"],
    ["456", "567_newuser", "jkl@gmail.com", "jkl"],
    ["567", "678_newuser", "mno@gmail.com", "mno"],
    ["678", "789_newuser", "pqr@gmail.com", "pqr"],
    ["786", "890_newuser", "stu@gmail.com", "stu"],
];


try {
    connection.query(q, [users], (err, result) => {
        if (err) throw err;
        console.log(result);
        // console.log(result.length);
        // console.log(result[0]);
    })
} catch (err) {
    console.log(err);
}
connection.end();


let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
}
// console.log(getRandomUser());
