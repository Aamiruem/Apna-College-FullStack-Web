const express = require("express");
const app = express();
const path = require("path");
const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));

app.use(express.urlencoded({ extended: true }));


app.get("/id/:username", (req, res) => {
    const followers = ["kamran", "adam", "bob", "ado", "sam", "david"]
    let { username } = req.params;
    res.render("instaData.ejs", { username, followers});
})


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})