import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const SearchBar = ({ data }) => {
  const navigate = useNavigate()
  const [input, setInput] = useState(data ? data : '')

  const onSearchHandler = (e) => {
    e.preventDefault()
    if (input.trim()) {
      navigate('/course-list/' + input.trim())
    }
  }

  return (
    <form onSubmit={onSearchHandler} className="w-full">
      <div className="relative flex w-full">
        <input 
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Search for courses" 
          className="w-full px-6 py-3 pr-24 rounded-full border border-gray-200 focus:outline-none focus:border-[#947335] bg-white shadow-[0_10px_50px_-12px_rgba(0,0,0,0.25)] hover:shadow-[0_15px_60px_-12px_rgba(0,0,0,0.3)] transition-shadow duration-300"
        />
        <button 
          type="submit"
          className="absolute right-0 h-full px-6 text-white font-medium bg-[#947335] rounded-full hover:bg-opacity-90 transition-all flex items-center"
        >
          Search
          <img src={assets.search_icon} alt="search" className="w-4 h-4 ml-2 brightness-0 invert" />
        </button>
      </div>
    </form>
  )
}

export default SearchBar