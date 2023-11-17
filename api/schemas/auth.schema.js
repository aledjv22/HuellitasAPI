const Joi = require('joi');

const email = Joi.string();
const password = Joi.string();
const newPassword = Joi.string().min(8);
const token = Joi.string();

const loginAuthSchema = Joi.object({
  email: email.required(),
  password: password.required(),
});

const recoveryAuthSchema = Joi.object({
  email: email.required(),
});

const changePasswordAuthSchema = Joi.object({
  token: token.required(),
  newPassword: newPassword.required(),
});

module.exports = {
  loginAuthSchema,
  recoveryAuthSchema,
  changePasswordAuthSchema
};
