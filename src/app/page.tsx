import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
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
     <Instructor/>
     <Footer/>
    </main>
  );
}
