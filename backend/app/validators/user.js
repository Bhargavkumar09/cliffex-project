const Joi = require("joi");

function validateUser(user) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string()
      .pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,64}$/
      )
      .required(),
    confirm_password: Joi.string().required().valid(Joi.ref("password")),
  });
  return schema.validate(user);
}

module.exports = validateUser;
