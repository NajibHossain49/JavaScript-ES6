/*

1. Spread Operator (...)

The spread operator was introduced in ES6 and allows iterable elements
(like arrays, strings, or objects) to be expanded in places where multiple arguments or elements are expected.


*/


// a. Using the Spread Operator with Arrays also  Array Cloning (Copying Arrays)
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
const arr3 = [...arr2]; //  arr3 Cloned arr2
console.log(arr1);
console.log(arr2);
console.log(arr3);



/*

IMPORTANT :

Why a shallow copy? If the array contains objects, the objects themselves aren't cloned—just the references.
So, modifications to the objects will affect both the original and the cloned array.

*/


const arrRose = [{ a: 1 }, { b: 2 }];
const arrBlack = [...arrRose];
arrBlack[0].a = 10;
console.log(arrRose[0].a);  // Output: 10 (Both arrays refer to the same object)




//  b. Merging Arrays
const arrMerged = [1, 2, 3];
const arrMerged2 = [4, 5, 6];
const merged = [...arrMerged, ...arrMerged2];
console.log(merged);  // Output: [1, 2, 3, 4, 5, 6]




/*

c. Using Spread in Function Arguments
The spread operator can also be used to pass an array as individual arguments to a function.

*/

const numbers = [0, 1, 5, 3, 4, 6, 3, 3, 7, 2, 7];
console.log(Math.max(...numbers));  // Output: 7



/*

Handling Edge Cases
What happens if the array is empty? Passing an empty array using the spread operator will return -Infinity.

*/

const emptyArray = [];
console.log(Math.max(...emptyArray));  // Output: -Infinity


// To handle this, you can check if the array is empty before applying Math.max():

const numbersArray = [];
const max = numbersArray.length > 0 ? Math.max(...numbersArray) : undefined;
console.log(max);  // Output: undefined




// Putting It All Together

// Using spread to clone and merge arrays
const arrVar = [1, 2, 3];
const arrVar2 = [4, 5, 6];
const cloned = [...arrVar];  // Shallow copy of arr1
const mergedArrays = [...arrVar, ...arrVar2];  // Merged arrays

console.log('Cloned:', cloned);  // Output: [1, 2, 3]
console.log('Merged:', merged);  // Output: [1, 2, 3, 4, 5, 6]

// Finding the maximum value in an array
const numbersArr = [9, 2, 5, 8];
const maxValue = Math.max(...numbersArr);
console.log('Max Value:', maxValue);  // Output: 9


