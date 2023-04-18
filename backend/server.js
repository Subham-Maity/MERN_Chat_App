const express = require("express");
const chats = require("./data/data");
const cors = require("cors");
// Load the dotenv module before calling connectDB
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const connectDB = require("./config/db");

app.use(cors());
connectDB();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/chats", (req, res) => {
  res.send(chats);
});

app.get("/api/chats/:id", (req, res) => {
  //console.log(req);
  // console.log(req.params.id);
  const chat = chats.find((c) => c._id === req.params.id);
  res.send(chat);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
