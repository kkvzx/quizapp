import React from "react";
import { nanoid } from "nanoid";
import { Button } from "../Button";
import { singleQuestionProps } from "../../interfaces";
import {
  BreakLine,
  ButtonsContainer,
  SingleQuestionHeader,
  SingleQuestionWrapper,
} from "./SingleQustionElements";

export const SingleQuestion = (props: singleQuestionProps) => {
  return (
    <SingleQuestionWrapper>
      <SingleQuestionHeader
        dangerouslySetInnerHTML={{ __html: `${props.question}` }}
      />
      <ButtonsContainer>
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
      </ButtonsContainer>
      <BreakLine />
    </SingleQuestionWrapper>
  );
};
