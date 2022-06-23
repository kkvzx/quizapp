import React, { FC } from "react";
import { nanoid } from "nanoid";
import { SingleQuestion } from "./SingleQuestion";
import { masterMixer } from "../masterMIxer";
import {
  QuestionsWrapper,
  Scoreboard,
  ScoreboardButton,
  ScoreboardP,
} from "./QuizAppElements";

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
        alert(
          "Problem occured while getting the data. Please try to restart the game"
        );
      });
  }, []);

  // Saving choosed Answer - Functionality after submit
  const choosedAnsToggle = (ans: string, index: number) => {
    !userChecked &&
      setChoosedAns((prev) => {
        const newArr = [...prev];
        newArr[index] = ans;
        return newArr;
      });
  };
  // Submit the answer
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
  // Restart the game
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
        alert(
          "Problem occured while getting the data. Please try to restart the game"
        );
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
    <>
      <QuestionsWrapper>{htmlElements}</QuestionsWrapper>
      <Scoreboard>
        {warning && (
          <ScoreboardP>In order to proceed answer to all questions</ScoreboardP>
        )}
        {userChecked && (
          <ScoreboardP>You scored {count}/5 correct answers</ScoreboardP>
        )}
        {userChecked ? (
          <ScoreboardButton onClick={() => playAgain()}>
            Play again
          </ScoreboardButton>
        ) : (
          <ScoreboardButton onClick={() => check()}>
            Check answers
          </ScoreboardButton>
        )}
      </Scoreboard>
    </>
  );
};
