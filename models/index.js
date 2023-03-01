// Import necessary models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Define relationships between models using Sequelize associations
Product.belongsTo(Category, { foreignKey: 'category_id' }); // Each product belongs to one category
Category.hasMany(Product, { foreignKey: 'category_id' }); // Each category can have many products
Product.belongsToMany(Tag, { through: ProductTag, foreignKey: 'product_id' }); // Each product can have many tags, and each tag can be applied to many products through ProductTag
Tag.belongsToMany(Product, { through: ProductTag, foreignKey: 'tag_id' });

// Export all models for use in other parts of the application
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
