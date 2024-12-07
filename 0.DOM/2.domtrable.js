
// html tag or element ar madome traverls korbor
// ----------------------------------------------------------------------
// single element:-  ke 2 vabe travel korte pare. and variable declear korta pare.

// 1. document.getElementById()

const title = document.getElementById('title') // function when set object that time we call it's call methord
console.log(title)// output:

// 2. document.querySelector() --all time use for class and ID like css (. or #) দিয়ে ধরতে হবে , কিন্তু অন্য enlemnet  দের সময় কিছু লাগবে না , তবে  আনেক  রকমের elememt থাকলে ১ম টা কে ধরবে ।
const tital2 = document.querySelector('li')
tital2.textContent='This is my job' // titla2.textContent dei value change kor dai
console.log(tital2);


// -----------------------------------------------------------

// for multiful element ke dor ta cai: ta hole 4 ta methord have .


// 1.document.getElementsByClassName())
const items = document.getElementsByClassName('li-items')
// console.log(items)
/** // output:
 * HTMLCollection(4) [li.li-items, li.li-items, li.li-items, li.li-items]  // ate array an array like object bole. ater ouper loop jala nu jai.
 */
// console.log( typeof items) // output: object
for(let index = 0; index < items.length; index++){
    const elememt = items[index]
    console.log(elememt)
}

// 2.document.getElementsByTagName( )

const itemes2 = document.getElementsByTagName('li')
console.log(itemes2)
for(const iterator of itemes2){
    console.log(iterator)
   iterator.style.fontSize = '40px'
   iterator.style.backgroundColor ='yellow'
}

// 3.document.querySelectorAll()-- at ke all time all element hold it.

const items3 = document.querySelectorAll('li')
console.log(items3)