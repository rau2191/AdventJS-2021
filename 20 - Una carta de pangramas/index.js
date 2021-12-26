function pangram(letter) {
  const normalized = letter
    .toLocaleLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

  const isAllLetters = ![...'abcdefghijklmnopqrstuvwxyz'].some(l => !normalized.includes(l));
  const specialLetter = letter.toLocaleLowerCase().includes("ñ");

  return isAllLetters && specialLetter;
}

console.log(pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho')); //true
console.log(pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!')); //true

console.log(pangram('Esto es una frase larga pero no tiene todas las letras del abecedario')); //false
console.log(pangram('De la a a la z, nos faltan letras')); //false