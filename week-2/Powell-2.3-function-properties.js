// personal header is here
const header = require("../header.js");

// function property Using my first name
myName.marcus = "Marcus";

// function here
function myName() {
  return myName.marcus;
}

// output here for personal header and function
console.log(header.display("Marcus", "Powell", "Exercise 2.3 - Function"));
console.log("");
console.log(myName());
