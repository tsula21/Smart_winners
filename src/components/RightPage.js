import React, { useState } from "react";
import Banner from "./Pages/Banner";
import Header from "./Pages/Header";
import Navbar from "./Navbar";
import Reclam from "./Reclam";
import UpcomingLottery from "./UpcomingLottery";
import LotteryList from "./LotteryList";
import Winners from "./Winners";
import Question from "./Question";
import stars from "../assets/back_stars.png";
import Support from "./Support";
import downArrow from "../assets/downArrow.svg";
import ResponsiveHeader from "./Pages/ResponsiveHeader";

const RightPage = () => {
  return (
    <div className="rightPage">
      <Header />
      <Navbar />
      <ResponsiveHeader />
      <Banner />
      <Reclam />
      <h2 className="sectionHeader1">BIGGEST UPCOMING LOTTERY DRAWS</h2>
      <UpcomingLottery />
      <h2 className="sectionHeader2">PLAY UPCOMING LOTTERIES ONLINE</h2>
      <LotteryList />
      <section className="sectionHeader3 outside">
        <h2>BIGGEST LOTTERY WINNER</h2>
        <h3>OUR LATEST WINNERS</h3>
      </section>
      <Winners />
      <h2 className="sectionHeader4">FREQUENTLY ASKED QUESTION (F.A.Q.)</h2>
      <Question />
      <div className="starsPosterImg">
        <img className="sectionHeader5" src={stars} alt="" />
      </div>
      <Support />
    </div>
  );
};

export default RightPage;
