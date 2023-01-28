First leetcode problem attempted.
While syntax was easy enough, wrapping my head around the logic was a little tough
As I never really use roman numerals in the first place, found it pretty fun though
<br /> Runtime: 204 ms, faster than 36.81% of submissions <br />
Memory Usage: 46.9 MB, less than 73.69% of submissions <br />

# PROBLEM

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9.
X can be placed before L (50) and C (100) to make 40 and 90.
C can be placed before D (500) and M (1000) to make 400 and 900.
Given a roman numeral, convert it to an integer.

```javascript
const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

var romanToInt = function (s) {
  let convertedNumeral = 0;
  s = s.split('').reverse();

  for (i = 0; i < s.length; i++) {
    // Saves left and right iterations of string, to compare later
    const leftNumIteration = romanNumerals[s[i]];
    const rightNumIteration = romanNumerals[s[i + 1]];

    // If string has an odd number of characters (e.g XIV (3 characters))
    // The right number will be undefined, so we just add the left number iteration
    // to achieve result
    if (rightNumIteration === undefined) {
      convertedNumeral += leftNumIteration;
      break;
    }

    if (leftNumIteration <= rightNumIteration) {
      convertedNumeral += leftNumIteration;
    } else {
      // Logic for when there is special cases (e.g IV = 4, without this, it will = 6)
      convertedNumeral += leftNumIteration - rightNumIteration;
      i++;
    }
  }
  console.log(convertedNumeral); // return convertedNumeral
};

let s = 'MCMLXXXIX'; // 1989
romanToInt(s);
```
