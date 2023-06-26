const Product = require("../../schemas/Products");

const productsCtrl = {};

productsCtrl.getProducts = async (req, res) => {
  const { name } = req.query
  const allProducts = await Product.find();
  const result = await Product.find({ name });
  try {
    if (name) {
      if (result.length) {
        res.status(200).send(result);
      } else {
        res.status(404).send('no se encontraron resultados');
      }
    } else {
      res.status(200).send(allProducts);
    }

  } catch (error) {
    res.status(400).send(error.message);
  }
};

/* productsCtrl.searchByName = async (req, res) => {
  const { name } = req.query
  const result = await Product.find({ name });
  if (result.length) {
    res.status(200).send(result);
  } else {
    res.status(404).send('no se encontraron resultados');
  }
}; */

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
