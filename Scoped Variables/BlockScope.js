/*

Block scope refers to the variables that are confined to the block {} in which they are declared. 

Variables declared with let and const inside a block are block-scoped.

Declared using let or const inside a block (if, for, etc.).
Cannot be accessed outside the block in which they are declared.


*/


if (true) {
    let blockScopedVar = 'I am block-scoped';
    console.log(blockScopedVar);  // Output: 'I am block-scoped'
}

console.log(blockScopedVar);  // Error: blockScopedVar is not defined (block scope)
