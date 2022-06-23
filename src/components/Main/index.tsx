import React from "react";
import "../GlobalStyling.css";
import { QuizApp } from "../../components/QuizApp/index";
import { WelcomePage } from "../../components/WelcomePage";
import { AppWrapper, AppSection } from "./AppElements";

// Main file
export const App = () => {
  const [start, setStart] = React.useState(false);

  const startToggle = () => {
    setStart((prev) => !prev);
  };

  return (
    <AppWrapper>
      <AppSection>
        {start ? <QuizApp /> : <WelcomePage startToggle={startToggle} />}
      </AppSection>
    </AppWrapper>
  );
};
