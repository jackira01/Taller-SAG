const { Router } = require("express");
const router = Router();
const {
  getProducts,
  productById,
} = require("../controllers/products/products.get");
const { createNewProduct } = require("../controllers/products/products.post");

router.get("/", getProducts);
router.get("/:id", productById);
router.post("/", createNewProduct);

module.exports = router;
