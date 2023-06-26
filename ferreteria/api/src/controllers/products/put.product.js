const Product = require("../../schemas/Products");

const productsCtrl = {};

productsCtrl.udpateProduct = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  try {
    await Product.findByIdAndUpdate(id, {
      ...data,
    });
    res.status(200).send('successful edition');
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = productsCtrl;
