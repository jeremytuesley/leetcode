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
