import React from "react";
function Input(props) {
  return (
    <>
      <input
        className=" bg-gray-300 rounded-3xl w-1/3 h-20 text-2xl p-2"
        type="text"
        placeholder={props.inputplaceholdername}
      />
    </>
  );
}
export default Input;
