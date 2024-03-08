import React from "react";

function Button(props) {
  return (
    <div>
      <button
        className={props.btnstyle}
        onClick={props.onClick}
        disabled={props.disabled}
      // Add other props as needed
      >
        {props.buttonname}
      </button>
    </div>
  );
}

export default Button;
