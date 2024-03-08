import React from "react";
import Button from "./Button";
import Logo from "./Logo";

function NavBar(props) {
  return (
    <div className="bg-[#4EA2F0] flex  justify-between mx-5 mt-3 rounded-2xl ">
      <div className="flex items-center">
        <Logo style="h-12 w-12 m-1 rounded-md" imglink={props.img} />
      </div>
      <div className=" flex space-x-10 items-center p-5 text-2xl font-sans text-slate-50 ">
        <a href="/" className="hover:bg-gray-600 p-2 rounded-md ">
          {props.item1}
        </a>

        <a href="feedback" className="hover:bg-gray-600 p-2 rounded-md ">
          {props.item2}
        </a>

        <a href="login">
          <Button buttonname={props.btnname} btnstyle='  bg-gray-900 p-2 rounded-md hover:bg-gray-600' />
        </a>
      </div>
    </div>
  );
}
export default NavBar;
