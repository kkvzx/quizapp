import React from "react";
import { welcomePageProps } from "../interfaces";
import {
  StartGameButton,
  WelcomePageHeader,
  WelcomePageP,
  WelcomePageWrapper,
} from "./WelcomePageElements";

export const WelcomePage = ({ startToggle }: welcomePageProps) => {
  return (
    <WelcomePageWrapper>
      <WelcomePageHeader>&#60;FunGenerator /&gt;</WelcomePageHeader>
      <WelcomePageP>
        The funniest thing you will ever see in your life!
      </WelcomePageP>
      <StartGameButton onClick={startToggle}>Let the fun begin</StartGameButton>
    </WelcomePageWrapper>
  );
};
