const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blogSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    author: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = Blog = mongoose.model("blog", blogSchema);
