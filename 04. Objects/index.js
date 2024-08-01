//  Objects

// const person = {
//     name: "John",
//     age: 30,
//     isMarried: false
// }

// console.log(typeof person);
// console.log(person.name);
// console.log(person["name"]);

// ###################################################
// Challenge 1

const car = {
    name: "Ford",
    model: "Mustang",
    year: 1964,
    color: "red",
    description: function() {
        return `The car is ${this.name}, ${this.model}, ${this.year}, ${this.color}`;
    }

}
console.log(car);
car.color = "blue";
console.log(car.color);
car.wheels = 4;
console.log(car);
console.log(car.description());
