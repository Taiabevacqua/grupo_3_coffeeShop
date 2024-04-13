'use strict';
const productsJSON = require('../../data/products.json');



const productsDB = productsJSON.map(product =>{
  return{
    name : product.name,
    description : product.description,
    price : product.price,
    image : product.imagen,
    discount : product.discount,
    originId : [ 1,2,3,4,5,6][(Math.random() * 4).toFixed(0)],
    flavorId : [ 1,2,3,4,5,6,7][(Math.random() * 6).toFixed(0)],
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
