const  log = require("console");
const express = require("express");
const app = express();


// app.use((req, res, next) => {
//     let query = req.query;
//     console.log(query);
//     let querystring = Object.keys(query).map(key => `${key}=${query[key]}`).map(key => `${key}`).join("&");
//     console.log("Hello, I am 1st Middleware!");
//     res.send("Hello, I am  finished middleware!");
//     return next();
//     console.log("something like check ");
// });

// app.use((req, res, next) => {
//     console.log("Hi, I am 2nd Middleware!");
//     next();
// });

app.use((req, res, next) => {
    req.time = Date.now();
    console.log(req.method, req.hostname, req.path, req.time, req.query);
    next();
});

app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.get("/random", (req, res) => {
    res.send("This is the about page.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080...");
    // console.log("You can access it at http://localhost:8080/");
});
