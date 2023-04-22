
## Connect MongoDB

1. First Setup a MongoDB Atlas account and create a cluster.
2. Then copy the connection string and paste it in the `.env` file.
```
MONGODB_URI = "your connection string"
```
> Replace your password with `<password>` and your database name with `<dbname>`.
3. Now create a config folder and create a `db.js` file.
4. In the `db.js` file, write the following code.
// you can also use colors package to make your console logs colorful.
```js
const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    // Remove the useFindAndModify option from the connection options object
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useFindAndModify: true,
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
```
- With explanation

```js
// Define an asynchronous function to connect to the database
// An asynchronous function is a special kind of function that can pause and resume its execution until some operation is completed
// This allows the code to run without blocking other tasks while waiting for the result of the operation
// The async keyword before the function declaration indicates that it is an asynchronous function
const connectDB = async () => {
  // Use a try-catch block to handle any errors that might occur during the connection process
  // The try block contains the code that attempts to connect to the database
  // The catch block contains the code that handles any errors that are thrown by the try block
  try {
    // Use the mongoose.connect method to return a promise that resolves to a connection object
    // A promise is an object that represents the eventual completion or failure of an asynchronous operation
    // The mongoose.connect method takes two arguments: a connection string and an options object
    // The connection string specifies the location and name of the database to connect to
    // The options object specifies some configuration settings for the connection
    // The await keyword before the mongoose.connect method indicates that the code should wait until the promise is resolved or rejected before moving on to the next line
    // If the promise is resolved, it returns a connection object that can be used to interact with the database
    // If the promise is rejected, it throws an error that can be caught by the catch block
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
    });

    // Log a message to the console indicating that the connection was successful and showing the host name of the database server
    // The conn.connection.host property contains the host name of the database server
    // The ${} syntax inside the backticks (`) allows us to insert a variable or expression into a string template
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    // If there is an error during the connection process, log the error message to the console and exit the process with a non-zero code
    // The err.message property contains the error message that describes what went wrong
    // The console.error method logs an error message to the console with a red color and a stack trace
    // The process.exit method terminates the current process and exits with a given code
    // A non-zero exit code indicates that something went wrong and the process did not complete successfully
    console.error(`Error: ${err.message}`);
    process.exit();
  }
};
```

5. No go to server.js and type the following code.
```js
// Import the connectDB function from the db.js file
const connectDB = require("./config/db");

// Connect to the database
connectDB();
```

- `Serve.js file`

> Don't do this mistakes the dotenv module after calling the connectDB function in your server.js file. This means that the MONGO_URI environment variable is not available when you pass it to the mongoose.connect() method. You need to load the dotenv module before calling the connectDB function.
```js

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
```


