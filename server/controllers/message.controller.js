const { MessageModel } = require("../models/message.models");

const createMessage = async (req, res) => {
  try {
    const { chatId, senderId, text } = req.body;
    try {
      const message = await MessageModel.create({ chatId, senderId, text });
      return res.status(200).json(message);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getMessages = async (req, res) => {
  try {
    const { chatId } = req.params;
    try {
      const messages = await MessageModel.find({ chatId });
      return res.status(200).json(messages);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { createMessage, getMessages };
