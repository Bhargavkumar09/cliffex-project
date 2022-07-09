require("dotenv").config();
const express = require("express");
require("express-async-errors");
const mongoose = require("mongoose");
const cors = require("cors");
const error = require("./app/middleware/error");
const app = express();
const auth = require("./app/routes/auth");
const user = require("./app/routes/user");

// environment variables
const { PORT } = process.env;

// mongoDB connection
mongoose
  .connect("mongodb://localhost:27017/cliffex")
  .then(() => {
    console.log("Connected to mongoDB...");
  })
  .catch((e) => {
    console.log(e.message);
  });

// middleware
app.use(cors());
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/users", user);
app.use(error);

// server connection
app.listen(PORT, () => {
  console.log(`Listening to port: ${PORT}`);
});
