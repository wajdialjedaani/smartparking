import React, { useEffect } from "react";
import NavBar from "../../../Components/Nav";
import MapView from "../../../Components/Maps/MapContainer";
import { useParams } from 'react-router-dom';
import { getstationsclient } from '../../../apis/api';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
function FindStations() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [stations, setStations] = useState([])
  const [markers, setMarkers] = useState([])
  const [currentStation, setCurrentStation] = useState(null)
  const ParkingOptionHmap = {
    "car": "1",
    "ev": "2",
    "bicycle": "3",
    "special-reserved": "4"
  }

  const handleStationsfetch = async (query) => {
    const res = await getstationsclient(query);
    if (res && res.success) {
      setStations(res.data)
    }
    else if (res && res.error) {
      console.log(res.error)
    }
  }
  const HandleCurrStation = (station) => {
    setCurrentStation(station.stationId)
  }
  const handleViewStation = (id) => {
    navigate(`/station/${id}`)
  }
  useEffect(() => {
    if ((id in ParkingOptionHmap) && id !== undefined) {
      handleStationsfetch(`?type=${ParkingOptionHmap[id]}`)
    }
    else {
      handleStationsfetch()
    }
  }, [])

  useEffect(() => {
    if (stations && stations.length > 0) {
      console.log("stations", stations)
      const newMarkers = stations.map((station, index) => {
        const TempStation = station?.stationId
        return {
          MarkerUrl: `/Assests/markers/${id}.png`,
          position: [TempStation?.location.coordinates[1], TempStation?.location.coordinates[0]],
          name: TempStation?.name,
          id: TempStation?._id
        }
      })
      setMarkers(newMarkers)
    }
  }, [stations])
  return (
    <div className=" h-screen ">
      <div>
        <NavBar
          img="/Assests/logo.jpg"
          item1="Home"
          btnname="Admin"
        />
      </div>

      <div className='px-10 py-2'>
        <MapView markers={markers} CurrStation={currentStation ? [...currentStation?.location?.coordinates].reverse() : null} />
      </div>

      {(stations !== undefined && stations.length > 0) ? <table className="m-auto border-collapse border border-slate-600 ">
        <thead className="">
          <tr className="">
            <th className="px-5 py-2  border border-slate-600 ">SNO</th>
            <th className="px-10 py-2 border border-slate-600">Name</th>
            <th className="px-10 py-2 border border-slate-600">Location</th>
            <th className="px-10 py-2 border border-slate-600">Total Slots All Types</th>
            <th className="px-10 py-2 border border-slate-600">{id} type capacity</th>
            <th className="px-10 py-2 border border-slate-600">{id} Available Slots</th>
            <th className="px-10 py-2 border border-slate-600">View Station</th>
          </tr>
        </thead>
        <tbody className="">
          {stations.map((station, idx) => {
            return <tr key={station?._id}>
              <td className="px-10 py-2 border border-slate-600">{idx}</td>
              <td className="px-10 py-2 border border-slate-600">
                <button className="bg-yellow-200 p-1 rounded-md" onClick={() => { HandleCurrStation(station) }}>
                  {station?.stationId?.name}
                </button>
              </td>
              <td className="px-10 py-2 border border-slate-600">{station?.stationId?.location?.stringaddress}</td>
              <td className="px-10 py-2 border border-slate-600">{station?.stationId?.capacity}</td>
              <td className="px-10 py-2 border border-slate-600">{station?.capacity}</td>
              <td className="px-10 py-2 border border-slate-600">{station?.capacity - station?.occupied}</td>
              <td className="px-10 py-2 border border-slate-600"><button className="bg-gray-900 text-white rounded shadow p-2" onClick={() => handleViewStation(station?.stationId?._id)}>View Station</button></td>
            </tr>
          })
          }
        </tbody>
      </table>
        : <div className="mx-10 p-4 bg-yellow-200 text-3xl text-center ">
          <p>No Parking Station with given Parking Option</p>
        </div>}
    </div>
  );
}
export default FindStations;
