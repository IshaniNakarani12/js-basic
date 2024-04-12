script - advance.js;
// Object Oriented Programming (OOP)

// Object, property, and method

// const person = {
//   name: "prem",
//   // bio(){},
//   bio: () => {
//     return `Hey this is ${person.name}.`;
//   },
// };

// console.log(person.bio());

// This keywords
// const person = (name, add) => {
//   return {
//     personName: name,
//     address: add,
//     // bio: () => {
//     bio() {
//       return `Hey this is ${this.personName}.`;
//     },
//   };
// };

// const premObj = person("prem", "sydney");
// console.log(premObj.bio());

// Class OOP
//syntax

// This keywords
// Constructor
// class Person {
//   #secKey;
//   //   #sectetKeyGenerator;
//   constructor(n, a) {
//     this.name = n.toUpperCase();
//     this.add = a.toUpperCase();
//     this.#secKey = "98765";
//   }
//   bio() {
//     return `Hey, this is ${this.name} and I live in ${
//       this.add
//     }. secret key used was ${this.#sectetKeyGenerator()} `;
//   }

//   nameinLower() {
//     return this.name.toLowerCase();
//   }
//   #sectetKeyGenerator() {
//     return this.#secKey;
//   }
// }

// const premObj = new Person("prem", "Sydney");
// console.log(premObj.bio());

// console.log(premObj.#secKey);
// console.log(premObj.bio());

// const sachinObj = new Person("Saching", "Rockdale");

// console.log(sachinObj);

// Encapsulation
// Abstraction
// Inheritance
// Polymorphism.

// class Living {
//   constructor({ name, age, dob, add }) {
//     this.name = name;
//     this.age = age;
//     this.dob = dob;
//     this.add = add;
//   }
// }

// ======

// class Humna extends Living {
//   constructor({ partner, ...rest }) {
//     super(rest);
//     this.partner = partner;
//   }

//   bio() {
//     return `Hey, this is ${this.name} from ${this.add} and I am ${this.age} years old, living with my partner ${this.partner}`;
//   }
// }
// const samObj = {
//   name: "Sam",
//   age: 22,
//   dob: "2002",
//   add: "sudney",
//   partner: "Merry",
// };
// const samInstance = new Humna(samObj);
// console.log(samInstance);

// ======

// class Animal extends Living {
//   constructor({ owner, ...rest }) {
//     super(rest);
//     this.owner = owner;
//   }

//   bio() {
//     return `Hey, this is ${this.name} from ${this.add} and I am ${this.age} years old, living with It's owner ${this.owner}`;
//   }
// }

// const catObj = {
//   name: "Polo",
//   age: 2,
//   dob: "2022",
//   add: "Sydney",
//   owner: "Merry",
// };

// const poloInstance = new Animal(catObj);

// console.log(poloInstance);

// Funcitional Programming

// const living = (name) => {
//   return `living with my partner ${name}`;
// };

// const Humanbio = ({ name, add, age, partner }) => {
//   return `Hey, this is ${name} from ${add} and I am ${age} years old, ${living(
//     partner
//   )}`;
// };

// const catbio = ({ name, add, age, owner }) => {
//   return `Hey, this is ${name} from ${add} and I am ${age} years old, ${living(
//     owner
//   )}`;
// };

// const samBio = Humanbio(samObj);
// console.log(samBio);

// const catBio = catbio(catObj);
// console.log(catBio);

// Pure Function

// let counter = 0;
// const add = (a, b) => {
// //   counter++;
//   return a + b;
// };

// add(2, 3);

// add(2, 3);
// add(2, 3);
// const result = add(2, 3);

// console.log(result, counter);
// Side effects
// High order function

// [234, 345, 345].map((item, i) => {
//     console.log(item, i);
//   });

// const add = (a, b) => {
//   return a + b;
// };

// const subsctraction = (a, b) => {
//   return a - b;
// };

// const calculate = (fun, x, y) => {
//   return fun(x, y);
// };

// const result = calculate(subsctraction, 5, 6);
// console.log(result);

// add the values and return the multiply functioin

// const addAndMultiple = (a, b) => {
//   const ttl = a + b;

//   const multiply = (multiplier) => {
//     return ttl * multiplier;
//   };

//   return multiply;
// };

// const value = addAndMultiple(3, 5)(3);
// console.log(value);
// console.log(value(1));
// console.log(value(2));
// console.log(value(3));

// Recursion
// let counter = 1;
// const multiply = (num) => {
//   console.log(num + " x " + counter + " = " + num * counter++);

//   if (counter <= 10) multiply(num);
// };

// multiply(5);
// multiply(3);
// multiply(2);

const amount = [2345, 2345, 345, 67, 789];

debugger;
let sum = 0;
const total = (arg) => {
  sum += amount.pop();
  if (!arg.length) {
    return sum;
  }
  return total(arg);
};

const result = total(amount);
console.log(result);
