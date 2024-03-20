import React from "react";
import Button from "./Button";
import Logo from "./Logo";

function NavBar(props) {
  const navigationItems = {
    item1: props.item1,
    item2: props.item2,
    btnname: props.btnname
  };

  return (
    <div className="bg-[#4EA2F0] flex justify-between mx-5 mt-3 rounded-2xl">
      <div className="flex items-center">
        <div className="h-12 w-12 m-1 rounded-md">
          <Logo imglink={props.img} />
        </div>
      </div>
      <div className="flex space-x-10 items-center p-5 text-2xl font-sans text-slate-50">
        <a href="/" className="hover:bg-gray-600 p-2 rounded-md">
          {navigationItems.item1}
        </a>
        <a href="feedback" className="hover:bg-gray-600 p-2 rounded-md">
          {navigationItems.item2}
        </a>
        <a href="login">
          <Button
            buttonname={navigationItems.btnname}
            btnstyle="bg-gray-900 p-2 rounded-md hover:bg-gray-600"
          />
        </a>
      </div>
    </div>
  );
}

export default NavBar;
