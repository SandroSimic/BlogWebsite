import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Blogs from './pages/Blogs'
import AppLayout from './ui/AppLayout'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Blogs />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
