'use strict';

const { UserSchema, USER_TABLE} = require('../models/user.model');
const { PetSchema, PET_TABLE} = require('../models/pet.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.createTable(USER_TABLE, UserSchema);
    await queryInterface.createTable(PET_TABLE, PetSchema);
  },

  async down (queryInterface) {
    await queryInterface.dropTable(USER_TABLE);
    await queryInterface.dropTable(PET_TABLE);
  }
};
