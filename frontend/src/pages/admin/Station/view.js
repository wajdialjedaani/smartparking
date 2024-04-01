import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../../contexts/authContext'
import { getstations } from '../../../apis/api'
import { useNavigate } from 'react-router-dom'
function StationsView() {
  const navigate = useNavigate()
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
  const handleSelectStation = (id) => {
    console.log(id)
    navigate(`/admin/stations/${id}`)
  }
  return (
    <div>
      {stations.length > 0 ? (
        <div>
          <h1 className='text-2xl font-bold'>Stations</h1>
          {/* <div >
            <MapView />
          </div> */}
          <div className='mt-4 w-full flex flex-wrap gap-2 p-2'>

            {stations !== undefined && stations.map(station => {
              return (
                <div key={station._id} className='basis-1/3 border bg-[#F9ED32] rounded shadow-md p-2 ' onClick={() => { handleSelectStation(station._id) }}>
                  <div className='flex flex-wrap'><div className='basis-1/2 ' style={{ fontWeight: "bold" }}>Station Name </div> {station.name}</div>
                  <div className='flex flex-wrap'><div className='basis-1/2' style={{ fontWeight: "bold" }}>Capacity (no of slots)</div> {station.capacity}</div>
                  <div className='flex flex-wrap'><div className='basis-1/2' style={{ fontWeight: "bold" }}>organization Name</div> {station.orgName}</div>
                  <div className='flex flex-wrap'><div className='basis-1/2' style={{ fontWeight: "bold" }}>Location</div> {station.location?.stringaddress}</div>
                  {/* <div className='flex gap-4 justify-center'>
                    <button className='bg-green-500 text-white p-2 rounded'>Edit</button>
                    <button className='bg-red-500 text-white p-2 rounded'>Delete</button>
                  </div> */}
                </div>
              )
            })}
          </div>
        </div >
      ) : (
        <div>
          <h1 className='text-2xl font-bold'>No Stations Found</h1>
        </div>
      )}
    </div >
  )
}

export default StationsView