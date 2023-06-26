const Category = require("../../schemas/Categories");

const categoriesCtrl = {};

categoriesCtrl.getCategories = async (req, res) => {
  const allCategories = await Category.find();
  try {
    res.status(200).send(allCategories);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

categoriesCtrl.categoriesById = async (req, res) => {
  const { id } = req.params;
  const categoryById = await Category.findById(id);
  try {
    res.status(200).send(categoryById);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = categoriesCtrl;
