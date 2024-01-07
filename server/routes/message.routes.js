const express = require("express");
const {
  createMessage,
  getMessages,
} = require("../controllers/message.controller");

const messageRouter = express.Router();

messageRouter.post("/", createMessage);
messageRouter.get("/:chatId", getMessages);

module.exports = { messageRouter };
