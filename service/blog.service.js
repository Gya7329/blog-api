const Blog = require("../models/Blogs");

const createBlog = async (body) => {
  try {
    const blog = await Blog.create(body);
    return blog;
  } catch (err) {
    throw err;
  }
};

const getAllBlogs = async () => {
  try {
    const blogs = await Blog.find({});
    return blogs;
  } catch (err) {
    return err;
  }
};

const getBlogById = async (id) => {
  try {
    const blog = await Blog.findById(id);
    return blog;
  } catch (err) {
    throw err;
  }
};

const updateBlog = async (id, body) => {
  try {
    const blog = await Blog.findByIdAndUpdate(id, body);
    return blog;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
};
