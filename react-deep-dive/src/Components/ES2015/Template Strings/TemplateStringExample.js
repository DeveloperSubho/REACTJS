/**
 * Template strings in ES2015 offer a third alternative to write a string.
 * Strings can already be declared by using the following two ways:
 * Single quotation marks: 'Example'
 * Double quotation marks: "Example"
 */
var age = 7;
var text = "My daughter is " + age + " years old";
console.log(text);

var firstName = "Manuel";
var lastName = "Bieh";
var fullName = firstName + " " + lastName;
console.log(fullName);

/**
 * Template strings allow us to include JavaScript expressions in this variation of a string.
 * To do this, we wrap the expression we want to include in this form: ＄{ }.
 * Let’s look at our previous examples but rewrite them using template literals.
 */
var age2 = 7;
var text2 = `My daughter is ${age2} years old`;
console.log(text2);

var firstName2 = "Manuel";
var lastName2 = "Bieh";
var fullName2 = `${firstName2} ${lastName2}`;
console.log(fullName2);

/**
 * It is important to note that we are not limited to using variables, as shown above.
 * In fact, any JavaScript expressions, such as function calls, may be used.
 */
var firstName3 = "Manuel";
var lastName3 = "Bieh";
console.log(`Today's date is: ${new Date().toISOString()}`);
console.log(`${firstName3.toUpperCase()} ${lastName3.toUpperCase()}`);
