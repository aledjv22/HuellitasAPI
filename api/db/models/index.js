const { User, UserSchema } = require('./user.model');
const { Pet, PetSchema } = require('./pet.model');

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));
}

module.exports = setupModels;
