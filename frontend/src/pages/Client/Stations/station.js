import React from 'react'
import NavBar from '../../../Components/Nav';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getstationbyidclient } from '../../../apis/api';
import Avatar from '@mui/material/Avatar';
import { deepOrange, green } from '@mui/material/colors';
import Button from '../../../Components/From/Button';
import { useNavigate } from 'react-router-dom';
function Station() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [station, setStation] = useState(null)
  const handleStationsfetch = async () => {
    const res = await getstationbyidclient(id);
    if (res && res.success) {
      setStation(res.data)
    }
    else if (res && res.error) {
      console.log(res.error)
    }
  }
  const handleBack = () => {
    navigate(-1)
  }
  const handleFeedback = () => {
    navigate(`/feedback/${id}`)
  }
  useEffect(() => {
    handleStationsfetch();

  }, [])
  return (
    <div className='h-screen'>
      <div>
        <NavBar
          img="/Assests/logo.jpg"
          item1="Home"
          btnname="Admin"
        />
      </div>
      <div className='px-10 py-2'>
        {(station === null || station === undefined) ? <div>
          <p>No Station To Show</p>
        </div>
          :
          <div className='flex gap-4 flex-col'>
            <div className='flex gap-4'>
              <div className='flex basis-1/3'>
                {station.image ?
                  <img src={station?.image} alt='station' className='w-1/2 h-1/2' /> :
                  <Avatar
                    variant="square"
                    sx={{ bgcolor: deepOrange[500], "width": "200px", "height": "200px" }}
                  >{station.name.slice(0, 2)}</Avatar>
                }
              </div>
              <div className='bg-gray-200 flex w-full flex-col p-4 gap-4'>
                <div className='flex items-center gap-4'>
                  <label className='font-bold text-2xl basis-1/5'>Name:</label>
                  <p className='font-bold text-xl'>{station.name}</p>
                </div>
                <div className='flex items-center gap-4'>
                  <label className='font-bold basis-1/5'>Address :</label>
                  <p>{station.location?.stringaddress}</p>
                </div>
                <div className='flex items-center gap-4'>
                  <label className='font-bold basis-1/5'>Organization Name:</label>
                  <p>{station.orgName}</p>
                </div>
                <div className='flex items-center gap-4'>
                  <label className='font-bold basis-1/5'>Capacity :</label>
                  <p>{station.capacity}</p>
                </div>
              </div>

            </div>
            <div className='flex justify-between'>
              <Button onClick={handleBack}>Back</Button>
              <Button color={"primary"} onClick={handleFeedback}>Feedback</Button>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Station