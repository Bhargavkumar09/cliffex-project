const CustomError = require("../errors/CustomError");

module.exports = function (error, req, res, next) {
  if ((process.env.NODE_ENV = "development")) {
    console.log(error);
  }

  let { name, status, message } = error;

  if (!(error instanceof CustomError)) {
    name = "InternalServerError";
    status = 500;
    message = "Internal Server Error";
  }

  res.status(status).send({ name, status, message });
  next();
};
