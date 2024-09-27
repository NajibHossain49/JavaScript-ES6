/* 1. Template Literals

Template literals are enclosed by backticks (`) instead of single or double quotes. Here are some key features:

Multi-line Strings: You can create strings that span multiple lines without the need for concatenation or escape characters.

String Interpolation: You can embed expressions inside the string using the ${expression} syntax.

*/


const name = 'John';
const age = 30;

// Multi-line string
const greeting = `Hello, my name is ${name}.
I am ${age} years old.`;

console.log(greeting);
