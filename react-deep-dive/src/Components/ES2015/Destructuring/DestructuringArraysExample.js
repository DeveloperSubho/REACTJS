/**
 * Destructuring allows us to extract one or more elements from any object or array and assign it to a new variable.
 * It is another great syntax extension that has been gifted to us with the introduction of ES2015.
 */
// Before Destructuring
const athletes = [
  "Usain Bolt",
  "Andre De Grasse ",
  "Christophe Lemaitre ",
  "Adam Gemili",
  "Churandy Martina",
  "LaShawn Merritt",
  "Alonso Edward",
  "Ramil Guliyev",
];

const gold = athletes[0];
const silver = athletes[1];
const bronze = athletes[2];

console.log(gold, silver, bronze);

// After Destructuring
const athletesDestruct = [
  "Usain Bolt",
  "Andre De Grasse ",
  "Christophe Lemaitre ",
  "Adam Gemili",
  "Churandy Martina",
  "LaShawn Merritt",
  "Alonso Edward",
  "Ramil Guliyev",
];

const [goldDestruct, silverDestruct, bronzeDestruct] = athletesDestruct;

console.log(goldDestruct, silverDestruct, bronzeDestruct);

/**
 * We can use array destructuring anywhere the array has been initialized on the right side,
 * even if it is contained in the return value of a function.
 */
const getAllAthletes = () => {
  return [
    "Usain Bolt",
    "Andre De Grasse ",
    "Christophe Lemaitre ",
    "Adam Gemili",
    "Churandy Martina",
    "LaShawn Merritt",
    "Alonso Edward",
    "Ramil Guliyev",
  ];
};

const [goldRet, silverRet, bronzeRet] = getAllAthletes();

console.log(goldRet, silverRet, bronzeRet);

/**
 * As shown above, the array function returns an array with all the athletes. We can use destructuring directly once it is called,
 * and we do not need to save the return value in a temporary variable.
 */

/**
 * Array destructuring is not limited to assigning variables with let and const.
 * There are many other cases that it can prove useful, such as when passing function arguments in the form of an array.
 */

const logWinnersSimple = (athletes) => {
  const gold = athletes[0];
  const silver = athletes[1];
  const bronze = athletes[2];
  console.log("Winners of Gold, Silver and Bronze are", gold, silver, bronze);
};

// This can be simplified to be:

const logWinnersDestruct = ([gold, silver, bronze]) => {
  console.log("Winners of Gold, Silver and Bronze are", gold, silver, bronze);
};
/**
 * We pass the array to our logWinners() function, and instead of defining a variable to each medalist winner,
 * we can combine our efforts and use the destructuring method.
 */
