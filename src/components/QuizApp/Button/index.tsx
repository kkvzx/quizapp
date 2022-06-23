import React from "react";
import { styles, Answer } from "./ButtonElements";

type BtnProps = {
  answer: string;
  choosenAnswer: string;
  choosedAnsToggle: (ans: string, mainIndex: number) => void;
  correctAnswer: string;
  userChecked: boolean;
  mainIndex: number;
};

export const Button = ({
  answer,
  choosenAnswer,
  choosedAnsToggle,
  mainIndex,
  correctAnswer,
  userChecked,
}: BtnProps) => {
  return (
    <Answer
      dangerouslySetInnerHTML={{ __html: `${answer}` }}
      onClick={() => {
        choosedAnsToggle(answer, mainIndex);
      }}
      style={styles({ choosenAnswer, correctAnswer, answer, userChecked })}
    ></Answer>
  );
};
