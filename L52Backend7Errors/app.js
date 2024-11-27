const  log = require("console");
const express = require("express");
const app = express();






const checkToken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        res.send("Access Granted!");
        next();
    } else {
        throw new Error("Access Denied!");
    }
};


app.get("/wrong", (req, res) => {
    res.status(404).send("Not Found");
})

app.get("/api", (checkToken, req, res) => {
    res.send("data");
});

app.get("/", (req, res) => {
    res.send("HI, I am root!");
});

app.get("/err", (req, res) => {
    abcd = abcd;
});

app.get("/random", (req, res) => {
    res.send("This is the about page.");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080...");
    // console.log("You can access it at http://localhost:8080/");
});
