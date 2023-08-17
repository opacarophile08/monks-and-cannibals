import React from "react";
import CannibalAvatar from "./svgComponents/CannibalAvatar";
const Cannibal = (props) => {
  return (
    <div className="cannibal-avatar" onClick={props.moveCannibal}>
      <CannibalAvatar />
    </div>
  );
};

export default Cannibal;
