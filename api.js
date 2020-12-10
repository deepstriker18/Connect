const express = require("express");
const app = express();
// let userDB = require("./user.json");
const fs = require("fs");
const path = require("path");
const userRouter = require("./router/userRouter");
// const postRouter = require("./router/postRouter");

// app.use(function (req, res, next) {
//     console.log("1st");
//     console.log(req);
//     console.log("`````````````````````````");
//     next();
// })

app.use(express.json());

// app.use(function (req, res, next) {
//     console.log("2nd");
//     console.log(req.body);
//     console.log("```````````````````````````````");
//     next();
// })

// localhost:3000/api/users/user_id
app.use("/api/users", userRouter);
// app.use("/api/post", postRouter);


app.listen(3000, function () {
    console.log("Server is listening at port 3000");
})