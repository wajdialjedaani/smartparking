import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { getstationbyid, createparkingOption } from '../../../apis/api'
import { AuthContext } from '../../../contexts/authContext'
import BasicModal from '../../../Components/Modals/BasisModal'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const parkingOptionsHmap = {
  1: "Car",
  2: "EV",
  3: "Bicycle",
  4: "Disabled"
}
function Station() {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [station, setStation] = useState(null)
  const [showModal, setShowModal] = useState(false)

  const formik = useFormik({
    initialValues: {
      type: "",
      capacity: "",
      occupied: ""
    },
    validationSchema: Yup.object({
      type: Yup.string()
        .required('Type is Required'),
      capacity: Yup.number()
        .required('Capacity of station is Required'),
      occupied: Yup.number()
        .required('Occupied slots is Required'),
    }),
    onSubmit: async values => {
      console.log(values);
      const data = await createparkingOption({ ...values, stationId: id }, user.token)
      console.log(data);
      formik.resetForm();

    }
  })
  const fetchData = async () => {
    try {
      const data = await getstationbyid(id, user.token);
      console.log(data);
      if (data.success) {
        setStation(data.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };


  useEffect(() => {
    console.log(id)
    fetchData();

  }, [])


  return (
    <div className='p-4 '>
      {station ? (
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-bold'>{station.name}</h1>
          <div className='basis-1/3 flex flex-col gap-4'>
            <div className='flex flex-wrap'>
              <h2 className='text-xl basis-1/3 font-bold'>Station Name </h2>
              <p className='basis-2/3'>{station.name}</p>
            </div>
            <div className='flex flex-wrap'>
              <h2 className='text-xl basis-1/3 font-bold'>Station location</h2>
              <p className='basis-2/3'>{station.location?.stringaddress}</p>
            </div>
            <div className='flex flex-wrap'>
              <h2 className='text-xl basis-1/3 font-bold'>Capacity (no of slots)</h2>
              <p className='basis-2/3'>{station.capacity}</p>
            </div>
            <div className='flex flex-wrap'>
              <h2 className='text-xl basis-1/3 font-bold'>organization Name</h2>
              <p className='basis-2/3'>{station.orgName}</p>
            </div>
          </div>
          {/* <div>
            <img src={station.image} alt='station' className='w-60 h-60 object-cover' />
          </div> */}

          <div className='flex flex-col gap-2'>
            <h1 className='text-2xl font-bold'>Parking Options</h1>
            <div className='flex gap-1 flex-wrap '>
              {station.parkingOptions.map((option, index) => (
                <div key={index} className='border w-1/3 bg-yellow-300 rounded shadow p-4'>
                  <div className='flex flex-wrap'>
                    <h2 className='text-xl basis-1/3 font-bold'>Type </h2>
                    <p className='text-xl'>{parkingOptionsHmap[Number(option.type)]}</p>
                  </div>
                  <div className='flex flex-wrap'>
                    <h2 className='text-xl basis-1/3 font-bold'>Capacity</h2>
                    <p className='text-xl'>{option.capacity}</p>
                  </div>
                  <div className='flex flex-wrap'>
                    <h2 className='text-xl basis-1/3 font-bold'>Occupied</h2>
                    <p className='text-xl'>{option.occupied}</p>
                  </div>
                </div>
              ))
              }
              <button className='p-1 w-20 border bg-yellow-300 rounded shadow text-3xl' onClick={() => { setShowModal(true) }}>+</button>
            </div>
          </div>

        </div >
      ) : (
        <div>
          <h1 className='text-2xl font-bold'>No Station Found</h1>
        </div>
      )
      }

      {showModal && <BasicModal
        cancleModal={() => { setShowModal(false); formik.resetForm(); }}
        submitModal={() => { formik.handleSubmit(); setShowModal(false); }}
      >
        <div className='flex flex-col gap-2 p-2'>
          <div className='flex items-center'>
            <label className='basis-1/5 text-xl font-bold'>Type </label>
            <div className='w-full basis-4/5'>
              <select className='border border-blue-200 p-2 rounded w-1/3' name='type' {...formik.getFieldProps('type')} value={formik.type} >

                <option value="" disabled>Select Type</option>
                <option value="1">Car</option>
                <option value="2">EV</option>
                <option value="3">Bicycle</option>
                <option value="4">Disabled</option>
              </select>
              {formik.errors.type ? (
                <div className='border border-red-400 text-red-400 w-1/3 text-center p-2'>{formik.errors.type}</div>
              ) : null}
            </div>

          </div>
          <div className='flex '>
            <label className='basis-1/5 text-xl font-bold'>capacity</label>
            <div className='basis-4/5'>
              <input type="text" className='border border-blue-200 p-2 rounded w-1/3' name="capacity" {...formik.getFieldProps('capacity')} value={formik.capacity} />
              {formik.errors.capacity ? (
                <div className='border border-red-400 text-red-400 w-1/3 text-center p-2'>{formik.errors.capacity}</div>
              ) : null}
            </div>

          </div>
          <div className='flex '>
            <label className='basis-1/5 text-xl font-bold'>Total Occupied</label>
            <div className='basis-4/5'>
              <input type="text" className='border border-blue-200 p-2 rounded w-1/3' name="occupied" value={formik.occupied} />
              {formik.errors.capacity ? (
                <div className='border border-red-400 text-red-400 w-1/3 text-center p-2'>{formik.errors.occupied}</div>
              ) : null}
            </div>

          </div>

        </div>
      </BasicModal>
      }
    </div >
  )
}

export default Station