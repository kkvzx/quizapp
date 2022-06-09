import React from "react";
import { nanoid } from "nanoid";

import "../styles/singleQuestion.css";

import { isPropertySignature } from "typescript";

interface singleQuestionProps {
  question: string;
  answers: string[];
  correctAnswer: string;
  answerToggle: (theChosenOne: string) => void;
}

export const SingleQuestion = (props: singleQuestionProps) => {
  //generating randomnumber array
  const randNumGenerator = (length: number): number[] => {
    let randNum = Math.floor(Math.random() * length);
    let randArr = [randNum];
    randNum = Math.floor(Math.random() * length);

    for (let i = 0; i < length - 1; i++) {
      for (let k = 0; k < randArr.length; k++) {
        if (randArr[k] === randNum) {
          randNum = Math.floor(Math.random() * length);
          k = -1;
        }
      }

      randArr.push(randNum);
      randNum = Math.floor(Math.random() * length);
    }
    return randArr;
  };
  // consts and variables
  const allAnswers = [...props.answers, props.correctAnswer];
  const randArr = randNumGenerator(allAnswers.length);
  const mixedAnswers: string[] = [];

  React.useEffect(() => {
    console.log("hi");

    for (let i = 0; i < randArr.length; i++) {
      mixedAnswers.push(allAnswers[randArr[i]]);
    }
  }, []);

  return (
    <div className="singleQuestion">
      <h3>{props.question}</h3>
      <div className="btnsContainer">
        {mixedAnswers.map((obj) => (
          <button key={nanoid()} onClick={() => props.answerToggle(obj)}>
            {obj}
          </button>
        ))}
      </div>
      <hr />
    </div>
  );
};
