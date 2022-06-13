import React from "react";
import "./styles/App.css";
import { QuizApp } from "./components/QuizApp";
import { WelcomePage } from "./components/WelcomePage";

export const App = () => {
  const [start, setStart] = React.useState(false);

  const startToggle = () => {
    setStart((prev) => !prev);
  };

  return (
    <div className="appWrapper">
      <div className="app">
        {start ? <QuizApp /> : <WelcomePage startToggle={startToggle} />}
      </div>
    </div>
  );
};
