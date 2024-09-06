// to test whether the string "Example" contains the word "egg"
console.log("Example".includes("egg"));

// to test whether the string "Example" starts with the word "Ex"
console.log("Example".startsWith("Ex"));

// to test whether the string "Example" ends with the word "ample"
console.log("Example".endsWith("ample"));

// String.prototype.padStart()
console.log("7".padStart(3, "0"));
console.log("72".padStart(3, "0"));
console.log("132".padStart(3, "0"));
console.log("9".padStart(5));

// String.prototype.padEnd()
console.log("abc".padEnd(5, "2"));
console.log("132".padEnd(7, "*"));
console.log("72".padEnd(3, "0"));
console.log("abc".padEnd(5));
