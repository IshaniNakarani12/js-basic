script.js;
// Single  comment
//console.log("shshshs");
/*
alert("hehehe");

Multiple line comment

*/

// Variable (only char, num, $ _)
// Var  name = “prem”
// Let name = “prem”
// Const  lastName = “acharya”

// var firstName = "Prem Acharya and mmmmmmmm";
// let add = "sydney";
// const dob = "2020-20-02";

// console.log(name, add, dob);

// name = "sam";
// add = "uk";
// dob = "383838";

// console.log(name, add);

// Arithmetic
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016)
// /	Division
// %	Modulus (Division Remainder)
// ++	Increment
// --	Decrement

// console.log(5 + 3);
// let a = 5;
// const b = 3;

// const ans = a + b;
// const ans = a - b;
// const ans = a * b;
// const ans = a / b;
// const ans = a ** b;
// const ans = a % b;

// a++;
// a--;

// console.log(a++);
// console.log(--a);
// console.log(a);

// ======= Comparisons
// ==
// ===
// >, >=
// <, <=
// const a = 5;
// const b = 5;

// const result = a === b;
// const result = a >= b;
// let result = a <= b;
// console.log(result);

// Logical Operators
// &&
// ||
// !
// Ternary

//---- Data types
// === Primitives
// String  		// “prem acharya”
// console.log(typeof `sfsdf`);
// Number 	//123
// console.log(typeof sf);
// Boolen		// true or false
// console.log(typeof true);
// Undefined	// not defined in system memory
// Null  		// defined in system memory but no value assigned
// console.log(typeof null);

// let name = "Prem";
// const age = 25;
// const p2 = name;
// console.log(name, p2);

// name = "sam";

// console.log(name, p2);
//=== Reference Types
// Object 		//{key:”value”}

// const person = {
//   name: "prem",
//   age: 20,
// };
// let person2 = person;

// console.log(person2, person);
// person.name = "same";

// console.log(person2, person);

// console.log(age);
// Array		//[“data”, 1232, {}, []]

// const perosn = ["prem", 20, ["apple", "banana"]];
// console.log(perosn);

// Function 	// function()
// Es6 	// const sayHi ()=> “hi”

// const result = Math.PI;
// const result = Math.round(4.7);
// const result = Math.ceil(4.1);
// const result = Math.floor(4.7);

// const result = Math.pow(8, 2);
// const result = Math.sqrt(64);

// const result = Math.min(0, 150, 30, 20, -8, -200);
// const result = Math.max(0, 150, 30, 20, -8, -200);
// const result = Math.random() * 10; // 0 - 9.9999...

// console.log(result);

// //Logical Operators
// &&
// ||
// !
// Ternary
//// JS- Conditional statements
//truthy: "dssd", 10, true, {}, [], ()=>{}
//falsy: "", 0, false, undefined, null

// const age = 17;
// const g = "f";
// If
// if (age >= 18 && g == "f") {
// if (age >= 18 || g == "f") {
//   console.log("Welcome to party!!");
// }
// console.log(!!!age);
// if (age) {
//   console.log("Welcome to party!!");
// }

// If else

// if (age >= 18) {
//   console.log("Welcome to party!!");
// } else {
//   console.log("Go home kido");
// }

// condition ? "if true ..." : "if false"
// age >= 18 ? console.log("Welcome to party!!") : console.log("Go home kido");

// Else if

// const pet = "cow";

// if (pet === "cat") {
//   console.log("meooow");
// } else if (pet === "dog") {
//   console.log("woof");
// } else if (pet === "cow") {
//   console.log("mowowowowo");
// } else {
//   console.log("lkjkhjgkhda klahjf aksfh k");
// }

// Switch
// switch (pet) {
//   case "cat":
//     console.log("meooow");
//     break;

//   case "dog":
//     console.log("woof");
//     break;

//   case "cow":
//     console.log("mowowowowo");
//     break;

//   default:
//     console.log("lkjkhjgkhda klahjf aksfh k");
// }

// try {
//   //code
//   const name = "prem";
//   console.log(name);
//   //   console.log(first);
//   //   ..

//   throw new Error("token expired");
// } catch (error) {
//   console.log(error.message);

//   if (error.message.includes("token expired")) {
//     console.log("text sent");
//   }
//   // send text
// } finally {
//   //   console.log(Date(), "function executed");
// }

//// JS- Scheduling
// setTimeout
// console.log("before st");
// setTimeout(() => {
//   console.log("wait is over");
// }, 3000); //1s

// clearTimeout
// setInterval

// let counter = 0;
// const counterInterval = setInterval(() => {
//   console.log(counter++);

//   if (counter == 10) {
//     clearInterval(counterInterval);
//   }
// }, 1000);

// clearInterval

// JS- ES6

// Let, Const
// Arrow function

// function bio() {
//   console.log("hey this is prem from sydney");
//   return "it's done";
//   //   console.log("first");
// }

// const bio = () => {
//   return "it's done";
// };
// const bio = () => "it's done";

// Template literals
// const bio = (name, place) => {
//   //
//   //   return "Hey this is " + name + " from " + place;

//   return `
// hey this is ${name}
//  from ${place}
// `;
// };

// const p1 = bio("prem", "sydeny");
// console.log(p1);

// const p2 = bio("sam", "UK");
// console.log(p2);
// Destructuring
// Default + Rest + Spread

// JS- Loops
// for(i = 0; i < cars.length; i++)
// for (let i = 0; i <= 10; i++) {
//   //   if (i % 2 == 0) {
//   //     continue;
//   //   }

//   if (i == 6) {
//     break;
//   }
//   console.log(i);
//   // 100 code
// }

// while (condition)
// let i = 110;
// while (i <= 10) {
//   console.log(i++);
// }

// do/while | do{}while()
// do {
//   console.log(i++);
// } while (i <= 10);

// Break out of loop
// Continue, in loop to exit 1 loop
// Break, break out the loop or switch

// Number
// safe number  -2^53 - 1 to 2^53 - 1
// const numb = 345_675_645_323_456_764_534;
// console.log(numb);
// ParseInt, float

//NaN : Not a  Number; isNaN()
// const num = "5.4w";
// const ans = +num;
// const ans = Number(num);
// const ans = isNaN(num);
// const ans = parseInt(num);
// const ans = parseFloat(num);

// console.log(ans);

//// String
// const hi = " Hi there ";
// const hey = 'I\'m "prem" from sydney ';
// const str = hi + hey;

// console.log(str);
// Escape character: \
// Length
// console.log(str.length);
// indexOf, lastIndexOf, search
// const value = str.indexOf("e");
// const value = str.search("sydney");
// charAt, [], split
// const value = str[25];
// const value = str.charAt(250);
// const value = str.split("prem");

// Slice, substring, substr
// const value = str.slice(3, 5);
// const value = str.slice(-1);
// const value = str.substring(3, 5);
// const value = str.substr(3, 5);

// Replace, contact, trim
// const value = str.replace("prem", "Acharya");
// const value = str.replace("e", "u");
// const value = str.replaceAll("e", "u");
// const value = str.trim().length;
// toUpperCase, toLowerCase
// const value = str.toLowerCase();
// const value = str.toUpperCase();

// console.log(str);
// console.log(value);

//// Array[]
// const arg = [
//   "sdfsd",
//   876,
//   true,
//   null,
//   undefined,
//   [987, 3456],
//   {
//     name: "prem",
//     skills: ["html", "css"],
//   },
// ];

// console.log(arg, arg[6]["skills"][1]);

// const fruits = ["banana", "apple", "orange", "pear"];

// const veg = ["Potato", "tomato"];
// Length, push , pop, shift, unshift, toString, join,[], splice, slice, indexOf

// fruits.push("mango");
// fruits.unshift("mango");

// const value = fruits.pop();
// const value = fruits.shift();
// const value = fruits.join("-").split("-");
// const value = fruits.slice(1, 3);
// const value = fruits.splice(1, 2);
// const value = fruits.splice(3, 0, "watermelon");
// const value = fruits.indexOf("apple");
// fruits.reverse();

// Sort, reverse
// fruits.sort((a, b) => a - b);
// For
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }
// forEach,

// fruits.forEach((item, index) => {
//   console.log(item, index);
// });
//map
// const newArg = fruits.map((item, i) => {
//   //   return "ID-" + item.toUpperCase();
//   if (item.includes("n")) {
//     return item;
//   }
// });
// Filter,
// const newArg = fruits.filter((item, i) => item.includes("n"));

//reduce,
// const money = [1, 2, 3, 4];
// const total = money.reduce((subTtl, item) => {
//   return subTtl + item;
// }, 0);

//every
// const result = fruits.every((item) => item.includes("b"));
// forOf
// for (let item of fruits) {
//   console.log(item);
// }

// const dt = Array(100).fill("😀");
// console.log(dt);
// console.log(fruits, result);

// Challange #1
//1. Create an array of 50 random nmbers range between 1 and 100 programmatically
// const numArg = [];
// for (let i = 0; i < 50; i++) {
//   numArg[i] = Math.floor(Math.random() * 100) + 1; // 0 - 99.999..
// //   numArg.push(num);
// }

//2. Sort the array in the descending order

// numArg.sort((a, b) => b - a);
// console.log(numArg);

// //3. Get the total value of the array
// const total = numArg.reduce((subttl, num) => {
//   return subttl + num;
// }, 0);
// console.log(total);

// 4. create odd numbers and even number's array based on the original array, use filter
// const even = numArg.filter((num) => {
//   return num % 2 === 0;
// });
// const odd = numArg.filter((num) => {
//   return num % 2 !== 0;
// });

// console.log(even, odd);

//5.  remove all the duplicate and create new array
// const noDuplicateArg = [...new Set(numArg)];
// console.log(noDuplicateArg);
// const noDuplicateArg = []; //100, 97
// for (let i = 0; i < numArg.length; i++) {
//   const n = numArg[i];
//   if (!noDuplicateArg.includes(n)) {
//     noDuplicateArg.push(n);
//   }
// }
// console.log(noDuplicateArg);

// #2 challange
// 1. create an array of 50 unique random numbers range between 1 and 100 programmatically

// const uniqueArg = [];
// let counter = 0;
// for (let x = 0; uniqueArg.length < 50; x++) {
// while (uniqueArg.length < 99) {
//   counter++;
//   const n = Math.floor(Math.random() * 100) + 1;
//   if (uniqueArg.indexOf(n) === -1) {
//     uniqueArg.push(n);
//   }
// }
// console.log(counter);
// console.log(uniqueArg);

// Challange #3

// // debugger;
// console.log("1. first one");

// const hehe = () => {
//   console.log("2. hehe fuctioin");
// };

// setTimeout(() => {
//   console.log("3. set time out");
// }, 5000);

// const yoyo = () => {
//   console.log("4. hehe fuctioin");
// };
// console.log("5. after yoyo");
// yoyo();
// setTimeout(() => {
//   console.log("6. set time out");
// }, 0);
// hehe();
// console.log("7. last line");
//

// Objects{}
// const obj = {
//   name: "prem",
//   phon: 34567,
// };
// console.log(obj.name);
// console.log(obj["phon"]);

// const person = {
//   name: "Will Smith",
//   numner: 324567,
//   add: "1 George St, Sydney",
//   married: true,
//   skills: ["html", "css", "js"],
//   parents: {
//     father: "Harry",
//     mother: "Merry",
//   },
// };

// console.log(person);
// Property, assign, delete, copy, convert to array, loop
// person.name = "Sam smith";
// person.skills.push("React");
// delete person.married;
// console.log(person);
// person.age = 98;
// person.age = 9;
// console.log(person);
// console.log(person["name"]);

// const newPerson = Object.assign({}, person);
// Destructuring
// const { married, ...newPerson } = person;
// console.log(name, newPerson);

// const newPerson = { ...person };
// newPerson.name = "Prem";
// console.log(newPerson);

//loop
// for (let key in person) {
//   console.log(key, person[key]);
// }

// convert to array
// const keyArg = Object.keys(person);
// keyArg.map((item) => console.log(person[item]));
// console.log(keyArg);
// const keyArg = Object.values(person);
// keyArg.map((item) => console.log(item));
// console.log(keyArg);
// const argss = Object.entries(person);
// console.log(argss);

// Default + Rest + Spread

// debugger;
// const parents = ({ f, m }) => {
//   return `Their parents are ${f} and ${m}`;
// };

// const bio = ({ n, a = "n/a", ...rest }) => {
//   //   const { n, a } = premo;
//   return ` Hi there, this is ${n} from ${a} ` + parents(rest);
// };
// // const bio = ({ n, a }) => ` Hi there, this is ${n} from ${a}`;

// const premObj = {
//   n: "prem",
//   a: "sydney",
//   f: "sam",
//   m: "merry",
// };
// const premBio = bio(premObj);
// console.log(premBio);

// const jiteenObj = {
//   n: "jiteen",
//   f: "samo",
//   m: "merria",
// };

// const jiteenBio = bio(jiteenObj);
// console.log(jiteenBio);

// const career = {
//   position: "Developer",
//   started: "22-02-2222",
// };

// combine to new one object

// const combo = { ...person, ...career };
// console.log(combo);

// const a1 = [234, 345, 23];
// const a2 = ["ds", "sdfdg"];
// const na = [...a1, ...a2];
// console.log(na);

// Date()
// const dt = new Date("1999-09-19");
// console.log(dt.getTime());
// Get Methods
// const val = dt.getDate();
// const val = dt.getDay();
// const val = dt.getFullYear();
// console.log(dt.toLocaleDateString());
// const tm = Date.now();
// console.log(tm);
// Formate

// Set Methods
// dt.setDate(dt.getDate() + 5);
// console.log(dt);

// 1. create two food objects with name and expiri date.

//2. create the function, that checks the expiri date of any product and retus the value like:
//if not expired: "You have 5 day left to use this foode name"
// if expired: "foodname expired 2days ago"

// const foodArg = [
//   {
//     name: "milk",
//     exp: "2024-3-10",
//   },
//   {
//     name: "tuna",
//     exp: "2024-3-2",
//   },
// ];

// const aDay = 24 * 60 * 60 * 1000;

// const checkExp = ({ name, exp }) => {
//   console.log(name);
//   const today = Date.now();
//   const expDate = new Date(exp).getTime();

//   const dayDiff = (expDate - today) / aDay;

//   if (dayDiff < 1) {
//     return `the ${name} is expired ${Math.floor(Math.abs(dayDiff))} days ago`;
//   } else {
//     return `You have   ${Math.floor(dayDiff)} days  to use your ${name}`;
//   }
// };

// foodArg.forEach((item) => {
//   const result = checkExp(item);
//   console.log(result);
// });

// //extra
// const person = {
//   n: "prem",
//   add: "sydney",
//   num: 9876,
// };

// const career = {
//   title: "soft. eng.",
//   exp: "20yrs",
// };

// const combo = {
//   ...person,
//   ...career,
// };

// console.log(combo);

// const { add, num, ...rest } = {
//   n: "prem",
//   add: "sydney",
//   num: 9876,
//   title: "soft. eng.",
//   exp: "20yrs",
// }; //combo

// console.log(rest);
