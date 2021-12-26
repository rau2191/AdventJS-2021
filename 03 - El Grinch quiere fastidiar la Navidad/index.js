function isValid(letter) {
  let valid = true;

  [...letter].forEach((char, idx) => {
    if (valid && char === "(") {
      const rest = letter.substr(idx + 1);
      const fragment = letter.substr(
        idx + 1,
        rest.indexOf(")")
      );

      if (fragment.length === 0 || fragment.includes("{") || fragment.includes("[")) {
        valid = false;
      }
    }
  });

  return valid;
}

const letters = [
  "bici coche (balón) bici coche peluche",
  "(muñeca) consola bici",
  "bici coche (balon bici coche",
  "peluche (bici [coche) bici coche balón",
  "(peliche {) bici",
  "() bici"
]

letters.forEach(letter => console.log(isValid(letter)))