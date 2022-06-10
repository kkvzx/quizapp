import React from "react";

interface BtnProps {
  ans: string;
  choosedAns: string;
  choosedAnsToggle: (ans: string) => void;
  // numOfQuestion: number;
  correctAnswer: string;
}

export const BtnComponent = ({
  ans,
  choosedAns,
  choosedAnsToggle,
  // numOfQuestion,
  correctAnswer,
}: BtnProps) => {
  // React.useEffect(() => {
  //   if (correctAnswer === choosedAns) {
  //   }
  // }, [choosedAns]);
  return (
    <button
      dangerouslySetInnerHTML={{ __html: `${ans}` }}
      onClick={() => {
        choosedAnsToggle(ans);
      }}
      style={
        choosedAns === ans
          ? { backgroundColor: "#D6DBF5", border: "none" }
          : { backgroundColor: "none", border: "0.75px solid #4D5B9E" }
      }
    ></button>
  );
};
