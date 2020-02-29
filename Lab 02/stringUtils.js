const capitalize = function(string) {
  if (typeof string !== "string") {
    throw "argument is not a string"
  }
  if (string === undefined) {
    throw "string is undefined"
  }
  result = string[0].toUpperCase();
  for (var i = 1; i < string.length; i++) {
    result += string[i].toLowerCase()
  }
  return result;
}

const repeat = function(string, num) {
  if (typeof string !== "string") {
    throw "argument is not a string"
  }
  if (string === undefined) {
    throw "string is undefined"
  }
  if (isNaN(num)) {
    throw "num is NaN"
  }
  if (num < 0) {
    throw "num is not positive"
  }
  result = ""
  for (var i = 0; i < num; i++) {
    result += string;
  }
  return result;
}

const countChars = function(string) {
  if (typeof string !== "string") {
    throw "argument is not a string"
  }
  if (string === undefined) {
    throw "string is undefined"
  }
  let result = {}
  for (var i = 0; i < string.length; i++) {
    if (result[string[i]] !== undefined) {
      result[string[i]] += 1;
    }
    else {
      result[string[i]] = 1;
    }
  }
  return result;
}

module.exports = {
  capitalize,
  repeat,
  countChars
}
