'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories',
    [
      {
      name: 'cafeteras',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'chocolate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'capsulas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cafeEnGrano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'cafeMolido',
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
