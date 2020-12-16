const express = require("express");
const userRouter = new express.Router();
let { createUser, updateUser, deleteUser, getUser, getAllUser, handleRequest } = require("../controller/userController");

userRouter.route("/").post(createUser).get(getAllUser);
userRouter.route("/fr").post(handleRequest);
userRouter.route("/:user_id").get(getUser).patch(updateUser).delete(deleteUser);
module.exports = userRouter