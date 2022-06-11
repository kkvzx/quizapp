import { NONAME } from "dns";
import React from "react";

interface BtnProps {
  ans: string;
  choosedAns: string;
  choosedAnsToggle: (ans: string, mainIndex: number) => void;
  correctAnswer: string;
  userChecked: boolean;
  mainIndex: number;
}

export const BtnComponent = ({
  ans,
  choosedAns,
  choosedAnsToggle,
  mainIndex,
  correctAnswer,
  userChecked,
}: BtnProps) => {
  return (
    <button
      dangerouslySetInnerHTML={{ __html: `${ans}` }}
      onClick={() => {
        choosedAnsToggle(ans, mainIndex);
      }}
      style={
        userChecked
          ? choosedAns === ans
            ? choosedAns === correctAnswer
              ? { backgroundColor: "#94D7A2", border: "none" }
              : { backgroundColor: "#F8BCBC", border: "none", color: "#293264" }
            : {
                backgroundColor: "none",
                border: "0.75px solid #293264",
                color: "#293264",
                opacity: "0.5",
              }
          : choosedAns === ans
          ? { backgroundColor: "#D6DBF5", border: "none" }
          : {}
      }
    ></button>
  );
};
// ZŁA ODPOWIEDŹ: backgroundColor: "#F8BCBC", border: "none", color: "#293264"
// DOBRA ODPOWIEDŹ: backgroundColor: "#94D7A2", border: "none"
// ODPOWIEDŹ, KTÓRA NIE ZOSTAŁA ZAZNACZONA PRZY SPR:  backgroundColor: "none", border: "0.75px solid #4D5B9E",
// ODPOWIEDŹ ZAZNACZONA PRZED guzikiem: backgroundColor: "#D6DBF5", border: "none"
