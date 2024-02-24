import React from "react";
import Logo from "./Logo";

function Card(props) {
  return (
    <div className="bg-[#82C1EE] h-[260px] w-[450px] rounded-[12px]   p-10 my-[40px] ">
      <Logo style="w-24 mx-auto hover:none" imglink={props.cardimglink} />
      <div className={props.cardintdivstyle}>
        <a href={props.hreflink}>
          <h1 className={props.cnamestyle}>{props.cardname}</h1>
        </a>
        <button className={props.cbtnstyle}>1/10</button>
      </div>
    </div>
  );
}
export default Card;
