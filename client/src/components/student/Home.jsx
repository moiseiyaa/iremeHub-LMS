import React from 'react'
import Hero from './Hero'
import CoursesList from './CoursesList'
import CallToAction from './CallToAction'
import Testimonials from './Testimonials'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Hero />
      <CoursesList />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Home 