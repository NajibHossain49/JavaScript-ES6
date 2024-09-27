/*

Important Considerations:

Returns undefined: If any part of the chain is undefined or null, the expression will short-circuit and return undefined.

Non-Existent Properties: Optional chaining doesn't trigger errors if the property doesn't exist. For example:


*/ 


let obj = {};
console.log(obj?.prop); // undefined





/*

Cannot Assign Values: Optional chaining is read-only. You cannot use it to assign values to potentially non-existent properties.

Example:

*/

let obj2 = {};
obj2?.property = 'value'; // SyntaxError


/*

Only Checks for null or undefined: Optional chaining will only stop if it encounters null or undefined.

It will still throw an error for other falsy values like false, 0, or empty strings unless they are explicitly checked.

*/ 