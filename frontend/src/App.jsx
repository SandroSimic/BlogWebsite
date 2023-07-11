import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blogs from './pages/Blogs'
import AppLayout from './ui/AppLayout'
import NewBlog from './pages/NewBlog'
import BlogDetails from './pages/BlogDetails'
import FavoriteBlogs from './pages/FavoriteBlogs'
import AllowedBlogs from './pages/AllowBlogs'
import Register from './pages/Register'
import { useAuthContext } from './context/authContext'

function App() {

  const {user} = useAuthContext()
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<AppLayout />}>
          <Route index element={<Blogs />}/>
          <Route path='blogs/:blogId' element={<BlogDetails />}/>
          <Route path='new-blog' element={<NewBlog />}/>
          <Route path='favorite' element={<FavoriteBlogs />} />
          <Route path='allow' element={<AllowedBlogs />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
