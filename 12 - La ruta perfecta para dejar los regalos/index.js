function getMinJump(obstacles) {
  const sortedObstacles = obstacles.sort();
  let maxJump = sortedObstacles[sortedObstacles.length - 1] + 1

  if (obstacles.length === 0) {
    return 1;
  }

  for (let i = 2; i <= maxJump; i++) {
    if (!obstacles.some(obstacle => obstacle % i === 0)) return i;
  }
}

const obstacles = [5, 3, 6, 7, 9]
console.log(getMinJump(obstacles)) // -> 4

const obstacles2 = [2, 4, 6, 8, 10]
console.log(getMinJump(obstacles2)) // -> 7

