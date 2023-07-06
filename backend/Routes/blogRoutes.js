const express = require('express')
const router = express.Router()
const blogController = require('../Controller/blogController')

router.get('/blogs', blogController.getAllBlogs)
router.get('/blogs/:blogId', blogController.getBlogById)


module.exports = router