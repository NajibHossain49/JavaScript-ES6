/*
Basic Syntax:
Array destructuring assigns variables based on the position of elements in the array.
*/

const arr = [1, 2, 3];

// Without destructuring
const first = arr[0];
const second = arr[1];

// With destructuring
const [first1, second2, third3] = arr;
console.log(first1); // Output: 1
console.log(second2); // Output: 2
console.log(third3); // Output: 3

/*
Skipping Items:
You can skip elements by simply leaving an empty space with commas.  Also rest ... operator to gather remaining items into an array.
*/

const array = [1, 2, 3, 4, 5];
const [var_1, , var_2,...rest] = array;

console.log(var_1); // Output: 1

console.log(var_2); // Output: 3

console.log(rest); // log rest, it will output [4, 5].



// Default Values:
const Hi = ["Jack"];

const [name1, name2 = "Najib"] = Hi;

console.log(name1);  // Output: 1

console.log(name2); // Output: 10
