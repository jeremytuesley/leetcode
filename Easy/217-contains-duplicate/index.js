var containsDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    // incase of large array of elements, stops the loop at first instance of a duplicate number
    if (set.has(num)) return true;
    set.add(num);
  }
  return false;
};

const nums = [4, 1, 2, 3, 4];
console.log(containsDuplicate(nums));
// Output: true;
