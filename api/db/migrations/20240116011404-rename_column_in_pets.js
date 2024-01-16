'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.renameColumn('pets', 'image', 'main_image');
  },

  async down (queryInterface) {
    await queryInterface.renameColumn('pets', 'main_image', 'image');
  }
};
