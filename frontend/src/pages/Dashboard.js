import React from "react";
import { AuthContext } from "../contexts/authContext";
function Dashboard() {
  const { user, logout } = React.useContext(AuthContext);
  return (
    <div className="flex  h-screen ">
      <div className="bg-[#4EA2F0]  w-1/5">
      </div>
      <div className="bg-[#FFFFFF]  w-full flex flex-col ">
        <div className="bg-gray-200 h-[70px] flex flex-row-reverse">
          <button className="bg-gray-400  rounded m-2 p-2" onClick={logout}>LogOut</button>
        </div>
        <div className="bg-gray-400 h-full"></div>
        <div className="bg-gray-600 h-[70px]"></div>
      </div>
    </div>
  );
}
export default Dashboard;
