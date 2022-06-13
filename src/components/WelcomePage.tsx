import React from "react";
import { welcomePageProps } from "./interfaces";

export const WelcomePage = ({ startToggle }: welcomePageProps) => {
  return (
    <div className="welcomePageWrapper">
      <h1>&#60;FunGenerator /&gt;</h1>
      <p>The funniest thing you will ever see in your life!</p>
      <button onClick={startToggle}>Let the fun begin</button>
    </div>
  );
};
