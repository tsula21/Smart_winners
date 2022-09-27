import React from "react";
import "./CSS/Reclam.css";
import computer from "../assets/computer.svg";
import market from "../assets/market.svg";
import money from "../assets/money.svg";

const Reclam = () => {
  return (
    <div className="reclam">
      <div className="reclamSpace">
        <div className="space">
          <img src={computer} alt="computer" />
          <div className="reclamDescription">
            <div className="title">
              <h2>YOU PICK</h2>
              <a href="#"> Play Now » </a>
            </div>
            <p>
              It’s easy! Pick from over 40 official lottery games you wish to
              play. Then select your winning numbers.
            </p>
          </div>
        </div>
        <div className="space">
          <img src={market} alt="computer" />
          <div className="reclamDescription">
            <div className="title">
              <h2>WE BUY</h2>
              <a href="#"> More Details »</a>
            </div>
            <p>
              Once you’ve picked your winning numbers we’ll purchase your ticket
              on your behalf.
            </p>
          </div>
        </div>
        <div className="space">
          <img src={money} alt="computer" />
          <div className="reclamDescription">
            <div className="title">
              <h2>YOU WIN!!!</h2>
              <a href="#">Withdraw My Winnings »</a>
            </div>
            <p>
              When you win, we’ll automatically credit your account the full
              value of your winnings.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reclam;
