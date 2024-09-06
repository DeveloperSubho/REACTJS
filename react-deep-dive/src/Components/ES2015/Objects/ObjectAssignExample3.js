/*
The method can process any given object as a parameter. 
If a property name appears more than once in an object, the properties added later take precedence.
*/
const user = { id: 1, name: "Manuel" };
const modifiedUser = Object.assign(
  {},
  user,
  { role: "Admin" },
  { name: "Not Manuel", job: "Developer" }
);

console.log(modifiedUser);
