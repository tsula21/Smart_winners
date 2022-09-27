import React, { useState } from "react";
import "./CSS/Question.css";
import down from "../assets/downArrow.svg";

const SingleQuestion = ({ title, answer }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <article className="question">
      <header>
        <h4 onClick={() => setShowInfo(!showInfo)}>{title}</h4>

        <img
          //   className="btnInfo"
          className={`btnInfo ${showInfo ? "infoTrue" : ""}`}
          onClick={() => setShowInfo(!showInfo)}
          src={down}
          alt=""
        />
      </header>

      {showInfo && <p>{answer}</p>}
      {/* <hr /> */}
      <div className="thinLine"></div>
    </article>
  );
};

export default SingleQuestion;
