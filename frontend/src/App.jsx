import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blogs from './pages/Blogs'
import AppLayout from './ui/AppLayout'
import NewBlog from './pages/NewBlog'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Blogs />}/>
          <Route path='new-blog' element={<NewBlog />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
