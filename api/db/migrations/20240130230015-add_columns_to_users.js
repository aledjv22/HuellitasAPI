'use strict';
const { UserSchema } = require('../models/user.model');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const newColumns = ['foundation', 'location', 'alias', 'cbuCvu', 'urlDonation'];
    for (const column of newColumns) {
      await queryInterface.addColumn('users', column, UserSchema[column]);
    }
  },

  async down (queryInterface) {
    const newColumns = ['foundation', 'location', 'alias', 'cbuCvu', 'urlDonation'];
    for (const column of newColumns) {
      await queryInterface.removeColumn('users', column);
    }
  }
};
