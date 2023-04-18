const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");
dotenv.config();
connectDB();
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/user", userRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
