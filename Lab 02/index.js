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
   console.error('head did not error');
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
   console.error('last did not error');
} catch (e) {
   console.log('last failed successfully', e);
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
   // Should Fail
   const result = stringUtils.capitalize(123);
   console.log('capitalize did not error', result);
} catch (e) {
   console.error('capitalize failed successfully', e);
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
   // Should Fail
   const result = objUtils.extend({ x: 0, y: 9, q: 10 },);
   console.log('extend did not error', result);
} catch (e) {
   console.error('extend failed successfully', e);
}
