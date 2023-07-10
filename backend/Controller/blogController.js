const Blog = require("../Model/blogModel")
const mongoose = require("mongoose")
exports.createBlog = async (req, res) => {
  try {
    const { title, content } = req.body

    const newBlog = new Blog({ title, content })

    const savedBlog = await newBlog.save()

    res.status(200).json({
      status: "Success",
      data: {
        savedBlog,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error.message,
    })
  }
}

exports.getAllBlogs = async (req, res) => {
  const blogs = await Blog.find()

  if (blogs.length < 1) {
    res.status(404).json({
      status: "Error",
      message: "No blogs found",
    })
  }

  res.status(200).json({
    status: "Success",
    TotalBlogs: blogs.length,
    data: {
      blogs,
    },
  })
}

exports.getBlogById = async (req, res) => {
  try {
    const blogId = req.params.blogId

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(404).json({
        status: "Error",
        message: "No blog with that Id",
      })
    }

    const blog = await Blog.findById(blogId)

    if (!blog) {
      return res.status(404).json({
        status: "Error",
        message: "No blog with that Id",
      })
    }

    res.status(200).json({
      status: "Success",
      data: {
        blog,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error.message,
    })
  }
}

exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId

    await Blog.findOneAndDelete({ _id: blogId })

    res.status(200).json({
      message: "Blog Deleted",
    })
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error.message,
    })
  }
}

exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId

    const { title, content } = req.body

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { title, content },
      { new: true }
    )

    if (!updatedBlog) {
      return res.status(404).json({ error: "Blog not found" })
    }

    res.status(200).json({
      status: "Success",
      data: {
        updatedBlog,
      },
    })
  } catch (error) {
    res.status(400).json({
      status: "Error",
      error: error.message,
    })
  }
}
