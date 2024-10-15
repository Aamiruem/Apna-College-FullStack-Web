const express = require("express");

const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js");
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs")

// app.use(express.static(path.join(__dirname, "public")));
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



main()
    .then(() => {
        console.log("Connection Successful");

    })
    .catch((err) => {
        console.log(err)
    });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let chat1 = new Chat({
    form: "neha",
    to: "kamran",
    message: "Hello kamran send me your exam sheet!",
    created_at: new Date()
});
chat1.save().then((res) => {
    console.log(res, "Chat saved successfully");
});

app.get("/", (req, res) => {
    res.send("Welcome to the API!");
});

app.listen(8080, () => {
    console.log("Server is running on port 8080");
});
