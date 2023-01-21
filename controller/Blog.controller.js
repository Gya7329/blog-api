const BlogService = require("../service/blog.service");
const { errorHandler } = require("../utils/error-handler");

const createBlog = errorHandler(async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const blog = await BlogService.createBlog(req.body);
    return res.status(201).json({ blog });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

const getAllBlogs = errorHandler(async (req, res) => {
  try {
    const blogs = await BlogService.getAllBlogs();
    return res.status(200).json({ blogs });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

const getBlogById = errorHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogService.getBlogById(id);
    return res.status(200).json({ blog });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

const updateBlog = errorHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const blog = await BlogService.updateBlog(id, req.body);
    return res.status(200).json({ blog });
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
};
