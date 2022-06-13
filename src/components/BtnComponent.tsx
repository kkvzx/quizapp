import { NONAME } from "dns";
import React from "react";
import { BtnProps } from "./interfaces";

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
        // Użytkownik sprawdza
        userChecked
          ? // Wybrana opcja
            choosedAns === ans
            ? // Jeżeli jest prawidłowa
              choosedAns === correctAnswer
              ? // To zielone
                {
                  backgroundColor: "#94D7A2",
                  color: "black",
                }
              : // jeżeli źle to czerowne
                {
                  backgroundColor: "rgb(159, 87, 159)",
                  color: "#293264",
                  opacity: "0.5",
                }
            : // Pozostałe niewybrane opcje
            ans === correctAnswer
            ? // To zielone
              { backgroundColor: "#94D7A2", border: "none", color: "black" }
            : // jeżeli źle to szare // Pozostałe niewybrane opcje
              {
                backgroundColor: "none",
                border: "0.75px solid #293264",
                color: "grey",
                opacity: "0.5",
              }
          : // Jeżeli użytkownik nie sprawdza ale klika (przed sprawdzeniem) to zaznacza
          choosedAns === ans
          ? {
              backgroundColor: "#8577c2ab",
              border: "1px solid rgb(159, 87, 159)",
              color: "white",
            }
          : {}
      }
    ></button>
  );
};
// ZŁA ODPOWIEDŹ: backgroundColor: "#F8BCBC", border: "none", color: "#293264"
// DOBRA ODPOWIEDŹ: backgroundColor: "#94D7A2", border: "none"
// ODPOWIEDŹ, KTÓRA NIE ZOSTAŁA ZAZNACZONA PRZY SPR:  backgroundColor: "none", border: "0.75px solid #4D5B9E",
// ODPOWIEDŹ ZAZNACZONA PRZED guzikiem: backgroundColor: "#D6DBF5", border: "none"
