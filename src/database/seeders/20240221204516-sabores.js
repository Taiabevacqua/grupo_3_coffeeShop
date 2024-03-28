'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('flavors',
    [
      {
        name: 'Expreso',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        name: 'Intenso',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Crema',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Torrado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Americano',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Break Office',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'No aplica',
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
