// JavaScript Quiz Total 15 Questions

// Question No: 01 :~

// function reverseString(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversedString += str[i];
//   }
//   return reversedString;
// }

// const originalString = "hello";
// const reversedString = reverseString(originalString);
// console.log("Original string:", originalString);
// console.log("Reversed string:", reversedString);

// Question No: 02 :~

// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;
//   for (let char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }

// const str = "Hello World";
// const vowelCount = countVowels(str);
// console.log("Number of vowels in the string:", vowelCount);

// Question No: 03 :~

// function capitalizeFirstLetter(sentence) {
//   return sentence
//     .split(" ")
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .join(" ");
// }

// const sentence = "this is a sentence";
// const capitalizedSentence = capitalizeFirstLetter(sentence);
// console.log("Original sentence:", sentence);
// console.log("Capitalized sentence:", capitalizedSentence);

// Question No: 04 :~

// function isPalindrome(str) {
//   const alphanumericStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

//   return alphanumericStr === alphanumericStr.split("").reverse().join("");
// }

// // Example usage:
// const str1 = "A man, a plan, a canal, Panama";
// const str2 = "racecar";
// console.log(isPalindrome(str1));
// console.log(isPalindrome(str2));

// Question No: 05 :~

// function sumOfPositiveNumbers(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     if (num > 0) {
//       sum += num;
//     }
//   }
//   return sum;
// }

// const numbers = [3, -5, 7, -2, 10, -8, 15];
// const positiveSum = sumOfPositiveNumbers(numbers);
// console.log("Sum of positive numbers:", positiveSum);

// Question No: 06 :~

// function indexOfFirstOccurrence(arr, target) {
//   return arr.indexOf(target);
// }

// const array = [1, 2, 3, 4, 5, 3];
// const targetElement = 3;
// const firstOccurrenceIndex = indexOfFirstOccurrence(array, targetElement);
// console.log("Index of first occurrence:", firstOccurrenceIndex);

// Question No: 07 :~

// function removeDuplicates(arr) {
//   const uniqueArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (uniqueArray.indexOf(arr[i]) === -1) {
//       uniqueArray.push(arr[i]);
//     }
//   }
//   return uniqueArray;
// }

// const array = [1, 2, 3, 4, 2, 3, 5];
// const uniqueArray = removeDuplicates(array);
// console.log("Array with duplicates removed:", uniqueArray);

// Question No: 08 :~

// function sortAscending(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function sortDescending(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//       if (arr[j] < arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// const array = [3, 1, 4, 1, 5, 9, 2, 6];
// console.log("Original array:", array);

// const sortedAscending = sortAscending(array.slice());
// console.log("Sorted in ascending order:", sortedAscending);

// const sortedDescending = sortDescending(array.slice());
// console.log("Sorted in descending order:", sortedDescending);

// Question No: 09 :~

// let number = 1;

// while (number <= 20) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
//   number++;
// }

// Question No: 10 :~

// function factorial(n) {
//   let result = 1;
//   let i = 1;

//   do {
//     result *= i;
//     i++;
//   } while (i <= n);

//   return result;
// }

// const number = 5;
// const result = factorial(number);
// console.log("Factorial of", number, "is:", result);

// Question No: 11 :~

// const person = {
//   name: "John",
//   age: 30,
//   gender: "male",
// };

// for (let key in person) {
//   console.log(key + ": " + person[key]);
// }

// Question No: 12 :~

// const array = [1, 2, 3, 4, 5];
// const doubledArray = [];

// for (let element of array) {
//   doubledArray.push(element * 2);
// }

// console.log("Original array:", array);
// console.log("Doubled array:", doubledArray);

// Question No: 13 :~

// function checkEvenOrOdd(number) {
//   if (number % 2 === 0) {
//     return number + " is even.";
//   } else {
//     return number + " is odd.";
//   }
// }

// console.log(checkEvenOrOdd(5));
// console.log(checkEvenOrOdd(8));
//
// Question No: 14 :~

// function findMax(a, b, c) {
//   return a > b ? (a > c ? a : c) : b > c ? b : c;
// }

// const num1 = 10;
// const num2 = 20;
// const num3 = 15;
// const max = findMax(num1, num2, num3);
// console.log("The maximum of", num1 + ",", num2 + ", and", num3 + " is:", max);

// Question No: 15 :~

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//     return year + " is a leap year.";
//   } else {
//     return year + " is not a leap year.";
//   }
// }

// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));
