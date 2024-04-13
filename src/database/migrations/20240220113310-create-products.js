'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull : false
      },
      price: {
        type: Sequelize.INTEGER
      },
      discount: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT,
        allowNull : false
      },
      image: {
        type: Sequelize.STRING
      },
      outstanding : {
        type : Sequelize.BOOLEAN
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: "Categories"
          }
        }
      },
      originId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: "origins"
          }
        }
      },
      flavorId: {
        type: Sequelize.INTEGER,
        references : {
          model : {
            tableName: "Flavors"
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
    await queryInterface.dropTable('Products');
  }
};