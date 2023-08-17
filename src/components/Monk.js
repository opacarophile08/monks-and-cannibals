import React from "react";
import MonkAvatar from "./svgComponents/MonkAvatar";

const Monk = (props) => {
  return (
    <div className="monk-avatar" onClick={props.moveMonk}>
      <MonkAvatar />
    </div>
  );
};

export default Monk;
