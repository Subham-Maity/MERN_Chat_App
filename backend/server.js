const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const { notFound, errorHandler } = require("./middlewares/errorMiddleware");
const cors = require("cors");
dotenv.config();
connectDB();
const app = express();

//Since we’re sending data from the frontend to the server, we need to parse it to JSON and specify its format.
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("API is running...");
});
app.use("/api/user", userRoutes);

// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
