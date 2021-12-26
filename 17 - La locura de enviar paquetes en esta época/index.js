function countPackages(carriers, carrierID) {
  let totalPackages = 0;

  carriers.forEach(([id, packages, subs], index) => {
    if (carrierID === id) {
      totalPackages += packages;

      let copy = [...carriers];
      copy.splice(index, 1);

      subs.forEach((sub) => totalPackages += countPackages(copy, sub));
    }
  });

  return totalPackages;
}

const carriers = [
  ['dapelu', 5, ['midu', 'jelowing']],
  ['midu', 2, []],
  ['jelowing', 2, []]
];
console.log(countPackages(carriers, 'dapelu'));
// 5 de dapelu, 2 de midu y 2 de jelowing = 9

const carriers2 = [
  ['conchaasensio', 3, ['facundocapua', 'faviola']],
  ['lolivier', 8, ['camila', 'jesuspoleo']],
  ['camila', 5, ['sergiomartinez', 'conchaasensio']],
  ['jesuspoleo', 4, []],
  ['sergiomartinez', 4, []],
  ['facundocapua', 2, []],
  ['faviola', 1, []]
];
console.log(countPackages(carriers2, 'camila'));
// 5 de camila, 4 de sergiomartinez, 3 de conchaasensio, 2 de facundocapua y 1 de faviola = 15