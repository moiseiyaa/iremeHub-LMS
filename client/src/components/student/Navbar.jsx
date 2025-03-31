import React, { useContext, useState, useEffect } from 'react';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import { useClerk, UserButton, useUser } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import axios from 'axios';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isCoursesListPage = location.pathname.includes('/course-list');
  const { backendUrl, isEducator, setIsEducator, navigate, getToken } = useContext(AppContext);
  const { openSignIn } = useClerk();
  const { user } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <div className={`fixed top-0 left-0 right-0 z-50 bg-white/60 backdrop-blur-md shadow-[0_2px_20px_-8px_rgba(0,0,0,0.1)] transition-all duration-300 ${isScrolled ? 'shadow-[0_2px_20px_-8px_rgba(0,0,0,0.2)]' : ''}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-8">
        <img onClick={() => navigate('/')} src={assets.logo} alt="Logo" className="w-28 lg:w-32 cursor-pointer" />
        <div className="hidden md:flex items-baseline gap-8 text-gray-600">
          <Link to="/" className="hover:text-[#947335] transition-colors">Home</Link>
          <Link to="/about" className="hover:text-[#947335] transition-colors">About Us</Link>
          <Link to="/contact" className="hover:text-[#947335] transition-colors">Contact Us</Link>
        </div>
        <div className="md:flex hidden items-center gap-5 text-gray-500">
          <div className="flex items-center gap-5">
            {user && <Link to='/my-enrollments'>My Enrollments</Link>}
          </div>
          {user
            ? <UserButton />
            : <button onClick={() => openSignIn()} className="bg-[#947335] text-white px-5 py-2 rounded-full">
              Sign In
            </button>}
        </div>
        <div className='md:hidden flex items-center gap-2 sm:gap-5 text-gray-500'>
          <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
            {user && <Link to='/my-enrollments'>My Enrollments</Link>}
          </div>
          {user
            ? <UserButton />
            : <button onClick={() => openSignIn()}>
              <img src={assets.user_icon} alt="" />
            </button>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;