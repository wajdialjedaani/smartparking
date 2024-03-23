import React from "react";
import { AuthContext } from "../contexts/authContext";
function Dashboard() {
  const { user, logout } = React.useContext(AuthContext);
  const parkings = [
    {
      name: "Disabledparking",
      path: "/dparking",
      imageUrl: "/Assests/parking/disabled.png"
    },
    {
      name: "Carparking",
      path: "/cparking",
      imageUrl: "/Assests/parking/car.png"
    },
    {
      name: "Bicycleparking",
      path: "/bparking",
      imageUrl: "/Assests/parking/bicycle.png"
    },
    {
      name: "Evparking",
      path: "/eparking",
      imageUrl: "/Assests/parking/ev.png"
    },
  ]
  return (
    <div className="flex flex-wrap justify-between">
      {parkings.map((parking) => {
        return (
          <div className="basis-1/2 h-[300px] border items-center flex justify-center cursor-pointer">
            <img src={parking.imageUrl} alt={parking.name} width="200px" />
            <h1 className="text-4xl font-bold">{parking.name}</h1>
          </div>
        )
      }
      )}
    </div>
  );
}
export default Dashboard;
