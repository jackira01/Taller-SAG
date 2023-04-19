const mongoose = require("mongoose");

const categories = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  products: [
    {
      product: {
        type: mongoose.Types.ObjectId,
        ref: "Products",
      },
    },
  ],
});

module.exports = mongoose.model("Categories", categories);
