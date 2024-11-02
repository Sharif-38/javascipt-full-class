

//                                      String
// String টাইপ এক বা একাধিক অক্ষরের ধারা, যা ডাবল (") বা সিঙ্গেল কোট (') ব্যবহার করে নির্দিষ্ট করা হয়।
  
    // let name = "Alice";
    // let message = 'Hello, World!';
    //--------------------------------------------------------------------------------------------------
 //                        টেমপ্লেট লিটারেল (Template Literal):
//----------------------------------------------------------------------------------------------------------------


// ব্যাকটিক (`) ব্যবহার করে স্ট্রিং তৈরি করা যায়, যেখানে ${} এর মধ্যে ভেরিয়েবল বা এক্সপ্রেশন যুক্ত করা যায়।
    // let name = 'Sharif'
    // console.log(`Hello, ${name}! How are you.`);

    //      1)  স্ট্রিং ইন্টারপোলেশন (String Interpolation):
             //${} এর মধ্যে ভেরিয়েবল বা এক্সপ্রেশন সহজেই যুক্ত করা যায়। এটি ভেরিয়েবল এবং স্ট্রিং একত্রিত করতে + অপারেটর ব্যবহারের প্রয়োজনীয়তা দূর করে।

             let name = 'Alich'
             let age = 23
             let total = `Hello, My name is ${name} and I am ${age} years old.`
             console.log(total) // Hello, My name is Alich and I am 23 years old.


       // 2)   মাল্টি-লাইন স্ট্রিং (Multi-line String):
            //টেমপ্লেট লিটারেল দিয়ে স্ট্রিং-এর মধ্যে সরাসরি নতুন লাইন যোগ করা যায়, যেখানে পূর্বে \n ব্যবহার করতে হতো।  

            let message = `Hello
            This Yush bin nun.
            He is 30 years old.
            He has completed study.`
            console.log(message) /*
            This Yush bin nun.
            He is 30 years old.
            He has completed study.*/ 
  
            // 3) নেস্টেড টেমপ্লেট লিটারেল (Nested Template Literals):
                 // টেমপ্লেট লিটারেলের ভেতরে আরেকটি টেমপ্লেট লিটারেল ব্যবহার করে আরও জটিল স্ট্রিং তৈরি করা যায়।

                 let user ={ name : 'Yusha',
                             details:{
                                age:25,
                                city:"Mymensingh"
                             }
                 }
               let totalOut = `User: ${name}, Age: ${user.details.age}, City: ${user.details.city}.`
                console.log(totalOut)   // User: Alich, Age: 25, City: Mymensingh.


//               4  তারিখের সাথে টেমপ্লেট লিটারেল ব্যবহার:

                let data = new Date()
                let message12 = `Today is ${data.getDate()}/${data.getMonth()+1}/${data.getYear()}`
                console.log(message12)   // Today is 2/11/124

//--------------------------------------------------------------------------------------------------
//                        Escape সিকোয়েন্স (Escape Sequences):

                        // কিছু বিশেষ ক্যারেক্টার যুক্ত করতে \ ব্যবহার করা হয়, যেমন \n (নতুন লাইন), \t (ট্যাব) ইত্যাদি।

                        let articel = "hi hello, \nI want to leave now"
                        console.log(articel) //   hi hello,
                                              //  I want to leave now
// ----------------------------------------------------------------------------------
                             //  স্ট্রিং কনক্যাটেনেশন (Concatenation):

                                 //  দুটি বা ততোধিক স্ট্রিং একত্রিত করতে + অপারেটর ব্যবহার করা হয়।

                                 let firstName = 'Yusha bin'
                                 let lastName = 'Nun'
                                 console.log("hello, I am " +firstName +  lastName)
 
                                 
                                 // স্ট্রিংয়ের দৈর্ঘ্য বের করা (length প্রপার্টি):

                                   // length প্রপার্টি দিয়ে স্ট্রিংয়ের দৈর্ঘ্য বের করা যায়।

                                   let town = 'YUsha bin num'
                                   console.log(town.length)  // 
//----------------------------------------------------------------------------------------

                        // toUpperCase() এবং toLowerCase(): বড় অক্ষরে বা ছোট অক্ষরে রূপান্তর করে।

                        let villageName = 'Silimpur is my home'
                        console.log(villageName.toUpperCase())
                        console.log(villageName.toLocaleLowerCase())

                        // we can use it for compariazom
                        const subject = 'Bangla'
                        const book = 'banGlA'
                        if( subject.toUpperCase() === book.toUpperCase()){
                            console.log(`I read this book`)
                        }
                        else(
                            console.log(`I will go another place`)
                        )
// ----------------------------------------------------------------------------------                        
                           // trim(): স্ট্রিংয়ের শুরু এবং শেষের ফাঁকা স্থান সরিয়ে দেয়। -মানে হলো কোন string variable মধ্যে যুদি space আগে এবং পরে চলে আসে  থাকে সরানোর জন্য  এটা ব্যবহার করা হয়। মাঝ খানে যুদি পরে তাহলে আবার এটা হবে না ।

                           const food = "chicken"
                           const cary = 'chicken '
                           if (food.trim() == cary.trim()){
                            console.log('I will cook.');
                           }else{
                            console.log(` I won't cook`);
                           }

                           let foodCook = ' Yusha bin Nun '
                           console.log(foodCook.trim())

   //----------------------------------------------------------------------------------------
                         //     charAt(): নির্দিষ্ট ইন্ডেক্সে থাকা ক্যারেক্টার বের করে। charAt() মেথডটি JavaScript-এ একটি স্ট্রিং-এর নির্দিষ্ট অবস্থানে (ইন্ডেক্সে) থাকা ক্যারেক্টার (অক্ষর) বের করে দেয়। আপনি যদি জানতে চান স্ট্রিং-এর একটি নির্দিষ্ট স্থানে কোন ক্যারেক্টার আছে, তাহলে charAt() মেথডটি ব্যবহার করতে পারেন।
                         const totalItems = "HelloWebsits"
                         console.log(totalItems.charAt(3))   
                         
                         //

// String is immutable--- we can't change.
// Array is mutable -- you can chage the array element

//---------------------------------------------------------------------------------
                   // includes(): স্ট্রিংয়ের ভেতর নির্দিষ্ট অংশটি আছে কি না পরীক্ষা করে।  JavaScript-এ includes() মেথডটি একটি স্ট্রিং-এর ভেতরে নির্দিষ্ট অংশটি আছে কি না, তা যাচাই করতে ব্যবহার করা হয়। যদি নির্দিষ্ট অংশটি স্ট্রিং-এর মধ্যে থাকে, তাহলে এটি true রিটার্ন করে; আর না থাকলে false রিটার্ন করে।        
                      


