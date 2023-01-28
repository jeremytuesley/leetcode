One of my first leetcode problems. Fairly easy, but I didn't end up using any of the newer array methods, so I think that lead to my <br /> Runtime and memory usage being pretty poor.

<br /> Runtime: 97 ms, faster than 21.25% of submissions <br />
Memory Usage: 44.4 MB, less than 18.25% of submissions <br />

# Problem

You are given an m x n integer grid accounts where accounts[i][j]
is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank.
Return the wealth that the richest customer has.

A customer's wealth is the amount of money they have in all their bank accounts.
The richest customer is the customer that has the maximum wealth.

### Example 1:

Input: accounts = [[1,2,3],[3,2,1]]
Output: 6
Explanation:
1st customer has wealth = 1 + 2 + 3 = 6
2nd customer has wealth = 3 + 2 + 1 = 6
Both customers are considered the richest with a wealth of 6 each, so return 6.

### Example 2:

Input: accounts = [[1,5],[7,3],[3,5]]
Output: 10
Explanation:
1st customer has wealth = 6
2nd customer has wealth = 10
3rd customer has wealth = 8
The 2nd customer is the richest with a wealth of 10.

### Example 3:

Input: accounts = [[2,8,7],[7,1,3],[1,9,5]]
Output: 17

```javascript
var maximumWealth = function (accounts) {
  let totalWealth = 0;
  for (const banks of accounts) {
    // loops through array(accounts) to seperate accounts into individual arrays
    let addAmounts = 0;
    for (const amounts of banks) {
      // separates individual values from the array to sum up
      addAmounts += amounts; // sums values
    }
    if (totalWealth < addAmounts) {
      // checks if totalWealth is smaller than added amounts
      totalWealth = addAmounts; // assigns it to be the higher number if true
    }
  }
  return totalWealth;
};

accounts = [
  [2, 8, 7],
  [7, 1, 3],
  [1, 9, 5],
];

maximumWealth(accounts);
```
