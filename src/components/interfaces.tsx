import React from "react";

export interface welcomePageProps {
  startToggle: () => void;
}

export interface singleQuestionProps {
  question: string;
  correctAnswer: string;
  allAnswers: string[];
  userChecked: boolean;
  choosedAns: string;
  mainIndex: number;
  choosedAnsToggle: (ans: string, mainIndex: number) => void;
}
