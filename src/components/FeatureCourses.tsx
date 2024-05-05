import Link from 'next/link'
import React from 'react'
import courseData from '../data/music_courses.json'
import { Button } from './ui/moving-border'
const FeatureCourses = () => {
  return (
    <div className='py-12 bg-gray-900'>
      <div> 

        <div className="text-center">
           <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
            FEATURED COURSES
            </h2> 
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm: text-4xl'>
                Learn With the best
            </p>
        </div>
      </div>
      <div className='mt-10 '>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
            test

        </div>


      </div>
      <div className='mt-20 text-center'>
        <Link href={"/all-courses"}
        className='px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500'
        >
            
                View All Courses;
            
        </Link>
         
      </div>
    </div>
  )
}

export default FeatureCourses

