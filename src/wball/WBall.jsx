import React, { useState } from "react";

const WBall = (props) => {
  let number = props.number;

  // console.log(winningNumbers)
  return (
    <div className="mx-3 w-11 h-11 font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono border-black border shadow-inner">
      <div >{number}</div>
    </div>
  );
};

export default WBall;
