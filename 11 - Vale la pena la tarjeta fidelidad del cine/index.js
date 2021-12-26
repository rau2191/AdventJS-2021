function shouldBuyFidelity(times) {
  const normalPriceTicket = 12;
  const fidelityCardPrice = 250;
  const discountPercent = 0.75;

  const priceWithoutFidelity = normalPriceTicket * times;
  const priceWithFidelity = fidelityCardPrice + Array(times).fill().reduce((acc, _, idx) => acc + (normalPriceTicket * Math.pow(discountPercent, idx + 1)), 0);

  return priceWithFidelity <= priceWithoutFidelity;
}

console.log(shouldBuyFidelity(1)) // false -> Mejor comprar tickets de un sólo uso
console.log(shouldBuyFidelity(100)) // true -> Mejor comprar tarjeta fidelidad