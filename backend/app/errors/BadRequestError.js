const CustomError = require("./CustomError");

class BadRequestError extends CustomError {
  constructor(message) {
    super(message, "BadRequest", 400);
  }
}

module.exports = BadRequestError;
