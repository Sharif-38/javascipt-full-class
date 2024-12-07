/**
 * JavaScript-এ অপারেটর (Operator) হল একটি সিম্বল বা বিশেষ চিহ্ন যা একটি এক্সপ্রেশনে কাজ করার জন্য ব্যবহৃত হয়। অপারেটরগুলি ব্যবহার করে আপনি ডেটা বা ভেরিয়েবলগুলোর সাথে বিভিন্ন কাজ করতে পারেন, যেমন গাণিতিক হিসাব, তুলনা, বা অন্যান্য ক্রিয়া।

JavaScript-এ প্রধানত নিচের ধরনের অপারেটর থাকে:

গাণিতিক অপারেটর (Arithmetic Operators): এগুলি গাণিতিক হিসাব করার জন্য ব্যবহৃত হয়।

+ : যোগ
- : বিয়োগ
* : গুণ
/ : ভাগ
% : মোডুলাস (বাকি)
++ : ইনক্রিমেন্ট
-- : ডিক্রিমেন্ট
তুলনামূলক অপারেটর (Comparison Operators): এগুলি দুটি মান তুলনা করার জন্য ব্যবহৃত হয়।

== : সমান
=== : সমান (ডাটা টাইপ সহ)
!= : সমান নয়
!== : সমান নয় (ডাটা টাইপ সহ)
> : বড়
< : ছোট
>= : বড় বা সমান
<= : ছোট বা সমান
লজিকাল অপারেটর (Logical Operators): এগুলি বুলিয়ান (True/False) মানের সাথে কাজ করে।

&& : AND
|| : OR
! : NOT
অ্যাসাইনমেন্ট অপারেটর (Assignment Operators): এগুলি ভেরিয়েবলে মান অ্যাসাইন (নির্ধারণ) করতে ব্যবহৃত হয়।

= : মান অ্যাসাইন করা
+= : যোগ করে অ্যাসাইন
-= : বিয়োগ করে অ্যাসাইন
*= : গুণ করে অ্যাসাইন
/= : ভাগ করে অ্যাসাইনet

let x = 10;
 let x=x+5;
x+=5;
//
x=x*5;
x*=5;

 points = 110;
let type = points > 100

// Assignment 
let xb = 23
xb=xb+2;
xb+=2;

let c = 34;
c-=21;
c*=21



টেনারি অপারেটর (Ternary Operator): এটি একটি শর্তপূর্ণ অপারেটর যা if-else এর মতো কাজ করে, তবে সংক্ষিপ্তভাবে।

condition ? value_if_true : value_if_false
টাইপ অপারেটর (Type Operators):

typeof : কোনো ভেরিয়েবলের টাইপ জানার জন্য ব্যবহৃত হয়।
instanceof : কোনো অবজেক্টের টাইপ চেক করার জন্য ব্যবহৃত হয়।
 */

//  Oparater : JavaSipt has as 5 kinds of operater.

/*
1. Arithmetic Operater
2. Assignment operater
3. Comparison operater
4. Logical Oparater
5. Bitwise Oparater
 */

// 1. Arithmetic Operater

/*
let x = 10
let y = 3

console.log(x + y)-- addidition 
console.log(x - y)--subtraction
console.log(x * y)--Multiplication
console.log(x / y)--Division
console.log(x % y)-- Remaineder of division bag shas it is 
console.log(x ** y)--Exponentiaition  
*/

// Incremental operator: has two type of operator -
// 1. pre incremental --It's mean if ++ infront  the value that time we call pre incremental. console.log(++a)
let a = 9
console.log(++a) // pre increment এর সময় সরাসরি মান কে বৃদ্ধি করে
// out put: 10

// 2. post incremental -- It's mean if ++ behind the value that time we cll post incremental.console.log(a++)
let b = 9
console.log(b++) // 9 // post incremental  এর সময় আগে print out korba 
console.log(b) // 10   // মান বৃুদ্ধি করবে পরে মান পাওয়া যাবে
// Note : pre increment এর সময় সরাসরি মান কে বৃদ্ধি করে , িকন্তু post incremental  এর সময় আগে print out korba then মান বৃুদ্ধি করবে পরে মান পাওয়া যাবে . Negative ar time same.




