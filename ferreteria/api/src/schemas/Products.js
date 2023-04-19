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
  model: {
    type: String,
  },
  stock: {
    type: Number,
  },
  category: {
    type: String,
  },
  questions: [
    {
      question: {
        type: String,
      },
      email: {
        type: String,
      },
    },
  ],
});

module.exports = mongoose.model("Products", products);
