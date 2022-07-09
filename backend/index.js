const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/cliffex")
  .then(() => {
    console.log("Connected to mongoDB...");
  })
  .catch((e) => {
    console.log(e.message);
  });
