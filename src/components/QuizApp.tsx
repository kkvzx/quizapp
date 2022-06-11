import React, { FC } from "react";
import { nanoid } from "nanoid";
import { SingleQuestion } from "./SingleQuestion";
import { masterMixer } from "./masterMIxer";

export const QuizApp = () => {
  const [apiData, setApiData] = React.useState<any[]>([]);
  const [userChecked, setUserChecked] = React.useState<boolean>(false);
  const [choosedAns, setChoosedAns] = React.useState<string[]>([]);

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

  const choosedAnsToggle = (ans: string, index: number) => {
    setChoosedAns((prev): any => {
      const newArr = [...prev];
      newArr[index] = ans;
      return newArr;
    });
  };

  const check = () => {
    setUserChecked((prev) => !prev);
  };

  console.log("hello");
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
      <button onClick={() => check()}>Click me or die</button>
    </div>
  );
};
