const router = require("express").Router();
const User = require("../model/User");
const auth = require("../middleware/auth");

router.get("/", auth, async (req, res) => {
  const user = await User.find();
  res.send(user);
});

module.exports = router;
