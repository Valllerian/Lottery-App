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
      <div className="border border-sky-500 mx-3 my-3">
        <Ticket
          randomNumbers ={ticket.numbers}
          key={tickets.indexOf(ticket)}
          ballsAmount={ballsAmount}
          numbers={tickets}
          name = {ticket.name}
        />
      </div>
    </div>
  ));

  const getTicket = (e) => {
    e.preventDefault();
    let randomArray = [];
    for (let i = 0; i < ballsAmount; i++) {
        let randomNum = Math.floor(Math.random() * 40)
        randomArray = [...randomArray, randomNum];
    }
    // console.log("HERE "+ randomArray)
    let ticket = { name: "Lucky ticket", numbers: randomArray };
    // console.log(ticket)
    if (tickets.length <= 3) {
        // console.log(ticket[0].numbers)
            setTickets((tickets) => [...tickets, ticket]);
        // console.log(tickets.forEach((ticket) => console.log(ticket[0].numbers)))
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
