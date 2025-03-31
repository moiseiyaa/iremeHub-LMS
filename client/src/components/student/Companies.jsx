import React from 'react';
import { assets } from '../../assets/assets';

const Companies = () => {
  const logos = [
    { src: assets.microsoft_logo, alt: 'Microsoft', width: 'md:w-28 w-20' },
    { src: assets.walmart_logo, alt: 'Walmart', width: 'md:w-28 w-20' },
    { src: assets.accenture_logo, alt: 'Accenture', width: 'md:w-24 w-20' },
    { src: assets.adobe_logo, alt: 'Adobe', width: 'md:w-24 w-20' },
    { src: assets.paypal_logo, alt: 'Paypal', width: 'md:w-24 w-20' },
  ];

  return (
    <div className="pt-16 overflow-hidden">
      <p className="text-base text-gray-500 text-center mb-10">Trusted by learners from</p>
      
      <div className="relative w-full">
        <div className="flex overflow-hidden">
          {/* First set of logos */}
          <div className="flex items-center justify-around min-w-full animate-scroll">
            {logos.map((logo, index) => (
              <div key={`logo1-${index}`} className="mx-12">
                <img
                  className={`${logo.width} logo-grayscale hover:scale-110 transition-all duration-300`}
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate set for seamless loop */}
          <div className="flex items-center justify-around min-w-full animate-scroll">
            {logos.map((logo, index) => (
              <div key={`logo2-${index}`} className="mx-12">
                <img
                  className={`${logo.width} logo-grayscale hover:scale-110 transition-all duration-300`}
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
          
          {/* Third set for smooth transition */}
          <div className="flex items-center justify-around min-w-full animate-scroll">
            {logos.map((logo, index) => (
              <div key={`logo3-${index}`} className="mx-12">
                <img
                  className={`${logo.width} logo-grayscale hover:scale-110 transition-all duration-300`}
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
