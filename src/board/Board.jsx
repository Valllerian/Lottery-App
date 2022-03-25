import React, { useState, useEffect } from "react";
import Ticket from "../ticket/Ticket";
import WinningTicket from "../ticket/WinningTicket";
// Importing Select Component in case I want to add Select for how many tickets I want to add;
import Select from "react-select";
import "./board.css";

const Board = () => {
  // Selecting from options array of objects:
  const options = [
    { value: 4, label: "4 balls" },
    { value: 6, label: "6 balls" },
    { value: 8, label: "8 balls" },
  ];

  const [tickets, setTickets] = useState([]);
  const [ballsAmount, setBallsAmout] = useState(6);
  const [newGame, setNewGame] = useState(true)

  const listOfTickets = tickets.map((ticket) => (
    <div className="grid place-items-center">
      <div className="border border-black mx-3 my-3 bg-orange-200 rounded-lg">
        <Ticket
          randomNumbers={ticket.numbers}
          key={ballsAmount}
          ballsAmount={ballsAmount}
          numbers={tickets}
          name={ticket.name}
        />
      </div>
    </div>
  ));

  const getTicket = (e) => {
    e.preventDefault();
    if(newGame){
        alert("Select amount of balls first!")
    }else{
        let randomArray = [];
        for (let i = 0; i < ballsAmount; i++) {
          let randomNum = Math.floor(Math.random() * 40);
          randomArray = [...randomArray, randomNum];
        }
        let ticket = { name: "Lucky ticket", numbers: randomArray };
    
        if (tickets.length <= 2) {
          setTickets((tickets) => [...tickets, ticket]);
        } else {
          alert("Too many tickets!");
          window.location.reload();
        }
    }
   
  };

  const handleChange = (event) => {
    setBallsAmout(event.value)
    setNewGame(false);
  }

  return (
    <div className="grid place-items-center">
      <div className="">
        <div className="my-10 font-bold text-gray-700 text-4xl">
          Winning numbers:
        </div>
        <div className=" ">
          <div className="border border-black  my-3 bg-orange-200 rounded-lg ">
            <WinningTicket ballsAmount={ballsAmount} />
          </div>
        </div>
      </div>
      <div>
        <div className="my-10 font-bold text-gray-700 text-4xl">
          {" "}
          Select amount of balls:
        </div>
        <Select
          className="my-4"
          options={options}
          onChange={(event) => {
            {newGame ?  handleChange(event) : alert("Start new game to changle ball amount!")}
    
          }}
        />
        <button
          className="ease inline-block cursor-pointer rounded-full bg-orange-400 px-8 py-3 mt-5 text-4xl text-white transition duration-500 hover:bg-gray-600 "
          onClick={function (e) {
            getTicket(e);
          }}
        >
          Get a ticket!
        </button>
      </div>
      <div className="my-6 ">
        {tickets[0] ? (
          listOfTickets
        ) : (
          <div className="my-10 font-bold text-gray-700 text-4xl">
            Grab a ticket! ☝️
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
