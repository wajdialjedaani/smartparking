import React from "react";
function View() {
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
          <div className=" flex justify-start p-16 ">
            <div className="bg-gray-200 w-[350px] h-[300px]"></div>
            <div className="text-3xl space-y-6 m-10">
              <p>Station Name : Station1</p>
              <p>Location name : Denton,Tx,76210</p>
              <p>Capacity : 100</p>
              <p>Availble : 40</p>
            </div>
          </div>
          <table className="m-auto ml-16 border-collapse border border-slate-600  ">
            <thead className="">
              <tr className="">
                <th className="px-5 py-2  border border-slate-600 ">Date</th>
                <th className="px-10 py-2 border border-slate-600">Car</th>
                <th className="px-10 py-2 border border-slate-600">Evs</th>
                <th className="px-10 py-2 border border-slate-600">
                  Disabledparking
                </th>
              </tr>
            </thead>
            <tbody className="">
              <tr>
                <td className="px-10 py-2 border border-slate-600">1/1/2024</td>
                <td className="px-10 py-2 border border-slate-600">
                    60
              
                </td>

                <td className="px-10 py-2 border border-slate-600">20</td>
                <td className="px-10 py-2 border border-slate-600">20</td>
              </tr>
            </tbody>
          </table>
          <div>
        <div className="bg-[#D9D9D9] h-[76px] mt-[90px] "></div>
      </div>
        </div>
      </div>
    </div>
  );
}
export default View;
