const { User, UserSchema } = require('./user.model');
const { Pet, PetSchema } = require('./pet.model');

function setupModels (sequelize) {
  User.init(UserSchema, User.config(sequelize));
  Pet.init(PetSchema, Pet.config(sequelize));
  User.associate({ Pet });
  Pet.associate({ User });
}

module.exports = setupModels;
