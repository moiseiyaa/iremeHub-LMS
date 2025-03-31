import React from 'react';
import { assets, dummyTestimonial } from '../../assets/assets';
import CloudDivider from '../common/CloudDivider';

const TestimonialsSection = () => {

  return (
    <div className="w-full relative">
      <div className="w-full bg-[#f8f9fa] pt-20 pb-32 px-8 md:px-0">
        <h2 className="text-3xl font-medium text-gray-800 mb-6">Testimonials</h2>
        <p className="md:text-base text-gray-500 mb-16">
          Hear from our learners as they share their journeys of transformation, success, and how our <br /> platform has made a difference in their lives.
        </p>
        <div className="grid grid-cols-auto gap-x-8 gap-y-12 mb-24 max-w-6xl mx-auto">
          {dummyTestimonial.map((testimonial, index) => (
            <div
              key={index}
              className="text-sm text-left border border-gray-500/10 pb-6 rounded-[20px] bg-white shadow-[0_15px_35px_-5px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.2)] transition-all duration-300 overflow-hidden max-w-[280px] mx-auto w-full"
            >
              <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/5">
                <img className="h-10 w-10 rounded-full" src={testimonial.image} alt={testimonial.name} />
                <div>
                  <h1 className="text-base font-medium text-gray-800">{testimonial.name}</h1>
                  <p className="text-sm text-gray-800/70">{testimonial.role}</p>
                </div>
              </div>
              <div className="p-5 pb-7">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <img
                      className="h-4"
                      key={i}
                      src={i < Math.floor(testimonial.rating) ? assets.star : assets.star_blank}
                      alt="star"
                    />
                  ))}
                </div>
                <p className="text-gray-500 mt-4 text-sm leading-relaxed">{testimonial.feedback}</p>
              </div>
              <a href="#" className="text-blue-500 underline px-5 text-sm">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute -bottom-24 left-0 right-0 w-full">
        <CloudDivider topColor="#f8f9fa" bottomColor="#f8f9fa" upsideDown={true} />
      </div>
    </div>
  );
};

export default TestimonialsSection;
