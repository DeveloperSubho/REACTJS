/**
 * The Object.assign() method takes any number of arguments and combines them into a single object:
 */
const a1 = { a: 1 };
const b1 = { b: 2 };
const c1 = { c: 3 };
console.log("1st Example");
console.log(Object.assign(a1, b1, c1));

/**
 * The function returns an object in which is a combination of the three objects passed to Object.assign().
 * But is this really a new object? No! To prove this, let’s print a, b, and c to the console:
 */
const a2 = { a: 11 };
const b2 = { b: 22 };
const c2 = { c: 33 };
console.log("2nd Example");
console.log(Object.assign(a2, b2, c2));
console.log(a2);
console.log(b2);
console.log(c2);

/**
 * As shown in the example above, Object.assign() did not create a new object for us.
 * It merely added the properties of the second and the third object to the first.
 * This means that our function changed the value of its input parameters and is therefore not a pure function.
 * This is far from ideal and should be avoided to maintain the use of pure functions and immutable objects in our code.
 * There’s a trick to ensure that objects can be combined via Object.assign() and created in a new object.
 * Passing an empty object literal {} as the first argument to the function will achieve exactly what we want.
 */

const a3 = { a: 111 };
const b3 = { b: 222 };
const c3 = { c: 333 };
console.log("3rd Example");
console.log(Object.assign({}, a3, b3, c3));
console.log(a3);
console.log(b3);
console.log(c3);
