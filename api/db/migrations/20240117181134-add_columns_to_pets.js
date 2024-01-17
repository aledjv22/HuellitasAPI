'use strict';

const { PetSchema } = require('../models/pet.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const newColumns = ['description', 'size', 'images', 'views'];
    for (const column of newColumns) {
      await queryInterface.addColumn('pets', column, PetSchema[column]);
    }
  },

  async down (queryInterface) {
    const newColumns = ['description', 'size', 'images', 'views'];
    for (const column of newColumns) {
      await queryInterface.removeColumn('pets', column);
    }
  }
};
