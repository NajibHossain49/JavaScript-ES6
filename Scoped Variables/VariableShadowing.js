/*

Variable shadowing in JavaScript occurs when a variable declared within a certain scope (like a block or a function)

has the same name as a variable declared in an outer scope. 

When this happens, the inner variable "shadows" the outer variable, meaning that within the inner scope, 

the outer variable is inaccessible.


*/

let outerVariable = "আমি বাইরের স্কোপ থেকে!";

function shadowingExample() {
    let outerVariable = "আমি অভ্যন্তরীণ স্কোপ থেকে!"; // এটি বাইরের ভেরিয়েবলকে শেডো করে
    console.log(outerVariable); // আউটপুট: আমি অভ্যন্তরীণ স্কোপ থেকে!
}

shadowingExample();
console.log(outerVariable); // আউটপুট: আমি বাইরের স্কোপ থেকে!



/*

ব্যাখ্যা

বাইরের স্কোপ: বাইরের স্কোপে outerVariable নামের একটি ভেরিয়েবল ডিক্লেয়ার করা হয়েছে যার মান "আমি বাইরের স্কোপ থেকে!"।

অভ্যন্তরীণ স্কোপ: shadowingExample ফাংশনের মধ্যে, একই নামের একটি নতুন ভেরিয়েবল (outerVariable) ডিক্লেয়ার করা হয়েছে।

এই নতুন ভেরিয়েবলটি বাইরের ভেরিয়েবলটিকে শেডো করে।

ভেরিয়েবলের অ্যাক্সেস:
shadowingExample ফাংশনের মধ্যে, যখন console.log(outerVariable) কল করা হয়, তখন এটি অভ্যন্তরীণ ভেরিয়েবলটিকে নির্দেশ করে,

যা আউটপুট হিসাবে "আমি অভ্যন্তরীণ স্কোপ থেকে!" প্রিন্ট করে।
ফাংশনের বাইরের, মূল outerVariable প্রবেশযোগ্য থাকে, যা "আমি বাইরের স্কোপ থেকে!" আউটপুট করে।



*/ 