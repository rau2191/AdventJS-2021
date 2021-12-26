function canReconfigure(from, to) {
  if (from.length !== to.length) return false;

  let hashMap = {};

  return ![...from].some((letter, idx) => {
    const isRepeat = Object.values(hashMap)
      .includes(to[idx])
      && hashMap[letter] !== to[idx]
      || (hashMap[letter] && hashMap[letter] !== to[idx]);

    hashMap[letter] = to[idx];
    return isRepeat;
  });
}

var from = 'BAL'
var to = 'LIB'
console.log(canReconfigure(from, to)); // true

from = 'CON'
to = 'JUU'
console.log(canReconfigure(from, to)); // false

from = 'MMM'
to = 'MID'
console.log(canReconfigure(from, to)); // false

from = 'AA'
to = 'MID'
console.log(canReconfigure(from, to)); // false -> no tiene la misma longitud
