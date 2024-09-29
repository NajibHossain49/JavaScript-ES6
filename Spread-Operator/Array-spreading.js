// TOPIC Array Spreading & Nested Array Spreading    [VERY VERY IMPORTANT TOPIC]

const nestedArray = [1, [2, 3], [4, 5]];

const flatArray = [...nestedArray]; 
console.log(flatArray); 
// Output: [1, [2, 3], [4, 5]] (Outer array is spread, but inner arrays remain nested)


const nestedArray2 = [1, [2, 3], [4, 5]];

const flatArray2 = nestedArray2.flat(); 
console.log(flatArray2); 
 
// Output: [1, 2, 3, 4, 5] (Flattening the array automatically)



const deeplyNestedArray = [1, [2, [3, 4], 5], [6, 7]];

const flatArray3 = deeplyNestedArray.flat(2); // 2 is the depth of flattening
console.log(flatArray3);
// Output: [1, 2, 3, 4, 5, 6, 7]
