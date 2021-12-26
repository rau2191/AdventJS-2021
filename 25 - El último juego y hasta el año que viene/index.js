function canMouseEat(direction, game) {
  const mouseChar = 'm';
  const mealChar = '*';

  const directionFunctions = {
    'up': (row, column) => [row - 1, column],
    'down': (row, column) => [row + 1, column],
    'right': (row, column) => [row, column + 1],
    'left': (row, column) => [row, column - 1],
  };

  const rowIndexMouse = game.findIndex((row) => row.includes(mouseChar));
  const columnIndexMouse = game[rowIndexMouse].indexOf(mouseChar);

  const [rowIndexMeal, columnIndexMeal] = directionFunctions[direction](rowIndexMouse, columnIndexMouse);

  return game[rowIndexMeal] !== undefined && game[rowIndexMeal][columnIndexMeal] === mealChar;
}

const room = [
  [' ', ' ', ' '],
  [' ', ' ', 'm'],
  [' ', ' ', '*']
]

console.log(canMouseEat('up', room));   // false
console.log(canMouseEat('down', room));   // true
console.log(canMouseEat('right', room));   // false
console.log(canMouseEat('left', room));   // false

const room2 = [
  ['*', ' ', ' ', ' '],
  [' ', 'm', '*', ' '],
  [' ', ' ', ' ', ' '],
  [' ', ' ', ' ', '*']
]
console.log(canMouseEat('up', room2));   // false
console.log(canMouseEat('down', room2));   // false
console.log(canMouseEat('right', room2));   // true
console.log(canMouseEat('left', room2));   // false
