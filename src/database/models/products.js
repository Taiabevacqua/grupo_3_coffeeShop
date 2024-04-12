'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Products.belongsTo(models.Category,{
        as : 'category' ,
        foreingKey : 'categoryId'
      })
      Products.belongsTo(models.origins,{
        as : 'origin' ,
        foreingKey : 'originId'
      })
      Products.belongsTo(models.Flavors,{
        as : 'flavor' ,
        foreingKey : 'flavorId'
      })
    }
  }
  Products.init({
    name: DataTypes.STRING,
    price: DataTypes.INTEGER,
    discount: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    originId: DataTypes.INTEGER,
    flavorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};