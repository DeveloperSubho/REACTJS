//Edit this code
"use strict";

var guessMe1 = 1;
let guessMe2 = 2;

{
  let guessMe2 = 3;
  try {
    console.log(guessMe1, guessMe2); // (A)
  } catch (err) {
    console.log("Error");
  }
  console.log(guessMe1, guessMe2); // (B)
}

console.log(guessMe1, guessMe2); // (C)

(() => {
  var guessMe1 = 5;
  let guessMe2 = 6;
  console.log(guessMe1); // (D)
  console.log(guessMe1, guessMe2); // (E)
})();

console.log(guessMe1, guessMe2); // (F)
