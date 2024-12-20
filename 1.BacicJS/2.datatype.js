//  What is the datatype? 
// In JavaScript, data types represent different kinds of values that can be stored and manipulated in variables.

// JavaScript has two type of Datatypes :-

// 1. Primitive(Primitive ডেটা টাইপগুলো JavaScript-এ সবচেয়ে সাধারণ ডেটা টাইপ। এগুলো সরাসরি মান ধারণ করে এবং Immutable, অর্থাৎ এদের মান পরিবর্তন করা যায় না।):- number, string, boolean, null, undefined, symbol, bight. Primitive date type all time single value store kore.

// 2. Reference Data type(These are objects that can store collections of data and more complex entities.): -- object, array, function. all time double value store kora jai.


//                               Number:

// 1. JavaScript number has two type number
//                a. Integer         let age = 12    // integer 
//                b. Floating-point  let age = 12.4  // floating -point



// 2. infinity or -Infinity: এটি একটি বিশেষ মান যা তখন পাওয়া যায়, যখন কোনো সংখ্যা শূন্য দিয়ে ভাগ করা হয় অথবা সংখ্যাটি অনেক বড় হয়। 

                        let result = 1/0       // output: Infinity
                        console.log(result)


// -Infinity: নেগেটিভ ইনফিনিটি বোঝায়।

             let result2 = -1 /0
             console.log(result2)       // output: -Infinity



// 3. NaN ( Not- a- Number):যখন কোনো অপারেশনের ফলাফল সংখ্যা নয়, তখন NaN পাওয়া যায়। যেমন:

               let result = 'hello' / 2 
               console.log(result)               //output:  Nun

               let pract = 24/2
               console.log(Number.isNaN(pract)) // output : False


// 4. সংখ্যা ফাংশনসমূহ:-JavaScript-এ Number টাইপের কিছু গুরুত্বপূর্ণ মেথড রয়েছে:
                             /**
        *   1. how can identify this value is number is integer? 
        *   2. How can identify this value is NaN?
        *   3. How can change the string value to floating-point number?
        *   4. How can change the string value to integer number?
        */
//              a) Number.isInteger(): পরীক্ষা করে ভ্যালুটি পূর্ণসংখ্যা কি না।

                    let age = 34
                    console.log(Number.isInteger(age))             // output: true
                    let totalAge = 150.5
                   console.log(Number.isInteger(totalAge))         // output: flase

//             b)  Number.isNaN(): পরীক্ষা করে ভ্যালুটি NaN কি না।
                     Number.isNaN(NaN);         // output : true

                     let sum = 'sharif'/12
                     console.log(Number.isNaN(sum)) // output : true

//             c)  Number.parseFloat(): স্ট্রিংকে দশমিক সংখ্যায় রূপান্তর করে।
                     let age = '23.43'
                     console.log(Number.parseFloat(age))     //Output: 23.43

//              d) Number.parseInt(): স্ট্রিংকে or স্ট্রিংকে দশমিক পূর্ণসংখ্যায় রূপান্তর করে।

                      let age1 = "45.678"
                      console.log(Number.parseInt(age1))   // output: 45

//  5. সংখ্যা ফরম্যাটিং
//              a)  toFixed(): নির্দিষ্ট দশমিক সংখ্যা পর্যন্ত সংখ্যা দেখায়।

                     let age = 23.1234345
                     console.log(age.toFixed(3))    // output: 23.123

//              b) toPrecision(): একটি নির্দিষ্ট সংখ্যার মোট সংখ্যা পর্যন্ত সংখ্যা দেখায়।

                      let total = 34.12343
                       console.log(total.toPrecision(3))    //output: 34.1
                       let cost = 345.3456
                       console.log(cost.toPrecision(9)); // 345.345600 --mane holo count total number
                       console.log(cost.toFixed(9)); // 345.345600000 -- mane holo after point(.) all value.
// 6.  সংখ্যা কনভার্শন
//     স্ট্রিং বা অন্য টাইপের ডেটাকে সংখ্যায় কনভার্ট করার জন্য Number() কনস্ট্রাক্টর ব্যবহার করা যায়।

                        let str = '123'
                        console.log(Number(str))  // 123

//  7.  সংখ্যা সীমাবদ্ধতা
//      JavaScript-এর Number টাইপে সর্বোচ্চ ও সর্বনিম্ন মান রয়েছে, যা সহজেই চেক করা যায়।

//      Number.MAX_VALUE: সবচেয়ে বড় সংখ্যা।
//     Number.MIN_VALUE: সবচেয়ে ছোট সংখ্যা।

//                         Number.MAX_VALUE: সবচেয়ে বড় ধনাত্মক সংখ্যা।
//                         Number.MIN_VALUE: শূন্যের চেয়ে একটু বড় সবচেয়ে ছোট ধনাত্মক সংখ্যা।

                        console.log(Number.MAX_VALUE);  // Output: 1.7976931348623157e+308
                        console.log(Number.MIN_VALUE);  // Output: 5e-324



                        //   What is the datatype in Js?
                        //   How many datatype in js?
                        //   What is the Number?
                        //   How many number in datatype? 
                        //   infinity or -Infinity
                        //    NaN ( Not- a- Number)
                         //   সংখ্যা ফাংশনসমূহ:-J
                         //.  সংখ্যা ফরম্যাটিং
                        //    সংখ্যা কনভার্শন
                        //    সংখ্যা সীমাবদ্ধতা