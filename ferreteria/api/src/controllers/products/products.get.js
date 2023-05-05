const Product = require("../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const allProducts = await Product.find();
  try {
    res.status(200).send(allProducts);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

productsCtrl.productById = async (req, res) => {
  const { id } = req.params;
  const productById = await Product.findById(id);
  try {
    res.status(200).send(productById);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
