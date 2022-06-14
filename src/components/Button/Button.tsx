import React from "react";
import { styles } from "./styles";

type BtnProps = {
  answer: string;
  choosenAnswer: string;
  choosedAnsToggle: (ans: string, mainIndex: number) => void;
  correctAnswer: string;
  userChecked: boolean;
  mainIndex: number;
}

export const Button = ({
  answer,
  choosenAnswer,
  choosedAnsToggle,
  mainIndex,
  correctAnswer,
  userChecked,
}: BtnProps) => {
  return (
    <button
      dangerouslySetInnerHTML={{ __html: `${ans}` }}
      onClick={() => {
        choosedAnsToggle(answer, mainIndex);
      }}
      style={styles({ choosenAnswer, correctAnswer, answer, userChecked })}
    ></button>
  );
};
// ZŁA ODPOWIEDŹ: backgroundColor: "#F8BCBC", border: "none", color: "#293264"
// DOBRA ODPOWIEDŹ: backgroundColor: "#94D7A2", border: "none"
// ODPOWIEDŹ, KTÓRA NIE ZOSTAŁA ZAZNACZONA PRZY SPR:  backgroundColor: "none", border: "0.75px solid #4D5B9E",
// ODPOWIEDŹ ZAZNACZONA PRZED guzikiem: backgroundColor: "#D6DBF5", border: "none"
