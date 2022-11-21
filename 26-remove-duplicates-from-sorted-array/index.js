var removeDuplicates = function (nums) {
  let numCount = 0;
  for (val of nums) {
    if (numCount === 0 || nums[numCount - 1] !== val) {
      nums[numCount] = val;
      numCount += 1;
    }
  }
  // note: trick to the question being;
  // Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.
  if (numCount < nums.length) {
    nums.splice(numCount, nums.length);
  }
};
