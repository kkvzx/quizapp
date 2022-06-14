

export const styles = ({ userChecked, choosenAnswer, answer, correctAnswer }: any) => {
  if (userChecked) {
    if(choosenAnswer === answer) {
      return choosenAnswer === correctAnswer ? {
        backgroundColor: "#94D7A2",
        color: "black",
      } : {
        backgroundColor: "rgb(159, 87, 159)",
        color: "#293264",
        opacity: "0.5",
      };
    } else {
      return answer === correctAnswer
        ? { backgroundColor: "#94D7A2", border: "none", color: "black" }
        : {
          backgroundColor: "none",
          border: "0.75px solid #293264",
          color: "grey",
          opacity: "0.5",
        };
    }
  } else {
    return choosenAnswer === answer
      ? {
        backgroundColor: "#8577c2ab",
        border: "1px solid rgb(159, 87, 159)",
        color: "white",
      }
      : {}
  }
};