import React from "react";
function Userfeedback() {
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
        <div className="bg-[#FFFFFF]  w-full flex flex-col    ">
          <div className="bg-[#f5ff36] h-[70px] border-solid border-2 border-gray-500">
            <h1 className="font-semibold font-sans text-3xl text-[#000000] p-5">
              Dashboard
            </h1>

            <table className="m-auto ml-auto mt-5 border-collapse border border-slate-600  ">
              <thead className="">
                <tr className="">
                  <th className="px-5 py-2  border border-slate-600 ">Sno</th>
                  <th className="px-10 py-2 border border-slate-600">
                    Station
                  </th>
                  <th className="px-10 py-2 border border-slate-600">
                    Location
                  </th>
                  <th className="px-10 py-2 border border-slate-600">Rating</th>
                  <th className="px-10 py-2 border border-slate-600">Email</th>
                  <th className="px-10 py-2 border border-slate-600">
                    Comments
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr>
                  <td className="px-10 py-2 border border-slate-600">1</td>
                  <td className="px-10 py-2 border border-slate-600">
                    Station1
                  </td>

                  <td className="px-10 py-2 border border-slate-600">Denton</td>
                  <td className="px-10 py-2 border border-slate-600">5</td>
                  <td className="px-10 py-2 border border-slate-600">
                    smart@gmail.com
                  </td>
                  <td className="px-10 py-2 border border-slate-600">good</td>
                </tr>
              </tbody>
            </table>
            <div className="bg-[#D9D9D9] h-[76px] mt-[480px] "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Userfeedback;
