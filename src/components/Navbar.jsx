import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <div className='bg-white shadow-md h-16 flex justify-between items-center px-6'>
           <div>
              <Link to="/home">बिजया दशमी </Link>
        </div>
        <div className='flex justify-center gap-7 mt-5'>
             
        <Link to="/photo">Photos</Link>
        <Link to="/video">Videos</Link>
         <Link to="/blog">Blogs</Link>


     </div>
     <div>
        <button className='bg-[#3165f1] text-white p-2 rounded-4xl hover:bg-blue-500'> Wish Me  </button>
     </div>
        </div>
      
   
   
    </div>
  )
}

export default Navbar