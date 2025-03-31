import React from 'react'
import { useClerk } from '@clerk/clerk-react'

const CallToAction = () => {
  const { openSignIn } = useClerk()

  return (
    <div className='text-center max-w-3xl'>
      <h2 className='text-3xl font-medium text-gray-800'>Ready to Start Learning?</h2>
      <p className='text-gray-500 mt-3'>Join thousands of learners who have already taken the first step towards their goals.</p>
      <button 
        onClick={() => openSignIn()} 
        className='px-10 py-3 mt-8 rounded-md text-white bg-[#947335] hover:bg-opacity-90 transition-all duration-300'
      >
        Get started
      </button>
    </div>
  )
}

export default CallToAction