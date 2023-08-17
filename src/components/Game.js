import React, { useState, useEffect } from "react";
import Left from "./Left";
import Right from "./Right";
import River from "./River";
import Alert from "./Alert";

function Game() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
  };

  const [cannibalLeft, setCannibalLeft] = useState(3);
  const [monkLeft, setMonkLeft] = useState(3);
  const [cannibalRight, setCannibalRight] = useState(0);
  const [monkRight, setMonkRight] = useState(0);
  const [boatLeft, setBoat] = useState(true);
  const [cannibalOnBoat, setCannibalOnBoat] = useState(0);
  const [monkOnBoat, setMonkOnBoat] = useState(0);

  useEffect(() => {
    if (monkOnBoat === 0 && cannibalOnBoat === 0) {
      if (
        (monkLeft > 0 && monkLeft < cannibalLeft) ||
        (monkRight > 0 && monkRight < cannibalRight)
      ) {
        showAlert("Game Over", "danger");
      }
    }
    if (monkRight === 3 && cannibalRight === 3) {
      showAlert("You Won", "success");
    }
  }, [
    cannibalLeft,
    monkLeft,
    cannibalRight,
    monkRight,
    cannibalOnBoat,
    monkOnBoat,
  ]);
  const reset = () => {
    setCannibalLeft(3);
    setMonkLeft(3);
    setCannibalRight(0);
    setMonkRight(0);
    setBoat(true);
    setCannibalOnBoat(0);
    setMonkOnBoat(0);
    setAlert(null);
  };

  const moveCannibal = () => {
    if (monkOnBoat + cannibalOnBoat < 2) {
      if (boatLeft) {
        setCannibalLeft(cannibalLeft - 1);
        setCannibalOnBoat(cannibalOnBoat + 1);
      } else {
        setCannibalOnBoat(cannibalOnBoat + 1);
        setCannibalRight(cannibalRight - 1);
      }
    }
  };

  const moveMonk = () => {
    if (monkOnBoat + cannibalOnBoat < 2) {
      if (boatLeft) {
        setMonkLeft(monkLeft - 1);
        setMonkOnBoat(monkOnBoat + 1);
      } else {
        setMonkOnBoat(monkOnBoat + 1);
        setMonkRight(monkRight - 1);
      }
    }
  };

  const moveBoat = () => {
    if (monkOnBoat > 0 || cannibalOnBoat > 0) {
      if (boatLeft) {
        setCannibalRight(cannibalRight + cannibalOnBoat);
        if (monkRight + monkOnBoat) setMonkRight(monkRight + monkOnBoat);
        setMonkOnBoat(0);
        setCannibalOnBoat(0);
        setBoat(!boatLeft);
      } else {
        setCannibalLeft(cannibalLeft + cannibalOnBoat);
        setMonkLeft(monkLeft + monkOnBoat);
        setBoat(!boatLeft);
        setMonkOnBoat(0);
        setCannibalOnBoat(0);
      }
    }
  };

  const moveBackMonk = () => {
    if (boatLeft) {
      setMonkLeft(monkLeft + 1);
      setMonkOnBoat(monkOnBoat - 1);
    } else {
      setMonkRight(monkRight + 1);
      setMonkOnBoat(monkOnBoat - 1);
    }
  };

  const moveBackCannibal = () => {
    if (boatLeft) {
      setCannibalLeft(cannibalLeft + 1);
      setCannibalOnBoat(cannibalOnBoat - 1);
    } else {
      setCannibalRight(cannibalRight + 1);
      setCannibalOnBoat(cannibalOnBoat - 1);
    }
  };
  return (
    <>
      <Alert alert={alert} setAlert={setAlert} reset={reset} />
      <button className="reset-button" onClick={reset}>
        Reset
      </button>
      <Left
        monkLeft={monkLeft}
        cannibalLeft={cannibalLeft}
        moveCannibal={() => {
          if (boatLeft && alert === null) moveCannibal();
        }}
        moveMonk={() => {
          if (boatLeft && alert === null) moveMonk();
        }}
      />

      <River
        moveBoat={moveBoat}
        moveBackCannibal={moveBackCannibal}
        moveBackMonk={moveBackMonk}
        cannibalOnBoat={cannibalOnBoat}
        monkOnBoat={monkOnBoat}
        boatLeft={boatLeft}
      />

      <Right
        monkRight={monkRight}
        cannibalRight={cannibalRight}
        moveCannibal={() => {
          if (!boatLeft && alert === null) moveCannibal();
        }}
        moveMonk={() => {
          if (!boatLeft && alert === null) moveMonk();
        }}
      />
    </>
  );
}

export default Game;
