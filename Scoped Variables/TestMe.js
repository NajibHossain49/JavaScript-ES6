function myFunction() {
    let localVar = 'I am local';  // Local variable
    console.log(localVar);  // Output: 'I am local' ✅


    if (true) {
        let blockScopedVar = 'I am block-scoped';
        var Hello = 'I am block-scoped with My wife and accessible outside Block but Not Outside the Function';
        console.log(blockScopedVar);  // Output: 'I am block-scoped' ✅

        console.log(localVar); // Output: 'I am local' ✅

    }

    console.log(Hello); // Accessible outside Block but Not Outside the Function Because Its "var"

    console.log(blockScopedVar);  // Error: blockScopedVar is not defined (block scope) not accessible outside Block ❌


}

myFunction();

console.log(blockScopedVar);  // Error: blockScopedVar is not defined (block scope) ❌

console.log(localVar);  // Error: localVar is not defined (Not accessible outside the function) ' ❌



