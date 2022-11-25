### Valid Parentheses

<br /> Runtime: 91ms, faster than 73.56% of submissions <br />
Memory Usage: 43.5MB, less than 14.65% of submissions <br />

# PROBLEM

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

### Example 1:

```
Input: s = "()"
Output: true
```

### Example 2:

```
Input: s = "()[]{}"
Output: true
```

### Example 3:

```
Input: s = "(]"
Output: false
```

### Example 4:

```
Input: s = "([])"
Output: true
```

### Example 5:

```
Input: s = "([)]"
Output: false
```

```javascript
const BracketList = {
  openBrackets: ["(", "[", "{"],
  closeBrackets: [")", "]", "}"],
};

var isValid = function (s) {
  let inputValid = true;
  const validationArray = [];
  const { openBrackets, closeBrackets } = BracketList;
  for (let chr of s) {
    const foundIndex = openBrackets.findIndex((element) => element === chr);
    if (foundIndex !== -1) {
      validationArray.push(closeBrackets[foundIndex]);
    } else {
      if (chr !== validationArray[validationArray.length - 1]) {
        inputValid = false;
        break;
      }
      validationArray.pop();
    }
  }
  if (validationArray.length !== 0) return false;
  return inputValid;
};
```
