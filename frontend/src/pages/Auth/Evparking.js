import React from "react";
import NavBar from "../../Components/Nav";
function Evparking() {
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
      <div className=" flex justify-center p-5 ">
        <div className="bg-gray-200 w-[650px] h-[450px]  "></div>
      </div>

      <table className="m-auto border-collapse border border-slate-600 ">
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
          <tr>
            <td className="px-10 py-2 border border-slate-600">1</td>
            <td className="px-10 py-2 border border-slate-600">
              <button className="bg-yellow-200 p-1 rounded-md">
                <a href="parkingdet ">Parking1</a>
              </button>
            </td>
            <td className="px-10 py-2 border border-slate-600">unt</td>
            <td className="px-10 py-2 border border-slate-600">100</td>
            <td className="px-10 py-2 border border-slate-600">20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Evparking;
