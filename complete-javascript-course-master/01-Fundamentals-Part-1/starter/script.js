// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");
// console.log("23");

// let firstName = "maria";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// //variable name conventions
// let jonas_maria = "JM";
// let $function = 27;

// let person = "jonas";
let PI = 3.1415;

// let myFirstJob = "programmer";
// let myCurrentJob = "teacher";

// let job1 = "programmer";
// let job2 = "teacher";

// console.log(myFirstJob);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// // console.log(typeof true);
// console.log(typeof javascriptIsFun);
// // console.log(typeof 23);
// // console.log(typeof "jonas");

// javascriptIsFun = "YES!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

// console.log(typeof null);

// let age = 30;
// age = 31;

// const birthyear = 1991;
// // birthyear = 1990;
// // const job;

// var job = "programmer";
// job = "teacher";

// lastName = 'Mungai';
// console.log(lastName);

//Maths operators
// const now = 2037;
// const agejonas = now - 1991;
// const agesarah = now - 2018;
// console.log(agejonas, agesarah);

// console.log(agejonas * 2, agejonas / 10, 2 ** 3);
// // 2**3 means 2 to the power of 3 = 2*2*2*2

// const firstName = "David";
// const lastName = "Mungai";
// console.log(firstName + " " + lastName);

// //Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++; // x = x + 1
// x--;
// x--;
// console.log(x);

// //Comparison operators
// console.log(agejonas > agesarah); // >, <, >=, <=
// console.log(agesarah >= 18);

// const isFullAge = agesarah >= 18;

// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const agejonas = now - 1991;
// const agesarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; //x = y = 10, x = 10
// console.log(x, y);

// const averageAge = (agejonas + agesarah) / 2;
// console.log(agejonas, agesarah, averageAge);

// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.95;

// CODING CHALLENGE1
// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// const markHigherBMI = BMIMark > BMIJohn;

// console.log(BMIMark, BMIJohn, markHigherBMI);

// const firstName = "Jonas";
// const job = "Teacher";
// const birthyear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthyear) + "year old " + job + " ! ";
// console.log(jonas);
// const jonasNew = `I'm ${firstName} a ${year - birthyear}year old  ${job}!`;
// console.log(jonasNew);

// console.log(`just a regular string`);

// console.log("string with \n\
// multiple \n\
// lines");

// console.log(`string with
// multiple
// lines`);

// const age = 13;

// if (age >= 18) {
//   console.log("Sarah can start driving license");
// } else {
//   const yearsleft = 18 - age;
//   console.log(`sarah is too young. Wait another ${yearsleft} years;)`);
// }

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// CODING CHALLENGE 2
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 95;
// const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

// const BMIMark = massMark / heightMark ** 2;
// const BMIJohn = massJohn / heightJohn ** 2;
// console.log(BMIMark, BMIJohn);

// if (BMIMark > BMIJohn) {
//   console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn}!`);
// } else {
//   console.log(`John's BMI (${BMIJohn}) is higher than Mark's(${BMIMark})!`);
// }

// type conversion
// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear + 18));

// console.log(Number("Jonas"));
// console.log(typeof NaN);

// console.log(String(23), 23);

// // type coercion
// console.log("I am " + 23 + "years old");
// console.log("23" - "10" - 3);
// console.log("23" / 2);
// console.log(23 + 10 - "3");

// let n = "1" + 1;
// n = n - 1;
// console.log(n);

// 5 falsy values;- 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all;)");
// } else {
//   console.log("You should get a job!");
// }

// let height = 0;
// if (height) {
//   console.log("YAY! Height is defined");
// } else {
//   console.log("Height is UNDEFINED");
// }

// const age = "18";

// if (age === 18) console.log("You just became an adult :D (strict) ");

// if (age == 18) console.log("You just became an adult :D (loose)");

// const favourite = prompt("what is your favourite number");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23) {
//   console.log("Cool! 23 is an amazing number");
// } else if ("favourite === 7") {
//   console.log("7 is also a cool nummber");
// } else if (favourite === 9) {
//   console, log("9 is also a cool number");
// } else {
//   console.log("number is not 23 or 7 or 9");
// }
// if (favourite !== 23) {
//   console.log("why not 23");
// }
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense);

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("Sarah is able drive");
// // } else {
// //   console.log("someone else should drive. . .");
// // }

// const isTired = false; //c
// console.log(hasDriversLicense && hasGoodVision && !isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able drive");
// } else {
//   console.log("someone else should drive. . .");
// }

// CODING CHALLENGE 3
// const dolphinsScore = (93 + 108 + 89) / 3;
// const koalasscore = (88 + 91 + 110) / 3;
// console.log(dolphinsScore, koalasscore);

// if (dolphinsScore > koalasscore) {
//   console.log("dolphins win the trophy");
// } else if (koalasscore > dolphinsScore) {
//   console.log("koalas win the trophy");
// } else if (dolphinsScore === koalasscore) {
//   console.log("it's a draw");
// }

// BONUS 1
// const dolphinsscore = (97 + 112 + 81) / 3;
// const koalasscore = (109 + 95 + 86) / 3;
// console.log(dolphinsscore, koalasscore);

// if (dolphinsscore > koalasscore && dolphinsscore >= 100) {
//   console.log("dolphins win the trophy");
// } else if (koalasscore > dolphinsscore && koalasscore >= 100) {
//   console.log("koalas win the trophy");
// } else if (
//   dolphinsscore === koalasscore &&
//   dolphinsscore >= 100 &&
//   koalasscore >= 100
// ) {
//   console.log("it's a draw");
// } else {
//   console.log("No one wins the trophy");
// }

// const day = "monday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("plan course structure");
//     console.log("go to coding meetuo");
//     break;
//   case "tuesday":
//     console.log("prepare theory video");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("write code examples");
//     break;
//   case "friday":
//     console.log("record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("enjoy the weekend :D");
//     break;
//   default:
//     console.log("not a valid day");
// }

// if (day === "monday") {
//   console.log("plan course structure");
//   console.log("go to code meetup");
// } else if (day === "tuesday") {
//   console.log("prepare theory videos");
// } else if (day === "wedsday" || day === "thursday") {
//   console.log("write code examples");
// } else if (day === "friday") {
//   console.log("record videos");
// } else if (day === "saturday" || day === "sunday") {
//   console.log("enjoy the weekend :D");
// } else {
//   console.log("not a valid day");
// }

// 3 + 4;
// 1991;
// true && false && !false;

// if (23 > 10) {
//   const str = "23 is bigger";
// }

// const me = "Jonas";
// console.log(`I'm ${2037 - 1991} years old`);

// const age = 23;
// //age >= 18 ? consol.log('I like to drink wine')
// //: console.log('I like to drink water');

// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// let drink2;
// if (age >= 18) {
//   drink2 = "wine";
// } else {
//   drink2 = "wine";
// }
// console.log("drink2");

// console.log(`I like to drink &{age >= 18 ? 'wine'  :  'water'}`);

// challenge 3

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(
//   `The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip} `
// );
