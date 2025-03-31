import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');
  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const becomeEducator = async () => {
    try {
      if (isEducator) {
        navigate('/educator');
      } else {
        const token = await getToken();
        const { data } = await axios.get(backendUrl + '/api/educator/update-role', { headers: { Authorization: `Bearer ${token}` } });
        if (data.success) {
          toast.success(data.message);
          setIsEducator(true);
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleEducatorClick = async () => {
    try {
      await becomeEducator();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md transition-all duration-300 ${
      isScrolled ? 'shadow-[0_2px_20px_-8px_rgba(0,0,0,0.2)]' : ''
    }`}>
      <div className="max-w-7xl mx-auto h-16 px-4 md:px-8">
        <div className="flex items-center justify-between h-full">
          <Link to="/" className="flex items-center">
            <img src={assets.logo} alt="Logo" className="h-8 w-auto" />
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-[#947335]">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-[#947335]">About Us</Link>
            <Link to="/contact" className="text-gray-700 hover:text-[#947335]">Contact Us</Link>
            {user && (
              <>
                <Link to="/my-enrollments" className="text-gray-700 hover:text-[#947335]">My Enrollments</Link>
                <button
                  onClick={handleEducatorClick}
                  className="text-gray-700 hover:text-[#947335]"
                >
                  {isEducator ? 'Educator Dashboard' : 'Become an Educator'}
                </button>
              </>
            )}
          </div>

          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white/95 backdrop-blur-sm absolute left-0 right-0 top-16 border-t border-gray-100 shadow-lg"
            >
              <div className="px-4 py-3 space-y-2">
                <Link 
                  to="/" 
                  className="block px-4 py-2 text-gray-700 hover:text-[#947335] hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  to="/about" 
                  className="block px-4 py-2 text-gray-700 hover:text-[#947335] hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 text-gray-700 hover:text-[#947335] hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact Us
                </Link>
                {user && (
                  <>
                    <Link 
                      to="/my-enrollments" 
                      className="block px-4 py-2 text-gray-700 hover:text-[#947335] hover:bg-gray-50 rounded-lg"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      My Enrollments
                    </Link>
                    <button
                      onClick={() => {
                        handleEducatorClick();
                        setIsMobileMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-gray-700 hover:text-[#947335] hover:bg-gray-50 rounded-lg"
                    >
                      {isEducator ? 'Educator Dashboard' : 'Become an Educator'}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;