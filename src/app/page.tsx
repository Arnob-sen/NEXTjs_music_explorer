import FeatureCourses from "@/components/FeatureCourses";
import HeroSection from "@/components/HeroSection";
import TestimonialCard from "@/components/TestimonialCard";
import UpcomingWebinar from "@/components/UpcomingWebinar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
 
    <main>
       
      <HeroSection/>
      <FeatureCourses/>
      <WhyChooseUs/>
      <TestimonialCard/>
     <UpcomingWebinar/>
    </main>
  );
}
