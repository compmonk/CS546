const extend = function(...args) {
  if (args.length < 2) {
    throw "not enough objects are passed"
  }
  for (var i = 0; i < args.length; i++) {
    if (args[i] === undefined) {
      throw "some object is undefined"
    }
  }
  result = args[0]
  for (var i = 1; i < args.length; i++) {
    for (var property in args[i]) {
      if (result[property] === undefined) {
        result[property] = args[i][property]
      }
    }
  }

  return result;
}

const smush = function(...args) {
  if (args.length < 2) {
    throw "not enough objects are passed"
  }
  for (var i = 0; i < args.length; i++) {
    if (args[i] === undefined) {
      throw "some object is undefined"
    }
  }
  result = args[0]
  for (var i = 1; i < args.length; i++) {
    for (var property in args[i]) {
      result[property] = args[i][property]
    }
  }

  return result;
}

const mapValues = function(object, func) {
  if (typeof object !== "object") {
    throw "object is not of type object"
  }
  if (!(func && {}.toString.call(func) === '[object Function]')) {
    throw "function is undefined";
  }
  for (var property in object) {
    object[property] = func(object[property])
  }
  return object;
}

module.exports = {
  extend,
  smush,
  mapValues
}
