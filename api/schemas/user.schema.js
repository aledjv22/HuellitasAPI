const Joi = require('joi');

const id = Joi.string().guid({version: ['uuidv4']});
const firstName = Joi.string();
const lastName = Joi.string();
const image = Joi.string().uri();
const email = Joi.string().email();
const phone = Joi.string();
const password = Joi.string();
const role = Joi.string().min(3);
const createdAt = Joi.date();

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  image: image,
  email: email.required(),
  phone: phone,
  password: password.required(),
  role: role,
  createdAt: createdAt
});

const updateUserSchema = Joi.object({
  firstName: firstName,
  lastName: lastName,
  image: image,
  email: email,
  phone: phone,
  password: password,
  role: role,
  createdAt: createdAt
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const deleteUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUserSchema, updateUserSchema, getUserSchema, deleteUserSchema }
