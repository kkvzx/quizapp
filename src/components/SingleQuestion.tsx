import React from "react";
import { nanoid } from "nanoid";
import "../styles/singleQuestion.css";
import { Button } from "./Button/Button";
import { singleQuestionProps } from "./interfaces";

export const SingleQuestion = (props: singleQuestionProps) => {
  return (
    <div className="singleQuestion">
      <h3 dangerouslySetInnerHTML={{ __html: `${props.question}` }}></h3>
      <div className="btnsContainer">
        {props.allAnswers.map((obj) => (
          <Button
            key={nanoid()}
            answer={obj}
            choosenAnswer={props.choosedAns}
            choosedAnsToggle={props.choosedAnsToggle}
            mainIndex={props.mainIndex}
            correctAnswer={props.correctAnswer}
            userChecked={props.userChecked}
          />
        ))}
      </div>
      <hr className="line" />
    </div>
  );
};
