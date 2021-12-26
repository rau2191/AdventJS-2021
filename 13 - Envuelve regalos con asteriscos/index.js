function wrapGifts(gifts) {
  if (gifts.length === 0) return [];

  const maxAsterisc = gifts[0].length + 2;
  const topAndBottom = Array(maxAsterisc + 1).join('*');
  let box = [];

  gifts.forEach(gift => {
    box.push(`*${gift}*`)
  });

  box = [...[topAndBottom], ...box, ...[topAndBottom]];

  return box;
}

console.log(wrapGifts(["📷", "⚽️"]));
/* Resultado:
[ '****',
  '*📷*',
  '*⚽️*',
  '****'
]
*/

console.log(wrapGifts(["🏈🎸", "🎮🧸"]));
/* Resultado:
[ '******',
  '*🏈🎸*',
  '*🎮🧸*',
  '******'
]
*/

console.log(wrapGifts(["📷"]));
/* Resultado:
[ '****',
  '*📷*',
  '****'
]
*/