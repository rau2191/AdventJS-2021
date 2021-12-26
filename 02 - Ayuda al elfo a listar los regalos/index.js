function listGifts(letter) {
    let regalos = {};
    letter.trim().split(' ').forEach(regalo => {
        if (!regalo.startsWith(' ') && !regalo.startsWith('_')) {
            regalos[regalo] = (regalos[regalo] ?? 0) + 1;
        }
    });

    return regalos;
}

const carta = 'bici coche balón _playstation bici coche peluche'

console.log(listGifts(carta))
/*
{
  bici: 2,
  coche: 2,
  balón: 1,
  peluche: 1
}
*/