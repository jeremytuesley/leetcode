# Longest Common Prefix

<br /> Runtime: 71 ms, faster than 91.75% of submissions <br />
Memory Usage: 43.9MB, less than 23.28% of submissions <br />

# PROBLEM

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

### Example 1:

```javascript
Input: strs = ["flower", "flow", "flight"];
Output: "fl";
```

### Example 2:

```javascript
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

### My Solution

```javascript
var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  if (strs.length === 1) return strs[0];
  for (let i = 0; i <= strs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (strs[j].substring(0, i) !== strs[j + 1].substring(0, i)) return commonPrefix;
    }
    commonPrefix = strs[0].substring(0, i);
  }
  return commonPrefix;
};
```
