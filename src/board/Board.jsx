import React, { useState } from "react";
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
        <Ticket key={tickets.indexOf(ticket)} ballsAmount={ballsAmount} />
      </div>
    </div>
  ));

  const getTicket = (e) => {
    e.preventDefault();
    let anotherTicket = "Lucky ticket";
    if(tickets.length <= 3 ){
        setTickets((tickets) => [...tickets, anotherTicket]);
    } else {
        alert("Too many tickets!")
    }
    
  };

  return (
    <div className="">
      <div className="">
        {tickets[0] ? listOfTickets : "Grab a ticket below!"}
      </div>
      <div>
        <button onClick={getTicket}>Get a ticket!</button>
      </div>
    </div>
  );
};

export default Board;
