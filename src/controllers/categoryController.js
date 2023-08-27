const Category = require('../models/categoryModel');

async function getCategories(req, res) {
  try {
    const categories = await Category.find();
    console.log(categories);
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function createCategory(req, res) {
  try {
    console.log("resquest",req.body);
    const category = await Category.create(req.body);

    res.status(200).json(category);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}

async function updateCategory(req, res) {
  try {
    const category = await Category.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: 'Bad request' });
  }
}

module.exports = {
  getCategories,
  createCategory,
  updateCategory,
};
