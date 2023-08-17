import React from "react";
import Cannibal from "./Cannibal";
import Monk from "./Monk";

const Right = (props) => {
  const { moveCannibal, moveMonk, cannibalRight, monkRight } = props;
  return (
    <div className="right">
      <div className="right-items">
        {Array(cannibalRight)
          .fill()
          .map((_, i) => (
            <Cannibal key={i} moveCannibal={moveCannibal} />
          ))}
        {Array(monkRight)
          .fill()
          .map((_, i) => (
            <Monk key={i} moveMonk={moveMonk} />
          ))}
      </div>
      <div className="land"></div>
    </div>
  );
};

export default Right;
