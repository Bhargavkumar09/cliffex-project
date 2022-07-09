const router = require("express").Router();
const bcrypt = require("bcryptjs");
const _ = require("lodash");
const BadRequestError = require("../errors/BadRequestError");
const User = require("../model/User");
const validateUser = require("../validators/user");

router.post("/signup", async (req, res) => {
  const { error } = validateUser(req.body);
  if (error) throw new BadRequestError(error.details[0].message);
  const existedUser = await User.findOne({ email: req.body.email });
  if (existedUser) {
    throw new BadRequestError("Email already registered");
  }

  const user = new User(_.pick(req.body, ["name", "email", "password"]));
  user.password = await bcrypt.hash(user.password, 10);
  await user.save();
  const token = user.generateAuthToken();
  res.status(201).send({ message: "User registered successfully", token });
});

router.post("/signin", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new BadRequestError("Invalid email or password");

  const password = await bcrypt.compare(req.body.password, user.password);
  if (!password) throw new BadRequestError("Invalid email or password");

  const token = user.generateAuthToken();
  res.status(201).send({ message: "User login successfully", token });
});

module.exports = router;
