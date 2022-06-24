/* eslint-disable consistent-return */
function max(num1 = 0, num2 = 0, num3 = 0) {
  if (num1 > num2 && num1 > num3) {
    return num1;
  }
  if (num2 > num1 && num2 > num3) {
    return num2;
  }
  return num3;
}

console.log(max(9, 8, 3));

function addUnknown(
  num1 = 0,
  num2 = 0,
  num3 = 0,
  num4 = 0,
  num5 = 0
) {
  return num1 + num2 + num3 + num4 + num5;
}
console.log(addUnknown(1, 2, 3, 4, 5));

function evenOrOdd(num1) {
  if (num1 % 2 === 0) {
    return 'even';
  }
  return 'odd';
}
console.log(evenOrOdd(8));

function operator(num1 = 0, num2 = 0, num3 = 0) {
  if (num1 + num2 === num3) {
    return 'plus';
  }
  if (num1 - num2 === num3) {
    return 'minus';
  }
  if (num1 * num2 === num3) {
    return 'multiply';
  }
  if (num1 / num2 === num3) {
    return 'divide';
  }
  return 'null';
}
console.log(operator(100, 10, 10));

module.exports = {
  max,
  addUnknown,
  evenOrOdd,
  operator
};
