const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'Aamirazad@786'
});

// let q = "SHOW TABLES";
let q = "INSERT INTO user (id, username, email, password) VALUES ?";
let users = [
    ["123", "234_newuser", "abc@gmail.come", "abc"],
    ["234", "345_newuser", "def@gmail.come", "def"],
    ["345", "456_newuser", "ghi@gmail.come", "ghi"],
    ["456", "567_newuser", "jkl@gmail.come", "jkl"],
    ["567", "678_newuser", "mno@gmail.come", "mno"],
    ["678", "789_newuser", "pqr@gmail.come", "pqr"],
    ["789", "890_newuser", "stu@gmail.come", "stu"]
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
console.log(getRandomUser());
