import React from "react";
import Button from "../../Components/Button";
function Dataanalytics() {
  return (
    <div>
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
            <h1 className="font-semibold font-sans text-3xl text-[#000000] p-5 mx-[150px]">
              Station 1
            </h1>

            <div className=" flex justify-center p-16 ">
              <div className="bg-gray-200 w-[950px] h-[300px]"></div>
            </div>
            <div className="flex justify-around  p-5 text-2xl font-sans text-slate-50">
              <Button
                buttonname="Download CSV"
                btnstyle="bg-[#4EA2F0]   p-2 rounded-md hover:bg-gray-600"
              />
              <div className="bg-[#D9D9D9] h-[76px] mt-[480px] "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dataanalytics;
