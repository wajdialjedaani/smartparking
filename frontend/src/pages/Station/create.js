import React from 'react'
import { useState } from 'react'
import { createstation } from '../../apis/api'
import { useContext } from 'react'
import { AuthContext } from '../../contexts/authContext'
import { AlertContext } from '../../contexts/alertContext'
function CreateParking() {
  const { user } = useContext(AuthContext)
  const { showAlert } = useContext(AlertContext)
  const [station, setStation] = useState({
    name: '',
    location: '',
    capacity: '',
    image: null
  })
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    console.log(name, value, type, files)
    setStation({
      ...station,
      [name]: type === 'file' ? files[0] : value,
    })
    console.log(station)
  }
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('name', station.name)
    formData.append('location', station.location)
    formData.append('capacity', station.capacity)
    formData.append('orgName', station.orgName)

    formData.append('file', station.image)
    console.log("formdata", station.image)
    const response = await createstation(formData, user.token)
    console.log("fff", formData, response)
    if (response && !response.success) {
      if (response.errors && response.errors.length > 0) {
        response.errors.forEach(error => {
          showAlert(error.path, error.path + ' ' + error.msg, error.path)
        })

      }
    }
    console.log(response)
  }
  return (
    <div className='flex p-10'>
      <div className='basis-1/2'>
        <div className='bg-gray-200 w-60 h-60 p-4 border border-dashed-2 flex items-center'>
          <img src={station.file ? URL.createObjectURL(station.file) : '/Assests/parking/placeholder.png'} alt='station' className='w-full h-full object-cover' />
          <input name="file" type="file" onChange={handleChange} />
        </div>
      </div>
      <div className='w-full flex flex-col gap-4'>
        <div className='flex items-center'>
          <label className='basis-1/3'>Station Name</label>
          <input type="text" name="name" onChange={handleChange} className='border border-blue-200 p-2 rounded w-full' />
        </div>
        <div className='flex items-center'>
          <label className='basis-1/3'>Organization Name</label>
          <input type="text" name="orgName" onChange={handleChange} className='border border-blue-200 p-2 rounded w-full' />
        </div>
        <div className='flex items-center'>
          <label className='basis-1/3'>Station Location</label>
          <input type="text" name="location" onChange={handleChange} className='border border-blue-200 p-2 rounded w-full' />
        </div>
        <div className='flex items-center'>
          <label className='basis-1/3'>Station Capacity</label>
          <input type="text" name="capacity" onChange={handleChange} className='border border-blue-200 p-2 rounded w-full' />
        </div>

        <div className='flex justify-between'>
          <button className='bg-red-500 text-white p-2 rounded w-20'>Cancel</button>
          <button className='bg-blue-500 text-white p-2 rounded w-20' onClick={handleSubmit}>Create</button>
        </div>

      </div>
    </div>
  )
}

export default CreateParking