import React from "react";

function Button(props) {
  return (
    <>
      <button className="bg-slate-300 w-28 h-20 rounded-3xl text-2xl ">
        {props.buttonname}
      </button>
    </>
  );
}
export default Button;
