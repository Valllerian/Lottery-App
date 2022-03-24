import React, { useState, useEffect } from "react";
import Ticket from "../ticket/Ticket";
// Importing Select Component in case I want to add Select for how many tickets I want to add;
// import Select from 'react-select'

const Board = () => {
  // Selecting from options array of objects:
  // const options = [
  //     { value: 1, label: 'One Ticket' },
  //     { value: 2, label: 'Two Tickets' },
  //     { value: 3, label: 'Three Tickets' }
  //   ]

  const [tickets, setTickets] = useState([]);
  const [ballsAmount, setBallsAmout] = useState(6);

  const listOfTickets = tickets.map((ticket) => (
    <div className="grid place-items-center">
      <div className="">
        <Ticket
          key={tickets.indexOf(ticket)}
          ballsAmount={ballsAmount}
          numbers={tickets}
        />
      </div>
    </div>
  ));

  const getTicket = (e) => {
    e.preventDefault();
    let allNumbers = [];
    let number1 = Math.floor(Math.random() * 40);
    allNumbers = [...allNumbers, number1];
    let number2 = Math.floor(Math.random() * 40);
    allNumbers = [...allNumbers, number2];
    let number3 = Math.floor(Math.random() * 40);
    allNumbers = [...allNumbers, number3];
    let number4 = Math.floor(Math.random() * 40);
    allNumbers = [...allNumbers, number4];
    let number5 = Math.floor(Math.random() * 40);
    allNumbers = [...allNumbers, number5];
    let number6 = Math.floor(Math.random() * 40);
    allNumbers = [...allNumbers, number6];
 let ticket = [{name: 'Lucky ticker', numbers: allNumbers }]
    if (tickets.length <= 3) {
      setTickets((tickets) => [...tickets, ticket]);
    } else {
      alert("Too many tickets!");
    }
  };

  return (
    <div className="">
      <div>
        <button
          onClick={function (e) {
            getTicket(e);
          }}
        >
          Get a ticket!
        </button>
      </div>
      <div className="">{tickets[0] ? listOfTickets : "Grab a ticket!"}</div>
    </div>
  );
};

export default Board;
