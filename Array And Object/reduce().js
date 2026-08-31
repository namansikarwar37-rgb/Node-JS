let prices = [100, 200, 300, 400];

let total = prices.reduce((sum, price) => {
  console.log("sum", sum)
  console.log("price", price)
  return sum + price;
}, 0);
console.log("Total =", total);
