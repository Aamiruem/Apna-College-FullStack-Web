const express = require("express");
const app = express();
app.use(() => {
    console.log("Hello, I am Middleware!");
})

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
