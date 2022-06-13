import React, { FC } from "react";
import { nanoid } from "nanoid";
import { SingleQuestion } from "./SingleQuestion";
import { masterMixer } from "./masterMIxer";

export const QuizApp = () => {
  const [apiData, setApiData] = React.useState<any[]>([]);
  const [userChecked, setUserChecked] = React.useState<boolean>(false);
  const [choosedAns, setChoosedAns] = React.useState<string[]>([]);
  const [count, setCount] = React.useState<number>(0);
  const [warning, setWarning] = React.useState(false);

  // Getting the data from API and creating additional property with all the answers ("allAnswers")
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.results);
        setApiData((prevState) =>
          prevState.map((singleObj) => ({
            ...singleObj,
            allAnswers: masterMixer(
              singleObj.incorrect_answers,
              singleObj.correct_answer
            ),
          }))
        );
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  // Zpaisanie wybranej odpowiedzi - funckjonalność po zatwierdzneiu
  const choosedAnsToggle = (ans: string, index: number) => {
    !userChecked &&
      setChoosedAns((prev) => {
        const newArr = [...prev];
        newArr[index] = ans;
        return newArr;
      });
  };
  // Zatwierdzenie odpowiedzi - czy zostało naciśniete. Todo:Jeżeli tak to zablokuj zapisanie wybranej odpowiedzi.
  const check = () => {
    if (choosedAns.length === 5) {
      setUserChecked((prev) => !prev);
      setWarning(false);
      !userChecked &&
        apiData.map((obj, index) => {
          obj.correct_answer === choosedAns[index] &&
            setCount((prev) => prev + 1);
        });
    } else {
      setWarning(true);
    }
  };

  const playAgain = () => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => {
        setApiData(data.results);
        setApiData((prevState) =>
          prevState.map((singleObj) => ({
            ...singleObj,
            allAnswers: masterMixer(
              singleObj.incorrect_answers,
              singleObj.correct_answer
            ),
          }))
        );
      })
      .catch((error) => {
        console.log("error");
      });

    setUserChecked(false);
    setChoosedAns([]);
    setCount(0);
    setWarning(false);
  };

  const htmlElements = apiData.map((singleObj, index) => (
    <SingleQuestion
      key={nanoid()}
      question={singleObj.question}
      correctAnswer={singleObj.correct_answer}
      allAnswers={singleObj.allAnswers}
      userChecked={userChecked}
      choosedAns={choosedAns[index]}
      mainIndex={index}
      choosedAnsToggle={choosedAnsToggle}
    />
  ));

  return (
    <div>
      <div className="quizApp">{htmlElements}</div>
      <div className="scoreboard">
        <p style={warning ? { display: "" } : { display: "none" }}>
          In order to prceed answer to all the questions
        </p>
        <p style={userChecked ? { display: "block" } : { display: "none" }}>
          You scored {count}/5 correct answers
        </p>
        <button
          onClick={() => check()}
          style={userChecked ? { display: "none" } : { display: "" }}
          className="finishBtn"
        >
          Check answers
        </button>
        <button
          onClick={() => playAgain()}
          style={!userChecked ? { display: "none" } : { display: "" }}
          className="finishBtn"
        >
          Play again
        </button>
      </div>
    </div>
  );
};
