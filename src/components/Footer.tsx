import React from 'react'

const Footer = () => {
  return (
   <footer className='bg-black text-gray-400 py-12'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>

    <div>
        <h2 className='text-white font-semibold p-4'>About us</h2>
        <p className='text-white p-4'>Music School is a premier instituation dedicated to teaching the art and science of music.We nurture talent from the ground up,fostering a vibrant community of musicians</p>
    </div>
    <div>
    <h2 className='text-white font-semibold p-4'>Quick Links</h2>
    <ul className='p-4'>
        <li className='text-white'>Home</li>
        <li className='text-white'>About</li>
        <li className='text-white'>Courses</li>
        <li className='text-white'>Contact</li>
    </ul>
    </div>
    <div>
    <h2 className=' p-4 text-white font-semibold'>Follow us</h2>
    <ul className='p-4'>
        <li className='text-white'>Facebook</li>
        <li className='text-white'>Twitter</li>
        <li className='text-white'>Instagram</li>
        <li className='text-white'>Github</li>
    </ul>
    </div>
    <div>

    <h2 className='p-4 text-white font-semibold'>Contact us</h2>
    <ul className='p-4'>
        <li className='text-white'>Sylhet</li>
        <li className='text-white'>Bangladesh</li>
        <li className='text-white'>Email</li>
        <li className='text-white'>arnobsen16.2@gmail.com</li>
    </ul>
    </div>
    </div>

    <p className='text-center pt-8 text-xs'>
       Developed by Arnob Sen 
    </p>
   </footer>
  )
}

export default Footer
