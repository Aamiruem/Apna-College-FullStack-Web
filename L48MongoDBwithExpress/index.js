const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
