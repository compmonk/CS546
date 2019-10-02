const arrayUtils = require('./arrayUtils');
const stringUtils = require('./stringUtils');
const objUtils = require('./objUtils');

// Head Tests
try {
   // Should Pass
   const headOne = arrayUtils.head([2, 3, 4]);
   console.log('head passed successfully', headOne);
} catch (e) {
   console.error('head failed test case', e);
}

try {
   // Should Fail
   const headTwo = arrayUtils.head(1234);
   console.error('head did not error', headTwo);
} catch (e) {
   console.log('head failed successfully', e);
}

// Last Tests
try {
   // Should Pass
   const lastOne = arrayUtils.last([2, 3, 4]);
   console.log('last passed successfully', lastOne);
} catch (e) {
   console.error('last failed test case', e);
}

try {
   // Should Fail
   const lastTwo = arrayUtils.last(1234);
   console.error('last did not error', lastTwo);
} catch (e) {
   console.log('last failed successfully', e);
}

// Remove Tests
try {
   // Should Pass
   const removeOne = arrayUtils.remove([2, 3, 4], 1);
   console.log('remove([2, 3, 4], 1) passed successfully', removeOne);
} catch (e) {
   console.error('remove failed test case', e);
}

try {
   // Should Fail
   const removeTwo = arrayUtils.remove([2, 3, 4], 3);
   console.log('remove did not error', removeTwo);
} catch (e) {
   console.error('remove failed successfully', e);
}

try {
   // Should Fail
   const removeThree = arrayUtils.remove();
   console.error('remove did not error', removeThree);
} catch (e) {
   console.log('remove failed successfully', e);
}

// Range Tests
try {
   // Should Pass
   const rangeOne = arrayUtils.range(4);
   console.log('range passed successfully', rangeOne);
} catch (e) {
   console.error('range failed test case', e);
}

try {
   // Should Pass
   const rangeTwo = arrayUtils.range(4, "yo");
   console.log('range passed successfully', rangeTwo);
} catch (e) {
   console.error('range failed test case', e);
}

try {
   // Should Fail
   const rangeThree = arrayUtils.range(-5);
   console.log('range did not error', rangeThree);
} catch (e) {
   console.error('range failed successfully', e);
}

try {
   // Should Fail
   const range4 = arrayUtils.range("hi");
   console.log('range did not error', range4);
} catch (e) {
   console.error('range failed successfully', e);
}

// countElements test

try {
   // Should Pass
   const result = arrayUtils.countElements([1, 2, 3, 4, 3, 1]);
   console.log('countElements passed successfully', result);
} catch (e) {
   console.error('countElements failed test case', e);
}

try {
   // Should Pass
   const result = arrayUtils.countElements([]);
   console.log('countElements passed successfully', result);
} catch (e) {
   console.error('countElements failed test case', e);
}

try {
   // Should Fail
   const result = arrayUtils.countElements();
   console.log('countElements did not error', result);
} catch (e) {
   console.error('countElements failed successfully', e);
}

try {
   // Should Fail
   const result = arrayUtils.countElements("hello");
   console.log('countElements did not error', result);
} catch (e) {
   console.error('countElements failed successfully', e);
}

// isEqual test

try {
   // Should Pass
   const result = arrayUtils.isEqual([1, 2, 3], [1, 2, 3]);
   console.log('isEqual passed successfully', result);
} catch (e) {
   console.error('isEqual failed test case', e);
}

try {
   // Should Pass
   const result = arrayUtils.isEqual([]);
   console.log('isEqual passed successfully', result);
} catch (e) {
   console.error('isEqual failed test case', e);
}

try {
   // Should Fail
   const result = arrayUtils.isEqual();
   console.log('isEqual did not error', result);
} catch (e) {
   console.error('isEqual failed successfully', e);
}

try {
   // Should Fail
   const result = arrayUtils.isEqual("hello");
   console.log('isEqual did not error', result);
} catch (e) {
   console.error('isEqual failed successfully', e);
}

// capitalize Test
try {
   // Should Pass
   const result = stringUtils.capitalize("foobar");
   console.log('capitalize passed successfully', result);
} catch (e) {
   console.error('capitalize failed test case', e);
}

try {
   // Should Pass
   const result = stringUtils.capitalize("FOOBAR");
   console.log('capitalize passed successfully', result);
} catch (e) {
   console.error('capitalize failed test case', e);
}

try {
   // Should Fail
   const result = stringUtils.capitalize(123);
   console.log('capitalize did not error', result);
} catch (e) {
   console.error('capitalize failed successfully', e);
}

try {
   // Should Fail
   const result = stringUtils.capitalize();
   console.log('capitalize did not error', result);
} catch (e) {
   console.error('capitalize failed successfully', e);
}

// repeat Tests
try {
   // Should Pass
   const result = stringUtils.repeat("abc", 3);
   console.log('repeat passed successfully', result);
} catch (e) {
   console.error('repeat failed test case', e);
}

try {
   // Should Pass
   const result = stringUtils.repeat("yo", 0);
   console.log('repeat passed successfully', result);
} catch (e) {
   console.error('repeat failed test case', e);
}

try {
   // Should Fail
   const result = stringUtils.repeat(123, 3);
   console.log('repeat did not error', result);
} catch (e) {
   console.error('repeat failed successfully', e);
}

try {
   // Should Fail
   const result = stringUtils.repeat("yo", -5);
   console.log('repeat did not error', result);
} catch (e) {
   console.error('repeat failed successfully', e);
}

// countChars Test
try {
   // Should Pass
   const result = stringUtils.countChars('Hello, the pie is in the oven');
   console.log('countChars passed successfully', result);
} catch (e) {
   console.error('countChars failed test case', e);
}

try {
   // Should Pass
   const result = stringUtils.countChars("");
   console.log('countChars passed successfully', result);
} catch (e) {
   console.error('countChars failed test case', e);
}

try {
   // Should Fail
   const result = stringUtils.countChars();
   console.log('countChars did not error', result);
} catch (e) {
   console.error('countChars failed successfully', e);
}

// extend tests
try {
   // Should Pass
   const result = objUtils.extend({ x: 2, y: 3}, { a: 70, x: 4, z: 5 }, { x: 0, y: 9, q: 10 });
   console.log('extend passed successfully', result);
} catch (e) {
   console.error('extend failed test case', e);
}

try {
   // Should Pass
   const result = objUtils.extend({ x: 2, y: 3}, { a: 70, x: 4, z: 5 });
   console.log('extend passed successfully', result);
} catch (e) {
   console.error('extend failed test case', e);
}

try {
   // Should Fail
   const result = objUtils.extend({ x: 0, y: 9, q: 10 },);
   console.log('extend did not error', result);
} catch (e) {
   console.error('extend failed successfully', e);
}

try {
   // Should Fail
   const result = objUtils.extend({ x: 0, y: 9, q: 10 }, { a: 70, x: 4, z: 5 }, undefined);
   console.log('extend did not error', result);
} catch (e) {
   console.error('extend failed successfully', e);
}

// smush tests

try {
   // Should Pass
   const result = objUtils.smush({ x: 2, y: 3}, { a: 70, x: 4, z: 5 }, { x: 0, y: 9, q: 10 });
   console.log('smush passed successfully', result);
} catch (e) {
   console.error('smush failed test case', e);
}

try {
   // Should Fail
   const result = objUtils.smush({ x: 0, y: 9, q: 10 },);
   console.log('smush did not error', result);
} catch (e) {
   console.error('smush failed successfully', e);
}

// mapValues function

try {
   // Should Pass
   const result = objUtils.mapValues({ a: 1, b: 2, c: 3 }, n => n + 1);
   console.log('mapValues passed successfully', result);
} catch (e) {
   console.error('mapValues failed test case', e);
}

try {
   // Should Pass
   const result = objUtils.mapValues({}, n => n + 1);
   console.log('mapValues passed successfully', result);
} catch (e) {
   console.error('mapValues failed test case', e);
}

try {
   // Should Fail
   const result = objUtils.mapValues({ a: 1, b: 2, c: 3 }, {});
   console.log('mapValues did not error', result);
} catch (e) {
   console.error('mapValues failed successfully', e);
}
