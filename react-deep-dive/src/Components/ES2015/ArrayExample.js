// Array.of
// Array.of() creates a new array instance from any given number of parameters. It does not matter if their types are different.

console.log(Array.of(3)); // [ 3 ]
console.log(Array.of(1, 2, 3)); // console.log(Array.of(1, 2, 3));
console.log(Array.of(3, "banana")); // console.log(Array.of(3, 'banana'));

// Array.from
// The Array.from() method also creates an array instance but from an array-like iterable object.
console.log(Array.from("Example")); // [ 'E', 'x', 'a', 'm', 'p', 'l', 'e' ]
console.log(Array.from("Educative!")); // [ 'E', 'd', 'u', 'c', 'a', 't', 'i', 'v', 'e', '!' ]

/**
 * The most common examples are probably an HTMLCollection or a NodeList.
 * These are created by DOM methods such as getElementsByClassName() or the more modern querySelectorAll().
 * HTMLCollection and NodeList do not own methods such as .map() or .filter().
 * If we want to iterate over any of the two, we need to convert them to an array Array.from() first.
 */
const links = Array.from(document.querySelectorAll("a"));
console.log(Array.isArray(links)); // true;

/**
 * Array.find(func);
 * The Array.find() method finds the first element in an array that fulfills the given criteria (as its name suggests).
 * It uses a function that is supplied as the first parameter to check for this value. Let’s look at an example.
 */
const numbers = [1, 2, 5, 9, 13, 24, 27, 39, 50];
const biggerThan10 = numbers.find((number) => number > 10);
console.log(biggerThan10);

const users = [
  { id: 1, name: "Manuel" },
  { id: 2, name: "Bianca" },
  { id: 3, name: "Brian" },
];

const userWithId2 = users.find((user) => user.id === 2);
console.log(userWithId2);

/**
 * Array.findIndex(func);
 * The Array.findIndex() method follows a similar pattern as Array.find()
 * but returns only the index of the element found instead of the Array.find() method, which returns the value.
 */
const numbers2 = [1, 2, 5, 9, 13, 24, 27, 39, 50];
const biggerThan9 = numbers2.findIndex((number) => number > 9);
console.log(biggerThan9);

const users2 = [
  { id: 1, name: "Manuel" },
  { id: 2, name: "Bianca" },
  { id: 3, name: "Brian" },
];

const userWithId3 = users2.findIndex((user) => user.id === 2);
console.log(userWithId3);

/**
 * Array.includes(value);
 * The Array.includes() method, added in ES2016, checks whether a value exists within the given array and returns a Boolean.
 * If we tried to reproduce the same functionality in the past, we had to make do with Array.indexOf().
 * Now, Array.includes() simplifies this greatly.
 * Let’s demonstrate the use of Array.includes() with the help of an example.
 */
console.log([1, 2, 3, 4, 5].includes(4));
console.log([1, 2, 3, 4, 5].includes(6));
