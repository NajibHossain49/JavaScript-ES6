/*

1. Object.keys()
Returns an array of the keys (property names) of the object.


*/ 

const obj1 = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj1)); // Output: ['a', 'b', 'c']


const obj2 = { a: 1, b: 2, c: 3 };
const keys = Object.keys(obj2);
console.log(keys); // Output: ['a', 'b', 'c']

keys.forEach(key => {
  console.log(key, obj2[key]); // Iterates through each key and its corresponding value
});



// Object.keys() works on arrays as well, treating array indices as keys:

const arr = ['x', 'y', 'z'];
console.log(Object.keys(arr)); // Output: ['0', '1', '2']
