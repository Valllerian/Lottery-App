import React, { useState } from "react";
import "./ball.css";
const Ball = (props) => {
  let number = props.number;
  let winningNumbers = props.winningNumbers;
  // console.log(winningNumbers)

  const numWinner = () => {
    if (winningNumbers) {
      if (winningNumbers[0].includes(number.toString())) {
        return true;
      } else {
        return false;
      }
    }
  };
  return (
    <div
      className={
        "mx-3 w-11 h-11 font-bold  rounded-full flex items-center justify-center font-mono border-black border shadow-inner " +
        (numWinner() ? "winnerBall" : "looserBall")
      }
    >
      <div>{number}</div>
    </div>
  );
};

export default Ball;
