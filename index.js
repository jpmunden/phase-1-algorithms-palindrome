function isPalindrome(string) {
  // Write your algorithm here
    let splitString = string.split('')
    let reverseArray = splitString.reverse()
    let joinArray = reverseArray.join('')
    return joinArray === string
}

/* 
  Add your pseudocode here
function take string
  function (split string into array, reverse array, join array into string)
  string === reversed string?
  return true/false
*/

/*
  Add written explanation of your solution here
function takes string
  then reverses that string
  checks whether reversed string equals original string
  returns true or false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
