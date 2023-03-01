// Import necessary parts of the Sequelize library
const { Model, DataTypes } = require('sequelize');

// Import the database connection from config.js
const sequelize = require('../config/connection.js');

// Define the Tag model by extending Sequelize's Model class
class Tag extends Model {}

Tag.init(
  {
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey: true,
      autoIncrement:true
    },
    tag_name: {
      type: DataTypes.STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag model for use in other modules
module.exports = Tag;
