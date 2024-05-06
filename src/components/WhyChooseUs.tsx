'use client'
import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'
 
const content = [
    {
      title: "Interactive Learning",
      description:
        "Engage in interactive learning experiences with our music school. Collaborate with instructors and fellow students in real time, share musical ideas, and enhance your skills effectively. Our platform fosters a dynamic learning environment where you can explore various musical styles and techniques.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--indigo-500))] flex items-center justify-center text-white">
          Interactive Learning
        </div>
      ),
    },
    {
      title: "Live Performances",
      description:
        "Experience the thrill of live performances with our music school. Showcase your talents, receive instant feedback, and grow as a performer. Whether you're a solo artist or part of a band, our platform provides opportunities to connect with audiences and refine your stage presence.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-500),var(--teal-500))] flex items-center justify-center text-white">
          Live Performances
        </div>
      ),
    },
    {
      title: "Masterclasses",
      description:
        "Attend masterclasses conducted by renowned musicians and industry experts. Learn from the best in the field, gain valuable insights, and refine your craft. Our platform offers exclusive access to insightful sessions that cover a wide range of topics, from music theory to performance techniques.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--lime-500))] flex items-center justify-center text-white">
          Masterclasses
        </div>
      ),
    },
    {
      title: "Collaborative Projects",
      description:
        "Collaborate with fellow musicians on exciting projects. From composing original pieces to arranging covers, our platform facilitates creative collaborations that inspire growth and innovation. Join forces with like-minded individuals, unleash your creativity, and produce memorable musical works.",
      content: (
        <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--orange-500))] flex items-center justify-center text-white">
          Collaborative Projects
        </div>
      ),
    },
  ];
  
const WhyChooseUs = () => {
  return (
    <div className="p-10">
    <StickyScroll content={content} />
  </div>
  )
}

export default WhyChooseUs
