import React from "react";
import "./CSS/Winners.css";
import lotto from "../assets/lotto.svg";
import winner from "../assets/winner2.png";
import redWinner from "../assets/winner_red.svg";
import germany from "../assets/germany.svg";

const Winners = () => {
  return (
    <div className="winners">
      <div className="left">
        <div className="winnersContainer">
          <div className="title">
            <img src={lotto} alt="" />
            <h2>WON</h2>
            <h3>€100 000 000</h3>
          </div>
          <div className="contentFile">
            <div className="content">
              <img src={winner} alt="" />
              <div className="subcontent">
                <h2>UK Lotto results:</h2>
                <div className="results">
                  <div className="circles">
                    <div className="circle">07</div>
                    <div className="circle">07</div>
                    <div className="circle">07</div>
                    <div className="circle">07</div>
                    <div className="circle">07</div>
                  </div>
                  <h3>Date: 20.11.2021</h3>
                </div>
              </div>
            </div>
            <div className="gameDetails">
              <div className="text">
                <h2>Shaun Vincent a Lottery Winner</h2>
                <p>
                  Shaun Vincent, from Barnsley, celebrates his £1,158,038
                  National Lottery win after his cheque presentation at the
                  Cedar Court Hotel, Wakefield.
                </p>
              </div>
              <div className="btns">
                <a href="#">Read the full story</a>
                <button>Play Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="inside">OUR LATEST WINNERS</h3>

      <div className="right">
        <div className="tab1">
          <h2>Total prizes paid out</h2>
          <h3>US$ 107 233 768</h3>
          <div className="winnersText">
            6 975 146 <h5>winning tickets</h5>
          </div>
        </div>
        <div className="tab2">
          <img className="logoWin" src={redWinner} alt="" />
          <div className="numbers">
            <h5>20.11.2021</h5>
            <div className="name">
              <img src={germany} alt="" />
              <h6>J.J won Р175</h6>
            </div>
            <p>J.J won Р175</p>
          </div>
        </div>
        <div className="tab2">
          <img className="logoWin" src={redWinner} alt="" />
          <div className="numbers">
            <h5>20.11.2021</h5>
            <div className="name">
              <img src={germany} alt="" />
              <h6>J.J won Р175</h6>
            </div>
            <p>J.J won Р175</p>
          </div>
        </div>
        <div className="tab2">
          <img className="logoWin" src={redWinner} alt="" />
          <div className="numbers">
            <h5>20.11.2021</h5>
            <div className="name">
              <img src={germany} alt="" />
              <h6>J.J won Р175</h6>
            </div>
            <p>J.J won Р175</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Winners;
