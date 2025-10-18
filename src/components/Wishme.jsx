import React from 'react'

const Wishme = () => {
  return (
    <div>
       <h1></h1>
       <h1 className='text-4xl flex justify-center mt-8 text-blue-500'>Happy Dashain </h1>
       <div className='flex justify-center mt-35 bg-white shadow-md items-center m-126 h-70 space-y-4 flex-col col-end-4'>
    
      <label htmlFor="">
        <h2>Email :</h2>
    <input type="email" placeholder='Happy@gmail.com' className='border-[4px] h-7 w-70 mt-4'/>
      </label>
            <label htmlFor="">
        <h2>Message :</h2>
    <input type="text" placeholder='' className='border-[4px] h-20 w-70 mt-4'/>
      </label>
      <button className='bg-blue-500 text-white h-10 w-90 rounded-lg hover:bg-blue-700'>
        Send
      </button>
       </div>
    </div>
  )
}

export default Wishme
