import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs'
import Contact from './Pages/Contact'
import Error from './Pages/Error'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './Pages/NavLink/Navbar';
import Blog from './Pages/Blog';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/Blogs' element={<Blogs />} />
        <Route path='/Blogs/:title' element={<Blog />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;


