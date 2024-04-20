import React from 'react'
import { getuserfeedback } from '../../../apis/api'
import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/authContext'
import { AlertContext } from '../../../contexts/alertContext'
function UserFeedback() {
  const [feedbacks, setFeedbacks] = useState([])
  const { user } = useContext(AuthContext)
  const { showAlert } = useContext(AlertContext)
  useEffect(() => {
    getuserfeedback(user.token)
      .then(data => {
        console.log(data)
        if (data && data.success) {
          setFeedbacks(data.data)
        }
        else {
          showAlert(data.message, 'error')
        }
      })
  }, [])
  const handleExport = () => {
    // Convert feedbacks data to CSV format
    const csvData = feedbacks.map(feedback => {
      return `${feedback._id},${feedback.email},${feedback.timestamp},${feedback.rating},${feedback.comment},${feedback.stationId}`;
    }).join('\n');

    // Create a new Blob object with the CSV data
    const blob = new Blob([`Id, Email, Date, Rating, Comment, Station Id\n`, csvData], { type: 'text/csv;charset=utf-8;' });

    // Create a temporary anchor element to download the CSV file
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'user_feedback.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }
  return (
    <div className='p-2'>
      <div className='flex justify-between'>
        <h1 className='text-2xl font-bold'>User Feedback</h1>
        <button className='bg-[#F9ED32] p-2 rounded-md' onClick={handleExport}>Export</button>
      </div>
      <div className='mt-5'>
        <table className='w-full'>
          <thead>
            <tr className='bg-[#F9ED32]'>
              <th className='p-2 text-center border border-gray-900'>ID</th>
              <th className='p-2 text-center border border-gray-900'>Email</th>
              <th className='p-2 text-center border border-gray-900'>Date</th>
              <th className='p-2 text-center border border-gray-900'>Rating</th>
              <th className='p-2 text-center border border-gray-900'>Comment</th>
              <th className='p-2 text-center border border-gray-900'>Station Id</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks?.map(feedback => {
              return (
                <tr>
                  <td className='p-2 text-center border border-gray-900'>{feedback._id}</td>
                  <td className='p-2 text-center border border-gray-900'>{feedback.email}</td>
                  <td className='p-2 text-center border border-gray-900'>{feedback.timestamp}</td>
                  <td className='p-2 text-center border border-gray-900'>{feedback.rating}</td>
                  <td className='p-2 text-center border border-gray-900'>{feedback.comment}</td>
                  <td className='p-2 text-center border border-gray-900'>{feedback.stationId}</td>
                </tr>
              )
            })
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserFeedback