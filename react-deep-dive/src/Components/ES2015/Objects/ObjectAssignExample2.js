/**
 * React embraces the principle of pure functions, which are functions
 * that are encapsulated in themselves and do not modify their entry parameters.
 * Taking this into account, it becomes apparent that such mutations
 * should be avoided if possible.
 * We can circumvent this problem by providing an empty object literal as the first argument:
 */

const user = { id: 1, name: "Manuel" };
const modifiedUser = Object.assign({}, user, { role: "Admin" });

console.log(user);

console.log(modifiedUser);

console.log(user === modifiedUser);

/**
 * By providing a newly created object as the destination object,
 * the result is also a different object.
 * In rare cases, it can be advantageous to mutate the destination object.
 * However, as a general rule, this practice is best avoided in React
 */
