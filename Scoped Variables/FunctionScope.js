/*

Function Scope

Function scope is the scope created inside a function. 

In JavaScript, variables declared using var (before ES6) are function-scoped,

meaning they are confined to the function in which they are declared.

var variables do not have block scope; they are function-scoped.
Accessible throughout the function in which they are declared.


*/



function testVarScope() {
    var functionScopedVar = 'I am function-scoped';
    if (true) {
        var functionScopedVar = 'I am still inside the same function';
    }
    console.log(functionScopedVar);  // Output: 'I am still inside the same function' (var does not respect block scope)
}

testVarScope();



/*

ধরা যাক, তুমি একটা বাড়ির ভেতরে কিছু কাজ করছো, আর সেই বাড়িটাই হচ্ছে তোমার function।

বাড়ির ভেতরে তুমি যা কিছু ব্যবহার করবে, সেটা শুধু ওই বাড়ির ভেতরেই থাকবে।

তুমি যদি বাইরে যাও, বাড়ির জিনিসপত্র বাইরে নিয়ে যেতে পারবে না।

Function Scope-এর ক্ষেত্রে:
var দিয়ে যে কোনো জিনিস (ভ্যারিয়েবল) তৈরি করলে, সেই জিনিস শুধু ওই বাড়ির ভেতরেই থাকবে।

বাড়ির ভেতরের যেকোনো ঘরে তুমি সেই জিনিসটা ব্যবহার করতে পারবে, 

কিন্তু বাড়ির বাইরে (অর্থাৎ ফাংশনের বাইরে) তুমি সেই জিনিস দেখতে বা ব্যবহার করতে পারবে না।


*/



function myHouse() {
    var toy = "Car";  // 'toy' হচ্ছে বাড়ির ভেতরের জিনিস
    if (true) {
        var toy = "Bike";  // এখানে একই নামের আরেকটা জিনিস তৈরি হলো, যা বাড়ির ভেতরে সব জায়গায় পাওয়া যাবে
        console.log(toy);  // Output: "Bike"
    }
    console.log(toy);  // Output: "Bike" (এই ঘরেও একই জিনিস)
}

myHouse();
console.log(toy);  // Error: toy is not defined (বাড়ির বাইরে কোনো জিনিস পাওয়া যাবে না)
