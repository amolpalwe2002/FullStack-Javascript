// Arrays properties
// 1. length
// 2. index
// 3. push
// 4. pop
// 5. shift
// 6. unshift
// 7. splice
// 8. slice
// 9. concat
// 10. reverse
// 11. sort

let languages = ["English", "French", "Spanish"];
console.log(languages);

// 1. length
console.log(languages.length);

// 2. index
console.log(languages[1]);

// 3. push
languages.push("German");

// 4. pop
languages.pop();

// 5. shift
languages.shift();

// 6. unshift
languages.unshift("Portuguese");

// 7. splice
languages.splice(2, 0, "Hindi");

// 8. slice
let newLanguages = languages.slice(0, 2);

console.log(newLanguages);

// 9. concat
let newLanguages2 = newLanguages.concat(languages);

console.log(newLanguages2);

// 10. reverse
languages.reverse();

// 11. sort 
languages.sort();

console.log(languages);

