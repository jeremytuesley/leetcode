var maxProfit = function (prices) {
  let bestPriceToBuy = 0;
  let bestPriceToSell = 1;
  let max_profit = 0;

  while (bestPriceToSell < prices.length) {
    if (prices[bestPriceToBuy] < prices[bestPriceToSell]) {
      let profit = prices[bestPriceToSell] - prices[bestPriceToBuy];
      max_profit = Math.max(max_profit, profit);
    } else {
      bestPriceToBuy = bestPriceToSell;
    }
    bestPriceToSell++;
  }
  return max_profit;
};

const prices = [1, 2, 4];

console.log(maxProfit(prices));
