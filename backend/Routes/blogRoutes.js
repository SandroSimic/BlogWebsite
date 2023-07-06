const express = require('express')
const router = express.Router()
const blogController = require('../Controller/blogController')

router.route('/').get(blogController.getAllBlogs).post(blogController.createBlog)

router.route('/:blogId').get(blogController.getBlogById).delete(blogController.deleteBlog).patch(blogController.updateBlog)


module.exports = router