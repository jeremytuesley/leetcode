Found this one really easy, took maybe 5 mins or less.
However, my memory usage was super high for this one, need to find out how to use less memory for this problem.
<br /> Runtime: 70 ms, faster than 64.69% of submissions <br />
Memory Usage: 42.3 MB, less than 18.25% of submissions <br />

# Problem

Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.

### Example 1:

Input: num = 14
Output: 6
Explanation:
Step 1) 14 is even; divide by 2 and obtain 7.
Step 2) 7 is odd; subtract 1 and obtain 6.
Step 3) 6 is even; divide by 2 and obtain 3.
Step 4) 3 is odd; subtract 1 and obtain 2.
Step 5) 2 is even; divide by 2 and obtain 1.
Step 6) 1 is odd; subtract 1 and obtain 0.

### Example 2:

Input: num = 8
Output: 4
Explanation:
Step 1) 8 is even; divide by 2 and obtain 4.
Step 2) 4 is even; divide by 2 and obtain 2.
Step 3) 2 is even; divide by 2 and obtain 1.
Step 4) 1 is odd; subtract 1 and obtain 0.

```javascript
var numberOfSteps = function (num) {
  steps = 0; // sets a counter to calculate steps
  while (num !== 0) {
    // repeat this code until num reaches 0
    if (num % 2 === 0) (num /= 2), steps++;
    // checks if number is even, divides by 2, adds 1 to step counter
    else (num -= 1), steps++; // otherwise num minus 1, adds 1 to step counter
  }
  console.log(steps); // return steps
};

num = 14;
numberOfSteps(num);
```
