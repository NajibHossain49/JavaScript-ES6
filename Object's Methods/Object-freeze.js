/*

Object.freeze() when you want to ensure that an object’s state cannot be changed at all. 
This is useful for constants or settings that should not be altered during runtime.

*/

// #### IMPORTANT ❗  Object.freeze() method can't freeze nested object. [Nested object means Object in side Object]

const obj = { a: 1, b: 2 };
Object.freeze(obj);

obj.a = 10; // Modifying fails silently (in strict mode, it throws an error)
delete obj.b; // Deleting property fails
obj.c = 3; // Adding new property fails
console.log(obj); // Output: { a: 1, b: 2 }

/*
Notes:

Frozen objects cannot be modified in any way. Even their property values cannot be changed, making the object completely immutable.
Object.freeze() is shallow, meaning it only applies to the object itself.
If the object contains nested objects, those nested objects are still mutable unless they are also frozen:

*/

const obj = { a: { nested: 2 } };
Object.freeze(obj);
obj.a.nested = 5; // This works, because 'a' itself is not frozen.
console.log(obj.a.nested); // Output: 5

/*

Key Differences Between seal() and freeze():
seal() allows you to modify existing properties, while freeze() does not allow any modification at all.
In both cases, new properties cannot be added and existing properties cannot be deleted.


*/
