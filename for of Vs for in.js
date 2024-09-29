/* 

In JavaScript (ES6 and beyond), both `for...of` and `for...in` loops are used for iteration,
but they work differently and are meant for different use cases.
 
### 1.
 
`for...of`:
- Iterates over "iterable objects" like arrays, strings, maps, sets, and more.
- Provides the "values" of the elements.
 
*/


// Example:

const array = [10, 20, 30];
for (const value of array) {
    console.log(value); // Logs: 10, 20, 30
}


/*

- Use Case: When we need to iterate over the "values" in an iterable object.

---
### 2. 

`for...in`:
- Iterates over "enumerable properties" of an object (including inherited properties).
- Provides the "keys" or "property names" of the object.

*/


// Example:

const object = { a: 1, b: 2, c: 3 };
for (const key in object) {
    console.log(key, object[key]); // Logs: a 1, b 2, c 3
}


/*



Key Differences:

- `for...of`: Works with [iterable objects] like arrays, strings, maps, and sets, and iterates over the values.
- `for...in`: Works with [objects] and iterates over the keys/properties.

In most cases:
- Use `for...of` for arrays and iterable structures.
- Use `for...in` for objects where you need to loop through keys.


*/ 