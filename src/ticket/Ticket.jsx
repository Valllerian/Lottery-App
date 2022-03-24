import React from "react";
import Ball from "../ball/Ball";

const Ticket = (props) => {
  let numberOfBalls = props.ballsAmount;
    let allNumbers = props.numbers[0][0].numbers
  const renderBalls = () => {
    let allBalls = [];
    console.log(props.numbers)
    for (let i = 0; i < numberOfBalls; i++) {
    
      let number = allNumbers[i];
      let ball = (
        <div key={i}>
          {" "}
          <Ball number={number} />
        </div>
      );
      allBalls = [...allBalls, ball];
    }
    return allBalls;
  };
  let balls = renderBalls();

  return <div className="flex">{balls}</div>;
};

export default Ticket;
