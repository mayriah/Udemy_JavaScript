// function logger() {
//   console.log("my name is maria");
// }

// // calling / running / invoking function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// function Declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }

// const age1 = calcAge1(1991);
// console.log(age1);

// // function Expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// Arrow Function
// const calcAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calcAge3(1991);
// console.log(age3);

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement
//   return c;
// };

// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1980, "Bob"));

// / FUNCTION CALLING ANOTHER FUNCTION
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applePieces = cutFruitPieces(apples);
//   const orangePieces = cutFruitPieces(oranges);

//   const juice = `juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));

// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };

// const yearUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;

//   if (retirement > 0) {
//     console.log(`${firstName} retires in ${retirement} years`);
//     return retirement;
//   } else {
//     console.log(`${firstName} has already retired`);
//     return -1;
//   }
// };
// console.log(yearUntilRetirement(1991, "Jonas"));
// console.log(yearUntilRetirement(1991, "Mike"));

// CODING CHALLENGE #1
// const calcAverage = (a, b, c) => (a + b + c) / 3;
// console.log(calcAverage(3, 4, 5));

// // TEST 1
// let scoreDolphins = calcAverage(44, 23, 71);
// let scorekoalas = calcAverage(65, 54, 49);
// console.log(scoreDolphins, scorekoalas);

// const checkWinner = function (avgDolphins, avgKoalas) {
//   if (avgDolphins >= 2 * avgKoalas) {
//     console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas} )`);
//   } else if (avgKoalas >= 2 * avgDolphins) {
//     console.log(`koalas win (${avgKoalas} vs. ${avgDolphins})`);
//   } else {
//     console.log("No team wins...");
//   }
// };
// checkWinner(scoreDolphins, scorekoalas);

// checkWinner(576, 111);

// // TEST 2
// scoreDolphins = calcAverage(85, 54, 41);
// scorekoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scorekoalas);
// checkWinner(scoreDolphins, scorekoalas);

// INTRODUCTION TO ARRAYS
// const friend1 = "Michael";
// const friend2 = "Steven";
// const friend3 = "Peter";

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2020);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Jay";
// console.log(friends);
// // friends = ['Bob', 'Alice']

// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 1991, "teacher", "friends"];
// console.log(jonas);
// console.log(jonas.length);

// // EXERCISE
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// };
// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[1]),
//   calcAge(years[years.length - 1]),
// ];
// console.log(ages);
// BASIC ARRAY OPERATIONS (METHODS)
// const friends = ["Michael", "Steven", "Peter"];

// // Add elements
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // Remove elements
// friends.pop();
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));
// console.log(friends.lastIndexOf("Bob"));

// friends.push(23);
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));
// console.log(friends.includes("23"));

// if (friends.includes("Steven")) {
//   console.log("You have a friend called Steven");
// }

// CODING CHALLENGE #2
// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // const calcTip =  bill >= 50 && bill <=300 ? bill * 0.15 : bill * 0.2

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);

// Dot vs. Bracket Notation

// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "Teacher",
//   friends: ["Michael", "Peter", "Steven"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about Jonas? Choose between firstName, lastName, age job, and friends"
// );
// if (jonas[interestedIn]) {
//   console.log(jonas[interestedIn]);
// } else {
//   console.log(
//     "What do you want to know about Jonas? Choose between firstName, lastName, age job, and friends"
//   );
// }

// jonas.location = "Portugal";
// jonas["twitter"] = "@jonasschmedrman";
// console.log(jonas);

// // challenge
// // jonas has 3 friends, and his best friend is called michael

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length}, and his friend is called ${jonas.friends[0]} `
// );

// const jonas = {
//   firstName: 'Jonas',
//   lastName: 'Schmedtmann',
//   birthYeah: 1991,
//   job: 'teacher',
//   friends: ['Michael', 'Peter', 'Steven'],
//   hasDriversLicense: true,

//   // calcAge: function (birthYear) {
//   //   return 2037 - birthYear;
//   // }

//   // calcAge: function () {
//   //   // console.log(this);
//   //   return 2037 - this.birthYear;
//   // }

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
//   }
// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);

// Challenge
// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

// Coding Challenge #3

/*
Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter)

1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method.
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

TEST DATA: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀
*/

/*
const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  }
};
*/
// const john = {
//   fullName: 'John Smith',
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / this.height ** 2;
//     return this.bmi;
//   }
// };

// mark.calcBMI();
// john.calcBMI();

// console.log(mark.bmi, john.bmi);

// // "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"

// if (mark.bmi > john.bmi) {
//   console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`)
// } else if (john.bmi > mark.bmi) {
//   console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`)
// }

// iteration: The for Loop

// console.log(`lifting weights repetition 1`);
// console.log(`lifting weights repetition 2`);
// console.log(`lifting weights repetition 3`);
// console.log(`lifting weights repetition 4`);
// console.log(`lifting weights repetition 5`);
// console.log(`lifting weights repetition 6`);
// console.log(`lifting weights repetition 7`);
// console.log(`lifting weights repetition 8`);
// console.log(`lifting weights repetition 9`);
// console.log(`lifting weights repetition 10`);

//  for loop keep running while condition is TRUE
// for (let rep = 1; rep <= 30; rep++) {
//   console.log(`lifting weights repetition ${rep}`);
// }

// Introduction to Objects
// Looping Arrays, Breaking and continuing
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// // console.log(jonas[0]);
// // console.log(jonas[1]);
// // . . .
// // console.log(jonas[4]);
// // jonas[5] does NOT exist

// for (let i = 0; i < jonas.length; i++) {
//   // Read from jonas Array
//   console.log(jonas[i], typeof jonas[i]);

//   // filling types Array
//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// // continue and breaking
// console.log(`===BREAK WITH NUMBER---`);
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// Looping Backwards and Loops in Loops
// const jonas = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
//   true,
// ];

// // 0, 1, ..., 4
// // 4, 3, ..., 0

// for (let i = jonas.length - 1; i >= 0; i--) {
//   console.log(i, jonas[i]);
// }

// for (let exercise = 1; exercise < 4; exercise++) {
//   console.log(`-------- Starting exercise ${exercise}`);

//   for (let rep = 1; rep < 6; rep++) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} `);
//   }
// }

// // The while Loop
// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep} `);
// }

// let rep = 1;
// while (rep <= 10) {
//   // console.log(`WHILE: Lifting weights repetition ${rep} `);
//   rep++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
//   if (dice === 6) console.log("Loop is about to end...");
// }
//

/*
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage([2, 3, 7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
*/
