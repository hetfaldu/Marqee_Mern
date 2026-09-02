debugger;
console.log("Hello, World!");
//variable declaration
var age = 22;
var name = "Het";
var isStudent = true;
console.log(age);
console.log(name);
console.log(isStudent);

//Variable and function naming conventions
//1. camelCase
var myVariable = "This is camelCase";
console.log(myVariable);
//2. PascalCase
var MyVariable = "This is PascalCase";  
console.log(MyVariable);

//let and const
//let : used to declare block-scoped variables that can be reassigned.
let city = "New York";
console.log(city);
city = "Los Angeles"; // reassigning the value
console.log(city);
//const : used to declare block-scoped variables that cannot be reassigned.
const country = "USA";
console.log(country);
//country = "Canada"; // This would result in an error

//Data types in JavaScript
//primitive data types
//1. Number : represents numeric values, both integers and floating-point numbers. (number type)
//2. String : represents a sequence of characters. (string type)
//3. Boolean : represents a logical value, either true or false. (boolean type )

//undefined : represents a variable that has been declared but has not been assigned a value. (undefined type )
//null : represents the intentional absence of any object value. (type object )
//not a Number (NaN) : represents a value that is not a valid number. (number type)
//symbol : represents a unique and immutable value that can be used as an identifier for object properties.
console.log(typeof age); // number
console.log(typeof name); // string
console.log(typeof isStudent); // boolean
console.log(isNaN(age)); // false   
console.log(isNaN(78)); // false
console.log(isNaN(isStudent)); // true

//non-primitive data types
//1. Object : represents a collection of key-value pairs.   
//2. Array : represents an ordered list of values.
//3. Function : represents a reusable block of code that can be called and executed.
//4. Class : represents a blueprint for creating objects with shared properties and methods.

let student = {
    name: "Het",
    age: 22,    
    isStudent: true
};
console.log(student);
console.log(typeof student); // object

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);
console.log(typeof numbers); // object

function greet() {
    console.log("Hello, " + name + "!");
    console.log(typeof greet); // function
}
greet();


//let : used to declare block-scoped variables that can be reassigned.
//var : used to declare function-scoped variables that can be reassigned.
//const : used to declare block-scoped variables that cannot be reassigned.
//difference between var, let, and const
//1. Scope: var is function-scoped, while let and const are block-scoped.
//2. Hoisting: var declarations are hoisted to the top of their scope, while let and const declarations are not hoisted.
//3. Reassignment: var and let can be reassigned, while const cannot be reassigned after its initial assignment.
//4. Redeclaration: var allows redeclaration of the same variable within the same scope, while let and const do not allow redeclaration within the same scope.

//what is hoisting in JavaScript?
//Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
//creation phase and excution phase
//1. Creation Phase: During this phase, the JavaScript engine scans the code and allocates memory for variables and functions. It creates a variable object (VO) for each scope, which stores information about the variables and functions declared in that scope. Variables declared with var are initialized with undefined, while variables declared with let and const are not initialized until their actual declaration is encountered in the code.
//2. Execution Phase: In this phase, the JavaScript engine executes the code line by line. It assigns values to variables and executes functions as they are encountered in the code. If a variable is accessed before its declaration, it will result in a ReferenceError for let and const, while var will return undefined.
//example of hoisting
console.log(myVar);
var myVar = "This variable is hoisted!";
//In this example, the variable myVar is hoisted to the top of its scope, so the console.log statement does not throw an error. However, since the variable is declared with var, it is initialized with undefined until the actual assignment is encountered in the code. Therefore, the output will be undefined.
//console.log(myLetVar); // ReferenceError: Cannot access 'myLetVar' before initialization
let myLetVar = "This variable is not hoisted!";
//In this example, the variable myLetVar is not hoisted, so the console.log statement throws a ReferenceError. This is because variables declared with let and const are not initialized until their actual declaration is encountered in the code.
//console.log(myConstVar); // ReferenceError: Cannot access 'myConstVar' before initialization
const myConstVar = "This variable is not hoisted!";
console.log(myConstVar); // This variable is not hoisted!

addtwoNumbers(5, 10); // Output: The sum is: 15
function addtwoNumbers(a, b) {
    var sum = a + b;
    console.log("The sum is: " + sum);
}
addtwoNumbers(10, 10);
//type coercion in JavaScript
//Type coercion is the automatic or implicit conversion of values from one data type to another in JavaScript. It occurs when an operation involves different data types, and JavaScript attempts to convert one or more of the values to a compatible type in order to perform the operation.
//example of type coercion
console.log(5 + "10"); // Output: "510"
console.log(true + 5); // Output: 6
console.log(false + 5); // Output: 5    

let sum = '1234';
console.log(sum * 1); // Output: 1234

console.log(12 == '12'); // Output: true
console.log(12 === '12'); // Output: false
console.log(12 != '12'); // Output: false
console.log(12 !== '12'); // Output: true
console.log(typeof [1, 2, 3]); // Output: object
console.log(undefined || true); // Output: true
console.log(null || false); // Output: false
console.log(1 || true || 'hello'); // Output: 1

//type casting in JavaScript
//Type casting is the explicit conversion of a value from one data type to another in JavaScript. It allows you to convert values to a specific type, overriding the default behavior of type coercion. Type casting can be done using built-in functions or methods, such as Number(), String(), and Boolean().
//example of type casting
let numString = "1234";
let n = Number(numString);
console.log(n); // Output: 1234

let boolValue = Boolean(1);
console.log(boolValue); // Output: true

let strValue = String(1234);
console.log(strValue); // Output: "1234"

//why functions are first class citizens in JavaScript?
//In JavaScript, functions are first-class citizens, which means they can be assigned to variables, passed as arguments to other functions, and returned from functions. This allows for more flexible and powerful programming patterns.

//function expressions and function declarations
//function expressions are functions that are defined and assigned to a variable, while function declarations are functions that are defined using the function keyword and can be called before they are defined in the code due to hoisting.
//example of function expression
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(5, 10)); // Output: 50

//example of function declaration
function add(a, b) {
    return a + b;
}
console.log(add(5, 10)); // Output: 15
 
greet();
function greet() {
  console.log(message);
  var message = "Hello, World!";

} 

//how to create a string in JavaScript?
//In JavaScript, you can create a string using either single quotes (' '), double quotes (" "), or backticks (` `) for template literals. Here are some examples:
let singleQuoted = 'This is a string with single quotes.';
let doubleQuoted = "This is a string with double quotes.";
let templateLiteral = `This is a string with backticks.`;


//for of loop in JavaScript
//The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable object without needing to access the index or key. The syntax for the for...of loop is as follows:
//for (const element of iterable) {
//    // code to be executed for each element
//}

//string buffer in JavaScript
//In JavaScript, there is no built-in StringBuffer class like in some other programming languages. However, you can achieve similar functionality by using arrays or string concatenation to build strings efficiently. Here are a few approaches to create a string buffer in JavaScript:
//1. Using an array to build a string buffer
//give me an example of string buffer in JavaScript
//Example of using an array to build a string buffer
let stringBuffer = [];
stringBuffer.push("Hello");
stringBuffer.push(", ");
stringBuffer.push("World");
let finalString = stringBuffer.join("");
console.log(finalString); // Output: Hello, World



let sentence = "JavaScript is a versatile language.";
console.log(sentence.split(" ")); // Output: ["JavaScript", "is", "a", "versatile", "language."]

let sentence2 = "JavaScript is a versatile language.";
console.log(sentence2.replace("versatile", "powerful")); // Output: JavaScript is a powerful language.
    
let sentence3 = "JavaScript is a versatile language.";
console.log(sentence3.includes("versatile")); // Output: true

//concatenation of strings in JavaScript
//In JavaScript, you can concatenate strings using the + operator or the concat() method. Here are some examples:

//what is concatenation of strings in JavaScript?
//example of concatenation of strings in JavaScript
let str1 = "Hello";
let abc = "World";
let concatenatedString = str1.concat(" ", abc);
console.log(concatenatedString); // Output: Hello World

//properties of strings in JavaScript
//1. Immutability: Strings in JavaScript are immutable, meaning that once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.
//2. Length: The length property of a string returns the number of characters in the string.
//3. Indexing: Strings can be accessed using zero-based indexing, where the first character has an index of 0.
//4. Methods: Strings have various built-in methods for manipulation, such as toUpperCase(), toLowerCase(), slice(), substring(), indexOf(), and more.
//5. Template literals: Strings can be created using backticks (` `), allowing for multi-line strings and interpolation of variables using ${} syntax.

//methods of strings in JavaScript
//1. charAt(index) : returns the character at the specified index in a string.
let str6 = "Hello, World!";
console.log(str6.charAt(7)); // Output: W
//2. charCodeAt(index) : returns the Unicode value of the character at the specified index in a string.
let str7 = "Hello, World!";
console.log(str7.charCodeAt(7)); // Output: 87
//3. concat() : concatenates two or more strings and returns a new string.
let str8 = "Hello";
let str9 = "World";
console.log(str8.concat(" ", str9)); // Output: Hello World
//4. endsWith(searchString) : checks if a string ends with the specified search string and returns true or false.
let str10 = "Hello, World!";
console.log(str10.endsWith("World!")); // Output: true
//5. includes(searchString) : checks if a string contains the specified search string and returns true or false.
let str11 = "Hello, World!";
console.log(str11.includes("World")); // Output: true
//6. indexOf(searchString) : returns the index of the first occurrence of the specified search string in a string.
let str12 = "Hello, World!";
console.log(str12.indexOf("World")); // Output: 7
//7. lastIndexOf(searchString) : returns the index of the last occurrence of the specified search string in a string.
let str13 = "Hello, World! Hello, Universe!";
console.log(str13.lastIndexOf("Hello")); // Output: 14
//8. repeat(count) : returns a new string that repeats the original string a specified number of times.
let str14 = "Hello";
console.log(str14.repeat(3)); // Output: HelloHelloHello
//9. replace(searchValue, newValue) : replaces the first occurrence of a specified  search value in a string with a new value and returns a new string.
let str15 = "Hello, World!";
console.log(str15.replace("World", "Universe")); // Output: Hello, Universe!
//10. slice(startIndex, endIndex) : extracts a section of a string and returns it as a new string.
let str16 = "Hello, World!";
console.log(str16.slice(7, 12)); // Output: World
//11. split(separator) : splits a string into an array of substrings based on a specified separator.
let str17 = "Hello, World!";
console.log(str17.split(", ")); // Output: ["Hello", "World!"]
//12. startsWith(searchString) : checks if a string starts with the specified search string and returns true or false.
let str18 = "Hello, World!";
console.log(str18.startsWith("Hello")); // Output: true
//13. substring(startIndex, endIndex) : returns a portion of a string between two specified indices.
let str19 = "Hello, World!";
console.log(str19.substring(7, 12)); // Output: World
//14. toLowerCase() : converts a string to lowercase letters and returns a new string.
let str20 = "Hello, World!";
console.log(str20.toLowerCase()); // Output: hello, world!
//15. toUpperCase() : converts a string to uppercase letters and returns a new string.
let str21 = "Hello, World!";
console.log(str21.toUpperCase()); // Output: HELLO, WORLD!
//16. trim() : removes whitespace from both ends of a string and returns a new string.
let str22 = "   Hello, World!   ";
console.log(str22.trim()); // Output: Hello, World!  

//function
function greetUser() {
    console.log("Hello");
}
greetUser(); 

function greet(name) {
    console.log("Hello, " + name);
}
greet("Het");

function greet(name) {
    return console.log("Hello, " + name);
}
greet("Het");

function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

const fn = function(name) {
    console.log("Hello, " + name);
};
fn("Het");

const Detail = {
    name: "Het",
}
Detail.name = "Het Faldu";
console.log(Detail.name);

function Hello(fn) {
    console.log("hello");
}
Hello("Het");

//higher order function in JavaScript   
//A higher order function in JavaScript is a function that takes one or more functions as arguments and/or returns a function as its result. Higher order functions are a fundamental concept in functional programming and allow for more flexible and reusable code.

//example of higher order function
function greetUser(name) {
    return function(message) {
        console.log("Hello, " + name + "! " + message);
    };
}
const greetHet = greetUser("Het");
greetHet("Welcome to JavaScript!");

//callback function in JavaScript   
//A callback function in JavaScript is a function that is passed as an argument to another function and is executed after the completion of that function. It allows for asynchronous programming and enables you to define custom behavior to be executed at a later time. Callback functions are commonly used in event handling, asynchronous operations, and higher-order functions.

//example of callback function
function fetchData(callback) {
    setTimeout(function() {
        const data = { name: "Het", age: 22 };
        callback(data);
    }, 1000);
}

function displayData(data) {
    console.log("User Data:", data);
}

fetchData(displayData); 


//create a custom function with 2 arguments in JavaScript
function multiplyNumbers(a, b) {
    return a * b;
}
console.log(multiplyNumbers(5, 10)); 

//create a custom function with 3 arguments in JavaScript
function calculateVolume(length, width, height) {
    return length * width * height;
}
console.log(calculateVolume(2, 3, 4)); 

//sorting in JavaScript
let fruitsArray = ["Banana", "Apple", "Cherry", "Date"];
fruitsArray.sort(); 
console.log(fruitsArray); 

//acending in JavaScript
let numbersArray1 = [5, 2, 9, 1, 5, 6];
numbersArray1.sort(function(a, b) {
    return a - b;
});
console.log(numbersArray1);

//reverse in JavaScript
let numbersArray = [5, 2, 9, 1, 5, 6];
numbersArray.reverse(); 
console.log(numbersArray);  

//combining arrays in JavaScript
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let combinedArray = array1.concat(array2);
console.log(combinedArray); 

//join in JavaScript
let fruits = ["Banana", "Apple", "Cherry"];
let joinedFruits = fruits.join(", ");
console.log(joinedFruits); 

//flat in JavaScript
let nestedArray = [1, 2, [3, 4], [5, 6]];
let flattenedArray = nestedArray.flat();
console.log(flattenedArray);

//word occurence more than once in JavaScript
function countWordOccurrences(text, word) {
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    const matches = text.match(regex);
    return matches ? matches.length : 0;
}

const sampleText = "JavaScript is great. JavaScript is versatile. I love JavaScript!";
const wordToCount = "JavaScript";
const occurrences = countWordOccurrences(sampleText, wordToCount);
console.log(`The word "${wordToCount}" occurs ${occurrences} times.`);

//debouncing in JavaScript
function getdata() {
    console.log("fetching data from server...");
}
function mydebounce(call,delay) {
    let timer;
    return function(...args) {
        if(timer) {
            clearTimeout(timer);
        }    
        timer = setTimeout(() => {
            call();
        }, delay);
        
    }
}

let dd = mydebounce(getdata, 500);
dd(4545);

//prototype in JavaScript
//In JavaScript, every object has a prototype, which is another object from which it inherits properties and methods. The prototype chain allows objects to share behavior and functionality. When you access a property or method on an object, JavaScript first looks for it on the object itself. If it doesn't find it there, it looks up the prototype chain until it finds the property or reaches the end of the chain (null).
//Example of prototype in JavaScript
function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
};

const person1 = new Person("Het", 22);
person1.greet();

//example of prototype 
let obj = {
    name: "Het",
    age: 22
};

let obj2={
    phone: 1234567890,
    address: "123 Main St"
};
obj2.__proto__ = obj;

obj.__proto__ = {
    name2: "Het Faldu",
}
console.log(obj.name2);

//using map function in JavaScript
let numbersArray2 = [1, 2, 3, 4, 5];
let squaredNumbers = numbersArray2.map(function(num) {
    return num * num;
});
console.log(squaredNumbers);

//repeating elements in an array in JavaScript
let arr = [1, 2, 3, 3, 2];
let freq = [];

arr.map((num ,idx) => {
    if(arr.indexOf(num) != idx) {
        if(!freq.includes(num)) {
            freq.push(num);
        }
    }
});
console.log(freq);

//promises in JavaScript
//A Promise in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to handle asynchronous operations in a more manageable way, avoiding callback hell and making the code more readable. A Promise can be in one of three states: pending, fulfilled, or rejected.

//Example of a Promise in JavaScript
const myPromise = new Promise((resolve, reject) => {
    const success = true; 
    if (success) {
        resolve("The operation was successful!");
    } else {
        reject("The operation failed.");
    }
});

myPromise
    .then((message) => {
        console.log(message); 
    })
    .catch((error) => {
        console.error(error); 
    }); 

//async and sync in JavaScript
//Synchronous (sync) code is executed in a sequential manner, meaning that each operation must complete before the next one begins. In contrast, Asynchronous (async) code allows multiple operations to run concurrently, enabling the program to continue executing other tasks while waiting for certain operations to complete. This is particularly useful for tasks that involve I/O operations, such as fetching data from a server or reading files.        

//synchronous example in JavaScript
console.log("Start");
console.log("Middle");
console.log("End");

//asynchronous example in JavaScript
console.log("Start");
setTimeout(() => {
    console.log("Middle");
}, 2000);
console.log("End"); 

//who will hnandle the asynchronous code in JavaScript?
//In JavaScript, the event loop is responsible for handling asynchronous code. The event loop continuously checks the call stack and the task queue (or message queue) to determine if there are any pending tasks that need to be executed. When an asynchronous operation is initiated (e.g., a setTimeout, fetch request, or event listener), it is sent to the task queue. Once the call stack is empty, the event loop picks up tasks from the task queue and pushes them onto the call stack for execution. This allows JavaScript to handle asynchronous operations without blocking the main thread, enabling a responsive user experience. 

//event loop in JavaScript
//The event loop is a fundamental concept in JavaScript that enables asynchronous programming. It is responsible for managing the execution of code, handling events, and coordinating the execution of tasks in a non-blocking manner. The event loop continuously checks the call stack and the task queue to determine if there are any pending tasks that need to be executed. When an asynchronous operation is initiated (e.g., a setTimeout, fetch request, or event listener), it is sent to the task queue. Once the call stack is empty, the event loop picks up tasks from the task queue and pushes them onto the call stack for execution. This allows JavaScript to handle asynchronous operations without blocking the main thread, enabling a responsive user experience.

//state in promises in JavaScript
//A Promise in JavaScript can be in one of three states: pending, fulfilled, or rejected. The state of a Promise represents the current status of the asynchronous operation it represents. When a Promise is created, it starts in the pending state. If the operation completes successfully, the Promise transitions to the fulfilled state, and the associated value is available. If the operation fails, the Promise transitions to the rejected state, and an error or reason for rejection is provided. Once a Promise is either fulfilled or rejected, its state becomes immutable, meaning it cannot change again.


//lexical scope in JavaScript   
//Lexical scope in JavaScript refers to the visibility and accessibility of variables based on their location within the source code. In a lexically scoped language like JavaScript, the scope of a variable is determined by its position in the code at the time of writing, rather than at runtime. This means that inner functions have access to variables defined in their outer functions, but not vice versa. Lexical scope allows for the creation of closures, where inner functions can "remember" and access variables from their outer functions even after those outer functions have finished executing.
//example of lexical scope in JavaScript
function outerFunction() {
    const outerVariable = "I am from the outer function";
    
    function innerFunction() {
        console.log(outerVariable); 
    }
    
    innerFunction();
}

outerFunction();

//closure in JavaScript
//A closure in JavaScript is a function that has access to its own scope, the outer function's scope, and the global scope. Closures are created when an inner function is defined within an outer function, allowing the inner function to "close over" the variables of the outer function. This means that even after the outer function has finished executing, the inner function retains access to the variables of the outer function. Closures are commonly used for data encapsulation, creating private variables, and maintaining state in asynchronous programming.
//example of closure in JavaScript
function outerFunction() {
    let count = 0;
    
    function innerFunction() {
        count++;
        console.log("Count:", count);
    }
    
    return innerFunction;
}

const increment = outerFunction();
increment(); 
increment(); 
increment(); 

//what is es6 in JavaScript?
//ES6, also known as ECMAScript 2015, is the sixth major version of the ECMAScript standard for JavaScript. It introduced several new features and enhancements to the language, making it more powerful and expressive. Some of the key features of ES6 include let and const for variable declarations, arrow functions, template literals, destructuring assignment, default parameters, rest and spread operators, classes, modules, promises, and enhanced object literals. ES6 has become widely adopted and is supported by modern browsers and JavaScript environments.

//es6 features in JavaScript
//1. let and const: Introduced block-scoped variable declarations, allowing for better control over variable scope and immutability.
//2. Arrow Functions: A concise syntax for writing functions, with lexical scoping of the this keyword.
//3. Template Literals: Enhanced string literals that allow for multi-line strings and embedded expressions using backticks (`).
//4. Destructuring Assignment: A convenient way to extract values from arrays or objects into distinct variables.
//5. Default Parameters: Allows function parameters to have default values if no argument is provided.
//6. Rest and Spread Operators: The rest operator (...) allows for collecting multiple elements into an array, while the spread operator allows for expanding elements of an array or object.
//7. Classes: Introduced a more familiar syntax for creating objects and handling inheritance, providing a clearer structure for object-oriented programming.
//8. Modules: ES6 introduced a standardized module system, allowing for better code organization and reuse through import and export statements.
//9. Promises: A native way to handle asynchronous operations, providing a cleaner alternative to callbacks and enabling better error handling.
//10. Enhanced Object Literals: ES6 introduced shorthand syntax for defining object properties and methods, making object creation more concise and readable.   

//difference between JavaScript and ECMAScript
//JavaScript is a programming language that is primarily used for web development, while ECMAScript is a standardized specification that defines the rules and features of the JavaScript language. In other words, ECMAScript is the standard upon which JavaScript is based. JavaScript is an implementation of the ECMAScript standard, and different versions of JavaScript correspond to different versions of ECMAScript. While JavaScript includes additional features and APIs beyond the ECMAScript specification, it adheres to the core principles and syntax defined by ECMAScript. 

//template literals in JavaScript
//Template literals are a feature introduced in ES6 that allows for enhanced string literals in JavaScript. They are enclosed by backticks (`) instead of single or double quotes, and they support multi-line strings and embedded expressions using the ${} syntax. Template literals provide a more convenient and readable way to create strings, especially when dealing with dynamic content or complex string concatenation.

//example of template literals in JavaScript
const name1 = "Het";
const age1 = 22;
const greeting = `Hello, my name is ${name1} and I am ${age1} years old.`;
console.log(greeting);

//arrow functions in JavaScript
//Arrow functions are a concise syntax for writing functions in JavaScript, introduced in ES6. They provide a shorter way to define functions and have lexical scoping of the this keyword, meaning that they inherit the this value from their surrounding context. Arrow functions are particularly useful for writing small, single-expression functions and for maintaining the correct this context in callbacks and event handlers.

//example of arrow functions in JavaScript
const add1 = (a, b) => a + b;
console.log(add1(5, 10)); 

const greetArrow = name => `Hello, ${name}!`;
console.log(greetArrow("Het")); 

//forin loop in JavaScript
//The for...in loop in JavaScript is used to iterate over the enumerable properties of an object. It allows you to loop through the keys (property names) of an object, making it useful for accessing and manipulating object properties. The syntax for the for...in loop is as follows:
//for (const key in object) {
//    // code to be executed for each key
//}

//example of forin loop in JavaScript
const person = {
    name: "Het",
    age: 22,
    isStudent: true
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}   

//forof loop in JavaScript
//The for...of loop in JavaScript is used to iterate over iterable objects such as arrays, strings, maps, sets, and more. It allows you to loop through the values of an iterable object without needing to access the index or key. The syntax for the for...of loop is as follows:
//for (const element of iterable) {
//    // code to be executed for each element
//}

//example of forof loop in JavaScript
const f = ["Banana", "Apple", "Cherry"];

for (const fruit of f) {
    console.log(fruit);
}   

//typeof operator in JavaScript
//The typeof operator in JavaScript is used to determine the data type of a given value or variable. It returns a string indicating the type of the operand. The possible return values of the typeof operator include "undefined", "object", "boolean", "number", "string", "function", and "symbol". It is commonly used for type checking and debugging purposes.
//example of typeof operator in JavaScript
let num = 42;
console.log(typeof num); // Output: "number"

let str = "Hello, World!";
console.log(typeof str); // Output: "string"

let bool = true;
console.log(typeof bool); // Output: "boolean"

let o = { name: "Het", age: 22 };
console.log(typeof o); // Output: "object"

let a = [1, 2, 3];
console.log(typeof a); // Output: "object" (arrays are considered objects in JavaScript)

let func = function() {};
console.log(typeof func); // Output: "function"

let undef;
console.log(typeof undef); // Output: "undefined"

let nul = null;
console.log(typeof nul); // Output: "object" (this is a known quirk in JavaScript)

let sym = Symbol("unique");
console.log(typeof sym); // Output: "symbol"      

console.log(typeof "undefined" === "undefined"); // Output: false (both are strings)
console.log(typeof undefined === "undefined"); // Output: true (both are strings)

//NaN in JavaScript
//NaN stands for "Not-a-Number" and is a special value in JavaScript that represents an invalid or undefined numerical result. It is typically the result of an operation that cannot produce a valid number, such as dividing zero by zero or attempting to convert a non-numeric string to a number. NaN is of the type "number" and is unique in that it is not equal to itself, meaning that NaN !== NaN evaluates to true. To check if a value is NaN, you can use the built-in isNaN() function or the Number.isNaN() method for more accurate results.

//example of NaN in JavaScript
let result1 = 0 / 0; // Division by zero
console.log(result1); // Output: NaN

let result2 = parseInt("abc"); // Invalid string to number conversion
console.log(result2); // Output: NaN

console.log(isNaN(result1)); // Output: true
console.log(Number.isNaN(result2)); // Output: true 

//== vs === in JavaScript
//In JavaScript, == is the equality operator that performs type coercion, meaning it converts the operands to the same type before making the comparison. On the other hand, === is the strict equality operator that checks for both value and type equality without performing any type conversion. It is generally recommended to use === for comparisons to avoid unexpected results due to type coercion.

//example of == vs === in JavaScript
console.log(5 == "5"); // Output: true (type coercion occurs)
console.log(5 === "5"); // Output: false (different types)

console.log(null == undefined); // Output: true (type coercion occurs)
console.log(null === undefined); // Output: false (different types)

console.log(true == 1); // Output: true (type coercion occurs)
console.log(true === 1); // Output: false (different types)


//call by value vs call by reference in JavaScript
//In JavaScript, primitive data types (such as numbers, strings, and booleans) are passed by value, meaning that when you pass a primitive value to a function, a copy of that value is created. Changes made to the parameter inside the function do not affect the original value outside the function. On the other hand, non-primitive data types (such as objects and arrays) are passed by reference, meaning that when you pass an object or array to a function, a reference to the original object is passed. Changes made to the parameter inside the function will affect the original object outside the function.
//example of call by value in JavaScript
function changeValue(num) {
    num = 10; // This change does not affect the original variable
}
let originalValue = 5;
changeValue(originalValue);
console.log(originalValue); // Output: 5 (original value remains unchanged)

//example of call by reference in JavaScript
function changeObject(obj) {
    obj.name = "Het"; // This change affects the original object
}

let originalObject = { name: "John" };
changeObject(originalObject);
console.log(originalObject.name); // Output: "Het" (original object is modified)

//truthy and falsy values in JavaScript
//In JavaScript, truthy and falsy values refer to how values are evaluated in a boolean context. A truthy value is any value that evaluates to true when used in a conditional statement, while a falsy value is any value that evaluates to false. The following values are considered falsy in JavaScript: false, 0, -0, 0n (BigInt zero), "", null, undefined, and NaN. All other values are considered truthy, including non-empty strings, non-zero numbers, objects, arrays, and functions.
//example of truthy and falsy values in JavaScript
if ("Hello") {
    console.log("This is a truthy value."); // This will be executed
}

if (0) {
    console.log("This is a falsy value."); // This will not be executed
}

if (-1) {
    console.log("This is a truthy value."); // This will be executed
}

if (null) {
    console.log("This is a falsy value."); // This will not be executed
}

if ([]) {
    console.log("This is a truthy value."); // This will be executed
}

if ({}) {
    console.log("This is a truthy value."); // This will be executed
}   

//arrays in JavaScript
//In JavaScript, an array is a data structure that allows you to store multiple values in a single variable. Arrays are ordered collections of elements, which can be of any data type, including numbers, strings, objects, and even other arrays. Each element in an array has a numeric index, starting from 0 for the first element. Arrays in JavaScript are dynamic, meaning their size can change as elements are added or removed. You can create arrays using square brackets [] and access elements using their index. JavaScript provides various built-in methods for manipulating arrays, such as push(), pop(), shift(), unshift(), splice(), slice(), and more.
//inbuilt methods of arrays in JavaScript
//1. push(): Adds one or more elements to the end of an array and returns the new length of the array.
//2. pop(): Removes the last element from an array and returns that element.
//3. shift(): Removes the first element from an array and returns that element.
//4. unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
//5. splice(): Changes the contents of an array by removing, replacing, or adding elements at a specified index.
//6. slice(): Returns a shallow copy of a portion of an array into a new array object, without modifying the original array.
//7. indexOf(): Returns the first index at which a given element can be found in the array, or -1 if it is not present.
//8. includes(): Determines whether an array contains a certain element, returning true or false as appropriate.
//9. forEach(): Executes a provided function once for each array element.
//10. map(): Creates a new array populated with the results of calling a provided function on every element in the calling array.
//11. filter(): Creates a new array with all elements that pass the test implemented by the provided function.
//12. reduce(): Executes a reducer function on each element of the array, resulting in a single output value.
//13. find(): Returns the value of the first element in the array that satisfies the provided testing function, or undefined if no such element is found.
//14. findIndex(): Returns the index of the first element in the array that satisfies the provided testing function, or -1 if no such element is found.
//15. sort(): Sorts the elements of an array in place and returns the sorted array.
//16. reverse(): Reverses the order of the elements in an array in place and returns the reversed array.
//17. concat(): Merges two or more arrays and returns a new array.
//18. join(): Joins all elements of an array into a string and returns the string.
//19. flat(): Creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
//20. some(): Tests whether at least one element in the array passes the test implemented by the provided function, returning true or false.
//21. every(): Tests whether all elements in the array pass the test implemented by the provided function, returning true or false.

//example of arrays with all methods in JavaScript
let fruits1 = ["Banana", "Apple", "Cherry"];
console.log(fruits1.push("Date")); // Output: 4 (new length of the array)
console.log(fruits1); // Output: ["Banana", "Apple", "Cherry", "Date"]

console.log(fruits1.pop()); // Output: "Date"
console.log(fruits1); // Output: ["Banana", "Apple", "Cherry"]

console.log(fruits1.shift()); // Output: "Banana"
console.log(fruits1); // Output: ["Apple", "Cherry"]

console.log(fruits1.unshift("Mango")); // Output: 3 (new length of the array)
console.log(fruits1); // Output: ["Mango", "Apple", "Cherry"]

fruits1.splice(1, 1, "Grapes"); // Removes 1 element at index 1 and adds "Grapes"
console.log(fruits1); // Output: ["Mango", "Grapes", "Cherry"]       

console.log(fruits1.indexOf("Grapes")); // Output: 1

console.log(fruits1.includes("Cherry")); // Output: true

fruits1.forEach(function(fruit) {
    console.log(fruit);
});
// Output:
// Mango
// Grapes
// Cherry

let upperCaseFruits = fruits1.map(function(fruit) {
    return fruit.toUpperCase();
});
console.log(upperCaseFruits); // Output: ["MANGO", "GRAPES", "CHERRY"]  

//filter example
let filteredFruits = fruits1.filter(function(fruit) {
    return fruit.length > 5;
});
console.log(filteredFruits); // Output: ["Grapes", "Cherry"]

//reduce example
let number = [1, 2, 3, 4, 5];
let s = number.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
}, 0);
console.log(s); // Output: 15

//find example
let foundFruit = fruits1.find(function(fruit) {
    return fruit === "Grapes";
});
console.log(foundFruit); // Output: "Grapes"

//findIndex example
let foundIndex = fruits1.findIndex(function(fruit) {
    return fruit === "Cherry";
});
console.log(foundIndex); // Output: 2

//sort example
fruits1.sort();
console.log(fruits1); // Output: ["Cherry", "Grapes", "Mango"]

//reverse example
fruits1.reverse();
console.log(fruits1); // Output: ["Mango", "Grapes", "Cherry"]

//concat example
let moreFruits = ["Pineapple", "Kiwi"];
let allFruits = fruits1.concat(moreFruits);
console.log(allFruits); // Output: ["Mango", "Grapes", "Cherry", "Pineapple", "Kiwi"]   

//some example
let hasCherry = fruits1.some(function(fruit) {
    return fruit === "Cherry";
});
console.log(hasCherry); // Output: true

//every example
let allFruitsHaveE = fruits1.every(function(fruit) {
    return fruit.includes("e");
});
console.log(allFruitsHaveE); // Output: false

//example create a function named 'calculatepercentage' that calculates the total marks of student and return percentage also take two function as argument named 'startprocessing' and 'endprocessing' code

function calculatepercentage(totalmarks, maxmarks, startprocesssing, endprocessing) {
    startprocesssing();
    const percentage = (totalmarks / maxmarks) * 100;
    console.log(percentage);
    endprocessing();
    return percentage;
}
function startprocessing() {
    console.log("Calculation started");
}

function endprocessing() {
    console.log("Calculation completed");
}

const result = calculatepercentage(450, 500, startprocessing, endprocessing);

//
function calculatePercentage(marks, startProcessing, endProcessing) {

    startProcessing();

    let total = 0;

    for (let mark of marks) {
        total = total + mark;
    }

    console.log(`${((result / (marks.length * 100)) * 100).toFixed(2)}%`);

    endProcessing();

    return total;
}

let marks = [80, 75, 54, 99, 89];

let res = calculatePercentage(
    marks,
    () => {
        console.log("Starts Calculation");
    },
    () => {
        console.log("Finished Calculation");
    }
);

//
function Student(name, age, course, marks) {
    this.name = name;
    this.age = age;
    this.course = course;
    this.marks = marks;

    this.displayDetails = function () {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
        console.log("Marks:", this.marks);
    };
}

let student1 = new Student("Rahul", 21, "JavaScript", 85);
let student2 = new Student("Priya", 22, "Java", 92);

student2.displayDetails();

//difference between constructor function and regular function in JavaScript
//In JavaScript, a constructor function is a special type of function that is used to create and initialize objects. It is typically defined with a capitalized name and is called using the new keyword. When a constructor function is invoked, it creates a new object, sets the this context to that object, and allows you to define properties and methods for that object. Regular functions, on the other hand, are standard functions that can be called without the new keyword and do not have the same behavior as constructor functions. Regular functions do not create new objects or set the this context in the same way as constructor functions. 

//properties and methods of constructor function in JavaScript
//Properties of a constructor function:
//1. Name: The name of the constructor function is typically capitalized to indicate that it is a constructor.
//2. Prototype: Constructor functions have a prototype property that allows you to define methods and properties that will be shared among all instances created by the constructor.
//3. this: Inside a constructor function, the this keyword refers to the newly created object instance.

//Methods of a constructor function:
//1. Creating Instances: You can create new instances of an object using the new keyword followed by the constructor function name.
//2. Defining Properties: You can define properties for the object instance using this.propertyName = value syntax inside the constructor function.
//3. Defining Methods: You can define methods for the object instance using this.methodName = function() { ... } syntax inside the constructor function or by adding methods to the prototype property of the constructor function.

//Create a BankAccount constructor with accountHolder, accountNumber, and balance. Add deposit() and withdraw(), interest(percent) methods

function BankAccount(name, accNumber,balance=0){
this.accountHolderName = name;
this.accountNumber=accNumber;
this.balance=balance;

// Create `Deposite` Method 
// Balance: 10000
// Task 1: Do calculation 
// Task 2: Display ["Amount deposited of Amount:190 | Now Balance: 10190""] using callback Fn.

this.deposite = (amountToDeposite,callback)=>{
   if(amountToDeposite>0){
     this.balance = this.balance+amountToDeposite;
   }
let result= callback(amountToDeposite,this.balance)
return result;
}

// Create `Withdraw` Method
// Balance : 10190;
// Task 1: Do calculation: make sure to check balance!=0 or balance>=amountToWinthdrwa
// Task 2: Display ["Amount Withdrawn : 190 | Now Balance: 10000"] using callback Fn.

this.withdraw=(amountToWithdraw,callback)=>{
    if(this.balance>=amountToWithdraw){
        this.balance-=amountToWithdraw;
        let result   = callback(amountToWithdraw,this.balance)
        return result
    }
    else{
        return `Insufficient Balance!`
    }
}

// Interest(interateRate)
// Taks 1 :calculation
// Task 2: Display Balance using callback

this.addInterest= (interestRate,callback)=>{
    this.balance=this.balance + (this.balance*interestRate/100)
    return callback(this.balance)
}
  
}
function depositSuccessMessage(amount,balance){
    return `Amount +++deposited+++ of Amount: ${amount} | Now Balance: ${balance}`
}
function withdrawSuccessMessage(amount,balance){
    return `Amount ---Withdrawn--- of Rs: ${amount} | Now Balance: ${balance}`
}
function InterestRateAddedMessage(balance){
return `Interest Added Now Balance is :${balance}`
}

const Mohit = new BankAccount("Mohit","12050010005") 
const Vinay = new BankAccount("Vinay","12050020001",1201)

console.log(Mohit.deposite(10000,depositSuccessMessage))
console.log(Mohit.addInterest(10,InterestRateAddedMessage))
console.log(Mohit.addInterest(1,InterestRateAddedMessage))

console.log(Mohit.deposite(1200,depositSuccessMessage))
console.log(Mohit.deposite(1200,depositSuccessMessage))
console.log(Mohit.withdraw(400,withdrawSuccessMessage))
console.log(Mohit.withdraw(12000,withdrawSuccessMessage))
console.log(Mohit.withdraw(400,withdrawSuccessMessage))

//
function Product(name, price, quantity) {
    this.id=crypto.randomUUID();
    this.name=name;
    this.price=price;
    this.quantity=quantity;

    this.ProductDetails = () => {
        return `
            ProductID: ${this.id}
            Product Name: ${this.name}
            Price: ${this.price}
            Quantity: ${this.quantity}
            Total Price: ${this.price * this.quantity}`;
    };
}

let p1 = new Product("Laptop", 50000, 2)

console.log(p1.ProductDetails());

//factory function in JavaScript
//A factory function in JavaScript is a regular function that returns an object. It is used to create multiple instances of similar objects without the need for the new keyword. Factory functions can have private variables and methods, and they can return different types of objects based on conditions. They provide a flexible way to create objects and encapsulate functionality, allowing for better code organization and reusability. Factory functions are often used when you want to create objects with similar properties and methods but do not require the use of classes or constructor functions.

function BankAccount(name, accNumber, balance = 0) {

    return {

        accountHolderName: name,
        accountNumber: accNumber,
        balance: balance,

        deposite: function (amountToDeposite, callback) {

            if (amountToDeposite > 0) {
                this.balance = this.balance + amountToDeposite;
            }

            return callback(amountToDeposite, this.balance);
        },

        withdraw: function (amountToWithdraw, callback) {

            if (this.balance >= amountToWithdraw) {

                this.balance = this.balance - amountToWithdraw;

                return callback(amountToWithdraw, this.balance);
            }
            else {
                return `Insufficient Balance!`;
            }
        },

        addInterest: function (interestRate, callback) {

            this.balance =
                this.balance + (this.balance * interestRate / 100);

            return callback(this.balance);
        }
    };
}


function depositSuccessMessage(amount, balance) {
    return `Amount +++deposited+++ of Amount: ${amount} | Now Balance: ${balance}`;
}

function withdrawSuccessMessage(amount, balance) {
    return `Amount ---Withdrawn--- of Rs: ${amount} | Now Balance: ${balance}`;
}

function InterestRateAddedMessage(balance) {
    return `Interest Added Now Balance is : ${balance}`;
}

const Mohit2 = BankAccount("Mohit2", "12050010005");
const Vinay2 = BankAccount("Vinay2", "12050020001", 1201);

console.log(Mohit2.deposite(10000, depositSuccessMessage));
console.log(Mohit2.addInterest(10, InterestRateAddedMessage));
console.log(Mohit2.addInterest(1, InterestRateAddedMessage));
console.log(Mohit2.deposite(1200, depositSuccessMessage));
console.log(Mohit2.deposite(1200, depositSuccessMessage));
console.log(Mohit2.withdraw(400, withdrawSuccessMessage));
console.log(Mohit2.withdraw(12000, withdrawSuccessMessage));
console.log(Mohit2.withdraw(400, withdrawSuccessMessage));

//factory function vs constructor function in JavaScript
//In JavaScript, a factory function is a regular function that returns an object. It is used to create multiple instances of similar objects without the need for the new keyword. Factory functions can have private variables and methods, and they can return different types of objects based on conditions. On the other hand, a constructor function is a special type of function that is used to create and initialize objects using the new keyword. Constructor functions have a prototype property that allows you to define methods and properties that will be shared among all instances created by the constructor. While both factory functions and constructor functions can be used to create objects, they have different syntax and behavior.

//
function car(name,model){
    return{
        name, 
        modelName:model,
        displayCar(){
            console.log(`Car_name:  ${name} and Model :${this.modelName}`)
        }
    }
}
const car1 =  car("Breeza","Vitara")

car1.displayCar() 

// 
function Car(name,model){
    this.name=name;
    this.modelName=model;
    this.displayCar=function(){
        console.log(`Car_name:  ${this.name} and Model :${this.modelName}`)
    }
}
const car2 = new Car("Breeza","Vitara")

car2.displayCar()