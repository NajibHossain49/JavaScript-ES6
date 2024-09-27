/*

Practical Example:
------------------
Suppose you're working with data from an API where some fields might not exist.
Optional chaining can prevent runtime errors when accessing those fields.

*/


let response = {
    user: {
        name: 'John',
        details: {
            age: 25
        }
    }
};

// Accessing a deep nested property:
let age = response?.user?.details?.age; // 25

// Accessing a non-existent property:
let address = response?.user?.details?.address; // undefined, no error

console.log(address, age)  