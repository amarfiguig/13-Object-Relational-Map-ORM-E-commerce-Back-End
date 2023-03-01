const router = require('express').Router();
const { createSchema } = require('../../config/connection');
const { Category, Product } = require('../../models');

// Route to get all categories, including associated Products
router.get("/", async (req, res) => {
  try {
    const categoriesData = await Category.findAll({ include: Product });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve categories", error: err });
  }
});

// Route to get a single category by its ID, including associated Products
router.get("/:id", async (req, res) => {
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: Product,
    });
    if (!categoryData) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json({ message: "Failed to retrieve category", error: err });
  }
});

// Route to create a new category
router.post("/", async (req, res) => {
  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json({ message: "Failed to create category", error: err });
  }
});

// Route to update an existing category by its ID
router.put("/:id", async (req, res) => {
  try {
    const categoryData = await Category.update(req.body, {
      where: { id: req.params.id },
    });
    if (!categoryData[0]) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).json({ message: "Category successfully updated" });
  } catch (err) {
    res.status(500).json({ message: "Failed to update category", error: err });
  }
});

// Route to delete an existing category by its ID
router.delete("/:id", async (req, res) => {
  try {
    const categoryData = await Category.destroy({
      where: { id: req.params.id },
    });
    if (!categoryData) {
      res.status(404).json({ message: "Category not found" });
      return;
    }
    res.status(200).json({ message: "Category successfully deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete category", error: err });
  }
});

module.exports = router;
