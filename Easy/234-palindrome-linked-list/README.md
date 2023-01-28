Kinda hard to play around with linked lists, the examples from leetcode end up being defined as arrays and don't iterate the same way.
Ended up finding a solution with an explanation, and went with that. The explanation they gave was really detailed, so while it's regrettable that I wasn't able to completely solve it myself. I'm happy to understand it even a little bit more[.](https://leetcode.com/problems/palindrome-linked-list/discuss/1137027/JS-Python-Java-C%2B%2B-or-Easy-Floyd's-%2B-Reversal-Solution-w-Explanation)

<br /> Runtime: 142 ms, faster than 95.50% of submissions <br />
Memory Usage: 69.8 MB, less than 71.96% of submissions <br />

# PROBLEM

Given the head of a singly linked list, return true if it is a palindrome.

### Example 1:

Input: head = [1,2,2,1]
Output: true

### Example 2:

Input: head = [1,2]
Output: false

```javascript
var isPalindrome = function (head) {
  let slow = head,
    fast = head,
    prev,
    temp;
  while (fast && fast.next) (slow = slow.next), (fast = fast.next.next);
  (prev = slow), (slow = slow.next), (prev.next = null);
  while (slow)
    (temp = slow.next), (slow.next = prev), (prev = slow), (slow = temp);
  (fast = head), (slow = prev);
  while (slow)
    if (fast.val !== slow.val) return false;
    else (fast = fast.next), (slow = slow.next);
  return true;
};
```
