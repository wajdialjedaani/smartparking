import React from 'react'

function BasicModal({ children, cancleModal, submitModal }) {
  return (
    <div className='absolute w-2/3 bg-gray-300 shadow-md p-2 rounded my-2 bottom-20 '>
      {
        children
      }
      <div className='flex justify-between my-2'>
        <button onClick={cancleModal} className='bg-gray-500 w-20 text-white p-2 font-bold rounded'>Close</button>
        <button type='submit' onClick={submitModal} className='bg-yellow-300 w-20 text-gray-900 font-bold p-2 rounded'>Save</button>
      </div>
    </div>
  )
}

export default BasicModal