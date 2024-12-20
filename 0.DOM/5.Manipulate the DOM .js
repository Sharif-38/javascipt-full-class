
// innerText || textContent || innerHTML
/*document.getElementById
এটি একটি নির্দিষ্ট এলিমেন্ট রিটার্ন করে, তাই সরাসরি innerText, textContent, বা innerHTML ব্যবহার করা যায়।
উদাহরণ:

javascript
Copy code
let element = document.getElementById("myId");
console.log(element.innerText); // দৃশ্যমান টেক্সট(we show brower)
console.log(element.textContent); // পুরো টেক্সট(html ja ja tagabe and if we hide anything that time we can use it.)
console.log(element.innerHTML); // HTML কোড সহ পুরো কন্টেন্ট
*/

/*document.querySelector
এটি একটি নির্দিষ্ট CSS সিলেক্টরের প্রথম ম্যাচিং এলিমেন্ট রিটার্ন করে, তাই সরাসরি innerText, textContent, এবং innerHTML ব্যবহার করা যায়।
উদাহরণ:

javascript
Copy code
let element = document.querySelector(".myClass");
console.log(element.innerText); // দৃশ্যমান টেক্সট
console.log(element.textContent); // পুরো টেক্সট
console.log(element.innerHTML); // HTML কোড
*/


//‍ ‍how to set style: css এর সময় ‍style লিখতে হয় হাই ফেন দিয়ে backgournd-color , js সময় লিখতে হয়  এক সাথে এবং camel case মত 
// const li = document.getElementById('li-container').style.backgroundColor='red'
//console.log(li);

// setAttribute() || getAttribute()  || removeAttribute()

// setAttribute দিয়ে আমরা ‍newattribut  সেট করতে পারি
// document.querySelector('h2').setAttribute('class','first-htag')

// removeAttribute() -- we can remove attriblute 
// document.querySelector('ul').removeAttribute('id')

// getAttribute---দিয়ে আমরা দেখতে পারি মান কে 
//const getShow = document.querySelector('h2').getAttribute('id')
//console.log(getShow);


// new element to create by js : we can create any tag here. 

// const newEllent = document.querySelector('h2')
// console.log(newEllent);

// const newul = document.querySelector('ul')
// const newSection = document.createElement('li')
// newSection.innerText='This is old'
// console.log(newSection)
// newul.appendChild(newSection)// appenchild ar kaj hollo display value show korara

// const newul = document.querySelector('ul')
// const newH2 = document.createElement('h2')
// newH2.innerText= 'This is my first day'
// console.log(newH2)
// newul.appendChild(newH2)


// ------------------------------------------------

// Add class name  || classList[add(),remove()]

/*
const h2 = document.querySelector('h2')
console.log(h2)
h2.classList.add('first') // for new class add
h2.classList.add('first', 'second') // for new class add dobale value
h2.classList.remove('second') // if we want to delate any class that time we can use it.
*/

// append Child vs append 


// first where we can set this decided
const newValue = document.querySelector('ul')

// then we can set where i want to set the up place the value.
const second = document.getElementById('second')

// then create new li
const newli = document.createElement("li")
// then add valu
newli.innerText = 'Hello'
console.log(newli)
// then whice value where we want to set.
newValue.insertBefore(newli, second)
