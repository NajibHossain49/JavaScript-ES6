/*


In-depth Understanding of Optional Chaining (?.) in JavaScript

Optional chaining (?.) is a feature in JavaScript that allows you 

to safely access deeply nested object properties or methods without needing to check if intermediate objects exist. 

It prevents runtime errors by returning undefined if a property is null or undefined rather than throwing an error.


*/



/* Rule : 1 Accessing Nested Object Properties: ✅

We often need to access properties in nested objects.
Without optional chaining, you would have to manually check each level for existence.

*/

// Without Optional Chaining:
let user = {
    profile: {
        name: 'Alice'
    }
};

let userName = user && user.profile && user.profile.name; // 'Alice'
console.log(userName); // Output: Alice
// If user or user.profile is null or undefined, it would return null or undefined instead of throwing error

//   With Optional Chaining:
let userNameOC = user?.profile?.name; // 'Alice'
console.log(userNameOC); // Output: Alice



// Rule : 2 Calling Methods: Optional chaining can be used to safely call a method if it exists.✅

let userS = {
    greet: () => 'Hello!'
};

let greeting = userS?.greet?.(); // 'Hello!'

let noGreetUser = {};
let noGreeting = noGreetUser?.greet?.(); // undefined, no error

console.log(greeting, noGreeting);




// Rule : 3 Accessing Array Elements: Optional chaining can be used to safely access array elements ✅

let arr = [1, 2, 3];
console.log(arr?.[2]); // 3
console.log(arr?.[5]); // undefined





// Rule : 4  Safe DOM Access: Optional chaining is useful in DOM manipulation when an element might not exist. ✅


let button = document.getElementById('non-existent-button');
button?.addEventListener('click', () => console.log('Clicked!')); // No error if button is null




// Rule : 5  Working with Functions: Optional chaining can also be used when a function may not exist or be defined. ✅


let operations = {
    add: (a, b) => a + b
  };
  let result = operations.subtract?.(5, 2) ?? 'Function not defined'; // 'Function not defined'
  