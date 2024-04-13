'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('origins',
    [
      {
        country: 'Argentina',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        country: 'Colombia',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Brasil',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Ecuador',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        country: 'Turquía',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], 
    {}
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('categories', null, {});

  }
};
