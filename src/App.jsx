import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Photos from './components/Photos'
import Videos from './components/Videos'
import Blogs from './components/Blogs'
import Home from './components/Home'
import Wishme from './components/Wishme'
const App = () => {
  return (
    <div>
  <BrowserRouter>
  <Navbar/>
  <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/home' element={<Home/>}/>
    <Route path='/photo' element={<Photos/>}/>
     <Route path='/video' element={<Videos/>}/>
      <Route path='/blog' element={<Blogs/>}/>
      <Route path='/wish' element={<Wishme/>}/>
  </Routes>
  
  
  </BrowserRouter>


     
    </div>
  )
}

export default App