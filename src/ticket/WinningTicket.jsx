import React, { useState, useEffect } from "react";
import Ball from "../ball/Ball";

const WinningTicket = (props) => {
  const [ticket, setTickets] = useState([]);
  const ballsAmount = props.ballsAmount;

  useEffect(() => {
    renderBall();
  }, []);

  const renderBall = () => {
    let randomArray = [];
    for (let i = 0; i < ballsAmount; i++) {
      let randomNum = Math.floor(Math.random() * 40);
      randomArray = [...randomArray, randomNum];
    }
    let lucky = { name: "Lucky ticket", numbers: randomArray };

    if (ticket.length <= 3) {
      setTickets((ticket) => [...ticket, lucky]);
      console.log(ticket);
    }
  };

  const listOfBalls = ticket?.map((ticket) =>
    ticket.numbers.map((number) => (
      <div>
        {" "}
        <Ball number={number} key={number} />
      </div>
    ))
  );

  return (
    <div className="flex px-5 py-9">{ticket ? listOfBalls : "No balls :("}</div>
  );
};

export default WinningTicket;
