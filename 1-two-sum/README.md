Fairly easy, short leetcode problem, saw some other solutions using hashmaps, will look more into them as I know they're alot better in certain circumstances :smile:

<br /> Runtime: 77 ms, faster than 94.51% of submissions <br />
Memory Usage: 42.6 MB, less than 49.25% of submissions <br />

# PROBLEM

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

### Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

### Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]

### Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

```javascript
var twoSum = function (nums, target) {
  const result = [];

  for (index in nums) {
    const integerIndex = Number(index);
    for (let i = integerIndex + 1; i < nums.length; i++) {
      if (nums[integerIndex] + nums[i] === target) {
        result.push(integerIndex, i);
        break;
      }
    }
    if (result.length > 1) break;
  }
  console.log(result);
};

const nums = [3, 3];
const target = 6;

twoSum(nums, target);
```
