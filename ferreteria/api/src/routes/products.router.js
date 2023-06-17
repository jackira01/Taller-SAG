const { Router } = require("express");
const {
  getProducts,
  productById,
} = require("../controllers/products/get.product");
const { createNewProduct } = require("../controllers/products/post.product");
const { udpateProduct } = require("../controllers/products/put.product");
const { deleteProduct } = require("../controllers/products/delete.product");
const router = Router();

router.get("/", getProducts);
router.get("/:id", productById);
router.post("/", createNewProduct);
router.put("/:id", udpateProduct);
router.delete("/:id", deleteProduct)

module.exports = router;
