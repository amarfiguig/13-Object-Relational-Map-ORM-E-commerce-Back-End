// Import necessary modules from Sequelize
const { Model, DataTypes } = require("sequelize");

// Import the sequelize instance that was created in another file
const sequelize = require("../config/connection.js");

// Define a new Category model that extends Sequelize's Model class
class Category extends Model {}

// Initialize the Category model with the properties and options
Category.init(
  {
    // Define the id attribute as an INTEGER that is not null, is the primary key, and auto-increments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
        // Define the category_name attribute as a STRING that is not null
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
        // Pass the sequelize instance that was imported earlier to the Category model
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
