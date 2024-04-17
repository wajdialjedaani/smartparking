import React, { useEffect } from "react";
import NavBar from "../../../Components/Nav";
import MapView from "../../../Components/Maps/MapContainer";
import { useParams } from 'react-router-dom';
import { getstationsclient } from '../../../apis/api';
import { useState } from 'react';
function FindStations() {
  const { id } = useParams();
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
      console.log("newMarkers", newMarkers)
      setMarkers(newMarkers)
    }
  }, [stations])
  return (
    <div className=" h-screen ">
      <div>
        <NavBar
          img="/Assests/logo.jpg"
          item1="Home"
          item2="Feedback"
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
            <th className="px-10 py-2 border border-slate-600">Capacity</th>
            <th className="px-10 py-2 border border-slate-600">
              Available Slots
            </th>
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
              <td className="px-10 py-2 border border-slate-600">unt</td>
              <td className="px-10 py-2 border border-slate-600">100</td>
              <td className="px-10 py-2 border border-slate-600">20</td>
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
