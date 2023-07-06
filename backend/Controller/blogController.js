exports.getAllBlogs = (req, res) => {
    const blogs = [
        { id: 1, title: 'Blog 1', content: 'Lorem ipsum dolor sit amet.' },
        { id: 2, title: 'Blog 2', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
        { id: 3, title: 'Blog 3', content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam, maxime!' },
      ];
    
      res.json(blogs);
}

exports.getBlogById = (req,res) => {
    const blogId = req.params.id;

    const blog = {id: blogId, title: 'Sample blog', content: 'this is a sample content'}

    res.json(blog)
}