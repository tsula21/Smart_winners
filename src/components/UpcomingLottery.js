import React from "react";
import "./CSS/UpcomingLottery.css";
import usa from "../assets/usa.svg";
import alarm from "../assets/alarm.svg";
import oz from "../assets/oz.svg";
import mega from "../assets/mega.svg";
import ball from "../assets/ball.svg";

const UpcomingLottery = () => {
  return (
    <div className="lottery">
      <div className="space">
        <div className="title">
          <img className="oz" src={oz} alt="oz" />
          <div className="jackpot">
            <h2>
              MEGA MILLIONS <img src={usa} alt="usa" />
            </h2>
            <h3>$94 000 000</h3>
          </div>
        </div>
        <div className="blueContent">
          <button>Play Now</button>
          <h4>
            1:22:01 <img src={alarm} alt="" />
          </h4>
        </div>
      </div>

      <div className="space">
        <div className="title">
          <img className="oz" src={mega} alt="oz" />
          <div className="jackpot">
            <h2>
              MEGA MILLIONS <img src={usa} alt="usa" />
            </h2>
            <h3>$94 000 000</h3>
          </div>
        </div>
        <div className="blueContent">
          <button>Play Now</button>
          <h4>
            1:22:01 <img src={alarm} alt="" />
          </h4>
        </div>
      </div>

      <div className="space">
        <div className="title">
          <img className="oz" src={ball} alt="oz" />
          <div className="jackpot">
            <h2>
              MEGA MILLIONS <img src={usa} alt="usa" />
            </h2>
            <h3>$94 000 000</h3>
          </div>
        </div>
        <div className="blueContent">
          <button>Play Now</button>
          <h4>
            1:22:01 <img src={alarm} alt="" />
          </h4>
        </div>
      </div>
    </div>
  );
};

export default UpcomingLottery;
