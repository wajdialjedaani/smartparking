import React from "react";
import Minicard from "../../Components/Minicard";

function Parkingstation() {
  return (
    <div className="flex   ">
      <div className="bg-[#f5ff36]  w-1/5 border-solid border-2 border-gray-500 h-screen  ">
        <div className="text-[#000000] text-2xl p-6  my-12 grid gap-2 ">
          <a href="dashboard" className="hover:underline decoration-2">
            Dashboard
          </a>
          <a href="pstation" className="hover:underline decoration-2">
            Parking Station
          </a>
          <div className="grid ml-5">
            <a href="view" className="hover:underline decoration-2">
              View
            </a>
            <a href="create" className="hover:underline decoration-2">
              Create
            </a>
          </div>
          <a href="data" className="hover:underline decoration-2">
            Data Analytics
          </a>
          <a href="userfeed" className="hover:underline decoration-2">
            User Feedback
          </a>
        </div>
      </div>
      <div className="bg-[#FFFFFF]  w-full flex flex-col  ">
        <div className="bg-[#f5ff36] h-[70px] border-solid border-2 border-gray-500">
          <h1 className="font-semibold font-sans text-3xl text-[#000000] p-5">
            Dashboard
          </h1>
        </div>
        <div className="bg-[#FFFFFF]  ">
          <div className="flex flex-col justify-center items-center m-5">
            <input
              type="text"
              placeholder="Search"
              className=" h-[60px] w-[600px] rounded-3xl border-solid border-2 border-gray-500 text-center "
            />
          </div>
          <div className="flex w-[1200px] h-full  flex-row justify-center ml-10 flex-wrap p-5">
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
            <Minicard />
          </div>
        </div>
        <div className="bg-[#D9D9D9] h-[76px] mt-[90px] "></div>
      </div>
    </div>
  );
}
export default Parkingstation;
