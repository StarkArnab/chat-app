const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    chatId: { type: String },
    senderId: { type: String },
    text: { type: String },
  },
  {
    timestamps: true,
  }
);

const MessageModel = mongoose.model("message", messageSchema);

module.exports = { MessageModel };
