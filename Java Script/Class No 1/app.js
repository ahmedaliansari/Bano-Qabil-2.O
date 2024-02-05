// 04 - 02 - 2024 Sunday

// let name = "ahmed";

// console.log(name);
// // alert(name);

// var uname = prompt("What Is Your Name");
// console.log(uname);

// * Deifference Between Var, Let, Const Variable
// var Work Global Varriable;
// let Work Local Varriable;
// Const Work Fixed Varriable; But Not Inatialized & Update Values

// Example Simple User Details In Prompt

// let name = prompt("What Is Your Name");
// let job = prompt("What Is Your Job");
// let gender = prompt("What Is Your Gender");
// let age = prompt("What Is Your Age");
// let experience = prompt("What Is Your Experience");

// let result = `
// My Name Is ${name}<br>
// My Job Is ${job}<br>
// My Gender Is ${gender}<br>
// My Age Is ${age}<br>
// My Experience Is ${experience}
// `;

// document.write(result);

// Java Script 2 Data Types;

// 1) Premitive
// 2) Refrence

// * Premitive
// 1) String
// 2) Number
// 3) Boolean
// 4) Null
// 5) Undefined

// * Refrence

// LOOPS
// 6 Types Of Loops In Java Script

// (*) For (*) While (*) Do While (*) For In (*) For Of (*) For Each Method

// (*) For Loop: ~
// let a = 1;

// for (; a <= 10; a++) {
//   console.log(a);
// }

// (*) While LOOP:~
// let a = 1;
// while (a <= 10) {
//   console.log(a);
//   a++;
// }

// (*) Do While LOOP:~
// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// Simple Calculator Function

// function add(num1, operator, num2) {
//   num1 = parseFloat(num1);
//   num2 = parseFloat(num2);

//   if (isNaN(num1) || isNaN(num2)) {
//     return "Invalid input. Please enter valid numbers.";
//   }

//   if (operator === "+") {
//     return num1 + num2;
//   } else if (operator === "-") {
//     return num1 - num2;
//   } else if (operator === "*") {
//     return num1 * num2;
//   } else if (operator === "/") {
//     return num1 / num2;
//   } else {
//     return "Undefined Operator";
//   }
// }

// var first = prompt(`Your First Number`);
// var second = prompt(`Your Second Number`);
// var operator = prompt(`Choose Your Operator`);

// var result = add(first, operator, second);
// console.log(result);

// Local & Global Varriavbles:~

// var a = "Hello World"; // Declare Global Variable

// function check() {
//   var a = "Hello"; // Update Global Variable To Local Function
//   console.log(a);
// }

// check();
// console.log(a); // Call Global Variable

// 05 - 02 - 2024 Monday

// Default Paramenter Function:~

// function add(num1, num2 = 50) { // Set Default Value num2 = 50 //
//   return num1 + num2;
// }

// let result = add(5, 10);
// console.log(result);

// Simple Swith Case

// var Name = prompt("Enter You Name");

// switch (Name) {

//     case "Ahmed": alert("Hello Ahmed"); break;
//     case "Sajjad": alert("Hello Sajjad"); break;
//     case "Asharif": alert("Hello Asharif"); break;
//     case "Taha": alert("Hello Taha"); break;
//     case "Zunaira": alert("Hello Zunaira"); break;

//     default : alert("Hello");

// }

// Input Values Get Function:~

// function user() {
//   var name = document.getElementById("username");
//   console.log(name.value);
//   name.value = "";
// }

// Insert Paragraph Using JavaScript Default Text & Prompt:~

// var para = document.getElementById("para");
// var text = prompt('Type Your Text Here');

// para.innerHTML += text;
