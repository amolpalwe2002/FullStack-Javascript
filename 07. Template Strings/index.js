// // Template Strings -> ES6 feature to create multi-line strings
// // ` ` back-ticks

// let name = "John";
// let age = 30;

// console.log(`My name is ${name} and I am ${age} years old.`);

// // Arrow Function

// let greet = (name, age) => `My name is ${name} and I am ${age} years old.`;

// console.log(greet("John", 30));

// Spread Operator

// let languages = ["English", "French", "Spanish"];

// console.log(...languages);
// console.log(languages)

// let person = {
//     name: "John",
//     age: 30
// }

// const clone = { ...person, name: "Sara" };
// console.log(clone);

// // // Destructuring

// let person = {
//     name: "John",
//     age: 30
// };

// let { name, age } = person;
// console.log(name, age);

// let arr = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = arr;

// console.log(a, b, c, d, e);

// ternary operator

// let name = "John";
// let age = 20;

// console.log(name + (age >= 18 ? " is an adult" : " is not an adult"));


// // for in loop -> for(let key in object)
// // for of loop -> for(let value of iterable)

// let person = {
//     name: "John",
//     age: 30
// };

// for(let key in person){
//     console.log(key, person[key]);
// }

// let arr = [1, 2, 3, 4, 5];

// for(let value of arr){
//     console.log(value);
// }

// // forEach

// const arr = [1, 2, 3, 4, 5];

// arr.forEach((value, index) => (arr[index]=value*2));
// console.log(arr)


// // map() mathod

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.map((num)=> num*3);
// console.log(newArr);

// difference between map and forEach -> map returns a new array

// // filter() method

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.filter((num) => num > 3);
// console.log(newArr);

// // find() method --> return the first element that satisfies the condition
// const arr = [1, 2, 3, 0, -5]; 
// const newArr = arr.find((num) => num > 3);
// console.log(newArr);

// // every() method --> return true if all elements satisfy the condition
// let arr = [1, 2, 3, 4, 15];


// console.log(arr.every((num) => num < 10));

// // some() method --> return true if at least one element satisfies the condition
// console.log(arr.some((num) => num < 10));

// ################################################
// //  Challenge 1

// console.log(`
//     The quick
//     brown fox
//     jumps over
//     the lazy dog
//     `);


// // Challenge 2

// setTimeout(
//     () =>{
//         console.log("hello");
//         setTimeout(
//             () => {
//                 console.log("Hey");
//                 setTimeout(
//                     () => {
//                         console.log("Namaste");
//                         setTimeout(
//                             () => {
//                                 console.log("Hi");
//                             }
//                             ,2000
//                         )
//                     }
//                     ,2000
//                 )
//             }
//             ,2000

//         )
//     }
//     , 2000);

// // Challenge 3

// let haveMoney = false;

// console.log(haveMoney ? "I have money" : "I don't have money");