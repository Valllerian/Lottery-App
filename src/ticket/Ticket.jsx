import React from "react";
import Ball from "../ball/Ball";

const Ticket = (props) => {
  let numberOfBalls = props.ballsAmount;

  const renderBalls = () => {
    let allBalls = [];
    for (let i = 0; i < numberOfBalls; i++) {
      let ball = (
        <div key={i}>
          {" "}
          <Ball />
        </div>
      );
      allBalls = [...allBalls, ball];
    }
    return allBalls;
  };
  let balls = renderBalls();

  return <div>{balls}</div>;
};

export default Ticket;
