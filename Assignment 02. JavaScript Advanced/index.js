// //question 01 

// let score = 80;
// let result = (score >= 80) ? "Pass" : "Fail";
// console.log(result);

// //question 02
// const person = {
//   name: "Ahmed",
//   address: {
//     city: "Pakistan",
//     zipCode: "1000"
//   }
// };


// const result = person?.address?.city; 
// console.log(result);

// //question 03

// const numbers = [1, 2, 3, 4,5];

// for (const number of numbers) {
//     console.log(number);
// }




// //question 04


// function calculateAverage(numbers) {
//   if (numbers.length === 0) {
//       return 0; 
//   }

//   const sum = numbers.reduce((acc, curr) => acc + curr, 0);
//   const average = sum / numbers.length;

//   return average;
// }

// const num = [5, 10, 15, 20,30];
// const averageVal = calculateAverage(num);

// console.log("Averagevalue :", averageVal);


// //question 05

// function outerFunction(x) {
//   function innerFunction(y) {
//       return x + y; 
//   }

//   return innerFunction; 
// }

// const closureInstance = outerFunction(5);

// const result = closureInstance(10); // Result: 5 + 10 = 15
// console.log(result);


// //question 06

// const student = {
//   name: "Ahmed",
//   age: 18,
//   grades: [85, 90, 78, 95, 88],

//   calculateAverage: function() {
//       if (this.grades.length === 0) {
//           return 0; 
//       }

//       const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
//       const average = sum / this.grades.length;

//       return average;
//   }
// };

// const averageGrade = student.calculateAverage();
// console.log(`${student.name}'s Average Grade: ${averageGrade}`);



// //question 07

const originalObj = { name: "Ahmed", age: 18, hobbies: ["reading", "coding"] };
// const shallowCopy = Object.assign({}, originalObj);

// shallowCopy.age = 26;
// shallowCopy.hobbies.push("gaming");

// console.log(originalObj);
// console.log(shallowCopy);


//Deep Copy
// const deepCopy = JSON.parse(JSON.stringify(originalObj));

// deepCopy.age = 26;
// deepCopy.hobbies.push("gaming");

// console.log(originalObj);
// console.log(deepCopy);

// Reference copy
// const referenceCopy = originalObj;


// referenceCopy.age = 26;
// referenceCopy.hobbies.push("gaming");

// console.log(originalObj);
// console.log(referenceCopy);


// //question 08

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];

// for (const number of numbers) {
//     const result = (number % 2 === 0) ? "Even" : "Odd";
//     console.log(`${number} is ${result}`);
// }


// //question 09


// //forloop
// // for (let i = 0; i < 5; i++) {
// //   console.log(i);
// // }

// //whileloop
// // let i = 0;
// // while (i < 5) {
// //     console.log(i);
// //     i++;
// // }

// //dowhile loop
// // let i = 0;
// // do {
// //     console.log(i);
// //     i++;
// // } while (i < 5);



// //question 10

// const products = [
//   { name: 'Laptop', brand: 'Dell', price: 1200 },
//   { name: 'Smartphone', brand: 'Samsung' },
//   { name: 'Tablet', brand: 'Apple', price: 800 },
//   { name: 'Headphones', brand: 'Sony', price: 150 }
// ];

// for (const product of products) {
//   const price = product?.price;

//   if (price !== undefined) {
//     console.log(`${product.name} has a price of ${price}`);
//   } else {
//     console.log(`${product.name} does not have  price`);
//   }
// }

// //question 11
// // const car = {
// //   brand: 'Toyota',
// //   model: 'Camry',
// //   year: 2022,
// //   color: 'Silver'
// // };

// // for (const key in car) {
// //   if (car.hasOwnProperty(key)) {
// //     console.log(`${key}: ${car[key]}`);
// //   }
// // }



// //question 12


// //break
// // for (let i = 0; i < 5; i++) {
// //   if (i === 3) {
// //       break; // Exit the loop when i is equal to 3
// //   }
// //   console.log(i);
// // }

// //continue

// // for (let i = 0; i < 5; i++) {
// //   if (i === 2) {
// //       continue; // Skip the rest of the code for i equal to 2
// //   }
// //   console.log(i);
// // }


// // question 13

// // function calculateTax(income) {
// //   const taxRate = (income <= 50000) ? 0.1 : (income <= 100000) ? 0.15 : 0.2;
// //   const taxAmount = income * taxRate;
// //   return taxAmount;
// // }

// // // Example usage:
// // const income1 = 40000;
// // const income2 = 75000;
// // const income3 = 120000;

// // console.log(`Tax for income $${income1}: $${calculateTax(income1)}`);
// // console.log(`Tax for income $${income2}: $${calculateTax(income2)}`);
// // console.log(`Tax for income $${income3}: $${calculateTax(income3)}`);


// // question 14


// // Object definition
// // const car = {
// //   make: "Toyota",
// //   model: "Camry",
// //   startEngine: function() {
// //       console.log("Engine started. Vroom!");
// //   }
// // };

// // // Instantiating the object
// // const myCar = Object.create(car);

// // // Calling the method
// // myCar.startEngine();



// // question 15

// // const person = {
// //   name: "John",
// //   sayHello: function() {
// //     console.log(`Hello, my name is ${this.name}`);
// //   }
// // };

// // person.sayHello();



// const person = {
//   name: "John",
//   arrowSayHello: () => {
//     console.log(`Hello, my name is ${this.name}`); // Incorrect: this is not dynamically bound
//   }
// };

// person.arrowSayHello();
