// Given two strings ransomNote and magazine,
// return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

//  @param {string} ransomNote
//  @param {string} magazine
//  @return {boolean}

var canConstruct = function (ransomNote, magazine) {
  const letterMap = new Map();
  for (letter of magazine) {
    // console.log(letterMap);
    letterMap.set(letter, ~~letterMap.get(letter) + 1);
    // iterates through magazine array to count and add letters to the obj
    // e.g 'aa' {'a': 1 } -> {'a': 2 } adds + 1 for each time it finds a letter
    // console.log(letterMap);
  }
  for (letter of ransomNote) {
    // I need to make sure it doesnt work if there's duplicates, currently just checks if it exists within magazine
    // console.log(letterMap.get(letter));
    if (!letterMap.get(letter)) return false; // checks previously iterated magazine obj if it can find(get) any of the ransomNote letters if not, returns false
    letterMap.set(letter, ~~letterMap.get(letter) - 1); // iterating through ransomNote array adding +1, if it manages to get through all without returning false, returns true
    // console.log(letterMap);
  }
  console.log(letterMap);
  console.log(true); // or return true;
};

const ransomNote = 'aaa';
const magazine = 'aaab';
canConstruct(ransomNote, magazine);
