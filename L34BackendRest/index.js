const express = require("express");
const app = express();
const port = 8080;

const path = require("path");
const { v4: uuidv4 } = require('uuid');
uuidv4();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));


let posts = [
    {
        id: "1a",
        username: "apna college",
        content: "I love coding"
    },

    {
        id:"2b",
        username: "kamran",
        content: "Hard work is important to achieve a success! "
    },

    {
        id: "3c",
        username: "Aamir",
        content: "I love Data science"
    },

    {
        id: "4d",
        username: "Adam khan",
        content: "I got selected for first my internship "
    },

    {
        id: "5e",
        username: "apna college",
        content: "I love coding"
    }
];


app.get("/posts", (req, res) => {
    res.render("index.ejs", {posts});
    // res.send("server working well!");
});


app.get("/posts/new", (req, res) => {
    res.render("new.ejs");
});

app.post("/posts", (req, res) => {
    // console.log(req.body);
    // res.send("post request working");

    let { username, content } = req.body;
    posts.push({ username, content });
    res.redirect("/posts");
});



app.get("/posts/:id", (req, res) => {
    let {id} = req.params;
let post = posts.find((p) => id === p.id);

    res.render("show.ejs", { post });
    
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
