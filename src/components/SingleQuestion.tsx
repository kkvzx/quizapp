import React from "react";
import { nanoid } from "nanoid";

import "../styles/singleQuestion.css";

import { isPropertySignature } from "typescript";
import { BtnComponent } from "./BtnComponent";

interface singleQuestionProps {
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  isItRight: boolean[];
  isItRightToggle: (surprise: boolean, numOfQuestion: number) => void;
  activeButtonToggle: (obj: any) => void;
  activeButton: any;
}

export const SingleQuestion = (props: singleQuestionProps) => {
  const [choosedAns, setChoosedAns] = React.useState("helo");

  const choosedAnsToggle = (ans: string) => {
    setChoosedAns(ans);
  };

  React.useEffect(() => {}, []);
  console.log(choosedAns);

  return (
    <div className="singleQuestion">
      <h3 dangerouslySetInnerHTML={{ __html: `${props.question}` }}></h3>
      <div className="btnsContainer">
        {props.allAnswers.map((obj, index) => (
          <BtnComponent
            key={nanoid()}
            ans={obj}
            choosedAns={choosedAns}
            choosedAnsToggle={choosedAnsToggle}
            // numOfQuestion={index}
            correctAnswer={props.correctAnswer}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};
