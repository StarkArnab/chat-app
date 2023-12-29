const bcrypt = require("bcrypt");
const validator = require("validator");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { UserModel } = require("../models/users.models");

const registerUser = async (req, res) => {
  //   res.json({ message: "Hi from /register" });
  try {
    const { name, email, password } = req.body;
    if (name && email && password) {
      if (!validator.isEmail(email)) {
        return res
          .status(400)
          .json({ message: "Please enter a valid e-mail id" });
      }
      if (!validator.isStrongPassword(password)) {
        return res.status(400).json({
          message:
            "Please enter a strong password. It should contain one uppercase character and a lower case character including some numbers and is atleast 8 characters long. For eg. try to use 0Aa@1234",
        });
      }
      const userDetails = await UserModel.findOne({ email });
      if (userDetails) {
        return res
          .status(400)
          .json({ message: "User already exists please login" });
      }
      bcrypt.hash(password, 5, async function (err, hash) {
        if (err) {
          return res.status(500).json({ message: "Something wrong happened" });
        }
        const data = await UserModel.create({ name, email, password: hash });
        // res.json({ data });
        const token = jwt.sign({ userID: data._id }, process.env.JWT_SECRET);
        return res.json({
          message: "User successfully registered",
          userID: data._id,
          name,
          email,
          token,
        });
      });
    } else {
      return res.status(400).json({
        message:
          "Please Enter all the valid fields. You are required to fill the name, email and password fields correctly",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const loginUser = async (req, res) => {
  //   res.json({ message: "Login" });
  try {
    const { email, password } = req.body;
    if ((email, password)) {
      const userDetails = await UserModel.findOne({ email });
      if (!userDetails) {
        return res
          .status(400)
          .json({ message: "The user does not exist please register first" });
      }
      bcrypt.compare(password, userDetails.password, function (err, result) {
        if (err) {
          return res.status(500).json({ message: "Something wrong happened" });
        }
        if (result) {
          const token = jwt.sign({ userEmail: email }, process.env.JWT_SECRET);
          res.json({
            message: "User has successfully logged in",
            userID: userDetails._id,
            name: userDetails.name,
            email,
            token,
          });
        } else {
          return res.status(400).json({ message: "Wrong password" });
        }
      });
    } else {
      return res.json({ message: "Please enter all the fields" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const findUser = async (req, res) => {
  const { userID } = req.params;
  try {
    const user = await UserModel.findById(userID);
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const getUser = async (req, res) => {
  try {
    const user = await UserModel.find();
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = { registerUser, loginUser, findUser, getUser };
