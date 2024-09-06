/**
 * The spread operator allows us to unpack values.
 * Before ES2015, we had to extract arguments from an array to pass them
 * to a function usingFunction.prototype.apply(). Let’s look at an example.
 */
function sumAll1(number1, number2, number3) {
  return number1 + number2 + number3;
}

var myArray = [1, 2, 3];

console.log(sumAll1.apply(null, myArray));

/**
 * Using the spread operator, which consists of three dots (…),
 * we can unpack these arguments, or spread them.
 */
function sumAll2(number1, number2, number3) {
  return number1 + number2 + number3;
}

var myArray = [1, 2, 3];

console.log(sumAll2(...myArray));

/**
 * Spread operator with arrays
 * Spreading arguments is not just useful for function arguments.
 * It can also be used to easily combine two arrays into one.
 * Let’s visualize this with the help of an example.
 */
const greenFruits = ["kiwi", "apple", "pear"];
const redFruits = ["strawberry", "cherry", "raspberry"];
const allFruits = [...greenFruits, ...redFruits];

console.log(allFruits);

/**
 * A new array is created that contains all values from greenFruits
 * and all values from redFruits. But there’s more: a new array is also created for us, not just a reference to the old arrays. Due to the read-only mentality in React, the creation of new array proves useful when working with props.
 * The spread operator can also be used to create a simple copy of an array:
 */

const users = ["Manuel", "Chris", "Ben"];
const selectedUsers = [...users];
console.log(selectedUsers);

/**
 * In the above example, selectedUsers is a copy of users and all of its values.
 * If we change the users array, no complications for selectedUsers occur.
 */
