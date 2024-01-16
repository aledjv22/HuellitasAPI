'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.removeColumn('pets', 'disability');
    await queryInterface.removeColumn('pets', 'breed');
    await queryInterface.removeColumn('pets', 'castrated');
    await queryInterface.removeColumn('pets', 'vaccinated');
    await queryInterface.removeColumn('pets', 'need');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('pets', 'disability', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('pets', 'breed', {
      type: Sequelize.STRING,
      allowNull: true
    });
    await queryInterface.addColumn('pets', 'castrated', {
      type: Sequelize.BOOLEAN,
      allowNull: true
    });
    await queryInterface.addColumn('pets', 'vaccinated', {
      type: Sequelize.BOOLEAN,
      allowNull: true
    });
    await queryInterface.addColumn('pets', 'need', {
      type: Sequelize.STRING,
      allowNull: true
    });
  }
};
