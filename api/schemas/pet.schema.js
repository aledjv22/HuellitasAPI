const Joi = require('joi');

const id = Joi.string().guid({version: ['uuidv4']});
const name = Joi.string().regex(/^[A-Za-z]+$/);
const state = Joi.string();
const location = Joi.string();
const sex = Joi.string();
const disability = Joi.string();
const breed = Joi.string().min(3);
const age = Joi.string();
const castrated = Joi.string();
const vaccinated = Joi.string();
const type = Joi.string();
const image = Joi.string().uri();
const need = Joi.string();
const createdAt = Joi.date();

const createPetSchema = Joi.object({
  name: name.required(),
  state: state,
  location: location.required(),
  sex: sex.required(),
  disability: disability.required(),
  breed: breed.required(),
  age: age,
  castrated: castrated,
  vaccinated: vaccinated,
  type: type.required(),
  image: image.required(),
  need: need.required(),
  createdAt: createdAt
});

const updatePetSchema = Joi.object({
  name: name,
  state: state,
  location: location,
  sex: sex,
  disability: disability,
  breed: breed,
  age: age,
  castrated: castrated,
  vaccinated: vaccinated,
  type: type,
  image: image,
  need: need,
  createdAt: createdAt
});

const getPetSchema = Joi.object({
  id: id.required(),
});

const deletePetSchema = Joi.object({
  id: id.required(),
});

module.exports = { createPetSchema, updatePetSchema, getPetSchema, deletePetSchema }
