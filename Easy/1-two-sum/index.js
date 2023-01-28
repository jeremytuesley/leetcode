var twoSum = function (nums, target) {
  const result = [];

  for (index in nums) {
    const integerIndex = Number(index);
    for (let i = integerIndex + 1; i < nums.length; i++) {
      if (nums[integerIndex] + nums[i] === target) {
        result.push(integerIndex, i);
        break;
      }
    }
    if (result.length > 1) break;
  }
  console.log(result);
};

const nums = [3, 3];
const target = 6;

twoSum(nums, target);
