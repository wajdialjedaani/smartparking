import React from "react";
import NavBar from "../../../Components/Nav";
import Card from "../../../Components/Card";
function Parkingdetails() {
  return (
    <div className="  ">
      <div>
        <NavBar
          img="/Assests/logo.jpg"
          item1="Home"
          item2="Feedback"
          btnname="Admin"
        />
      </div>

      <div className="">
        <div className="flex justify-evenly ">
          <div className=" ">
            <Card
              cardname="Bicycle Occupancy"
              style="hidden"
              cbtnstyle="bg-gray-900 text-slate-100 px-10 py-12 mx-[70px]  text-[30px] rounded-full"
              cnamestyle="text-center my-7  text-3xl font-bold"
              cardintdivstyle="flex justify-around p-7 pl-[130px] "

            />

            <Card
              cardname="Car Occupancy"
              style="hidden"
              cbtnstyle="bg-gray-900 text-slate-100  px-10 py-12 mx-[70px] text-[30px] rounded-full"
              cnamestyle="text-center my-7 text-3xl font-bold"
              cardintdivstyle="flex justify-around p-7 pl-[130px] "

            />
          </div>
          <div className=" ">
            <Card
              cardname="Ev Occupancy"
              style="hidden"
              cbtnstyle="bg-gray-900 text-slate-100  px-10 py-12 mx-[70px] text-[30px] rounded-full"
              cnamestyle="text-center my-7 text-3xl font-bold"
              cardintdivstyle="flex justify-around p-7 pl-[130px] "

            />

            <Card
              cardname="Disabled occupancy"
              style="hidden"
              cbtnstyle="bg-gray-900 text-slate-100  px-10 py-12 mx-[70px] text-[30px] rounded-full"
              cnamestyle="text-center my-7 text-3xl font-bold"
              cardintdivstyle="flex justify-around p-7 pl-[130px] "

            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Parkingdetails;
