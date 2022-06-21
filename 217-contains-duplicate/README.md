Worked with duplicates recently in a take home exercise, so this one was quick for me as I implemented a similar method.
Added a for loop to improve memory incase of the array of nums being massive, it will stop at first instance of a duplicate.

<br /> Runtime: 139ms, faster than 44.39% of submissions <br />
Memory Usage: 50.8MB, less than 57.27% of submissions <br />

# PROBLEM

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

### Example 1:

Input: nums = [1,2,3,1]
Output: true

### Example 2:

Input: nums = [1,2,3,4]
Output: false

### Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

```javascript
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    // incase of large array of elements, stops the loop at first instance of a duplicate number
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

const nums = [4, 1, 2, 3, 4];
console.log(containsDuplicate(nums));
// Output: true;
```
