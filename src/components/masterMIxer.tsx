// RandNumGenerator creates and array of 'lenghth' random numbers without repeats
const randNumGenerator = (length: number): number[] => {
  const arrayOfRandomNumbers = [...new Array(length)].map(() =>  Math.floor(Math.random() * length))
  return arrayOfRandomNumbers;
};

export const masterMixer = (arr: string[], el: string): string[] => {
  const primaryArr: string[] = [...arr, el];
  const randomNumArr: number[] = randNumGenerator(primaryArr.length);
  const newArr: string[] = randomNumArr.map(
    (singleNum) => primaryArr[singleNum]
  );

  return newArr;
};
