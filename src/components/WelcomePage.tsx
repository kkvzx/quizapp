import React from "react";
import { welcomePageProps } from "./interfaces";

export const WelcomePage = ({ startToggle }: welcomePageProps) => {
  return (
    <div className="welcomePageWrapper">
      <h1>Quizzical</h1>
      <p>Some description if needed</p>
      <button onClick={startToggle}>Start quiz</button>
    </div>
  );
};
