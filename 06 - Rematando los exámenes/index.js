function sumPairs(numbers, result) {

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (j === i) continue;

      let numberOne = numbers[i];
      let numberTwo = numbers[j];

      if (numberOne + numberTwo === result) {
        return [numberOne, numberTwo];
      }

    }
  }

  return null;
}

console.log(sumPairs([3, 5, 7, 2], 10))
console.log(sumPairs([-3, -2, 7, -5], 10))
console.log(sumPairs([2, 2, 3, 1], 4))
console.log(sumPairs([6, 7, 1, 2], 8))
console.log(sumPairs([0, 2, 2, 3, -1, 1, 5], 6))
