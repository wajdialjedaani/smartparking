import React from 'react'

function CreateParking() {
  return (
    <div className='flex p-10'>
      <div className='basis-1/2'>img</div>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex items-center'>
          <label className='basis-1/3'>Station Name</label>
          <input type="text" className='border border-blue-200 p-2 rounded w-full' />
        </div>
        <div className='flex items-center'>
          <label className='basis-1/3'>Station Location</label>
          <input type="text" className='border border-blue-200 p-2 rounded w-full' />
        </div>
        <div className='flex items-center'>
          <label className='basis-1/3'>Station Capacity</label>
          <input type="text" className='border border-blue-200 p-2 rounded w-full' />
        </div>
      </div>
    </div>
  )
}

export default CreateParking