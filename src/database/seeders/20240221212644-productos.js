'use strict';
const productsJSON = require('../../data/products.json')

const productsDB = productsJSON.map(product =>{
  return{
    name : product.name,
    description : product.name,
    price : product.price,
    image : product.mainImage,
    categoryId : product.category == "cafeteras" ? 1 : product.category == "chocolate" ? 2 : product.category == "capsulas" ? 3 : product.category == "cafeEnGrano" ? 4 : 5,
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert(
      'products',
      productsDB,
   
      {}
    );

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('products', null, {});

  }
};
