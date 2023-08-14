const router = require("express").Router();
const {
  allCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controller/categoryController");
const { catblog } = require("../controller/content");
router
  .get("/", allCategory)
  .post("/", protect, authorize("admin"), createCategory)
  .put("/:id", protect, authorize("admin"), updateCategory)
  .delete("/:id", protect, authorize("admin"), deleteCategory);

module.exports = router;
