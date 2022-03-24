import React, { useState, useEffect } from "react";
import Ball from "../ball/Ball";

const Ticket = (props) => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    renderBalls();
  }, []);

  let numberOfBalls = props.ballsAmount;
  let allTickets = props.numbers;
  let nums = props.randomNumbers;

  const renderBalls = () => {
    if (allTickets.length == 1) {
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
    }

    if (allTickets.length == 2) {
      let number;
      let allNumbers = [];
      for (let i = 0; i < numberOfBalls; i++) {
        number = nums[i];
        allNumbers.push(number);
      }
      let results = { numbers: allNumbers };
      setTickets([]);
      setTickets((tickets) => [...tickets, results]);
    }
    if (allTickets.length == 3) {
      let number;
      let allNumbers = [];
      for (let i = 0; i < numberOfBalls; i++) {
        number = nums[i];
        allNumbers.push(number);
      }
      let results = { numbers: allNumbers };
      setTickets([]);
      setTickets((tickets) => [...tickets, results]);
    }
    if (allTickets.length == 4) {
      let number;
      let allNumbers = [];
      for (let i = 0; i < numberOfBalls; i++) {
        number = nums[i];
        allNumbers.push(number);
      }
      let results = { numbers: allNumbers };
      setTickets([]);
      setTickets((tickets) => [...tickets, results]);
    }
  };

  const listOfBalls = tickets?.map((ticket) =>
    ticket.numbers.map((number) => (
      <div>
        {" "}
        <Ball number={number} key={number} />
      </div>
    ))
  );

  return <div className="flex">{tickets ? listOfBalls : "No balls :("}</div>;
};

export default Ticket;
