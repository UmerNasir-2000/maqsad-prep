function addNumbers(...rest: number[]): number {
  return rest.reduce((value, acc) => {
    acc += value;
    return acc;
  }, 0);
}

console.log(addNumbers(1, 5, 34));
