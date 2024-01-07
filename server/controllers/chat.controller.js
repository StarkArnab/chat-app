const { ChatModel } = require("../models/chats.models");

const createChat = async (req, res) => {
  try {
    const { firstId, secondId } = req.body;

    try {
      const chat = await ChatModel.findOne({
        members: { $all: [firstId, secondId] },
      });

      if (chat) {
        return res.status(200).json(chat);
      }

      const data = await ChatModel.create({ members: [firstId, secondId] });

      return res.status(200).json(data);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const findUserChats = async (req, res) => {
  try {
    const { userID } = req.params;
    try {
      const chats = await ChatModel.find({ members: { $in: [userID] } });
      return res.status(200).json(chats);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const findChat = async (req, res) => {
  try {
    const { firstId, secondId } = req.params;
    try {
      const chats = await ChatModel.findOne({
        members: { $all: [firstId, secondId] },
      });
      return res.status(200).json(chats);
    } catch (error) {
      console.log(error);
      return res.status(500).json(error);
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

module.exports = { findChat, findUserChats, createChat };
