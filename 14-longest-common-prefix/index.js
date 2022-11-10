var longestCommonPrefix = function (strs) {
  let commonPrefix = "";
  if (strs.length === 1) return strs[0]; // if theres only one word, return it as the common prefix
  for (let i = 0; i <= strs[0].length; i++) {
    // letter loop
    for (let j = 0; j < strs.length - 1; j++) {
      // word loop
      if (strs[j].substring(0, i) !== strs[j + 1].substring(0, i)) return commonPrefix;
    }
    commonPrefix = strs[0].substring(0, i); // assigns after it goes through all the wood loops with the one letter loop
  }
  return commonPrefix;
};
