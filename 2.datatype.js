// JavaScript has two type of Datatypes :-
// 1. Primitive:- number, string, boolean, null, undefined, symbol, bight. 
// 2. Reference Data type -- object, array, function


// Number:

// JavaScript number has two type number
// 1. Integer
// 2. Floating-point

// let age = 12 // integer 
// let age = 12.4 // floating -point

// infinity-Infinity: এটি একটি বিশেষ মান যা তখন পাওয়া যায়, যখন কোনো সংখ্যা শূন্য দিয়ে ভাগ করা হয় অথবা সংখ্যাটি অনেক বড় হয়। 

let result = 1/0 // output: Infinity
console.log(result)

// -Infinity: নেগেটিভ ইনফিনিটি বোঝায়।

let result2 = -1 /0
console.log(result2) // output: -Infinity


// সংখ্যা ফাংশনসমূহ:-JavaScript-এ Number টাইপের কিছু গুরুত্বপূর্ণ মেথড রয়েছে:

//Number.isInteger(): পরীক্ষা করে ভ্যালুটি পূর্ণসংখ্যা কি না।

let age = 34
console.log(Number.isInteger(age)) // output: true
let totalAge = 150.5
console.log(Number.isInteger(totalAge)) // output: flase







