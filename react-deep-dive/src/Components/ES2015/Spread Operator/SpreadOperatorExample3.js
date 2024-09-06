/**
 * The spread operator is a great choice to create objects:
 */
const globalSettings = { language: "en-US", timezone: "Berlin/Germany" };
const userSettings = { mutedUsers: ["Manuel"] };
const allSettings = { ...globalSettings, ...userSettings };
console.log(allSettings);
/**
 * The properties of each object can be found in the allSettings object.
 * However, the spread operator is not limited to two objects.
 * We can combine any number of objects into a new object.
 * Even the combination of single properties is possible:
 */

const userSettings2 = { mutedUsers: ["Manuel"] };
const settings2 = {
  ...userSettings2,
  showWarnings: true,
};
console.log(settings2);

/**
 * If there are object properties with the same name in any two objects,
 * the property in the object declared last will be used:
 */
const globalSettings3 = { language: "en-US", timezone: "Berlin/Germany" };
const userSettings3 = { language: "de-DE" };
const allSettings3 = { ...globalSettings3, ...userSettings3 };
console.log(allSettings3);
/**
 * The userSettings object, which is declared after the globalSettings object,
 * overrides the language property by providing
 * a key that is identical to that in the globalSettings object.
 */
/**
 * The spread operator works similarly to the Object.assign() method in ES2015,
 * which is also used occasionally in ES2015+ applications.
 * Note: Object.assign() mutates an existing object, whereas the spread operator creates a new object.
 * In terms of writing React components and their props, we want to avoid creating mutations.
 */
var aquaticAnimals = ["otter", "shark", "bluefin tuna"];
var rainforestAnimals = ["orang-utan", "elephant", "snake"];
let awesomeAnimals;

// Write your code here
awesomeAnimals = [...aquaticAnimals, ...rainforestAnimals];
console.log(awesomeAnimals);
