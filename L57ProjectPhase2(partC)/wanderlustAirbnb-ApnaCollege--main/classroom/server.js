const express = require("express");
const app = (express);
const users = require("./routes/user.js");
const posts = require(". /routes/post.js");
const session = require("express-session");

app.use(session({
    secret: "mysupersecretstring", 
    resave: false,
    saveUninitialized: true,
}));

app.get("/reqcount", (req, res) => {
    if(req.session.count){
        req.session.count++;
    } else {
        req.session.count = 1;
    }
    res.send(`Request count: ${req.session.count}`);
});

app.listen(3000, () =>{
    console.log("Server is running on port 3000");
});
