import React from "react";
import Ball from "../ball/Ball";

const Ticket = (props) => {
  let numberOfBalls = props.ballsAmount;

  const renderBalls = () => {
    let allBalls = [];
    for (let i = 0; i < numberOfBalls; i++) {
    let number = Math.floor(Math.random() * 40)
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

  return <div>{balls}</div>;
};

export default Ticket;
