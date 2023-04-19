const { Router } = require("express");
const router = Router();
const {
  getCategories,
  categoriesById,
} = require("../controllers/categories/categories.get");

router.get("/", getCategories);
router.get("/:id", categoriesById);

module.exports = router;
