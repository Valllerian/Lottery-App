import React, { useState, useEffect } from "react";
import Ball from "../ball/Ball";

const Ticket = (props) => {
  const [tickets, setTickets] = useState([]);
  let winningNumbers = props.winningNumbers;
  useEffect(() => {
    renderBalls();
  }, []);

  let numberOfBalls = props.ballsAmount;

  let nums = props.randomNumbers;

  const renderBalls = () => {
    let number;
    let allNumbers = [];
    for (let i = 0; i < numberOfBalls; i++) {
      number = nums[i];
      // console.log(number)
      allNumbers.push(number);
    }
    let results = { numbers: allNumbers };
    setTickets((tickets) => [...tickets, results]);
    //   console.log(ticketNumbers)
  };

  const listOfBalls = tickets?.map((ticket) =>
    ticket.numbers.map((number) => (
      <div>
        {" "}
        <Ball
          number={number}
          key={number}
          winningNumbers={winningNumbers}
          className=""
        />
      </div>
    ))
  );

  return (
    <div className="flex px-5 py-9">
      {tickets ? listOfBalls : "No balls :("}
    </div>
  );
};

export default Ticket;
