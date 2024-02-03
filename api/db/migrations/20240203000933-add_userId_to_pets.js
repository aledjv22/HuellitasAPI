'use strict';
const { PetSchema } = require('../models/pet.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.addColumn('pets', 'userId', PetSchema.userId);
  },

  async down (queryInterface) {
    await queryInterface.removeColumn('pets', 'userId');
  }
};
