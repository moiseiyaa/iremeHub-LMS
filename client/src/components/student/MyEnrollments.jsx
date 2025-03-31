import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/clerk-react'
import axios from 'axios'
import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import { toast } from 'react-toastify'
import Footer from './Footer'

const MyEnrollments = () => {
  const { user } = useUser()
  const { backendUrl, getToken } = useContext(AppContext)
  const [enrollments, setEnrollments] = useState([])

  useEffect(() => {
    const fetchEnrollments = async () => {
      try {
        const token = await getToken()
        const { data } = await axios.get(backendUrl + '/api/student/enrollments', { headers: { Authorization: `Bearer ${token}` } })
        setEnrollments(data.enrollments)
      } catch (error) {
        toast.error(error.message)
      }
    }
    fetchEnrollments()
  }, [])

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">My Enrollments</h1>
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completed</th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {enrollments.map((enrollment) => (
                <tr key={enrollment._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img className="h-10 w-10 rounded-full object-cover" src={enrollment.course.thumbnail} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{enrollment.course.title}</div>
                        <div className="text-sm text-gray-500">{enrollment.course.category}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{enrollment.course.duration}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{enrollment.completed ? 'Yes' : 'No'}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      enrollment.completed ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {enrollment.completed ? 'Completed' : 'In Progress'}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MyEnrollments 