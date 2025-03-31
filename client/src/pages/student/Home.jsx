import React from 'react';
import Footer from '../../components/student/Footer';
import Hero from '../../components/student/Hero';
import Companies from '../../components/student/Companies';
import CoursesSection from '../../components/student/CoursesSection';
import TestimonialsSection from '../../components/student/TestimonialsSection';
import CallToAction from '../../components/student/CallToAction';
import CloudDivider from '../../components/common/CloudDivider';

const Home = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <div className="w-full">
        <CloudDivider topColor="white" bottomColor="#f8f9fa" upsideDown={false} />
        <TestimonialsSection />
      </div>
      <div className="mt-24">
        <CallToAction />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
