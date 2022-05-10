I initially wrote this as for solving an array, with .length and .slice, then I had to read up on LinkedLists, and similar problems using 2 pointers and implemented it to work for this problem.
Runtimes/ memory usage
<br /> Runtime: 62 ms, faster than 84.46% of submissions <br />
Memory Usage: 42 MB, less than 70.63% of submissions <br />

# Problem

Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

### Example 1:

Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.

### Example 2:

Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

```javascript
var middleNode = function (head) {
  // the quick pointer will move 2 times for every 1 time the slower pointer moves, so once the quick pointer reaches the end.
  // the slower pointer should be at the halfway mark.
  let quickPointer = (slowerPointer = head); // puts both pointers on the same point initially within the linked list
  while (quickPointer && quickPointer.next) {
    // incase quickPointer.next is undefined, ensures that it carries on so there's no exceptions
    quickPointer = quickPointer.next.next; // to iterate 2x quicker than slower pointer
    slowerPointer = slowerPointer.next; // iterates to next node in head linked list
  }
  return slowerPointer;
};
```
