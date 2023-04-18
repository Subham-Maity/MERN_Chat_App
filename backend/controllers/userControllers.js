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

  const userExists = await user.findOne({ email });
  //if the user already exists, throw an error
  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  //if the user does not exist, create a new user
  const user = await User.create({
    name,
    email,
    password,
    pic,
  });
  //if the user is created, send the user data back to the frontend
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    //if the user is not created, throw an error
    res.status(400);
    throw new Error("Invalid user data");
  }
});

module.exports = registerUser;
