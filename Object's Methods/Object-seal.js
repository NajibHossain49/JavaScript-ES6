/*

5. Object.seal()
Seals an object, preventing new properties from being added and marking all existing properties as non-configurable. 
However, values of existing properties can still be modified.

*/ 

const obj = { a: 1, b: 2 };
Object.seal(obj);

obj.a = 10; // Modifying existing property works
obj.c = 3;  // Adding new property fails
delete obj.b; // Deleting property fails
console.log(obj); // Output: { a: 10, b: 2 }


/*

Notes:

We cannot add or remove properties from a sealed object.
We can still modify the values of the existing properties, 

*/ 