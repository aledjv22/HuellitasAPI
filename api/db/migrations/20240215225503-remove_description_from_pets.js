'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn('pets', 'description');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('pets', 'description', {
      allowNull: true,
      type: Sequelize.TEXT
    });
  }
};
