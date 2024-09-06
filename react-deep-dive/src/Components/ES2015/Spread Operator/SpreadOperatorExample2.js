/**
 * Spread operator with objects
 * Let’s shift our focus to how the spread operator works with objects.
 * Using the spread operator with objects is very similar to using it with arrays.
 * However, instead of using every single value,
 * the operator uses every property that is enumerable in the object
 * (such as properties used during a for(… in …) loop).
 */
var person = {
  name: "Ahmed",
};
person.age = "23";
person["country"] = "Pakistan";
Object.defineProperty(person, "salary", {
  value: "20000",
  enumerable: false,
});

console.log(person);

/**
 * name, age, and country are enumerable properties in the above code snippet,
 * whereas salary is non-enumerable.
 */
