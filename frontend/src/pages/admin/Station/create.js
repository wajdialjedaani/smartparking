import React from 'react'
import { useState } from 'react'
import { createstation } from '../../../apis/api'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/authContext'
import { AlertContext } from '../../../contexts/alertContext'
import BasicModal from '../../../Components/Modals/BasisModal'
import MapView from '../../../Components/Maps/MapContainer'
function CreateParking() {
  const { user } = useContext(AuthContext)
  const { showAlert } = useContext(AlertContext)
  const [showModal, setShowModal] = useState(false)
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
  const setLocation = (address) => {
    console.log("address", address)
    const newAddress = {
      postalCode: address.address.postcode,
      city: address.address.city,
      country: address.address.country,
      country_code: address.address.country_code,
      stringaddress: address.display_name,
      state: address.address.state,
      road: address.address.road,
      lat: address.lat,
      lng: address.lon
    }
    setStation({
      ...station,
      location: newAddress
    })
  }
  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append('name', station.name)
    formData.append('stringaddress', station.location.stringaddress)
    formData.append('lat', station.location.lat)
    formData.append('lng', station.location.lng)
    formData.append('city', station.location.city)
    formData.append('state', station.location.state)
    formData.append('country', station.location.country)
    formData.append('country_code', station.location.country_code)
    formData.append('road', station.location.road)
    formData.append('postalCode', station.location.postalCode)
    formData.append('capacity', station.capacity)
    formData.append('orgName', station.orgName)

    formData.append('file', station.image)
    const response = await createstation(formData, user.token)
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
          <input type="text" name="location" value={station?.location?.stringaddress} onFocus={() => { setShowModal(true) }} className='border border-blue-200 p-2 rounded w-full' />
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
      <div>
      </div>
      {showModal && <BasicModal cancleModal={() => { setShowModal(false) }} submitModal={() => { setShowModal(false) }}>
        <MapView handleSearchSelect={(address) => { setLocation(address) }} />

      </BasicModal>
      }
    </div>
  )
}

export default CreateParking