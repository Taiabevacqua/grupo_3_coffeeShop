'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categories',
    [
      {
      name: 'Cafeteras',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Chocolate',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Cápsulas',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Café en grano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Café molido',
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
