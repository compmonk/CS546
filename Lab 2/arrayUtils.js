const head = function(array) {
  if (!Array.isArray(array)) {
    throw "Not an array";
  }
  if (array === undefined) {
    throw "Array is undefined";
  }
  if (array.length > 1) {
    return array[0];
  }
};

const last = function(array) {
  if (!Array.isArray(array)) {
    throw "Not an array";
  }
  if (array === undefined) {
    throw "Array is undefined";
  }
  if (array.length > 1) {
    return array[array.length - 1];
  }
};

const remove = function(array, index) {
  if (!Array.isArray(array)) {
    throw "Not an array";
  }
  if (array === undefined) {
    throw "Array is undefined";
  }
  if (index <= 0 || array.length <= index) {
    throw "Index is out of bounds";
  }
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== index) {
        result.push(array[i]);
    }
  }
  return result;
};

const range = function(end, value) {
  if (end === undefined) {
    throw "end range is not specified"
  }
  if (isNaN(end)) {
    throw "end is is NaN"
  }
  if (end <= 0) {
    throw "end is non positive"
  }

  let result = [];

  for (let i = 0; i < end; i++) {
    if (value !== undefined) {
      result[i] = value;
    }
    else {
      result[i] = i;
    }
  }
  return result;
};

const countElements = function(array) {
  if (!Array.isArray(array)) {
    throw "Not an array";
  }
  if (array === undefined) {
    throw "Array is undefined";
  }
  let result = {};
  for (let i = 0; i < array.length; i++) {
    if (result[array[i]] !== undefined) {
      result[array[i]] += 1;
    }
    else {
      result[array[i]] = 1;
    }
  }
  return result;
};

const isEqual = function(arrayOne, arrayTwo) {
  if (!Array.isArray(arrayOne)) {
    throw "arrayOne is not an array";
  }
  if (arrayOne === undefined) {
    throw "arrayOne is undefined";
  }
  if (!Array.isArray(arrayTwo)) {
    throw "arrayTwo is not an array";
  }
  if (arrayTwo === undefined) {
    throw "arrayTwo is undefined";
  }
  if (arrayOne.length !== arrayTwo.length) {
    return false;
  }
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
};

module.exports = {
  head,
  last,
  remove,
  range,
  countElements,
  isEqual
};
