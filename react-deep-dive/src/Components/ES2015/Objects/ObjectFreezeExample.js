/**
 * Object.freeze(Object)
 * The Object.freeze() method freezes an object and prohibits any further mutations,
 * such as adding new properties, deleting old properties, or even just changing values.
 * Considering React’s principle of immutable objects, this is very useful.
 */
const user = Object.freeze({ id: 1, name: "Manuel" });

user.id = 2;

delete user.name;

user.role = "Admin";

console.log(user);

/**
 * Note: If a program attempts to change an object created with Object.freeze()
 * for example, using Object.assign(), it will throw a TypeError, thus preventing unwanted and accidental mutations on the object.
 */
