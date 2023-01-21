const router = require("express").Router();
const blogController = require("../controller/Blog.controller");

router.post("/create", blogController.createBlog);
router.get("/all", blogController.getAllBlogs);
router.get("/:id", blogController.getBlogById);
router.patch("/:id", blogController.updateBlog);

module.exports = router;
