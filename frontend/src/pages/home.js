import React from "react";
import NavBar from "../Components/Nav";
import Card from "../Components/Card";
function Home() {
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
              cardimglink="/Assests/parking/disabled.png"
              cardname="Disabled Parking"
              hreflink="parking-stations/special-reserved"
              cbtnstyle="hidden"
              cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"

            />

            <Card
              cardimglink="/Assests/parking/ev.png"
              cardname="EV Parking"
              hreflink="parking-stations/ev"
              cbtnstyle="hidden"
              cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"

            />
          </div>
          <div className=" ">
            <Card
              cardimglink="/Assests/parking/car.png"
              cardname="Car Parking"
              hreflink="parking-stations/car"
              cbtnstyle="hidden"
              cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"
            />

            <Card
              cardimglink="/Assests/parking/bicycle.png"
              cardname="Bicycle Parking"
              hreflink="parking-stations/bicycle"
              cbtnstyle="hidden"
              cnamestyle="text-center m-5 text-2xl font-bold hover:text-xl"

            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
