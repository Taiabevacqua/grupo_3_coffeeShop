'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Items.init({
    quantity: DataTypes.INTEGER,
    orderId: DataTypes.INTEGER,
    productsId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Items',
  });
  return Items;
};