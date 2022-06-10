import React from "react";

// This component is mixing answers before giving them to singleQuestion

// RandNumGenerator creates and array of 4 random numbers without repeats
const randNumGenerator = (length: number): number[] => {
  let randNum = Math.floor(Math.random() * length);
  let randArr = [randNum];
  randNum = Math.floor(Math.random() * length);

  for (let i = 0; i < length - 1; i++) {
    for (let k = 0; k < randArr.length; k++) {
      if (randArr[k] === randNum) {
        randNum = Math.floor(Math.random() * length);
        k = -1;
      }
    }
    randArr.push(randNum);
    randNum = Math.floor(Math.random() * length);
  }
  return randArr;
};

export const masterMixer = (arr: string[], el: string): string[] => {
  const primaryArr: string[] = [...arr, el];
  const randomNumArr: number[] = randNumGenerator(primaryArr.length);
  const newArr: string[] = randomNumArr.map(
    (singleNum) => primaryArr[singleNum]
  );

  return newArr;
};
