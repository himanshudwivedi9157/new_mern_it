const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, dateOfBirth, email, password } = req.body;

  let user = await User.findOne({ email });
  if (user) return res.status(400).json({ msg: "User already exists" });

  user = new User({
    name,
    dateOfBirth,
    email,
    password,
  });

  user.dateCreated = new Date();

  await user.save();

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    token,
    user: {
      id: user._id,
      name,
      dateOfBirth,
      email,
      password,
      dateCreated: user.dateCreated,
    },
  });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });
  if (!user) return res.status(400).json({ msg: "Invalid credentials" });

  if (user.password !== password)
    return res.status(400).json({ msg: "Invalid credentials" });

  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });

  res.json({
    token,
    user: {
      id: user._id,
      name: user.name,
      dateOfBirth: user.dateOfBirth,
      email,
      password: user.password,
      dateCreated: user.dateCreated,
    },
  });
});

module.exports = router;
