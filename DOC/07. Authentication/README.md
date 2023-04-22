## Authentication

### Json Web Token

#### Part 1

1. Install the following packages.

```bash
npm i jsonwebtoken
npm i express-async-handler
```
2. controller folder create a `userController.js` file then create a file `generateToken.js` in the config folder andt inside the `route` folder create a `userRoutes.js` file.

- `backend/controllers/userControllers.js`

```tsx

const asyncHandler = require("express-async-handler"); // Import the 'express-async-handler' middleware to handle asynchronous errors
const User = require("../models/userModel"); // Import the User model, assuming it represents a user in the database
const generateToken = require("../config/generateToken"); // Import the 'generateToken' function from the '../config/generateToken.js' file

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body; // Destructure the request body to get name, email, password, and pic

  // If any of the fields are empty, throw an error
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  // Check if the user already exists
  const userExists = await User.findOne({ email }); // Use the User model to find a user with the given email in the database
  if (userExists) {
    // If the user already exists, throw an error
    res.status(400);
    throw new Error("User already exists");
  }

  // If the user does not exist, create a new user
  const user = await User.create({ // Use the User model to create a new user with the provided data and save it to the database
    name,
    email,
    password,
    pic,
  });

  // If the user is created successfully, send the user data back to the frontend
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id), // Generate a token for the user using the 'generateToken' function and include it in the response
    });
  } else {
    // If the user is not created, throw an error
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = registerUser; // Export the registerUser function as the default export of this module
```

Problem (With user property so fix it)

- `backend/controllers/userControllers.js`

```tsx
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //if any of the fields are empty, throw an error
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExists = await User.findOne({ email }); // Update variable name to User instead of user
  //if the user already exists, throw an error
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //if the user does not exist, create a new user
  const newUser = await User.create({
    // Update variable name to newUser instead of user
    name,
    email,
    password,
    pic,
  });
  //if the user is created, send the user data back to the frontend
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      pic: newUser.pic,
      token: generateToken(newUser._id),
    });
  } else {
    //if the user is not created, throw an error
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = registerUser;
```


> In summary, the registerUser function is an asynchronous function that handles the registration of a new user. It uses the asyncHandler middleware to handle any asynchronous errors that may occur during its execution. It first checks if the required fields (name, email, and password) are provided in the request body and throws an error if any of them are missing. Then, it checks if the user already exists in the database based on the provided email, and throws an error if the user already exists. If the user does not exist, it creates a new user using the User.create() method from the User model, saves it to the database, and sends the user data back to the frontend, including a token generated using the generateToken function. If the user is not created successfully, it throws an error with a message "Invalid user data".


- `backend/models/userModel.js`

```tsx
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestaps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
```


- `backend/server.js`

```tsx
const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");// Import the userRoutes from the '../routes/userRoutes.js' file 
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
const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
```

- `backend/config/generateToken.js`

```tsx
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

module.exports = generateToken;
```


- `backend/routes/userRoutes.js`

```tsx
const express = require("express");
const router = express.Router();

const registerUser = require("../controllers/userControllers");

router.route("/").post(registerUser);
// router.post("/login", authUser);

module.exports = router;
```





#### Part 2 (Postman)

- Let's test it on postman name a folder name `Authentication` by clicking on the `+` icon and then click on the `save` button.
- Make another folder name `Authentication` and then click on the `save` button.
- Inside that create a filename `Registration` and then click on the `save` button.
- Inside that GET box type `http://localhost:5000/api/user` and you can set `http://localhost:5000` as a variable.
  - Go to new tab (top left) and click on `Environment` 
  - Give it a name 
  - Insice the Variable tab add `URL` and set the value to `http://localhost:5000` and then click on the `save` button.
  - Now if you go to top right corner under `Upgrade` you will see the name of the environment you created select this and right side you can see eye icon click on that and you will see the variable you created.
- Now in the `Registration` file change the `http://localhost:5000/api/user` to `{{URL}}/api/user` and then click on the `save` button.
- Now go to `Body` tab select raw and then select JSON 
- Set the method POST because our backend is expecting a POST request.
- Now in the `Body` tab you can see the JSON format we need to send to the backend.
```json
{
  "name": "Subham",
  "email": "subham@codexam.com",
  "password": "123456"
}
```

- Now you can see something like this
```
{
    "_id": "6442b690811d9895c66ad7ed",
    "name": "Subham Maity",
    "email": "subham@codexam.com",
    "pic": "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    "token": "cCI6IkpXVCJ9.eyJpZCI6IjY0NDJiNjkwODExZDk4OTVjNjZhZDdlZCIsImlhdCI6MTY4MjA5MzcxMiwiZXhwIjoxNjg0Njg1NzEyfQ.mt_K5LzpAZDy49VfG3Vdzizpk3XB1oRIpzQAyl_XdeE"
}
```

- Now check your database you will see the user is created in the database (MongoDB Atlas -> Browse Collections)

```
{"_id":{"$oid":"6443a62d373fe47e47fc7961"},
"name":"Subham Maity",
"email":"subham@codexam.com",
"password":"123456",
"pic":"https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
"isAdmin":false,"__v":{"$numberInt":"0"}}
```

#### Part 3 ( authUser function )

- `backend/routes/userRoutes.js`

```js
router.post("/login", authUser);
```

- `backend/controllers/userControllers.js`

```js
//userRoutes.js -> authUser function

const authUser = asyncHandler(async (req, res) => {
  //We are gonna take the email and password from the request body
  const { email, password } = req.body;
  //find the user exist in the database or not
  const user = await User.findOne({ email });
  //if the user exists
  if (user && ()) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});
```

> Pending Secure password


#### Part 4 ( Password Encryption )

We don't wanna store the password in plain text in the database so we are gonna use `bcrypt` to encrypt the password.

1. Install `bcryptjs` by running `npm i bcryptjs`
2. `backend/models/userModel.js`

```js
userSchema.pre("save");
```
This means before saving the user to the database we are gonna run this function.


- Now we are gonna create a function that will match the password that we have in the database with the password that we are passing in.

```js
userSchema.pre("save", async function (next) {
  if (!this.isModified) {//if the password is not modified then we don't need to do anything
    next();//move on to the next middleware or function if we don't use next() then it will be stuck here
  }
  //higher the number is, more secure the password is.
  const salt = await bcrypt.genSalt(10);
  //hashing the password
  this.password = await bcrypt.hash(this.password, salt);
});
```

- inside the `userControllers` we are created function where that will match the password that we have in the database with the password that we are passing in `if (user && (await user.matchPasswor(password)))``
- for this we need to create a matchPassword function inside the `userModel.js` file

```js
// Controller -> userControlles->user.matchPasswor(password)
userSchema.methods.matchPassword = async function (enteredPassword) {
  //This compares the password that we have in the database with the password that we are passing in
  return await bcrypt.compare(enteredPassword, this.password); //this.password is the password that we have in the database and enteredPassword is the password that we are passing in the function
};
```

`Entire userModel.js now `

```js
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: { type: "String", required: true },
    email: { type: "String", unique: true, required: true },
    password: { type: "String", required: true },
    pic: {
      type: "String",
      default:
        "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// Controller -> userControlles->user.matchPasswor(password)
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// before saving the user to the database we are going to run this function.
userSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);

module.exports = User;
```

3. Now we are gonna import authUser in userRoutes.js

```js
const { registerUser, authUser } = require("../controllers/userControllers");
router.post("/login", authUser);
```



4.
controllers -> userControlle.js 

```js
  if (user && (await user.matchPasswor(password))) {
    ....

    }
module.exports = { registerUser, authUser };
```

`Entire userController.js now `
```
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const generateToken = require("../config/generateToken");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //if any of the fields are empty, throw an error
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }

  const userExists = await User.findOne({ email }); // Update variable name to User instead of user
  //if the user already exists, throw an error
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //if the user does not exist, create a new user
  const newUser = await User.create({
    // Update variable name to newUser instead of user
    name,
    email,
    password,
    pic,
  });
  //if the user is created, send the user data back to the frontend
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      pic: newUser.pic,
      token: generateToken(newUser._id),
    });
  } else {
    //if the user is not created, throw an error
    res.status(400);
    throw new Error("Invalid user data");
  }
});

//userRoutes.js -> authUser function

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPasswor(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

module.exports = { registerUser, authUser };
```
5. Now test the password Encryption in postman

![image](https://user-images.githubusercontent.com/97989643/233776299-14a5d3cf-1c97-4782-ad10-e6cb99c0e23a.png)





#### Part 5 ( Let's check login -> postman)

![image](https://user-images.githubusercontent.com/97989643/233776706-8e72e267-0b4d-45bb-a022-d61334128cec.png)


