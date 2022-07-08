/* eslint-disable no-restricted-syntax */
/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
function deleteProp(obj, prop) {
  //const keys = Object.keys(obj);
  //for (let i = 0; i < keys.length; i++) {
  // if (keys[i].equals(prop)) {
  //  delete obj.prop;
  // }
  // }
  delete obj[prop];
  return obj;
}

function numObjectProps(obj) {
  return Object.keys(obj).length;
}

function shoppingCart(cart) {
  let sum = 0;
  for (let i = 0; i < cart.length; i++) {
    sum += cart[i].amount;
  }
  return sum;
}

function compareObjects(obj1, obj2) {
  const keys_1 = Object.keys(obj1);
  const keys_2 = Object.keys(obj2);
  if (keys_1.length !== keys_2.length) {
    return false;
  } else {
    for (const key of keys_1) {
      if (obj1[key] !== obj2[key]) {
        return false;
      }
    }
  }
  return true;
}

module.exports = {
  compareObjects,
  deleteProp,
  numObjectProps,
  shoppingCart
};
