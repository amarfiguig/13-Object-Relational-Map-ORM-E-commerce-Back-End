// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection from config.js
const sequelize = require('../config/connection');

// Define the ProductTag model by extending Sequelize's Model class
class ProductTag extends Model {}

// Define the ProductTag model by extending Sequelize's Model class
ProductTag.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement:true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model:'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Export the ProductTag model for use in other modules
module.exports = ProductTag;
