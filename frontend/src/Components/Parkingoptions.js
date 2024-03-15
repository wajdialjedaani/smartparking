import React from "react";
import Card from "../Components/Card";

function Parkingoptions() {
  return (
    <div className="flex justify-evenly   ">
      <div className="  ">
        <Card
          cardimglink="/Assests/d.png"
          cardname="Disabled Parking"
          hreflink="dparking"
          cbtnstyle="hidden"
          cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"
        />

        <Card
          cardimglink="/Assests/e.png"
          cardname="EV Parking"
          hreflink="eparking"
          cbtnstyle="hidden"
          cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"
        />
      </div>
      <div className=" ">
        <Card
          cardimglink="/Assests/c.png"
          cardname="Car Parking"
          hreflink="cparking"
          cbtnstyle="hidden"
          cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"
        />

        <Card
          cardimglink="/Assests/b.png"
          cardname="Bicycle Parking"
          hreflink="bparking"
          cbtnstyle="hidden"
          cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"
        />
      </div>
    </div>
  );
}
export default Parkingoptions;
