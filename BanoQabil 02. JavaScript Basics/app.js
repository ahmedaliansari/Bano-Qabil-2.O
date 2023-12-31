// //question 1

// var str = "Hello, world";
// let reversedString = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   reversedString += str[i];
// }

// console.log(reversedString);

// //question 2

// let text = "bano qabil";
// let vowels = "aeiouAEIOU";
// let count = 0;

// for (let i = 0; i < text.length; i++) {
//   if (vowels.indexOf(text[i]) !== -1) {
//     count++;
//   }
// }

// console.log(`Number of vowels in "${text}" is: ${count}`);

// // queston 3

// let str = "hello world";

// let toArry = str.split(" ");

// toArry.map((item) => {
//   let cv = item.charAt(0).toUpperCase() + str.slice(1);
//   console.log(cv);
// });

// // question 4
// let str = "civic";

// let rev = str.split("").reverse().join("");

// if (str === rev) {
//   console.log("its palindrome");
// } else {
//   console.log("its not palindrome");
// }

// // question 5
// var arr = [1, -1, -7, 100, -100, 67];
// console.log(arr.filter((e) => e > 0));

// // question 06
// let array = [10, 20, 30, 40, 50, 30];
// let elementToFind = 30;
// let firstIndex = array.indexOf(elementToFind);

// if (firstIndex !== -1) {
//   console.log(
//     `The first occurrence of ${elementToFind} is at index ${firstIndex}`
//   );
// } else {
//   console.log(`The element ${elementToFind} is not found in the array`);
// }

// // Question 7
// var arr = ["1", "2", "3", "3", 4, "5", 3, "2", 1];
// let newArr = arr.filter((value, index) => arr.indexOf(value) == index);
// console.log(newArr);

// //queston no 08
// // function sortAscending(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //       for (let j = 0; j < arr.length - 1 - i; j++) {
// //         if (arr[j] > arr[j + 1]) {
// //           let temp = arr[j];
// //           arr[j] = arr[j + 1];
// //           arr[j + 1] = temp;
// //         }
// //       }
// //     }
// //     return arr;
// //   }

// //   let array = [5, 3, 9, 1, 6, 9, 10];
// //   let sortedAscending = sortAscending(array.slice());
// //   console.log("Ascending ", sortedAscending);

// //   function sortDescending(arr) {
// //     for (let i = 0; i < arr.length; i++) {
// //       for (let j = 0; j < arr.length - 1 - i; j++) {
// //         if (arr[j] < arr[j + 1]) {
// //           let temp = arr[j];
// //           arr[j] = arr[j + 1];
// //           arr[j + 1] = temp;
// //         }
// //       }
// //     }
// //     return arr;
// //   }

// //   let sortedDescending = sortDescending(array.slice());
// //   console.log("Descending", sortedDescending);

// // question 09

// // let number = 1;

// // while (number <= 20) {
// //   if (number % 2 === 0) {
// //     console.log(number);
// //   }
// //   number++;
// // }

// // question 10

// // function calculateFactorial(number) {
// //     let factorial = 1;
// //     let i = 1;

// //     if (number < 0) {
// //       return 1
// //     }

// //     do {
// //       factorial *= i;
// //       i++;
// //     } while (i <= number);

// //     return factorial;
// //   }

// //   let num = 5;
// //   let result = calculateFactorial(num);
// //   console.log(`The factorial of ${num} is: ${result}`);

// // question 11

// // let person = {
// //     name: 'John Doe',
// //     age: 30,
// //     email: 'john@example.com'
// //   };

// //   for (let key in person) {
// //     console.log(`${key}: ${person[key]}`);
// //   }

// // question 12

// // let originalArray = [1, 2, 3, 4, 5];
// // let doubledArray = [];

// // for (let element of originalArray) {
// //   doubledArray.push(element * 2);
// // }

// // console.log("Original Array:", originalArray);
// // console.log("Doubled Array:", doubledArray);

// //question 13

// // function evenOrOdd(num) {
// //     if (num % 2 === 0) {
// //       return `${num} is even.`;
// //     } else {
// //       return `${num} is odd.`;
// //     }
// //   }

// //   // Example usage:
// //   let num1 = 7;
// //   let num2 = 12;

// //   console.log(evenOrOdd(num1)); // Output: "7 is odd."
// //   console.log(evenOrOdd(num2)); // Output: "12 is even."

// // question 14

// // function maxVal(num1, num2, num3) {
// //     let max = num1 > num2 ? (num1 > num3 ? num1 : num3) : (num2 > num3 ? num2 : num3);
// //     return `The maximum of ${num1}, ${num2}, and ${num3} is: ${max}`;
// //   }

// //   // Example usage:
// //   let a = 10;
// //   let b = 5;
// //   let c = 8;

// //   console.log(maxVal(a, b, c));

// // question 15

// // function isLeapYear(year) {
// //     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
// //       return `${year} is a leap year.`;
// //     } else {
// //       return `${year} is not a leap year.`;
// //     }
// //   }

// //   let yearToCheck = 2024;
// //   console.log(isLeapYear(yearToCheck));
