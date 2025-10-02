import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
       
        
       
        <div className='flex justify-center'>
            <img src="/5.png" alt="five" className='w-100 h-100'/>
        </div>

<h1 className='text-4xl flex justify-center'>May This Dashain Bring Peace and Prosperity</h1>
<h3 className='flex justify-center mt-3 text-bold'>Cards, Laughter & Dashain Celebration!</h3>

<div className='flex justify-center items-center space-x-9 mt-5'>
     <Link to="/photo">
       <button className='bg-[#3165f1] p-2 rounded-full text-white hover:bg-blue-500'>View Photos </button>
       </Link>
      <Link to="/video">
        <button className='bg-[#3165f1] p-2 rounded-full text-white hover:bg-blue-500'>Read Blogs  </button>
      </Link>
     
</div>
<div className='mt-10'>
<marquee behavior="" direction="" className='bg-gray-200'>“शुभ दशैँ! यो पावन अवसरमा तपाईं र तपाईंको परिवारमा सुख, शान्ति, स्वास्थ्य र समृद्धि बनी रहोस्। दशैँको टीका र जमरा तपाईंको जीवनमा नयाँ उत्साह, आनन्द र प्रेमको भावना ल्याओस्। देवी दुर्गाको आशिर्वादले तपाईंलाई हरेक कठिनाइबाट जोगाओस् र तपाईंको घरमा खुशी, हाँसो र समृद्धिको माहौल सधैं कायम रहोस्। यो पर्वले हामी सबैलाई परिवारसँग समय बिताउन, पुराना मित्रहरूसँग भेटघाट गर्न र समाजमा मेलमिलाप बढाउन प्रेरित गरोस्। तपाईँको जीवनमा सफलता, सौभाग्य र आनन्द सधैं भरिपूर्ण रहोस्। दशैँको सुखद अवसर तपाईंलाई र तपाईंको प्रियजनलाई धेरै शुभकामना!”</marquee>
   </div>
    </div>
  )
}

export default Home