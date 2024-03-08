import React from "react";
import { AuthContext } from "../contexts/authContext";
function Dashboard() {
  const { user, logout } = React.useContext(AuthContext);
  const parkings = [
    {
      name: "Disabledparking",
      path: "/dparking"
    },
    {
      name: "Carparking",
      path: "/cparking"
    },
    {
      name: "Bicycleparking",
      path: "/bparking"
    },
    {
      name: "Evparking",
      path: "/eparking"
    },
  ]
  return (
    <div className="flex flex-wrap justify-between">
      {parkings.map((parking) => {
        return (
          <div className="basis-1/2 h-[300px] border items-center flex justify-center">
            <h1 className="text-4xl font-bold">{parking.name}</h1>
          </div>
        )
      }
      )}
    </div>
  );
}
export default Dashboard;
