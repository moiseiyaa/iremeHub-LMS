import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const TestimonialCard = ({ name, role, rating, text, image, companyLogo, onClick }) => {
  const stars = Array(5).fill(0).map((_, index) => (
    <span key={index} className={`text-xl md:text-2xl ${index < rating ? 'text-orange-500' : 'text-gray-300'}`}>
      ★
    </span>
  ))

  return (
    <motion.div 
      onClick={onClick} 
      className="bg-white rounded-lg shadow-lg p-4 md:p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      layout
    >
      <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
        <img src={image} alt={name} className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-gray-900 text-sm md:text-base truncate">{name}</h3>
          <div className="flex items-center gap-1.5 md:gap-2">
            <p className="text-xs md:text-sm text-gray-600 truncate">{role}</p>
            <span className="text-gray-300">•</span>
            <div className="flex-shrink-0 h-3.5 md:h-4">
              <img src={companyLogo} alt="Company Logo" className="h-full w-auto object-contain" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex mb-3 md:mb-4">{stars}</div>
      <p className="text-sm md:text-base text-gray-700 mb-3 md:mb-4 line-clamp-3">{text}</p>
      <button className="text-sm md:text-base text-[#947335] hover:underline">Read more</button>
    </motion.div>
  )
}

const TestimonialModal = ({ isOpen, onClose, testimonial }) => {
  return (
    <AnimatePresence>
      {isOpen && testimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={e => e.stopPropagation()}
            className="bg-white rounded-xl p-6 md:p-8 max-w-2xl w-full shadow-2xl mx-4"
          >
            <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
              <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover" />
              <div className="flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-semibold text-gray-900 truncate">{testimonial.name}</h2>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <p className="text-sm md:text-base text-gray-600 truncate">{testimonial.role}</p>
                  <span className="text-gray-300">•</span>
                  <div className="flex-shrink-0 h-4 md:h-5">
                    <img src={testimonial.companyLogo} alt="Company Logo" className="h-full w-auto object-contain" />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex mb-4 md:mb-6">
              {Array(5).fill(0).map((_, index) => (
                <span key={index} className={`text-2xl md:text-3xl ${index < testimonial.rating ? 'text-orange-500' : 'text-gray-300'}`}>
                  ★
                </span>
              ))}
            </div>
            <p className="text-base md:text-lg leading-relaxed mb-4 md:mb-6 text-gray-700">{testimonial.text}</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-3 right-3 md:top-4 md:right-4 text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Testimonials = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)

  const testimonials = [
    {
      name: "Donald Jackman",
      role: "SWE 1",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Amazon_icon.svg",
      text: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier. The platform's intuitive interface and comprehensive features have significantly improved my workflow. The support team has been exceptional in addressing any questions or concerns promptly. I highly recommend this platform to anyone looking to enhance their learning experience."
    },
    {
      name: "Richard Nelson",
      role: "SWE 2",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Samsung_Logo.svg",
      text: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier. The course content is well-structured and the instructors are highly knowledgeable. The practical exercises and real-world projects have helped me apply what I've learned effectively. The platform's community is also very supportive and engaging."
    },
    {
      name: "James Washington",
      role: "SWE 2",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      companyLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      text: "I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier. The quality of content and the depth of topics covered are impressive. The platform's flexibility allows me to learn at my own pace, and the interactive elements keep me engaged throughout the courses. It's been a valuable investment in my professional development."
    }
  ]

  return (
    <div className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-4">
          What Our Learners Say
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Hear from our learners as they share their journeys of transformation, success, and how our platform has made a difference in their lives.
        </p>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
              onClick={() => setSelectedTestimonial(testimonial)}
            />
          ))}
        </motion.div>
      </div>
      <TestimonialModal
        isOpen={!!selectedTestimonial}
        onClose={() => setSelectedTestimonial(null)}
        testimonial={selectedTestimonial}
      />
    </div>
  )
}

export default Testimonials 