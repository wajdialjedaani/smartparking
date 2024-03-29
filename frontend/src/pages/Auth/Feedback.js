import React from "react";
import NavBar from '../../Components/Nav'
import Button from "../../Components/Button";
function Feedback() {
  return (
    <div className=" h-screen ">
      <div>
        <NavBar
          img="/Assests/logo.png"
          item1="Home"
          item2="Feedback"
          btnname="Admin"
        />
      </div>
      <div className="flex justify-center my-[50px]">
        <div className="border-collapse border border-slate-200 w-[400px] h-[550px] shadow-2xl rounded-[10px]  ">
          <h1 className="text-center  pt-8 text-2xl font-bold ">
            Feedback Form
          </h1>
          <div className="grid gap-5 p-auto m-8 text-xl">
            <input
              type="text"
              placeholder="Email"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Station Name"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <input
              type="text"
              placeholder="Rating"
              className="border-collapse border border-slate-200 text-center h-[60px] bg-[#D9D9D9] rounded-[10px]"
            />
            <textarea
              placeholder="Comments"
              rows="7"
              className="border-collapse border border-slate-200 text-center resize-none h-[90px] bg-[#D9D9D9] rounded-[10px]"
            ></textarea>

          </div>
          <div className="flex justify-around  p-5 text-2xl font-sans text-slate-50">
            <Button buttonname="Cancel" btnstyle=" bg-gray-900 p-2 rounded-md hover:bg-gray-600" />
            <a href="feedmsg"><Button buttonname="Submit" btnstyle="bg-[#F9ED32]   p-2 rounded-md hover:bg-gray-600 text-gray-900" /></a>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Feedback;
