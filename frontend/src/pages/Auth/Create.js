import React from "react";
import Button from "../../Components/Button";
function Create() {
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
            <div className=" flex justify-start p-16 ">
              <div className="bg-gray-200 w-[350px] h-[300px]"></div>
              <div className="text-3xl space-y-6 m-4">
                <p>
                  Station Name
                  <input
                    type="text"
                    placeholder=""
                    className="border-collapse border border-slate-200 text-center h-[50px] bg-[#D9D9D9] rounded-[10px] ml-14"
                  />
                </p>
                <p>
                  Location name
                  <input
                    type="text"
                    placeholder=""
                    className="border-collapse border border-slate-200 text-center h-[50px] bg-[#D9D9D9] rounded-[10px]  ml-10"
                  />
                </p>
                <p>
                  Capacity
                  <input
                    type="text"
                    placeholder=""
                    className="border-collapse border border-slate-200 text-center h-[50px] bg-[#D9D9D9] rounded-[10px]  ml-[120px]"
                  />
                </p>
                <p>
                  Availble
                  <input
                    type="text"
                    placeholder=""
                    className="border-collapse border border-slate-200 text-center h-[50px] bg-[#D9D9D9] rounded-[10px]  ml-[130px]"
                  />
                </p>
                <div className="flex justify-between  p-5 text-2xl font-sans text-slate-50">
                  <Button
                    buttonname="Cancel"
                    btnstyle=" bg-gray-900 p-2 rounded-md hover:bg-gray-600"
                  />

                 <a href="pstation">
                  <Button
                    buttonname="Submit"
                    btnstyle="bg-[#4EA2F0]   p-2 rounded-md hover:bg-gray-600"
                  />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Create;
