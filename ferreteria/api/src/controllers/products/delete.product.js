const Product = require("../../schemas/Products");

const productsCtrl = {};

productsCtrl.deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).send("successfully removed");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
