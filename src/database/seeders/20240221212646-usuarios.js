'use strict';
const bcryptjs = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Admin',
          lastName: 'Cafeinatopia',
          email: 'admin@gmail.com',
          password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
          rolesId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'user',
          lastName: 'Cafeinatopia',
          email: 'user@gmail.com',
          password: bcryptjs.hashSync(process.env.PASSWORD_ADMIN, 10),
          rolesId: 2,
          
          createdAt: new Date(),
          updatedAt: new Date(),
        },


      ],
      {}
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});

  }
};
