const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

// Index - Users
app.get("/users", (req, res) => {
    res.send("Welcome to the User Index!");
});


// Show - Users
app.get("/users/:id", (req, res) => {
    res.send("Get for the User Index!");
});


app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
