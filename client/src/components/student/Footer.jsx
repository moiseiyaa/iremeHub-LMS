import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { toast } from 'react-toastify'

const Footer = () => {
  const { isEducator, setIsEducator, navigate, backendUrl, getToken } = useContext(AppContext)
  const { user } = useUser()

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator')
        return;
      }

      const token = await getToken()
      const { data } = await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } })
      if (data.success) {
        toast.success(data.message)
        setIsEducator(true)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <footer className="bg-gray-900 md:px-36 text-left w-full mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-gray-400 py-14 px-8 md:px-0">
        <div>
          <img src={assets.logo} alt="Logo" className="w-32 brightness-0 invert" />
          <p className="text-sm pt-4">
            Empowering minds through quality education. Join us in the journey of lifelong learning.
          </p>
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">Quick Links</h1>
          <ul className="text-sm space-y-3 pt-4">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">Contact Info</h1>
          <ul className="text-sm space-y-3 pt-4">
            <li>+234 706 XXX XXXX</li>
            <li>info@iremehub.com</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
        <div>
          <h1 className="text-lg font-medium text-white">Newsletter</h1>
          <div className="flex items-center gap-2 pt-4">
            <input className="border border-gray-500/30 bg-gray-800 text-gray-500 placeholder-gray-500 outline-none w-64 h-9 rounded px-2 text-sm" type="email" placeholder="Enter your email" />
            <button className="bg-[#947335] w-24 h-9 text-white rounded">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="text-gray-500 text-sm border-t border-gray-800 py-5 px-8 md:px-0">
        Copyright 2025 © iremeHub. All Right Reserved. 
        {user && (
          <span className="ml-2">
            • {isEducator ? (
              <button onClick={becomeEducator} className="text-[#947335] hover:underline">Educator Dashboard</button>
            ) : (
              <button onClick={becomeEducator} className="text-[#947335] hover:underline">Become an Educator</button>
            )}
          </span>
        )}
      </div>
    </footer>
  )
}

export default Footer
