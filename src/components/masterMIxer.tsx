// masterMixer is 'injecting' correct answer in random position into array of incorrect answers
export const masterMixer = (
  incorrectArray: string[],
  correctAnswer: string
): string[] => {
  let mixedAnswers: string[] = [...incorrectArray];
  const randomNumber: number = Math.floor(Math.random() * mixedAnswers.length);
  mixedAnswers.splice(randomNumber, 0, correctAnswer);

  return mixedAnswers;
};
