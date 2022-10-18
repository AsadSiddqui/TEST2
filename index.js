// 1. Write a program that takes input a name from user & greet the
// user like this:

// var nam = prompt("Please Enter Name");
// if (nam) {
//   alert(" Hi " + nam);
// } else {
// }

// 2. Write a program to take input a number from user & display
// it’s multiplication table on your browser. If user does not enter
// a new number, multiplication table of 5 should be displayed by
// default.

// var table = prompt("Enter a Num", "5");
// for (var num = 1; num <= 10; num++) {
//   document.write(`${table} x ${num} = ${table * num} </br>`);
// }

// 3. Write a program to take “city” name as input from user. If user
// enters “Karachi”, welcome the user like this: “Welcome to city
// of lights”

// var cityName = prompt("Enter City Name");
// if (cityName) {
//   alert("Welcome to city of lights");
// }

// 4. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the user is
// female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter You Gender").toLowerCase().trim();
// if (gender == "male") {
//   alert("Good Morning Sir");
// } else if (gender == "female") {
//   alert("Good Morning Ma'am");
// } else {
//   alert("Not a Numer");
// }

// 5. Write a program to take input color of road traffic signal from
// the user & show the message according to this table:
// Signal colorMessage
// red
// yellow
// green
// vehicles must stop
// vehicles should get ready to move
// vehicles can move now

// var signal = prompt("Enter Signal Color").toLowerCase().trim();
// if (signal == "red") {
//   alert("vehicles must stop");
// } else if (signal == "yellow") {
//   alert("vehicles should get ready to move");
// } else if (signal == "green") {
//   alert("vehicles can move now");
// } else {
//   alert("Not a Numer");
// }

// 6. Write a program to take input max age & current age from
// user. If the current age is less than or equal to max age, show the message “You are welcome”

// var age = prompt("Enter Max Age");
// var age1 = prompt("Enter Your Age ");
// if (age > age1) {
//   alert("You are Welcome");
// } else {
//   alert("You May go to Graveyard");
// }

// 7. Write a program to take input remaining fuel in car (in litres)
// from user. If the current fuel is less than 0.25litres, show the
// message “Please refill the fuel in your car”

// var car = prompt("Enter Fuel Quantity");
// if (car <= 0.25) {
//   alert("Please refill the fuel in your car");
// } else {
//   alert("Tension Not");
// }

// 8. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// var a = 4;
// if (++a === 5) {
//   alert("given condition for variable a is true");
// }
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Ans
// var b = 82;
// if (++b === 83) {
//   alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// ans
// var c = 12;
// if (++c === 13) {
//   alert("condition 1 is true");
// }
// if (c === 13) {
//   alert("condition 2 is true");
// }
// if (++c < 14) {
//   alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//   alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// if ("car" < "cat") {
//   alert("car is smaller than cat");
// }

// 9. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute grade as
// per following table:
// Percentage %GradeRemarks
// Greater than or equal to 80A-oneExcellent
// Greater than or equal to 70AGood
// Greater than or equal to 60BYou need to improve
// Less than 60FailSorry
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// var marks = prompt("Enter Marks");
// var marks1 = prompt("Out of 300", 300);

// var percent = (marks / marks1) * 100;

// console.log(percent);

// if (percent <= 60) {
//   alert("Sorry (Fail)");
// } else if (percent <= 70) {
//   alert("You need to improve (Grade B) ");
// } else if (percent <= 80) {
//   alert("Good (Grade A)");
// } else if (percent <= 100) {
//   alert("Excellent Grade A-ONE");
// }

// 10. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Take input
// from users, the following:
// a. Name of item1
// b. Name of item2
// c. Price of item 1
// d. Price of item 2
// e. Ordered quantity of item 1
// f. Ordered Quantity of item 2
// g. Shipping charges
// Compute the total cost. If the total cost is above 2000 PKR ,
// offer them 10% discount & show the receipt in your browser.

// var item1 = prompt("Name of item1");
// var price1 = +prompt("Price of item1");
// var quantity1 = +prompt("Quantity of item1");
// var item2 = prompt("Name of item2");
// var price2 = +prompt("Price of item2");
// var quantity2 = +prompt("Quantity of item2");
// var shipping = 250;
// document.write(
//   `Price of ${item1} is ${price1} <br> Quantity of ${item1} is ${quantity1} <br>`
// );
// document.write(
//   `Price of ${item2} is ${price2} <br> Quantity of ${item2} is ${quantity2} <br> <br>`
// );
// document.write(`Shipping charges is ${shipping}<br> <br>`);

// var coast1 = price1 * quantity1;
// var coast2 = price2 * quantity2;
// var totalCoast = coast1 + coast2;
// document.write(`totalCoast is ${totalCoast}PKR <br> <br>`);

// if (totalCoast > 2000) {
//   document.write(`Dicounted Price is ${totalCoast * 0.9}PKR`);
// }

// 11. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// var Cnum = Math.ceil(Math.random() * 10);
// var cnum1 = +prompt("Enter Number");
// if (Cnum == cnum1) {
//   alert("Bingo! Correct answer");
// } else {
//   alert("Close enough to the correct answer");
// }

// 12. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number is
// divisible by 3.

// let num = prompt("enter a num");
// if (num % 3 == 0) {
//   alert("divisible by 3");
// } else {
//   alert("no divisible");
// }

// 13. Names & Total scores of two teams are taken as input. Write
// a program that shows which team has won the game or show if
// there is a tie. (Team A or Team B)

// var teamA = prompt("Enter Team A Score");
// var teamB = prompt("Enter Team B Score");

// if (teamA > teamB) {
//   alert("Team A Is win");
// } else if (teamB > teamA) {
//   alert("Team B Is win");
// } else {
//   alert(" Score is Equal");
// }

// 14. Take a string, a number and a Boolean in three variables.
// Write a program that checks the type of variables & responds
// accordingly. Like :

// var num = true;
// console.log(typeof num);
// if (typeof num == "string") {
//   document.write(`${num} is String`);
// } else if (typeof num == "number") {
//   document.write(`${num} is number`);
// } else if (typeof num == "boolean") {
//   document.write(`${num} is boolean`);
// }

// 15. Write a program that checks whether the given input is an
// even number or an odd number.

// var num = prompt("Please Enter a Number");
// if (num % 2 == 0) {
//   document.write(`${num} is even number`);
// } else {
//   document.write(`${num} is odd number`);
// }

// 16. Weather in Karachi nowadays is too cool, write a program
// that takes temperature as input and shows a message based on
// following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var tem = prompt("Enter Temperature");
// if (tem == 40) {
//   document.write(`${tem}  “It is too hot outside.”`);
// } else if (tem == 30) {
//   document.write(`${tem}  “The Weather today is Normal.”`);
// } else if (tem == 20) {
//   document.write(`${tem} “Today’s Weather is cool.”`);
// } else if (tem == 10) {
//   document.write(`${tem} “OMG! Today’s weather is so Cool.”`);
// }

// if (tem == 40) {
//   alert("It is too hot outside.");
// } else if (tem == 30) {
//   alert("The Weather today is Normal.");
// } else if (tem == 20) {
//   alert("Today’s Weather is cool.");
// } else if (tem == 10) {
//   alert("OMG! Today’s weather is so Cool.");
// }

// 17. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var num = +prompt("Enter First Number");
// var num1 = +prompt("Enter Second Number");
// var Operator = prompt("Enter Operator ( either +, -, /, * or % )");

// if (Operator == "+") {
//   alert(`${num + num1}`);
// } else if (Operator == "-") {
//   alert(`${num - num1}`);
// } else if (Operator == "/") {
//   alert(`${num / num1}`);
// } else if (Operator == "*") {
//   alert(`${num * num1}`);
// } else if (Operator == "%") {
//   alert(`${num % num1}`);
// }

// 18. Write a program that takes user input day name. If the day is
// Monday, Tuesday, Wednesday, Thursday or Friday, then show
// “It’s a week day”. If the day is Saturday then show “It’s
// weekend”. If the day is Sunday then show “Yay! It’s a holiday”.

// var day = prompt("Enter Day").toLowerCase().trim();
// if (day === "monday") {
//   alert("It’s a week day");
// } else if (day === "tuesday") {
//   alert("It’s a week day");
// } else if (day === "wednesday") {
//   alert("It’s a week day");
// } else if (day === "thursday") {
//   alert("It’s a week day");
// } else if (day === "friday") {
//   alert("It’s a week day");
// } else if (day === "saturday") {
//   alert("it’s weekend");
// } else if (day === "sunday") {
//   alert("Yay! It’s a holiday");
// } else {
//   alert(" No day");
// }

// 19. Write a program that takes input user’s score, if it’s greater
// than 50, say “You are passed”. Otherwise, show “Try again!”

// var score = prompt("Enter Score");
// if (score > 50) {
//   alert("You are passed");
// } else {
//   alert("Try again!");
// }

// 20. Write a program that:
// a. takes 2 numbers.
// b. tells whichever number is the greater (higher) number.
// c. tells if they are equal
// Show the output to make sure it works (e.g. "The greater
// number of 5 and 10 is 10.").

// var num = prompt("1st Number");
// var num1 = prompt("2nd Number");
// if (num > num1) {
//   alert(`${num} is Greater`);
// } else if (num1 > num) {
//   alert(`${num1} is Greater`);
// } else {
//   alert(" Both Number are Equal");
// }

// 21. The Translator:
// Write a program that:
// a. takes 1 input, a language code (e.g. "es", "de", "en")
// b. tells "Hello, World" for the given language, for atleast 3
// languages. It should default to returning English.
// (Hint: use translate.google.com to check the translation of
// hello world in different languages)

// var lang = prompt("Enter Languages Code").toLowerCase().trim();
// if (lang === "en") {
//   alert("Hello World");
// } else if (lang === "es") {
//   alert("Hola Mundo");
// } else if (lang === "de") {
//   alert("Hallo Welt");
// }

// 22. Write a program to take input a number & tell whether it’s a
// positive or negative number.

// var num = prompt("Enter Num");
// if (num >= 1) {
//   alert("This is Positive Number");
// } else if (num <= -1) {
//   alert("This is Negative Number");
// } else if (num == 0) {
//   alert("This is Zero");
// }

// 23. The Pluralizer: Write a program that:
// a. takes 2 inputs, a noun and a number.
// b. tells the number and pluralized form, like "5 cats" or "1
// dog".
// Run the program for a few different inputs and show the result
// to make sure it works.

// var num = +prompt("Enter Number");
// var num1 = prompt("Enter Name ");

// if (num > 1) {
//   alert(`${num + num1}s`);
// }
