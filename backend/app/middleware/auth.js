const jwt = require("jsonwebtoken");
const BadRequestError = require("../errors/BadRequestError");

function auth(req, res, next) {
  const { SECRET_ACCESS_KEY: privateKey } = process.env;
  const token = req.header("authorization").split(" ")[1];
  try {
    const user = jwt.verify(token, privateKey);
    req.user = user;
  } catch {
    throw new BadRequestError("Invalid token");
  }
  next();
}

module.exports = auth;
