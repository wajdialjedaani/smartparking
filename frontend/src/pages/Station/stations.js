import React from 'react'
import { useState, useEffect, useContext } from 'react'
import { getstations } from '../../apis/api'
import { AuthContext } from '../../contexts/authContext'
import MapView from '../../Components/Maps/MapContainer'
function Stations() {
  const { user } = useContext(AuthContext)
  const [stations, setStations] = useState([])
  const fetchData = async () => {
    try {
      const data = await getstations(user.token);
      console.log(data);
      if (data.success) {
        setStations(data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className='p-2'>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold'>Stations</h1>
        <button className='bg-blue-500 text-white p-2 rounded'>Add Station</button>
      </div>
      <div >
        <MapView />
      </div>
      <div className='mt-4'>
        <table className='w-full'>
          <thead>
            <tr>
              <th>Station Name</th>
              <th>Location</th>
              <th>Capacity</th>
              <th>Organization Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stations !== undefined && stations.map(station => {
              return (
                <tr key={station._id}>
                  <td className='text-center'>{station.name}</td>
                  <td className='text-center'>{station.location}</td>
                  <td className='text-center'>{station.capacity}</td>
                  <td className='text-center'>{station.orgName}</td>
                  <td className='flex gap-4 justify-center'>
                    <button className='bg-green-500 text-white p-2 rounded'>Edit</button>
                    <button className='bg-red-500 text-white p-2 rounded'>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>

      </div>


    </div>
  )
}

export default Stations