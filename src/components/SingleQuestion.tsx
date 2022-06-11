import React from "react";
import { nanoid } from "nanoid";
import "../styles/singleQuestion.css";
import { BtnComponent } from "./BtnComponent";

interface singleQuestionProps {
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  userChecked: boolean;
  choosedAns: string;
  mainIndex: number;
  choosedAnsToggle: (ans: string, mainIndex: number) => void;
}
export const SingleQuestion = (props: singleQuestionProps) => {
  return (
    <div className="singleQuestion">
      <h3 dangerouslySetInnerHTML={{ __html: `${props.question}` }}></h3>
      <div className="btnsContainer">
        {props.allAnswers.map((obj) => (
          <BtnComponent
            key={nanoid()}
            ans={obj}
            choosedAns={props.choosedAns}
            choosedAnsToggle={props.choosedAnsToggle}
            mainIndex={props.mainIndex}
            correctAnswer={props.correctAnswer}
            userChecked={props.userChecked}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};
