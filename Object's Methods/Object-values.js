/*

2. Object.values()
Returns an array of the values of the object's properties.


*/

const obj = { a: 1, b: 2, c: 3 };
console.log(Object.values(obj)); // Output: [1, 2, 3]
console.log(Object.values(obj).map((x) => x * 2)); // Output: [2, 4 , 6]



/*

Like Object.keys(), it only returns values of an object's own enumerable properties.
Object.values() also works on arrays

*/ 

const arr = ['apple', 'banana', 'cherry'];
console.log(Object.values(arr)); // Output: ['apple', 'banana', 'cherry']
