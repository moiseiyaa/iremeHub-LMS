import React from 'react';
import { assets } from '../../assets/assets';
import SearchBar from './SearchBar';

const Hero = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-between w-full px-7 md:px-14 lg:px-36 pt-28 md:pt-20 min-h-[90vh]">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left space-y-6 md:w-1/2 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Grow your skills with our online course
          </h1>
          <p className="text-gray-600 text-lg">
            Our have to be burning with an idea, or a problem, or a wrong that you want to right. If you're not passionate enough from the start, you'll never stick it out.
          </p>
          <div className="w-full max-w-md">
            <SearchBar />
          </div>
        </div>

        {/* Right Image with Fade Effect */}
        <div className="md:w-1/2 relative mt-12 md:mt-0">
          <div className="relative w-full max-w-xl mx-auto">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#fff5c9] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 -left-4 w-72 h-72 bg-[#997532] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            
            {/* Main image container */}
            <div className="relative">
              <img 
                src={assets.profile_img_1} 
                alt="Student" 
                className="w-full h-auto object-contain z-10 relative"
              />
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-[#aed464]/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
