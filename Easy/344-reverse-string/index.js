// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: s = ["h","e","l","l","o"]
// Output: ["o", "l", "l", "e", "h"]

// Example 2:
// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

var reverseString = function (s) {
  let left = 0,
    right = s.length - 1;
  // sets to 2 pointers, left to start at beginning of array, right to start at end (has to -1 from length, as index counts from 0)
  while (left < right) {
    // left < right, so when it's in the middle it stops, and for odd numbered array lengths, it won't need to swap the middle numbers
    temp = s[left]; // temporarily holds strings left index, tried with double assignment first, it didn't carry over the capital, so this was my fix.
    [s[left], s[right]] = [s[right], temp]; // strings left index is reassigned to strings right index, then strings right index is assigned to the temp (which was strings left index before reassignment)
    left++, right--; // increments and decrements
  }
};

s = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s);
