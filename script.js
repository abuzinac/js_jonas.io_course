/*
let js = 'amazing';
// console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = 'Jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);


// Variable name conventions
let jonas_matilda = "JM";
let $function = 27;

let person = 'Jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob);




// Values and variables coding assignment
/*
1. Declare variables called country, continent and population and assign their values according to your own country (population in millions).

2. Log their values to the console.


let country = 'Croatia';
let continent = 'Europe';
let population = 3;
console.log(country + ' is in ' + continent + ' and have ' + population + ' millions people.');


// DATA TYPES
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// undefined data types
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);


// LET, CONST AND VAR
let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'teacher';

lastName = 'Schmedtmann';
console.log(lastName);


// BASIC OPERATORS

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName + ' ' + lastName);

// Assignment operators
let x = 10 + 5; // 15
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x++; // x = x + 1 = 101
x--; // x = x - 1 = 100
x--; // x = x - 1 = 99  // 99 is the final value of x
console.log(x);

// Comparison operators
console.log(ageJonas > ageSarah); // >, <, >=, <=   // true or false          // 46 > 23 = true
console.log(ageSarah >= 18); // true

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018); // true or false        // 46 > 23 = true           // 46 - 1991 > 23 - 2018 = 46 > 23 = true

*/
// OPERATOR PRECEDENCE

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018); // true

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10 // 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);