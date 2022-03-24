import React, {useState} from "react";
import Ball from "../ball/Ball";

const Ticket = (props) => {
const [randoms, setRandoms] = useState([])

  let numberOfBalls = props.ballsAmount;
  let all = props.numbers;
  const renderBalls = () => {
    let allBalls = [];
    if (all.length == 1) {
      for (let i = 0; i < numberOfBalls; i++) {
        let number = props.numbers[0][0].numbers[i];
        let ball = (
          <div key={i}>
            {" "}
            <Ball number={number} />
          </div>
        );
        allBalls = [...allBalls, ball];
      }
      return allBalls;
    }
    if (all.length == 2 || 3 || 4) {
      for (let j = 0; j < all.length; j++) {
        for (let i = 0; i < numberOfBalls; i++) {
          let number = props.numbers[j][0].numbers[i];
          let ball = (
            <div key={i}>
              {" "}
              <Ball number={number} />
            </div>
          );
          allBalls = [...allBalls, ball];
        }
      }
    }
    return allBalls;
  };

  let balls = renderBalls();

  return <div className="flex">{balls}</div>;
};

export default Ticket;
