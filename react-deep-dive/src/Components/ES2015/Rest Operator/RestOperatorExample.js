/**
 * The rest operator is closely related to the spread operator.
 * It takes care of the elements remaining in an array or object after destructuring or using function arguments.
 * Its name is self-explanatory — it deals with the “rest” of the elements.
 * Similar to the spread operator, the rest operator is preceded by three dots (…).
 * However, we cannot use it on the right side of an assignment and instead must always use it on the left…
 * Moreover, only one rest operator can be used in each expression (in stark contrast to the spread operator).
 */
/**
 * Assume that we want to write a function that can take any number of arguments.
 * ES5 offers the keyword arguments, which lets us access an array of all the function arguments within our function:
 */
function Example1() {
  console.log(arguments);
}

Example1(1, 2, 3, 4, 5);

/**
 * Arrow functions, however, do not offer this functionality anymore and will throw an error if you attempt to access the arguments:
 */
/**
const Example2 = () => {
  console.log(arguments);
};

Example2(1, 2, 3, 4, 5);
*/

/**
 * The rest operator offers a clean solution to this problem: it finds all function arguments that have not already been extracted into
 * their own variables and writes them into one more variable with any given name:
 */
const Example3 = (...rest) => {
  console.log(rest);
};

Example3(1, 2, 3, 4, 5);

/**
 * This not only works for a single function argument, but also for other previously defined parameters.
 * The rest operator takes care of the rest:
 */
const Example4 = (first, second, third, ...rest) => {
  console.log("first:", first);
  console.log("second:", second);
  console.log("third:", third);
  console.log("rest:", rest);
};

Example4(1, 2, 3, 4, 5);

/** The rest operator is not limited to functions – it can also be used in array destructuring: */
const athletes = [
  "Usain Bolt",
  "Andre De Grasse",
  "Christophe Lemaitre",
  "Adam Gemili",
  "Churandy Martina",
  "LaShawn Merritt",
  "Alonso Edward",
  "Ramil Guliyev",
];

const [gold, silver, bronze, ...competitors] = athletes;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(competitors);

/** Now let’s see how the rest operator works for object destructuring:
 */
const user = {
  firstName: "Manuel",
  lastName: "Bieh",
  job: "JavaScript Developer",
  hair: "Brown",
};

const { firstName, lastName, ...other } = user;
console.log(firstName);
console.log(lastName);
console.log(other);
