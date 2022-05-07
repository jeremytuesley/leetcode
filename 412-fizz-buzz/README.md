Found this one was really easy. Ended up with above 50% better submission, but I can do some research to achieve 70%+ atleast probably.

Runtime: 84 ms, faster than 57.26% of submissions
Memory Usage: 44.3 MB, less than 54.40% of submissions

# PROBLEM

Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.

### Example 1:

Input: n = 3
Output: ["1","2","Fizz"]

### Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]

```javascript
var fizzBuzz = function (n) {
  let outputArray = [];
  for (i = 1; i <= n; i++) {
    if ((i % 3 === 0) & (i % 5 === 0)) {
      // Checks if divisible by both to output 'FizzBuzz'
      outputArray.push('FizzBuzz');
    } else if (i % 3 === 0) {
      // Checks divisible by 3
      outputArray.push('Fizz');
    } else if (i % 5 === 0) {
      // by 5
      outputArray.push('Buzz');
    } else {
      outputArray.push(i.toString()); // displays i as a string
    }
  }
  console.log(outputArray); // return outputArray;
};

let n = 15;
fizzBuzz(n);
```
