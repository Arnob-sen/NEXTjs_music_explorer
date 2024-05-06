"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards"; 
const TestimonialCard = () => {
    return (
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      );
    }
  
    const testimonials = [
        {
          quote:
            "Studying at the music school was a transformative experience. It helped me discover my passion for music and pushed me to new heights of creativity.",
          name: "Emily Bronte",
          title: "Music Enthusiast",
        },
        {
          quote:
            "The instructors at the music school are incredibly talented and dedicated. Their guidance has been invaluable in shaping my musical journey.",
          name: "Leo Tolstoy",
          title: "Aspiring Musician",
        },
        {
          quote:
            "Attending the masterclasses was a game-changer for me. I learned so much from industry experts and gained insights that I couldn't have obtained elsewhere.",
          name: "Virginia Woolf",
          title: "Music Student",
        },
        {
          quote:
            "The collaborative projects allowed me to connect with fellow musicians and explore new musical horizons. It was an enriching experience that fueled my creativity.",
          name: "F. Scott Fitzgerald",
          title: "Music Collaborator",
        },
        {
          quote:
            "I can't recommend the music school enough. It's a supportive community where you can grow as a musician and forge lifelong connections.",
          name: "Harper Lee",
          title: "Satisfied Student",
        },
      ];
      
export default TestimonialCard
