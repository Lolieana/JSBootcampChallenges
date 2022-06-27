/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if (str.includes(letter)) {
    return true;
  } else {
    return false;
  }
}
console.log(doesInclude('hello', 'l'));

function isPalindrome(str3) {
  let str3ToLower = str3.toLowerCase();
  let reversed = ''.toLowerCase();
  for (let i = str3ToLower.length - 1; 1 >= 0; i--) {
    reversed += str3ToLower[i];
    return reversed;
  }
  // const isStr3Polin = str3ToLower.split('').reverse().join('');
  // if (str3ToLower === isStr3Polin) {
  //  return true;
  // } else {
  // return false;
}

console.log(isPalindrome('dad'));

function cap(str, letter) {
  const letterToUpper = letter.toUpperCase();
  const strToUpper = str.toUpperCase();
  if (strToUpper.includes(letterToUpper)) {
    const letterIndex = strToUpper.indexOf(letterToUpper);
    return strToUpper.charAt(letterIndex + 1);
  } else {
    return 'Sorry, letter not found';
  }
}

console.log(cap('hello', 'e'));

function firstCharacter(str1, str2) {
  const str1ToLower = str1.toLowerCase();
  const str2ToLower = str2.toLowerCase();
  if (str1ToLower.charAt(0) === str2ToLower.charAt(0)) {
    return 'true';
  } else {
    return 'Sorry, letter not found';
  }
}
console.log(firstCharacter('hello', 'dad'));

module.exports = { cap, firstCharacter };
