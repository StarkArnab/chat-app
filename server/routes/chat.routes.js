const express = require("express");
const {
  createChat,
  findUserChats,
  findChat,
} = require("../controllers/chat.controller");

const chatRouter = express.Router();

chatRouter.post("/", createChat);
chatRouter.get("/:userID", findUserChats);
chatRouter.get("/find/:firstId/:secondId", findChat);

module.exports = { chatRouter };
