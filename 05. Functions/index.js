// Function in js

// function myFunction() {
//     console.log("Hello World!");
// }

// myFunction() 

// Types of Functions

// 1. Function Declaration

// function myFunction() {
//     console.log("Hello World!");
// }

// myFunction()

// 2. Function Expression

// let myFunction = function() {    
//     console.log("Hello World!");
// }

// myFunction()

// 3. Arrow Function

// let myFunction = () => {
//     console.log("Hello World!");
// }

// myFunction()

// 4. Self Invoking Function

// (function() {
//     console.log("Hello World!");
// })()

// Callback Function    --> function passed as an argument

// function myFunction(callback) {  
//     callback();
// }

// myFunction(function() {
//     console.log("Hello World!");
// })

// Scope in JS

// 1. Global Scope

// let name = "John";

// function myFunction() {
//     console.log(name);
// }

// myFunction()

// 2. Local Scope

// function myFunction() {
//     let name = "John";
//     console.log(name);
// }

// myFunction()

// 3. Block Scope

// function myFunction() {
//     let name = "John";
//     if (true) {
//         console.log(name);
//     }
// }

// myFunction()

// // Hoisting in JS

// function myFunction() {
//     console.log(name);
//     var name = "John";
// }

// myFunction()

// // Hoisting is the default behavior of JS

// console.log(name);
// var name = "John";
