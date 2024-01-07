const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./routes/user.routes");
const { chatRouter } = require("./routes/chat.routes");
const { messageRouter } = require("./routes/message.routes");
require("dotenv").config();

const app = express();

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hi" });
});

app.use("/api/user", userRouter);
app.use("/api/chat", chatRouter);
app.use("/api/message", messageRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection;
    console.log("MongoDB connection established");
    console.log("Server is runnning on PORT ", PORT);
  } catch (error) {
    console.log(err);
  }
});
