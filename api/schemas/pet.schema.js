const Joi = require('joi');

const id = Joi.string().guid({version: ['uuidv4']});
const userId = Joi.string().guid({version: ['uuidv4']});
const name = Joi.string().regex(/^[A-Za-z]+$/);
const state = Joi.string();
const location = Joi.string();
const sex = Joi.string();
const age = Joi.string();
const description = Joi.string();
const type = Joi.string();
const size = Joi.string();
const main_image = Joi.string().uri();
const images = Joi.array().items(Joi.string().uri()).min(3).max(10);
const views = Joi.number().integer();
const createdAt = Joi.date();

const createPetSchema = Joi.object({
  userId: userId, // Required
  name: name.required(),
  state: state.required(),
  location: location.required(),
  sex: sex.required(),
  age: age.required(),
  description: description.required(),
  type: type.required(),
  size: size.required(),
  main_image: main_image.required(),
  images: images.required(),
  views: views,
  createdAt: createdAt
});

const updatePetSchema = Joi.object({
  userId: userId, // Required
  name: name,
  state: state,
  location: location,
  sex: sex,
  age: age,
  description: description,
  type: type,
  size: size,
  main_image: main_image,
  images: images,
  views: views
});

const getPetSchema = Joi.object({
  id: id.required(),
});

const deletePetSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPetSchema, updatePetSchema, getPetSchema, deletePetSchema }
