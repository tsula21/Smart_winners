import React, { useState } from "react";
import "./CSS/Question.css";
import arr from "../QuestionArr";
import SingleQuestion from "./SingleQuestion";

const Question = () => {
  const [questions, setQuestions] = useState(arr);
  console.log(questions, "questions array");

  return (
    <div className="questionContainer">
      <section className="info">
        {questions.map((item) => {
          return <SingleQuestion key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default Question;
