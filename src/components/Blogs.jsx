import React from 'react'

const Fourplayer = () => {
    const handleBack=()=>{
    window.history.back();
  }
  return (
    <div>
       <div>
        <h1 className='flex justify-center mt-70'>No Post Yet</h1>
        <p className='flex justify-center'> I will be sharing all my Dashain Blogs in this website every Year.</p>
      </div>
        <div className='flex justify-center mt-5'>
          <button onClick={handleBack} className='flex justify-center bg-green-600 text-white p-2 rounded-[4px]'> - Back</button>
      </div>
    </div>
  )
}

export default Fourplayer