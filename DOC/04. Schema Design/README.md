
## Schema Design

- ChatName
- isGroupChat
- users
- latestMessage
- groupAdmin

1. First we need mongoose so install mongoose
```bash
npm install mongoose
```
2. In the backend folder create a folder called models and in the models folder create a file called chatModel.js
> Insde the codeblock you will understand what is going on

```js
// Import mongoose library
const mongoose = require("mongoose");
// Define a schema object using mongoose.Schema constructor
// A schema is a configuration object that defines the structure and properties of the documents in a MongoDB collection
// A schema also defines validation, getters, setters, virtuals, indexes and middleware for the documents
const chatModel = mongoose.Schema(
  {
    // chatName is a string property that holds the name of the chat
    chatName: {
      type: String, // Specify the type of the property using the type key
      // The type key tells mongoose what data type this property should have and how to cast it
      // Mongoose supports several built-in types like String, Number, Date, etc. as well as custom types
      trim: true // Specify additional options using other keys, such as trim
      // The trim option tells mongoose to remove any whitespace from the beginning and end of the value before saving it to the database
    },
    // isGroupChat is a boolean property that indicates whether the chat is a group chat or not
    isGroupChat: {
      type: Boolean,
      default: false // Specify a default value using the default key
      // The default option tells mongoose what value to use if this property is not specified when creating a new document
    },
    // users is an array property that references the User model
    users: [
      {
        type: mongoose.Schema.Types.ObjectId, // Specify the type of the elements in the array using mongoose.Schema.Types
        // mongoose.Schema.Types is an object that contains all the valid types for schema properties
        // ObjectId is a special type that represents a 12-byte MongoDB ObjectId
        ref: "User" // Specify the model that this property references using the ref key
        // The ref option tells mongoose which model to use when populating this property with actual documents from another collection
        // Population is a feature that lets you replace the ids in an array with the corresponding documents from another collection
      }
    ],
    // latestMessage is a property that references the Message model
    latestMessage: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message"
    },
    // groupAdmin is a property that references the User model
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  },
  {
    timestamps: true // Specify schema-level options using the second argument of the mongoose.Schema constructor
    // The timestamps option tells mongoose to automatically add createdAt and updatedAt fields to the chat document
    // These fields store the date and time when the chat was created and last modified
  }
);
// Convert the schema into a model using mongoose.model function
const Chat = mongoose.model("Chat", chatModel);
// A model is a class that represents a collection in MongoDB and provides methods to create, read, update and delete documents in that collection
// The first argument of mongoose.model is the name of the model and the collection in MongoDB (in singular form)
// The second argument is the schema that defines the structure and properties of the documents in that collection
// Export the model so it can be used in other modules
module.exports = Chat;
```

3. Now create message model so inside model folder create a file called messageModel.js

```js
// require mongoose, a library that provides a high-level interface for interacting with MongoDB
const mongoose = require("mongoose");
// require bcryptjs, a library that provides a secure way of hashing and comparing passwords
const bcrypt = require("bcryptjs");

// define a schema for the user collection using mongoose.Schema
const userSchema = mongoose.Schema(
  {
    // a string that contains the user's name, which is a required field
    name: { type: "String", required: true },
    // a string that contains the user's email address, which is a required and unique field
    email: { type: "String", unique: true, required: true },
    // a string that contains the user's password, which is a required field
    password: { type: "String", required: true },
    // a string that contains the user's profile picture URL, which is a required field with a default value
    pic: {
      type: "String",
      required: true,
      //if someone doesn't upload a profile picture, a default profile picture will be used
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    // a boolean that indicates whether the user is an administrator or not, which is a required field with a default value of false
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  // an option object that enables the creation of createdAt and updatedAt fields for each document in the collection
  { timestaps: true }
);

// create a User model using mongoose.model with the user schema
const User = mongoose.model("User", userSchema);

// export the User model for use in other modules using module.exports
module.exports = User;
```


