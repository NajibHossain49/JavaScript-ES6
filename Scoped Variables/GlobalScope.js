/*

Global Scope

Variables declared outside of any function or block are in the global scope.
These variables are accessible from anywhere in the code, including inside functions and blocks.

Declared using var, let, or const outside any function or block.
Can be accessed and modified by any code in the program.


*/ 


let globalVar = 'I am global';  // Global variable

function displayGlobalVar() {
  console.log(globalVar);  // Accessible inside the function
}

displayGlobalVar();  // Output: 'I am global'
console.log(globalVar);  // Output: 'I am global' (Accessible globally)
