import React, { FC } from "react";
import { nanoid } from "nanoid";
import { SingleQuestion } from "./SingleQuestion";
import { masterMixer } from "./masterMIxer";

export const QuizApp = () => {
  const [apiData, setApiData] = React.useState<any[]>([]);
  const [isItRight, setIsItRight] = React.useState<boolean[]>([]);
  const [counter, setCounter] = React.useState(0);
  const [activeButton, setActiveButton] = React.useState<any[]>([]);

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

  const isItRightToggle = (surprise: boolean, numOfQuestion: number): void => {
    setIsItRight((prev) => [...prev]);
  };

  const activeButtonToggle = (obj: any) => {
    setActiveButton(obj);
  };
  const htmlElements = apiData.map((singleObj, index) => (
    <SingleQuestion
      key={nanoid()}
      question={singleObj.question}
      correctAnswer={singleObj.correct_answer}
      allAnswers={singleObj.allAnswers}
      isItRight={isItRight}
      isItRightToggle={isItRightToggle}
      activeButtonToggle={activeButtonToggle}
      activeButton={activeButton}
    />
  ));

  const check = () => {
    console.log("xsadasda");
  };

  return (
    <div>
      <div className="quizApp">{htmlElements}</div>
      <button onClick={() => check()}>Click me or die</button>
    </div>
  );
};
