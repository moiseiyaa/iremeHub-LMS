import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { AppContext } from '../../context/AppContext'

const CourseCard = ({ course }) => {
    const { currency, calculateRating } = useContext(AppContext)

    return (
        <Link 
            onClick={() => scrollTo(0, 0)} 
            to={'/course/' + course._id} 
            className="bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-[20px] pb-6 overflow-hidden group"
        >
            <div className="relative overflow-hidden">
                <img 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
                    src={course.courseThumbnail} 
                    alt='' 
                />
            </div>
            <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{course.courseTitle}</h3>
                <p className="text-gray-500 mb-3">{course.educator.name}</p>
                <div className="flex items-center space-x-2 mb-3">
                    <p className="font-medium">{calculateRating(course)}</p>
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                className="w-4 h-4"
                                src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank}
                                alt=""
                            />
                        ))}
                    </div>
                    <p className="text-gray-500">({course.courseRatings.length})</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-lg font-bold text-[#947335]">
                        {currency}{(course.coursePrice - course.discount * course.coursePrice / 100).toFixed(2)}
                    </p>
                    {course.discount > 0 && (
                        <span className="text-sm text-gray-500 line-through">
                            {currency}{course.coursePrice}
                        </span>
                    )}
                </div>
            </div>
        </Link>
    )
}

export default CourseCard