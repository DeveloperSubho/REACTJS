/**
 * Repeating props in front of every property hinders the readability of the component.
 * Instead, we can use object destructuring and create a variable for each property of the props once, like this:
 */
/** 
const UserPersona1 = (props) => {
  const { firstName, lastName, image, job } = props;
  return (
    <div>
      <img src={image} alt="User Image" />
      {firstName} {lastName}
      <br />
      <strong>{job}</strong>
    </div>
  );
};
*/

/**
 * That already looks tidier and improves the readability of the code, but we can simplify this further.
 * Remember that it was possible to destructure arrays when they were being passed as a function argument. The same applies to objects.
 * Instead of using the props argument, we can directly use destructuring assignment:
 */
/**
const UserPersona2 = ({ firstName, lastName, image, job }) => (
  <div>
    <img src={image} alt="User Image" />
    {firstName} {lastName}
    <br />
    <strong>{job}</strong>
  </div>
);
*/

/**
 * The invalid property name must be followed by a colon and the new name to rename the variable.
 * This would therefore pass as a valid destructuring assignment:
 */
const passenger = {
  name: "Manuel Bieh",
  class: "economy",
};

const { name, class: ticketClass } = passenger;

/**
 * Defaults in destructuring assignments
 * It is also possible to use defaults with destructuring.
 * If we are trying to destructure a property of an object in which it does not exist,
 * we can define a default to use instead. Rather than using a colon, as we did for reserved names,
 * we use the equals sign (=) followed by the default value we want to pass:
 */
const passenger2 = {
  name2: "Manuel Bieh",
  class2: "economy",
};

const { name2 = "Unknown passenger" } = passenger2;

/**
 * There is an untidy yet highly practical trick to ensure that the object we are working with is not null or undefined.
 * The logical OR operator (||) can be used to declare a fallback object if our actual object is null or undefined.
 */
const passenger3 = {
  name3: "Manuel Bieh",
  class3: "economy",
};

const {
  name3: passengerName = "Unknown passenger",
  class3: ticketClass3 = "economy",
} = passenger || {};

/** Destructuring and the spread operator can be used together too: */
const globalSettings = { language: "en-US" };
const userSettings = { timezone: "Berlin/Germany" };
const { language, timezone } = { ...globalSettings, ...userSettings };

console.log(language);

console.log(timezone);
