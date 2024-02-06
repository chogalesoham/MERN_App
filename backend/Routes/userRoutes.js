const express = require("express");
const mongoose = require("mongoose");
const app = express();
const User = require("../Models/userModel");

const Router = express.Router();

// Create User

Router.post("/", async (req, res) => {
  const { name, email, img, age } = req.body;

  try {
    const userAdded = await User.create({
      name: name,
      email: email,
      img: img,
      age: age,
    });
    res.status(201).json(userAdded);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message });
  }
});

// Show Created Users...

Router.get("/", async (req, res) => {
  try {
    const showAll = await User.find();
    res.status(200).json(showAll);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// show Single User...
Router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUser = await User.findById({ _id: id });
    res.status(200).json(singleUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = Router;

// Delete User...

Router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const singleUserDelete = await User.findByIdAndDelete({ _id: id });
    res.status(200).json(singleUserDelete);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});

// Update User /patch

Router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email, img, age } = req.body;
  try {
    const singleUserDelete = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(singleUserDelete);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
});
