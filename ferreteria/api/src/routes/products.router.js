const { Router } = require("express");
const router = Router();
const {
  getProducts,
  productById,
} = require("../controllers/products/products.get");

router.get("/", getProducts);
router.get("/:id", productById);

module.exports = router;
