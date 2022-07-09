const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

userSchema.methods.generateAuthToken = function () {
  const { SECRET_ACCESS_KEY: privateKey, JWT_EXPIRES_IN } = process.env;
  const payload = {
    id: this._id,
    name: this.name,
    email: this.email,
  };
  const token = jwt.sign(payload, privateKey, { expiresIn: JWT_EXPIRES_IN });
  return token;
};

const User = mongoose.model("user", userSchema);

module.exports = User;
