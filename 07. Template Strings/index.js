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