const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// const User = require("./Models/userModel");
const Router = require("./Routes/userRoutes");
const core = require("cors");
dotenv.config();
app.use(core());
app.use(express.json());

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("mongodb connected sucssefull..");
    app.listen(process.env.PORT || 8000, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(`Server Started at ${process.env.PORT}`);
      }
    });
  })
  .catch((error) => {
    console.log(error);
  });

app.use(Router);
