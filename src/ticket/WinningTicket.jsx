import React, { useState, useEffect } from "react";
import Ball from "../ball/Ball";

const WinningTicket = (props) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    renderBalls();
  }, []);

  let numberOfBalls = props.ballsAmount;
  let nums = props.winningNumbers;

//   console.log(props.winningNumbers[0]);
  const renderBalls = () => {
    if (nums) {
      let number;
      let allNumbers = [];
      for (let i = 0; i < numberOfBalls; i++) {
        number = nums[i];
        // console.log(number)
        allNumbers.push(number);
      }
      let results = { numbers: allNumbers };
      setTickets((tickets) => [...tickets, results]);
    }
  };

  return <div>WinningTicket HERE</div>;
};

export default WinningTicket;
