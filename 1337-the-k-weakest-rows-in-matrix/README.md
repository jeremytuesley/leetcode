Found this kinda hard, but achieved, got first submission wrong as I found out
.sort() sorts alphabetically but not numerically, so cases where I had 10, 11, 12 etc came before 2, 3, 4. leading to a wrong answer. Fixed by writing a numerical sort function in there.
Happy with runtimes/ memory usage
Runtime: 78 ms, faster than 68.07% of submissions
Memory Usage: 44.2 MB, less than 65.89% of submissions

# PROBLEM

You are given an m x n binary matrix mat of 1's (representing soldiers) and 0's (representing civilians). The soldiers are positioned in front of the civilians. That is, all the 1's will appear to the left of all the 0's in each row.

A row i is weaker than a row j if one of the following is true:
Both rows have the same number of soldiers and i < j.
The number of soldiers in row i is less than the number of soldiers in row j.
Return the indices of the k weakest rows in the matrix ordered from weakest to strongest.

### Example 1:

mat = [[1,1,0,0,0],
 [1,1,1,1,0],
 [1,0,0,0,0],
 [1,1,0,0,0],
 [1,1,1,1,1]],
k = 3
Output: [2,0,3]

### Explanation:

The number of soldiers in each row is:

- Row 0: 2
- Row 1: 4
- Row 2: 1
- Row 3: 2
- Row 4: 5
  The rows ordered from weakest to strongest are [2,0,3,1,4].

### Example 2:

mat =
[[1,0,0,0],
 [1,1,1,1],
 [1,0,0,0],
 [1,0,0,0]],
k = 2
Output: [0,2]

### Explanation:

The number of soldiers in each row is:

- Row 0: 1
- Row 1: 4
- Row 2: 1
- Row 3: 1
  The rows ordered from weakest to strongest are [0,2,3,1].

##

```javascript
var kWeakestRows = function (mat, k) {
  const weakRows = [];
  mat.map(function (prevArray) {
    // seperates arrays and then for each loop, reduces to count amount of "soldiers" in arrays
    const amtSoldiers = prevArray.reduce(
      (previousValue, currentValue) => previousValue + currentValue,
      0
    );
    weakRows.push(amtSoldiers); // pushes amount of "soldiers" to an empty array
  });
  const objWeakRows = Object.assign({}, weakRows); // converts array into an object which saves indexes to values as a key: value pair
  function sorter(a, b) {
    return a - b;
  } // function for sorting numerically
  weakRows.sort(sorter); // sorts to place smallest numbers first, object was assigned earlier so this doesn't wreck the indexes
  const indexArray = [];
  for (n = 0; n < k; n++) {
    // loops through a "k" amount of times, to find the "k" amount of weakest rows
    let index = Object.keys(objWeakRows).find(
      (key) => objWeakRows[key] === weakRows[n]
    ); // grabs the index of the (n) value of the sorted weakRows out of the created object
    indexArray.push(parseInt(index)); // pushes the 'weakest' row to an empty array, converts to integer as per question requirements
    delete objWeakRows[index]; // deletes otherwise you will have the same weakest row, 'k' amount of times
  }
  return indexArray; // returns an array of 'k' amount of weakest rows
};

mat = [
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
  [1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
k = 1;

kWeakestRows(mat, k);
```
