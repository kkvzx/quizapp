import React, { FC } from "react";
import { nanoid } from "nanoid";
import { SingleQuestion } from "./SingleQuestion";

export const QuizApp = () => {
  const [apiData, setApiData] = React.useState<any[]>([]);
  const [reset, setReset] = React.useState(false);
  const [choosedAnswer, setChoosedAnswer] = React.useState(false);

  // Getting the data from API
  React.useEffect(() => {
    fetch("https://opentdb.com/api.php?amount=5")
      .then((response) => response.json())
      .then((data) => setApiData(data.results))
      .catch((error) => {
        console.log("error");
      });
  }, []);

  // answer color
  const answerToggle = (theChosenOne: string) => {
    setChoosedAnswer((prev) => !prev);
  };

  const htmlElements = apiData.map((singleObj) => (
    <SingleQuestion
      key={nanoid()}
      question={singleObj.question}
      answers={singleObj.incorrect_answers}
      correctAnswer={singleObj.correct_answer}
      answerToggle={answerToggle}
    />
  ));

  const resetFunc = () => {
    setReset((prev) => !prev);
  };

  return (
    <div>
      <div className="quizApp">{htmlElements}</div>
      <button onClick={resetFunc}>click</button>
    </div>
  );
};
