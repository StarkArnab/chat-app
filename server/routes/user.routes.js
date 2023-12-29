const express = require("express");
const {
  registerUser,
  loginUser,
  findUser,
  getUser,
} = require("../controllers/user.controller");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.json({ message: "Hi fron inside user" });
});

userRouter.post("/register", registerUser);

userRouter.post("/login", loginUser);

userRouter.get("/find/:userID", findUser);

userRouter.get("/users", getUser);

module.exports = { userRouter };
