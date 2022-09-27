import React from "react";
import smartWinners from "../../assets/smartWinners.svg";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import messenger from "../../assets/messenger.svg";
import whatsapp from "../../assets/whatsapp.svg";
import usa from "../../assets/usa.svg";
import downArrow from "../../assets/downArrow.svg";

const Header = () => {
  return (
    <div className="header">
      <img className="smartWinners" src={smartWinners} alt="" />
      <div className="headerJustify">
        <div className="headerCenter">
          <h2>
            Welcome <p>Roma</p> — <a href="#">Logout</a>
          </h2>
          <h3>
            Your balance: <p>Р 0,00</p>
          </h3>
        </div>
        <div className="headerSettings">
          <div className="icons">
            <a href="https://www.facebook.com/">
              <img src={fb} alt="fb" />
            </a>
            <a href="https://twitter.com/">
              <img src={twitter} alt="twitter" />
            </a>
            <a href="https://www.messenger.com/">
              <img src={messenger} alt="messenger" />
            </a>
            <a href="https://www.whatsapp.com/download//">
              <img src={whatsapp} alt="whatsapp" />
            </a>
          </div>
          <div className="languages">
            <img src={usa} alt="usa" />
            <p>English</p>
            <img src={downArrow} alt="arrow" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
