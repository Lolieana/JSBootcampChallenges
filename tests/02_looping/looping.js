/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function factorial(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(6));

function stringReverse(str) {
  let strToLow = str.toLowerCase();
  let reversed = ''.toLowerCase();
  for (let i = strToLow.length - 1; i >= 0; i--) {
    reversed += strToLow[i];
  }
  return reversed;
}
console.log(stringReverse('hello dear'));

function slicer(str, startIdx, endIdx = str.length - 1) {
  if (startIdx === undefined) {
    return str;
  }

  let returnStr = '';

  for (let i = startIdx; i <= endIdx; i++) {
    returnStr = returnStr + str[i];
  }

  return returnStr;
}

console.log(slicer('twice the ice is nice to slice', 6, 20));

//function isEven(number) {
// return number % 2 === 0;
//}
function addTheEvens(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
}
console.log(addTheEvens(3));

module.exports = {
  factorial,
  stringReverse,
  slicer,
  addTheEvens
};
