/* eslint-disable no-unused-vars */
function multiply(arr) {
  let product = 1;
  const flatArr = arr.flat();
  for (let i = 0; i < flatArr.length; i++) {
    product *= flatArr[i];
  }
  return product;
}
//console.log(multiply([1, 2, 3]));

function includesCopy(arr, searchValue) {
  const flatArr_2 = arr.flat();
  //return flatArr_2.includes('searchValue');

  if (flatArr_2.indexOf(searchValue) >= 0) {
    return true;
  } else {
    return false;
  }
}

function inventory(arr) {
  //console.log('arr ==>  ' + arr);
  const outArr = [];
  let sentence = '';
  for (let i = 0; i < arr.length; i++) {
    let nestedArr = arr[i];

    sentence =
      'The ' +
      nestedArr[1][0] +
      ' ' +
      nestedArr[0] +
      ' is ' +
      nestedArr[1][1] +
      ' dollars.';

    //  console.log(sentence);
    outArr.push(sentence);
  }

  return outArr;
}

function camelCase(str) {
  let returnVal = '';
  let toLowerStr = str.toLowerCase();
  let splitArr = toLowerStr.split(' ');
  for (let i = 0; i < splitArr.length; i++) {
    returnVal +=
      splitArr[i].substring(0, 1).toUpperCase() +
      splitArr[i].substring(1);
  }
  returnVal =
    returnVal.substring(0, 1).toLowerCase() + returnVal.substring(1);

  if (
    returnVal.charAt(returnVal.length - 1) === '!' ||
    returnVal.charAt(returnVal.length - 1) === '.' ||
    returnVal.charAt(returnVal.length - 1) === '?'
  ) {
    returnVal = returnVal.substring(0, returnVal.length - 1);
  }

  console.log(returnVal);
  return returnVal;
}
//console.log(camelCase('how now brown cow'));

function joiner(arr, seperator = ',') {
  let joinedStr = '';

  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      joinedStr += arr[i];
    } else {
      joinedStr += arr[i] + seperator;
    }
  }

  return joinedStr;
}

module.exports = {
  multiply,
  includesCopy,
  inventory,
  camelCase,
  joiner
};
