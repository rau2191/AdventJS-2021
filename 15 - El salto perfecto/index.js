function checkSledJump(heights) {
  let lastValue = -1;
  let isDown = false;

  for (let i = 0; i < heights.length; i++) {
    let value = heights[i];
    isDown = value < lastValue;

    if ((isDown && value > lastValue) || value === lastValue) {
      return false;
    }

    lastValue = value;
  }

  return isDown;
}

console.log(checkSledJump([1, 2, 3, 2, 1])); // true: sube y baja de forma estricta
console.log(checkSledJump([0, 1, 0])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 3, 2, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([0, 1000, 1])); // -> true: sube y baja de forma estricta
console.log(checkSledJump([2, 4, 4, 6, 2])); // false: no sube de forma estricta
console.log(checkSledJump([1, 2, 3])); // false: sólo sube
console.log(checkSledJump([1, 2, 3, 2, 1, 2, 3])); // false: sube y baja y sube... ¡no vale!