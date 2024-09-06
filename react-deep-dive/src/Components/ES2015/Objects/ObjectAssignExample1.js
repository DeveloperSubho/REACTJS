const user = { id: 1, name: "Manuel" };
const modifiedUser = Object.assign(user, { role: "Admin" });

console.log(user);

console.log(modifiedUser);

console.log(user === modifiedUser);
