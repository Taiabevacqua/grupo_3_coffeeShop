'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull : false
      },
      lastName: {
        type: Sequelize.STRING,
        allowNull : false
      },
      email: {
        type: Sequelize.STRING,
        allowNull : false
      },
      password: {
        type: Sequelize.STRING,
        allowNull : false
      },
      phone: {
        type: Sequelize.STRING
       
      },
      birthday: {
        type: Sequelize.DATE
      },
      rolesId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: "roles"
          }
        }
      },
      addressId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: "addresses"
          }
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};