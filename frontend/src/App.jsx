import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Blogs from './pages/Blogs'
import AppLayout from './ui/AppLayout'
import NewBlog from './pages/NewBlog'
import BlogDetails from './pages/BlogDetails'
import FavoriteBlogs from './pages/FavoriteBlogs'
import AllowedBlogs from './pages/AllowBlogs'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to='blogs' />}/>
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/:blogId' element={<BlogDetails />}/>
          <Route path='new-blog' element={<NewBlog />}/>
          <Route path='favorite' element={<FavoriteBlogs />} />
          <Route path='allow' element={<AllowedBlogs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
