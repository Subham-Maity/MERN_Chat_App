const asyncHandler = require("express-async-handler");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;

  //if any of the fields are empty, throw an error
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please fill all the fields");
  }
});
