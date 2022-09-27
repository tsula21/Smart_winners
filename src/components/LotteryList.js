import React from "react";
import "./CSS/LotteryList.css";
import GameArr from "../GameArr";
import star from "../assets/star.svg";
import mega from "../assets/mega.svg";

const LotteryList = () => {
  console.log(GameArr);
  return (
    <div className="lotteryList">
      {GameArr.map((item) => {
        return (
          <div key={item.id} className="space">
            <div className="spaceContainer">
              <div className="top">
                <img src={item.imgGame} alt="mega" />
                <img src={item.imgStar} alt="star" />
              </div>
              <div className="bottom">
                <div className="bottomTitle">
                  <img src={item.imgFlag} alt="usa" />
                  <h2>{item.title}</h2>
                </div>
                <h3>{item.money}</h3>
                <div className="bottomTime">
                  <img src={item.imgClock} alt="time" />
                  <h4>{item.time}</h4>
                </div>
                <button>Play Now</button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="moreDetails">More Details »</div>
      <div className="moreDetails2">All lotteries »</div>
    </div>
  );
};

export default LotteryList;
