import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
   const[open ,setOpen]=useState(false);
  return (
    <div>
        <div className='bg-white shadow-md h-16 flex justify-between items-center px-6'>
           <div>
              <Link to="/home">बिजया दशमी </Link>
        </div>
        <div className='justify-center gap-7 mt-5 hidden md:flex'>
             
        <Link to="/photo">Photos</Link>
        <Link to="/video">Videos</Link>
         <Link to="/blog">Blogs</Link>


     </div>
     <div className='hidden md:flex'>
      <Link to="/wish">  <button className='bg-[#3165f1] text-white p-2 rounded-4xl hover:bg-blue-500'> Wish Me  </button></Link> 
     </div>
     
     <div className='md:hidden'>
      <i onClick={()=>setOpen(!open)}>{open ? <RxCross2 />:<CiMenuBurger />}</i>

     </div>


        </div>
        {/* Mobile View  */}

     <div className={`${open?"block":"hidden"} sm:hidden bg-white space-y-6 pb-5 flex flex-col px-0.5 justify-center items-center shadow-md`}>
             
        <Link to="/photo">Photos</Link>
        <Link to="/video">Videos</Link>
         <Link to="/blog">Blogs</Link>
 <Link to="/wish">
         <button className='bg-[#3165f1] text-white p-2 rounded-4xl hover:bg-blue-500 h-10 w-100'> Wish Me</button></Link>
     </div>

      
   
    </div>   
  )
}

export default Navbar