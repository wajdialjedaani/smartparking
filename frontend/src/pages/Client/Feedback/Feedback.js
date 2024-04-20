import React, { useEffect } from "react";
import NavBar from "../../../Components/Nav";
import Button from "../../../Components/From/Button";
import { useState } from 'react';
import { usercreatefeedback, getstationbyidclient } from '../../../apis/api';
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Feedback() {
  const { id } = useParams();
  const [station, setStation] = useState(null)
  const [message, setMessage] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [feedback, setFeedback] = useState({ email: "", stationId: "", rating: "", comment: "" })
  const navigate = useNavigate();
  const handleFeedBackSubmit = async () => {
    try {
      setIsLoaded(true)
      const res = await usercreatefeedback(feedback);
      setIsLoaded(false)
      if (res && res.success) {
        setMessage({ text: "Feedback submitted successfully", type: "green" })
      }
      else if (res && res.error) {
        setMessage({ text: res.error, type: "red" })
        console.log(res.error)
      }
    }
    catch (error) {
      setIsLoaded(false)
      setMessage({ text: error.message, type: "red" })
    }
  }
  const handleBack = () => {
    navigate(-1)
  }
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFeedback({ ...feedback, [name]: value })
  }
  const handleStationFetch = async () => {
    const res = await getstationbyidclient(id);
    if (res && res.success) {
      setStation(res.data)
    }
    else if (res && res.error) {
      console.log(res.error)
    }
  }

  useEffect(() => {
    setFeedback({ ...feedback, stationId: id })
    handleStationFetch();
  }, [id])

  return (
    <div className=" h-screen ">
      <div>
        <NavBar
          img="/Assests/logo.png"
          item1="Home"
          btnname="Admin"
        />
      </div>
      <div className="flex flex-col justify-center text-center items-center gap-4 m-2">
        <form className="border-collapse border border-slate-200 w-[400px] h-[550px] shadow-2xl rounded-[10px]" onSubmit={(e) => { e.preventDefault(); handleFeedBackSubmit() }}>
          <h1 className="text-center  pt-8 text-2xl font-bold ">
            Feedback Form
          </h1>
          <div className="grid gap-5 p-auto m-8 text-xl">
            <input
              type="text"
              placeholder="Email"
              required
              name="email"
              value={feedback.email}
              onChange={handleInputChange}
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Station Name"
              required
              name="stationId"
              value={station?.name}
              disabled
              onChange={handleInputChange}
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Rating"
              required
              name="rating"
              value={feedback.rating}
              onChange={handleInputChange}
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <textarea
              placeholder="Comment"
              rows="7"
              required
              name="comment"
              value={feedback.comment}
              onChange={handleInputChange}
              className="border-collapse border border-slate-200 text-center resize-none h-[90px] bg-[#D9D9D9] rounded-[10px]"
            ></textarea>

          </div>
          <div className="flex justify-around  p-5 text-2xl font-sans text-slate-50">
            <Button onClick={handleBack}>
              cancel
            </Button>
            <Button color="primary" type='submit'>
              Submit
            </Button>
          </div>
        </form>
        {(message !== null && !isLoaded) && <div className='p-2 bg-yellow-300 text-2xl w-2/3'>{message.text}</div>
        }
      </div>
    </div>
  );
}
export default Feedback;
