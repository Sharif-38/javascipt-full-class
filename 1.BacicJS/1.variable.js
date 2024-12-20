

// Variable : Variable has a container. We store the different types of data. Also when our need those data we can use the value

// How can declare the Variable?
/**
 * 1. If we declare the variable we must use let, var, const fist.
 * 2. Then variable name 
 * 3. Variable value.
 */
let name
console.log(name) // undefined

let fistName = 'Yusha bin Nun'  // let, const ,var  this are the keywords(name)
console.log(fistName) // Yusha bin Nun

let age = 30
console.log(`My name is ${fistName}. I am ${age} old`)

// Naming Convension 

/**
 * 1. We can't use reserved keyword
 * 2. we can't use fist latter capital letter and also number.
 * 3. Meaningful should be variable name
 * 4. Can't use space or hyphen
 * 5. We can use camel-case 
 * 6. We can use fist latter dollar sign.
 */

// let , var, const
/**
 * 1. var is old version
 * 2. When we use let we can re-sing the value.
 * 3. const we can't re-sign the value. 
 */


// Variable Scope: Variable has 3 type of Scope 1. Global Scope 2. Local or func Scope 3. Block Scope

//Global Scope: Global Scope means we can access the variable out side or inside the function. We can access the console.log inside or out side function.

let nameYou = "Yusha"

function showName (){
    console.log(`my name is ${nameYou}`) // my name is Yusha( you can declare in side the function)
}

showName ()
 console.log(nameYou)// Also you can declare out side the function for Global Scope

 // Local Scope or Function scope : Local Scope or Function Scope means we can access the variable only for in side out side we can't. And also we can't console.log in side the function not out side.

function showAllThing () {
    let number = 345
    console.log(`This is the fist number ${number}`)
}

showAllThing()
// console.log(number) // we can't access out side the value 


// Block Scope: Block Scope is means, only for in side the {} value let or const by accessible. var don't follow block scope rule.

if (age){
    var totalAge = 20
    console.log(totalAge)

} 

let age = '34.23'
console.log(Number.parseFloat(age));



//                                     What have I learned in Variable? 

/**
 *    1. What is the Variable?
 *    2. How can declare the Variable in JavaScript?
 *    3. What are the different in let, var and const? 
 *    4. How can write the Variable name? or It's call naming convention.
 *    5. What is the scope in JavaScript? 
 *    6. How many scope has in javascript? 
 *    7. Give me every scope definition in Javascript? 
 */


