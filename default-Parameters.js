/*

Default parameters allow you to set default values for function parameters

if no value or undefined is passed when the function is called. 

This feature helps simplify function definitions and avoid repetitive checks for undefined values.

*/


function greet(name = 'Guest') {
    return `Hello, ${name}!`;
}

console.log(greet());          // Output: Hello, Guest!
console.log(greet('Alice'));   // Output: Hello, Alice!



/*

Important Points [1]
--------------------

Only for undefined Values: Default parameters only apply when the parameter is undefined. 
If you pass null, it will not trigger the default value.


*/

function example(param = 'default') {
    console.log(param);
}

example();          // Output: default
example(undefined); // Output: default
example(null);     // Output: null


// Using Expressions: You can use expressions or function calls as default values:

function add(x, y = 1) {
    return x + y;
}

console.log(add(5));     // Output: 6
console.log(add(5, 2));  // Output: 7




// Default Parameters and Previous Parameters: Default parameters can reference previous parameters in the function definition.

function calculateArea(length, width = length) {
    return length * width;
}

console.log(calculateArea(5));    // Output: 25
console.log(calculateArea(5, 3));  // Output: 15


