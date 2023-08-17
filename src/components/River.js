import React, { useState } from "react";
import Cannibal from "./Cannibal";
import Monk from "./Monk";
import Boat from "./Boat";

const River = (props) => {
  const {
    moveBoat,
    cannibalOnBoat,
    monkOnBoat,
    moveBackCannibal,
    moveBackMonk,
  } = props;
  return (
    <div className="middle">
      <div className="middle-items">
        <div
          className={`mc-on-boat ${
            props.boatLeft ? "left-boat" : "right-boat"
          }`}
        >
          {Array(cannibalOnBoat)
            .fill()
            .map((_, i) => (
              <Cannibal key={i} moveCannibal={moveBackCannibal} />
            ))}
          {Array(monkOnBoat)
            .fill()
            .map((_, i) => (
              <Monk key={i} moveMonk={moveBackMonk} />
            ))}
        </div>
        <Boat moveBoat={moveBoat} boatLeft={props.boatLeft} />
      </div>
      <div className="fake-river"></div>
      <div className="river"></div>
    </div>
  );
};

export default River;
