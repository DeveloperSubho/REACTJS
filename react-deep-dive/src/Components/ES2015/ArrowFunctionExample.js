/**
 * Arrow functions greatly simplify by making the function keyword redundant.
 * function(arg) {}
 * For example, the function above would be transformed into this arrow function:
 * arg => {}
 * This is a valid function in ES2015!
 *
 */

/**
 * Implicit return
 * Arrow functions are getting wilder. If our function should only return an expression in the return value, the parentheses become optional as well.
 * For example, let’s compare a function that takes a number as its single argument, doubles it, and returns it. This is ES5:
 *
 * @param {*} number
 * @returns
 */
function double(number) {
  return number * 2;
}

console.log(double(5));

/**
 * This is the same code as an ES2015 arrow function:
 */
const doubleArrow = (number) => number * 2;

console.log(doubleArrow(5));

// With arrow functions, we can skip the explicit return and return like this:

const greeting = (name) => `hello ＄{name}`;

/**
 * Parent scope and Event listener
 * There is another even greater advantage when it comes to arrow functions.
 * This will be especially useful once we fully start to work with React.
 * Arrow functions do not have their own constructor meaning they cannot be instantiated using the new MyArrowFunction() form.
 * In addition, they do not bind their own this but inherit this from their parent scope.
 *
 * This sounds more complicated than it actually is and can be explained quickly using an example.
 * Let’s assume we define a button that writes the current time into a div when pressed. A typical function in ES5:
 */
function TimeButton1() {
  var button = document.getElementById("btn");
  var self = this;
  this.showTime = function () {
    document.getElementById("time").innerHTML = new Date();
  };
  button.addEventListener("click", function () {
    self.showTime();
  });
}

/**
 * As the function supplied an event listener, and does not have access to its parent scope (the TimeButton, in this case),
 * we have to save this in the variable self. This is not an uncommon pattern for ES5 JavaScript.
 * Alternatively, the scope of the function could be explicitly bound to this
 * and thus teach the event listener which scope to execute the code in:
 */
function TimeButton2() {
  var button = document.getElementById("btn");
  this.showTime = function () {
    document.getElementById("time").innerHTML = new Date();
  };
  button.addEventListener(
    "click",
    function () {
      this.showTime();
    }.bind(this)
  );
}
/**
 * The self becomes unnecessary in this example. This example is entirely valid, but it is not very elegant.
 * Let’s look at an example using arrow functions which inherit this from their parent scope, in this case from the TimeButton.
 */
function TimeButton3() {
  var button = document.getElementById("btn");
  this.showTime = function () {
    document.getElementById("time").innerHTML = new Date();
  };
  button.addEventListener("click", () => {
    this.showTime();
  });
}

// Create an arrow function named add() that returns the sum of two numbers, x and y.
const add = (x, y) => x + y;
console.log("Addition: " + add(1, 3));
