import React from "react";
import "./CSS/Navbar.css";
import LINE from "../assets/LINE.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="lineLeft">
        <div className="line">
          <a href="#">HOME</a>
          <img src={LINE} alt="" />
          <a href="#">PLAY ALL lottery</a>
          <img src={LINE} alt="" />
          <a href="#">LOTTERY GROUPS</a>
          <img src={LINE} alt="" />
          <a href="#">Promotions</a>
        </div>
      </div>
      <div className="lineRight">
        <div className="line">
          <a href="#">My Account</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
