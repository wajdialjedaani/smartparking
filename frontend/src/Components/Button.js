import React from "react";

function Button(props) {
  return (
    <div>
      <button 
      className={props.btnstyle}>
        {props.buttonname}
      </button>
    </div>
  );
}
export default Button;
