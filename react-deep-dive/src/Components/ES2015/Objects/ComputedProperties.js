/**
 * First, computed properties were introduced to have the possibility of using expressions as object properties.
 * In the past, we had to manually create the object, such as with an object literal {} or by using Object.create(),
 * assigning it to a variable, and then adding it as a new property to the object:
 */
const nationality = "german";
const user = {
  name: "Manuel",
};
user[nationality] = true;
console.log(user);

/**
 * With the addition of ES2015, expressions can now be directly used as object properties by surrounding them with brackets []
 * in order to avoid the clunky detour of adding properties to the already existing object:
 */
const nationality2 = "german";
const user2 = {
  name: "Manuel",
  [nationality2]: true,
};
console.log(user2);
