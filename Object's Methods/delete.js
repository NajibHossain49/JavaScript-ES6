/*

4. delete
Deletes a property from an object.

*/ 

const obj = { a: 1, b: 2, c: 3 };
delete obj.b;
console.log(obj); // Output: { a: 1, c: 3 }
