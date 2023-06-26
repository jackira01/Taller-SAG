const mongoose = require("mongoose");

const products = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  img: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  brand: {
    type: String,
  },
  category: {
    type: String,
  },
});

module.exports = mongoose.model("Products", products);
