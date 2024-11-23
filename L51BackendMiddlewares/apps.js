const { log } = require("console");
const express = require("express");
const { lchown } = require("fs");
const app = express();
app.use((req, res, next) => {
    let query = req.query;
    console.log(query);
    let querystring = Object.keys(query).map(key => `${key}=${query[key]}`).map(key => `${key}`).join("&");
    console.log("Hello, I am Middleware!");
    res.send("Hello, I am  finished middleware!");
});

app.use((req, res, next) => {
    console.log("Hi, I am 2nd Middleware!");
    next();
});

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.get("/", (req, res) => {
    res.send("Welcome to my API!");
});

app.get("/random", (req, res) => {
    res.send("This is the about page.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080...");
    console.log("You can access it at http://localhost:8080/");
});
