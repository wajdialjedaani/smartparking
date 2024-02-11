import React from "react";
import Input from "../../Components/Input";
import Button from "../../Components/Button";

function Bikeparking() {
  return (
    <div className="bg-violet-600 w-screen h-screen">
      <div className=" flex items-center justify-center p-20 space-x-5 ">
        <Input inputplaceholdername="Enter Address..." />

        <Button buttonname="Search" />
      </div>
    </div>
  );
}
export default Bikeparking;
