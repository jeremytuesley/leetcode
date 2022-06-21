Found this pretty simple, still have to look up how to make memory usage better.

<br /> Runtime: 103ms, faster than 70.63% of submissions <br />
Memory Usage: 51.9MB, less than 24.94% of submissions <br />

# PROBLEM

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

### Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

### Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

```javascript
var maxProfit = function (prices) {
  let lowestPrice = 0;
  let bestPriceToSell = 1;
  let max_profit = 0;

  while (bestPriceToSell < prices.length) {
    if (prices[lowestPrice] < prices[bestPriceToSell]) {
      let profit = prices[bestPriceToSell] - prices[lowestPrice];
      max_profit = Math.max(max_profit, profit);
    } else {
      lowestPrice = bestPriceToSell;
    }
    bestPriceToSell++;
  }
  return max_profit;
};

const prices = [1, 2, 4];

console.log(maxProfit(prices));
```
