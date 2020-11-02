// personal header is here
const header = require("../header.js");

// function property using my first name and last name
fullName.firstNameLastName = "Marcus Powell";

// function property for todays date
date.dateWriter = "2020, November 1";

// function property for my age
toint.convertToint = "35";

// function property for dollar amount for savings
float.convertToFloat = "$20,000"




// function here for first and last name
function fullName() {
  return fullName.firstNameLastName;
}

// function for todays date

function date() {
  return date.dateWriter;
}

// function for fixed number for temperature
let v = 33.355;
let place = 1;

function formatNumber(val, numOfPos) {
  return val.toFixed(numOfPos)
}

//function for age
function toint() {
  return toint.convertToint
}

//function for dollar amount
function float() {
  return float.convertToFloat
}

// output here for personal header and functions
console.log(header.display("Marcus", "Powell", "Exercise 2.4 - Functions"));
console.log("");
console.log('Hello my name is ' + fullName() + '!');
console.log('Todays date is ' + date() + ' and the current temperature is ' + formatNumber(v, place) + ' degrees.' );
console.log('I am ' + toint() + ' years old and my savings account goal is ' + float() + ' dollars.');





