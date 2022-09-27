import React from "react";
import "../CSS/ResponsiveHeader.css";
import menu from "../../assets/responsive/menu.svg";
import avatar from "../../assets/responsive/avatar.svg";
import logo from "../../assets/smartWinners.svg";

const ResponsiveHeader = () => {
  return (
    <div className="respoHeader">
      <nav>
        <img src={menu} alt="" />
        <img src={logo} alt="" />
        <img src={avatar} alt="" />
      </nav>
      <div className="respoTitle">
        <h2>
          Welcome <p>Roma</p> — <a href="#">Logout</a>
        </h2>
        <h3>
          Your balance: <p>Р 0,00</p>
        </h3>
      </div>
    </div>
  );
};

export default ResponsiveHeader;
