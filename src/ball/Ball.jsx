import React, { useState } from "react";

const Ball = (props) => {
  let number = props.number;

  return <div className="pr-4">{number}</div>;
};

export default Ball;
