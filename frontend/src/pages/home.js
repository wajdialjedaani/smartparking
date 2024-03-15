import React from "react";
import NavBar from "../Components/Nav";
import Parkingoptions from "../Components/Parkingoptions";
function Home() {
  return (
    <div className=" ">
      <div>
        <NavBar
          img="/Assests/logo.png"
          item1="Home"
          item2="Feedback"
          btnname="Admin"
        />
      </div>

      <Parkingoptions />
    </div>
  );
}
export default Home;
