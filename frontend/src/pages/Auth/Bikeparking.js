import React from "react";
import InputFeild from '../../Components/Input'
import Button from "../../Components/Button";

function Bikeparking() {
  return (
    <div className="bg-violet-600 w-screen h-screen">
      <div className=" flex items-center justify-center p-20 space-x-5 ">
        <InputFeild inputplaceholdername="Enter Address..." />

        <Button buttonname="Search" />
      </div>
    </div>
  );
}
export default Bikeparking;
