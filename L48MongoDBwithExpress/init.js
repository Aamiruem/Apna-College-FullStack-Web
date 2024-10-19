const express = require("express");
const Chat = require("./models/chat.js");

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


Chat.insertMany({
    form: "neha",
    to: "kamran",
    msg: "Hello kamran send me your exam sheet!",
    created_at: new Date()
});
chat1.save().then((res) => {
    console.log(res, "Chat saved successfully");
});