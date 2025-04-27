What is JavaScript?
JavaScript is a high-level, interpreted programming language that conforms to the ECMAScript specification. It's one of the core technologies of the web, alongside HTML and CSS.

Key Characteristics:

Runs in the browser (client-side) and on servers (Node.js)
Dynamically typed (variables don't need type declarations)
Prototype-based object-oriented
Supports multiple paradigms (procedural, OOP, functional)
How it runs in the browser:

HTML parser encounters <script> tag
Browser requests and downloads JavaScript file (if external)
JavaScript engine (V8, SpiderMonkey, etc.) parses and compiles the code
Code is executed immediately (unless deferred or async)
Example:

<!DOCTYPE html>
<html>
<head>
  <title>JavaScript Example</title>
</head>
<body>
  <script>
    alert('Hello, World!'); // Shows a popup
  </script>
</body>
</html>
Code Structure
JavaScript code consists of statements that are executed sequentially (unless control structures alter the flow).

Basic Syntax Rules:

Statements end with semicolons (optional but recommended)
Code blocks are enclosed in curly braces {}
Comments: // single-line or /* multi-line */
Case sensitive
Example:

// This is a statement
let message = "Hello";

// This is a code block
if (message) {
  console.log(message); // Prints to browser console
}

/*
This is a 
multi-line comment
*/


## Strict Mode

Strict mode makes JavaScript more secure and helps catch common coding mistakes.

**How to enable:**
```javascript
'use strict';

// Your code here
Benefits:

Prevents accidental global variables
Makes assignments to non-writable properties throw errors
Requires function parameter names to be unique
Makes this undefined in global functions (instead of pointing to window)
Example without strict mode:

function badPractice() {
  undeclaredVar = 42; // Creates a global variable accidentally
  console.log(undeclaredVar);
}
badPractice();
console.log(undeclaredVar); // Works - bad!
Example with strict mode:

'use strict';

function goodPractice() {
  undeclaredVar = 42; // Throws ReferenceError
}
goodPractice();
Variables
Variables are containers for storing data values.

Declaration Keywords:
let - block-scoped, can be reassigned
const - block-scoped, cannot be reassigned (but object properties can change)
var - function-scoped, hoisted (avoid in modern code)
Examples:

let age = 25; // Can be changed later
const PI = 3.14; // Cannot be reassigned
var oldWay = "deprecated"; // Avoid in modern code

age = 26; // OK
PI = 3.14159; // Error!
Scope Differences:

if (true) {
  let blockScoped = "visible only here";
  var functionScoped = "visible outside";
}
console.log(blockScoped); // Error
console.log(functionScoped); // Works
Hoisting:

console.log(x); // undefined (var is hoisted)
var x = 5;

console.log(y); // Error (let/const not hoisted in usable way)
let y = 10;
Data Types
JavaScript has dynamic types - the same variable can hold different types.

Primitive Types:
number - integers and floats
string - text
boolean - true/false
null - intentional absence of value
undefined - variable declared but not assigned
symbol - unique identifier (ES6+)
bigint - large integers (ES2020+)
Object Types:
object - collections of key-value pairs
array - ordered lists (technically objects)
function - callable objects
Examples:

// Primitives
let num = 42;
let text = "Hello";
let isTrue = true;
let nothing = null;
let notDefined = undefined;
let id = Symbol("unique");
let bigNum = 1234567890123456789012345678901234567890n;

// Objects
let person = { name: "Alice", age: 30 };
let colors = ["red", "green", "blue"];
function greet() { console.log("Hi!"); }
Type Checking:

typeof 42; // "number"
typeof "text"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (historical bug)
typeof {}; // "object"
typeof []; // "object"
typeof function(){}; // "function"
Type Conversion
JavaScript can convert between types automatically (implicit) or manually (explicit).

Explicit Conversion:
let str = "123";

// To number
let num = Number(str); // 123
num = +str; // 123 (unary plus)
num = parseInt(str); // 123
num = parseFloat("123.45"); // 123.45

// To string
let stringified = String(123); // "123"
stringified = 123..toString(); // "123"
stringified = 123 + ""; // "123" (concatenate with string)

// To boolean
let bool = Boolean(1); // true
bool = !!1; // true (double negation)
Implicit Conversion (Coercion):
"5" + 1; // "51" (string concatenation)
"5" - 1; // 4 (numeric operation)
"5" * "2"; // 10
"abc" - 1; // NaN

if (1) { /* runs */ } // 1 coerced to true
if (0) { /* doesn't run */ }

"2" == 2; // true (loose equality)
"2" === 2; // false (strict equality)
Truthy/Falsy Values: Falsy: false, 0, "", null, undefined, NaN
Truthy: Everything else

Practice Project: Age Calculator
Let's build a simple age calculator that takes a birth year and calculates the age.

<!DOCTYPE html>
<html>
<head>
  <title>Age Calculator</title>
</head>
<body>
  <h1>Age Calculator</h1>
  <label for="birthYear">Enter your birth year:</label>
  <input type="number" id="birthYear">
  <button onclick="calculateAge()">Calculate Age</button>
  <p id="result"></p>

  <script>
    'use strict';
    
    function calculateAge() {
      const currentYear = new Date().getFullYear();
      const birthYear = parseInt(document.getElementById('birthYear').value);
      
      if (isNaN(birthYear)) {
        document.getElementById('result').textContent = 'Please enter a valid year';
        return;
      }
      
      const age = currentYear - birthYear;
      document.getElementById('result').textContent = `You are ${age} years old`;
    }
  </script>
</body>
</html>
Key Concepts Used:

Variables (const, DOM access)
Type conversion (parseInt)
Error handling (isNaN)
Template literals (backticks)
Date object
DOM manipulation
Interview Questions
What are the differences between let, const, and var?

let: block-scoped, can be reassigned, not hoisted
const: block-scoped, cannot be reassigned, must be initialized
var: function-scoped, hoisted, can be redeclared
What is the difference between == and ===?

== performs type coercion before comparison
=== checks both value and type without coercion
What are falsy values in JavaScript?

false, 0, "", null, undefined, NaN
How does typeof null return "object"?

This is a historical bug in JavaScript that can't be fixed without breaking existing code
What is strict mode and why would you use it?

Makes JavaScript more secure by throwing errors for unsafe actions
Prevents silent errors by converting them to throw errors
Makes it easier to write "secure" JavaScript
Explain JavaScript hoisting

Variable and function declarations are moved to the top of their scope during compilation
Only declarations are hoisted, not initializations
let and const are hoisted but not initialized (Temporal Dead Zone)
What is the difference between null and undefined?

undefined means a variable has been declared but not assigned
null is an assignment value representing intentional absence of any object value
How would you convert a string to a number?

Number(str), parseInt(str), parseFloat(str), +str, str * 1
What is the purpose of the new keyword?

Creates a new instance of an object type or user-defined object
Creates a blank plain object
Links this object to another object (sets prototype)
Binds this to the new object
Returns this if the function doesn't return an object
What are template literals?

String literals allowing embedded expressions (${expression})
Can be multi-line without escape characters
Use backticks (``) instead of quotes
Practice Tasks
Beginner:
Declare a constant for PI (3.14159) and try to reassign it. What happens?
Create variables to store your name, age, and whether you like JavaScript. Print them.
Write code that demonstrates the difference between let and var in a block.
Convert the string "123" to a number in three different ways.
Write a function that takes a number and returns "even" or "odd".
Intermediate:
Create an object representing yourself with properties like name, age, hobbies (array).
Write a function that takes a birth year and returns the age (handle invalid input).
Demonstrate type coercion with +, -, and == operators.
Write a function that takes any value and returns its type as a string.
Create a temperature converter between Celsius and Fahrenheit.
Advanced:
Implement a function that safely adds two values (handle string numbers).
Create a function that mimics typeof operator (including distinguishing null/array).
Write a function that demonstrates the Temporal Dead Zone with let.
Implement a simple calculator that takes two values and an operator (+, -, *, /).
Create a function that takes a value and determines if it's truthy or falsy.
Example solutions for some tasks:

Task: Even/Odd Function

function checkEvenOdd(num) {
  return num % 2 === 0 ? 'even' : 'odd';
}
console.log(checkEvenOdd(4)); // "even"
Task: Type Checker

function getType(value) {
  if (value === null) return 'null';
  if (Array.isArray(value)) return 'array';
  return typeof value;
}
console.log(getType([])); // "array"
console.log(getType(null)); // "null"
Task: Temperature Converter

function convertTemp(value, unit) {
  if (unit.toLowerCase() === 'c') {
    return (value * 9/5) + 32; // C to F
  } else if (unit.toLowerCase() === 'f') {
    return (value - 32) * 5/9; // F to C
  }
  throw new Error('Invalid unit');
}
Congratulations on completing Day 1! You've learned the essential building blocks of JavaScript. Tomorrow we'll dive into operators and control flow structures. Keep practicing these fundamentals!

