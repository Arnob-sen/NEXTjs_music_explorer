'use client'
import React from 'react'
import Link from 'next/link'
import { HoverEffect } from './ui/card-hover-effect'
const UpcomingWebinar = () => {
  return (
    <div className='p-12 bg-gray-900'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6'>
            <div className='text-center'>
            <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
            FEATURED WEBINARS
            </h2> 
            <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm: text-4xl'>
                Enhance Your Musical Journey
            </p>

            </div>
            <div className='mt-10'>
            <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
            </div>
            <div className='mt-10 text-center'>
            <Link href={"/all-courses"}
        className='px-8 py-2 rounded-md bg-teal-500 text-white font-bold transition duration-200 hover:bg-white hover:text-black border-2 border-transparent hover:border-teal-500'
        >
            
                View All Courses;
            
        </Link>

            </div>

        </div>
      
    </div>
  )
}

export default UpcomingWebinar
export const projects = [
    {
      title: "Mastering Guitar Techniques",
      description: "Join us for a webinar where we'll delve into advanced guitar techniques and tips to enhance your playing skills.",
      link: "https://example.com/mastering-guitar-techniques",
    },
    {
      title: "Exploring Music Theory Basics",
      description: "Learn the fundamentals of music theory in this comprehensive webinar suitable for beginners and enthusiasts alike.",
      link: "https://example.com/exploring-music-theory",
    },
    {
      title: "Unlocking the Secrets of Songwriting",
      description: "Discover the art and craft of songwriting with our expert instructors, covering everything from lyric writing to melody construction.",
      link: "https://example.com/secrets-of-songwriting",
    },
    {
      title: "Essentials of Music Production",
      description: "Explore the essentials of music production, from recording techniques to mixing and mastering, in this hands-on webinar.",
      link: "https://example.com/essentials-of-music-production",
    },
    {
      title: "Introduction to Piano for Beginners",
      description: "Embark on your musical journey with our introductory piano webinar designed specifically for beginners.",
      link: "https://example.com/introduction-to-piano",
    },
    {
      title: "Vocal Techniques and Performance",
      description: "Enhance your singing abilities and stage presence with our webinar focused on vocal techniques and live performance tips.",
      link: "https://example.com/vocal-techniques-and-performance",
    },
    {
      title: "The Art of Jazz Improvisation",
      description: "Dive into the world of jazz improvisation with our experienced instructors, exploring scales, chords, and improvisational techniques.",
      link: "https://example.com/art-of-jazz-improvisation",
    },
    {
      title: "Exploring World Music Traditions",
      description: "Take a journey around the globe as we explore diverse world music traditions, from African rhythms to Indian ragas.",
      link: "https://example.com/world-music-traditions",
    },
    {
      title: "Music Business Essentials",
      description: "Learn the basics of the music business, including copyright, licensing, and marketing strategies, in this insightful webinar.",
      link: "https://example.com/music-business-essentials",
    },
  ];
  