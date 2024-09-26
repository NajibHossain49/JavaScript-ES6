/*

Local Scope
Variables declared inside a "FUNCTION" are in the "LOCAL SCOPE" (also known as function scope). 

They are only accessible within that function.

Declared with var, let, or const inside a function.
Not accessible from outside the function.



*/


function myFunction() {
    var localVar = 'I am local';  // Local variable
    const localConst = 'I am local';  // Local variable
    let localLet = 'I am local';  // Local variable

    console.log(localVar);  // Output: 'I am local'
    console.log(localConst);  // Output: 'I am local'
    console.log(localLet);  // Output: 'I am local'
}

myFunction();
console.log(localVar);  // Error: localVar is not defined (Not accessible outside the function)
console.log(localConst);  // Error: localVar is not defined (Not accessible outside the function)
console.log(localLet);  // Error: localVar is not defined (Not accessible outside the function)
