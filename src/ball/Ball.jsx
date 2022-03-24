import React, { useState } from "react";

const Ball = (props) => {
  let number = props.number;

  return <div className="mx-3 w-11 h-11 font-bold text-gray-700 rounded-full bg-white flex items-center justify-center font-mono border-black border" >
      <div>
      {number}   
      </div>
    
      </div>;
};

export default Ball;
