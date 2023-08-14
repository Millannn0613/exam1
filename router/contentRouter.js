const express = require("express");
const router = express.Router();
const {
  newContent,
  GetAllContent,
  updateContent,
  deleteContent,
} = require("../controller/content");
const { upload } = require("../middleware/Multer");
router.route("/").get(GetAllContent).post(upload.single("image"), newContent);
router
  .route("/:id")
  .put(upload.single("image"), updateContent)
  .delete(deleteContent);

module.exports = router;
