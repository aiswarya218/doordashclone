// 1. What Is Hoisting in JavaScript?

// Hoisting refers to JavaScript's behavior of moving variable and function declarations to the top of their scope during the compilation phase. While declarations are hoisted, initializations are not.

// console.log(foo); // undefined
// var foo = 1;
// console.log(foo); // 1

// Visualized as:

// var foo;
// console.log(foo); // undefined
// foo = 1;
// console.log(foo); // 1

// Variables Declared with let, const, and class

// These are hoisted but remain uninitialized, leading to a ReferenceError if accessed before declaration.

// console.log(bar); // ReferenceError
// let bar = 'value';

// Function Declarations vs. Expressions

// Function declarations are fully hoisted (both declaration and definition), while function expressions are only partially hoisted (declaration without initialization).

// console.log(declared()); // Works
// function declared() {
//   return 'Declared function';
// }

// console.log(expr); // undefined
// console.log(expr()); // TypeError: expr is not a function
// var expr = function () {
//   return 'Function expression';
// };

// Imports

// Import statements are hoisted, making imported modules available throughout the file.

// import foo from './foo';
// foo.doSomething(); // Accessible

// Explore the concept of "hoisting" in JavaScript on GreatFrontEnd
// 2. How Do let, var, and const Differ?
// 1. Scope:

//     var**: Function-scoped or globally scoped.
//     let and const**: Block-scoped, confined to their nearest enclosing block.

// function test() {
//   var a = 1;
//   let b = 2;
//   const c = 3;
// }
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// 2. Initialization:

//     var and let**: Can be declared without initialization.
//     const**: Must be initialized during declaration.

// var a;
// let b;
// const c; // SyntaxError: Missing initializer

// 3. Redeclaration:

//     var**: Allows redeclaration in the same scope.
//     let and const**: Redeclaration is not allowed.

// var x = 1;
// var x = 2; // Valid

// let y = 1;
// let y = 2; // SyntaxError

// 4. Reassignment:

//     var and let**: Reassignment is allowed.
//     const**: Reassignment is not allowed.

// const z = 1;
// z = 2; // TypeError

// 5. Hoisting:

//     var**: Hoisted and initialized to undefined.
//     let and const**: Hoisted but not initialized, causing a ReferenceError if accessed before declaration.

// console.log(a); // undefined
// var a = 1;

// console.log(b); // ReferenceError
// let b = 2;

// Explore the differences between let, var, and const on GreatFrontEnd
// 3. What Is the Difference Between == and ===?
// Equality Operator (==):

//     Converts operands to a common type before comparison.
//     May produce unexpected results due to type coercion.

// 42 == '42'; // true
// 0 == false; // true
// null == undefined; // true

// Strict Equality Operator (===):

//     No type conversion; checks both value and type.
//     Ensures accurate comparisons.

// 42 === '42'; // false
// 0 === false; // false
// null === undefined; // false

// Best Practice:

// Prefer === to avoid unexpected behavior caused by type coercion, except when comparing against null or undefined.

// var value = null;
// console.log(value == null); // true
// console.log(value === null); // true

// Explore the difference between == and === on GreatFrontEnd
// 4. What Is the Event Loop in JavaScript?

// The event loop allows JavaScript to handle asynchronous tasks on a single thread, ensuring smooth execution without blocking.
// Components:

//     Call Stack: Tracks function calls in a LIFO order.
//     Web APIs: Handle asynchronous tasks like timers and HTTP requests.
//     Task Queue: Stores tasks like setTimeout and UI events.
//     Microtask Queue: Handles high-priority tasks like Promise callbacks.

// Execution Order:

//     Synchronous code executes first (call stack).
//     Microtasks are processed next.
//     Macrotasks are executed afterward.

// console.log('Start');

// setTimeout(() => console.log('Timeout'), 0);

// Promise.resolve().then(() => console.log('Promise'));

// console.log('End');

// Output:

// Start
// End
// Promise
// Timeout

// Explore the event loop in JavaScript on GreatFrontEnd
// 5. What Is Event Delegation?

// Event delegation uses a single event listener on a parent element to manage events on its child elements. This approach takes advantage of event bubbling, improving efficiency.

//     Reduces memory usage by limiting the number of listeners.
//     Dynamically handles added or removed child elements.

// document.getElementById('parent').addEventListener('click', (event) => {
//   if (event.target.tagName === 'BUTTON') {
//     console.log(`Clicked ${event.target.textContent}`);
//   }
// });

// Explore event delegation in JavaScript on GreatFrontEnd
// 6. How Does this Work in JavaScript?

// The value of this depends on how a function is invoked:

//     Default Binding: Refers to the global object (window in browsers).
//     Implicit Binding: Refers to the object before the dot.
//     Explicit Binding: Defined using call, apply, or bind.
//     Arrow Functions: Lexically inherit this from the surrounding scope.

// const obj = {
//   name: 'Alice',
//   greet() {
//     console.log(this.name);
//   },
// };
// obj.greet(); // Alice

// Explore how this works in JavaScript on GreatFrontEnd
// 7. How Do Cookies, localStorage, and sessionStorage Differ?
// Cookies:

//     Sent with every HTTP request.
//     Limited to 4KB per domain.
//     Can be set to expire.

// document.cookie = 'token=abc123; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/';
// console.log(document.cookie);

// localStorage:

//     Persistent storage (until manually cleared).
//     5MB limit per origin.

// localStorage.setItem('key', 'value');
// console.log(localStorage.getItem('key'));

// sessionStorage:

//     Data cleared when the tab or browser is closed.
//     Limited to 5MB.

// sessionStorage.setItem('key', 'value');
// console.log(sessionStorage.getItem('key'));

// Explore the difference between cookies, localStorage, and sessionStorage on GreatFrontEnd
// 8. What Are <script>, <script async>, and <script defer>?
// <script>:

//     Blocks HTML parsing until the script loads and executes.

// <script async>:

//     Loads scripts asynchronously.
//     Executes as soon as the script is ready, potentially before HTML parsing completes.

// <script defer>:

//     Loads scripts asynchronously.
//     Executes only after the HTML parsing is complete.

// <script src="main.js"></script>
// <script async src="async.js"></script>
// <script defer src="defer.js"></script>

// Explore the difference between <script>, <script async>, and <script defer> on GreatFrontEnd
// 9. How Do null, undefined, and Undeclared Variables Differ?
// null:

// Explicitly represents no value. Use === to check.
// undefined:

// Indicates a variable has been declared but not assigned a value.
// Undeclared:

// Variables not declared will throw a ReferenceError.

// let a;
// console.log(a); // undefined

// let b = null;
// console.log(b); // null

// Explore the difference between null, undefined, and undeclared variables on GreatFrontEnd
// 10. What Is the Difference Between .call and .apply?
// .call:

// Accepts arguments as a comma-separated list.
// .apply:

// Accepts arguments as an array.

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum.call(null, 1, 2)); // 3
// console.log(sum.apply(null, [1, 2])); // 3

// Explore the difference between .call and .apply on GreatFrontEnd
// 11. What Is Function.prototype.bind and Why Is It Useful?

// The Function.prototype.bind method allows you to create a new function with a specific this context and optional preset arguments. It’s particularly useful for ensuring a function has the correct this context when passed to another function or used as a callback.

// const john = {
//   age: 42,
//   getAge: function () {
//     return this.age;
//   },
// };

// console.log(john.getAge()); // 42

// const unboundGetAge = john.getAge;
// console.log(unboundGetAge()); // undefined

// const boundGetAge = john.getAge.bind(john);
// console.log(boundGetAge()); // 42

// const mary = { age: 21 };
// const boundGetAgeMary = john.getAge.bind(mary);
// console.log(boundGetAgeMary()); // 21

// Common Uses:

//     **Binding this: bind is often used to fix the this value for a method, ensuring it always refers to the intended object.
//     Partial Application: You can predefine some arguments for a function using bind.
//     Method Borrowing: bind allows methods from one object to be used on another object.

// Explore Function.prototype.bind on GreatFrontEnd
// 12. Why Use Arrow Functions in Constructors?

// Arrow functions automatically bind the this value to the surrounding lexical scope, which eliminates issues with context in methods. This behavior makes code more predictable and easier to debug.

// const Person = function (name) {
//   this.name = name;

//   this.sayName1 = function () {
//     console.log(this.name);
//   };

//   this.sayName2 = () => {
//     console.log(this.name);
//   };
// };

// const john = new Person('John');
// const dave = new Person('Dave');

// john.sayName1(); // John
// john.sayName2(); // John

// john.sayName1.call(dave); // Dave
// john.sayName2.call(dave); // John

// When to Use:

//     In scenarios like React class components, where methods are passed as props and need to retain their original this context.

// Explore the advantage of using the arrow syntax for a method in a constructor on GreatFrontEnd
// 13. How Does Prototypal Inheritance Work?

// Prototypal inheritance allows objects to inherit properties and methods from other objects through the prototype chain.
// Key Concepts:
// 1. Prototypes:

// Every JavaScript object has a prototype, which is another object from which it inherits properties.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHello = function () {
//   console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
// };

// const john = new Person('John', 30);
// john.sayHello(); // Hello, my name is John and I am 30 years old.

// 2. Prototype Chain:

// JavaScript looks for properties and methods on the object and continues up the chain until it finds the property or reaches null.
// 3. Constructor Functions:

// Used with new to create objects and set their prototype.

// function Animal(name) {
//   this.name = name;
// }

// Animal.prototype.sayName = function () {
//   console.log(`My name is ${this.name}`);
// };

// function Dog(name, breed) {
//   Animal.call(this, name);
//   this.breed = breed;
// }

// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.bark = function () {
//   console.log('Woof!');
// };

// const fido = new Dog('Fido', 'Labrador');
// fido.sayName(); // My name is Fido
// fido.bark(); // Woof!

// Explore how prototypal inheritance works on GreatFrontEnd
// 14. What’s the Difference Between function Person(){}, const person = Person(), and const person = new Person()?
// Function Declaration:

// function Person() {} is a standard function declaration. When written in PascalCase, it conventionally represents a constructor function.
// Function Call:

// const person = Person() calls the function and executes its code but does not create a new object.
// Constructor Call:

// const person = new Person() creates a new object, setting its prototype to Person.prototype.

// Explore the difference between function Person(){}, const person = Person(), and const person = new Person() on GreatFrontEnd
// 15. How Do Function Declarations and Expressions Differ?
// Function Declarations:

// function foo() {
//   console.log('Function declaration');
// }

//     Hoisted with their body.
//     Can be invoked before their definition.

// Function Expressions:

// const foo = function () {
//   console.log('Function expression');
// };

//     Only the variable is hoisted, not the function body.
//     Cannot be invoked before their definition.

// Explore the differences between function declarations and expressions on GreatFrontEnd
// 16. How Can You Create Objects in JavaScript?

//     Object Literals:

// const person = { firstName: 'John', lastName: 'Doe' };

//     Object() Constructor**:

// const person = new Object();
// person.firstName = 'John';
// person.lastName = 'Doe';

//     Object.create()**:

// const proto = {
//   greet() {
//     console.log('Hello!');
//   },
// };
// const person = Object.create(proto);
// person.greet(); // Hello!

//     ES2015 Classes:

// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// Explore ways to create objects in JavaScript on GreatFrontEnd
// 17. What Are Higher-Order Functions?

// Higher-order functions either:

//     Take other functions as arguments.
//     Return functions.

// function multiplier(factor) {
//   return function (number) {
//     return number * factor;
//   };
// }

// const double = multiplier(2);
// console.log(double(5)); // 10

// Explore higher-order functions on GreatFrontEnd
// 18. Differences Between ES2015 Classes and ES5 Constructors
// ES5 Constructor:

// function Person(name) {
//   this.name = name;
// }
// Person.prototype.greet = function () {
//   console.log(`Hello, I’m ${this.name}`);
// };

// ES2015 Class:

// class Person {
//   constructor(name) {
//     this.name = name;
//   }

//   greet() {
//     console.log(`Hello, I’m ${this.name}`);
//   }
// }

// Key Differences:

//     Syntax: Classes are easier to read and write.
//     Inheritance: Classes use extends and super.

// Explore ES2015 classes and ES5 constructors on GreatFrontEnd
// 19. What Is Event Bubbling?

// Event bubbling is when an event starts at the target element and propagates up through its ancestors.

// parent.addEventListener('click', () => console.log('Parent clicked'));
// child.addEventListener('click', () => console.log('Child clicked'));

// Clicking the child triggers both handlers.

// Explore event bubbling on GreatFrontEnd
// 20. What Is Event Capturing?

// Event capturing is when an event starts at the root and propagates down to the target element.
// Enabling Capturing:

// parent.addEventListener('click', () => console.log('Parent capturing'), true);

// Explore event capturing on GreatFrontEnd
// 21. How Do the mouseenter and mouseover Events Differ in JavaScript and Browsers?
// mouseenter

//     Does not propagate through the DOM tree
//     Fires solely when the cursor enters the element itself, excluding its child elements
//     Triggers only once upon entering the parent element, regardless of its internal content

// mouseover

//     Propagates upwards through the DOM hierarchy
//     Activates when the cursor enters the element or any of its descendant elements
//     May lead to multiple event callbacks if there are nested child elements

// Discover the distinctions between mouseenter and mouseover events in JavaScript and browsers on GreatFrontEnd
// 22. Can You Differentiate Between Synchronous and Asynchronous Functions?
// Synchronous Functions

//     Execute operations in a sequential, step-by-step manner
//     Block the program's execution until the current task completes
//     Adhere to a strict, line-by-line execution order
//     Are generally easier to comprehend and debug due to their predictable flow
//     Common use cases include reading files synchronously and iterating over large datasets

// Example:

// const fs = require('fs');
// const data = fs.readFileSync('large-file.txt', 'utf8');
// console.log(data); // Blocks until file is read
// console.log('End of the program');

// Asynchronous Functions

//     Allow the program to continue running without waiting for the task to finish
//     Enable other operations to proceed while waiting for responses or the completion of time-consuming tasks
//     Are non-blocking, facilitating concurrent execution and enhancing performance and responsiveness
//     Commonly used for network requests, file I/O, timers, and animations

// Example:

// console.log('Start of the program');

// fetch('https://api.example.com/data')
//   .then((response) => response.json())
//   .then((data) => console.log(data)) // Non-blocking
//   .catch((error) => console.error(error));

// console.log('End of program');

// Understand the distinctions between synchronous and asynchronous functions on GreatFrontEnd
// 23. Provide a Comprehensive Explanation of AJAX

// AJAX (Asynchronous JavaScript and XML) encompasses a collection of web development techniques that utilize various client-side technologies to build asynchronous web applications. Unlike traditional web applications where every user interaction results in a complete page reload, AJAX enables web apps to send and retrieve data from a server asynchronously. This allows for dynamic updates to specific parts of a web page without disrupting the overall page display and behavior.

// Key Highlights:

//     Asynchronous Operations: AJAX allows parts of a web page to update independently without reloading the entire page.
//     Data Formats: Initially utilized XML, but JSON has become more prevalent due to its seamless compatibility with JavaScript.
//     APIs: Traditionally relied on XMLHttpRequest, though fetch() is now the preferred choice for modern web development.

// XMLHttpRequest API

// Example:

// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === XMLHttpRequest.DONE) {
//     if (xhr.status === 200) {
//       console.log(xhr.responseText);
//     } else {
//       console.error('Request failed: ' + xhr.status);
//     }
//   }
// };
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
// xhr.send();

//     Process: Initiates a new XMLHttpRequest**, assigns a callback to handle state changes, opens a connection to a specified URL, and sends the request.

// fetch() API

// Example:

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.error('Fetch error:', error));

//     Process: Starts a fetch request, processes the response with .then() to parse JSON data, and handles errors using .catch().

// How AJAX Operates with fetch
// 1. Initiating a Request

//     fetch()** starts an asynchronous request to obtain a resource from a given URL.

//     Example:

//     fetch('https://api.example.com/data', {
//       method: 'GET', // or 'POST', 'PUT', 'DELETE', etc.
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

// 2. Promise-Based Response

//     fetch() returns a Promise that resolves to a Response object representing the server's reply.

// 3. Managing the Response

//     The Response object provides methods to handle the content, such as .json(), .text(), and .blob().

//     Example:

//     fetch('https://api.example.com/data')
//       .then((response) => response.json())
//       .then((data) => console.log(data))
//       .catch((error) => console.error('Error:', error));

// 4. Asynchronous Nature

//     fetch()** operates asynchronously, allowing the browser to perform other tasks while awaiting the server's response.
//     Promises (.then(), .catch()) are processed in the microtask queue as part of the event loop.

// 5. Configuring Request Options

//     The optional second parameter in fetch()** allows configuration of various request settings, including HTTP method, headers, body, credentials, and caching behavior.

// 6. Handling Errors

//     Errors such as network failures or invalid responses are captured and managed through the Promise chain using .catch() or try/catch with async/await**.

// Learn how to explain AJAX in detail on GreatFrontEnd
// 24. What Are the Pros and Cons of Utilizing AJAX?

// AJAX (Asynchronous JavaScript and XML) facilitates the asynchronous exchange of data between web pages and servers, enabling dynamic content updates without necessitating full page reloads.
// Advantages

//     Enhanced User Experience: Updates content seamlessly without refreshing the entire page.
//     Improved Performance: Reduces server load by fetching only the required data.
//     Maintains State: Preserves user interactions and client-side states within the page.

// Disadvantages

//     Dependency on JavaScript: Functionality can break if JavaScript is disabled in the browser.
//     Bookmarking Issues: Dynamic content updates make it difficult to bookmark specific states of a page.
//     SEO Challenges: Search engines may find it hard to index dynamically loaded content effectively.
//     Performance on Low-End Devices: Processing AJAX data can be resource-intensive, potentially slowing down performance on less powerful devices.

// Explore the benefits and drawbacks of using AJAX on GreatFrontEnd
// 25. How Do XMLHttpRequest and fetch() Differ?

// Both XMLHttpRequest (XHR) and fetch() facilitate asynchronous HTTP requests in JavaScript, but they vary in syntax, handling mechanisms, and features.
// Syntax and Implementation

//     XMLHttpRequest: Utilizes an event-driven approach, requiring event listeners to manage responses and errors.
//     fetch(): Employs a Promise-based model, offering a more straightforward and intuitive syntax.

// Setting Request Headers

//     XMLHttpRequest: Headers are set using the setRequestHeader method.
//     fetch(): Headers are provided as an object within the options parameter.

// Sending the Request Body

//     XMLHttpRequest: The request body is sent using the send method.
//     fetch(): The body property within the options parameter is used to include the request body.

// Handling Responses

//     XMLHttpRequest: Uses the responseType property to manage different response formats.
//     fetch(): Offers a unified Response object with .then methods for accessing data.

// Managing Errors

//     XMLHttpRequest: Errors are handled via the onerror event.
//     fetch(): Errors are managed using the .catch method.

// Controlling Caching

//     XMLHttpRequest: Managing cache can be cumbersome and often requires workaround strategies.
//     fetch(): Directly supports caching options through its configuration.

// Canceling Requests

//     XMLHttpRequest: Requests can be aborted using the abort() method.
//     fetch(): Utilizes AbortController for canceling requests.

// Tracking Progress

//     XMLHttpRequest: Supports progress tracking with the onprogress event.
//     fetch(): Lacks native support for tracking progress.

// Choosing Between Them: fetch() is generally favored for its cleaner syntax and Promise-based handling, though XMLHttpRequest remains useful for specific scenarios like progress tracking.

// Discover the distinctions between XMLHttpRequest and fetch() on GreatFrontEnd
// 26. What Are the Different Data Types in JavaScript?

// JavaScript encompasses a variety of data types, which are categorized into two main groups: primitive and non-primitive (reference) types.
// Primitive Data Types

//     Number: Represents both integer and floating-point numbers.
//     String: Denotes sequences of characters, enclosed in single quotes, double quotes, or backticks.
//     Boolean: Logical values with true or false.
//     Undefined: A variable that has been declared but not assigned a value.
//     Null: Signifies the intentional absence of any object value.
//     Symbol: A unique and immutable value used primarily as object property keys.
//     BigInt: Allows representation of integers with arbitrary precision, useful for very large numbers.

// Non-Primitive Data Types

//     Object: Stores collections of data and more complex entities.
//     Array: An ordered list of values.
//     Function: Functions are treated as objects and can be defined using declarations or expressions.
//     Date: Represents dates and times.
//     RegExp: Used for defining regular expressions for pattern matching within strings.
//     Map: A collection of keyed data items, allowing keys of any type.
//     Set: A collection of unique values.

// Identifying Data Types: JavaScript is dynamically typed, meaning variables can hold different types of data at various times. The typeof operator is used to determine a variable's type.

// Explore the variety of data types in JavaScript on GreatFrontEnd
// 27. What Constructs Do You Use to Iterate Over Object Properties and Array Elements?

// Looping through object properties and array items is a fundamental task in JavaScript, and there are multiple methods to accomplish this. Below are some of the common approaches:
// Iterating Over Objects
// 1. for...in Loop

// Iterates over all enumerable properties of an object, including inherited ones.

// for (const property in obj) {
//   if (Object.hasOwn(obj, property)) {
//     console.log(property);
//   }
// }

// 2. Object.keys()

// Returns an array containing the object's own enumerable property names.

// Object.keys(obj).forEach((property) => console.log(property));

// 3. Object.entries()

// Provides an array of the object's own enumerable string-keyed [key, value] pairs.

// Object.entries(obj).forEach(([key, value]) => console.log(`${key}: ${value}`));

// 4. Object.getOwnPropertyNames()

// Returns an array of all properties (including non-enumerable ones) directly found on the object.

// Object.getOwnPropertyNames(obj).forEach((property) => console.log(property));

// Iterating Over Arrays
// 1. for Loop

// A traditional loop for iterating over array elements.

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// 2. Array.prototype.forEach()

// Executes a provided function once for each array element.

// arr.forEach((element, index) => console.log(element, index));

// 3. for...of Loop

// Iterates over iterable objects like arrays.

// for (let element of arr) {
//   console.log(element);
// }

// 4. Array.prototype.entries()

// Provides both the index and value of each array element within a for...of loop.

// for (let [index, elem] of arr.entries()) {
//   console.log(index, ': ', elem);
// }

// Learn about the constructs used for iterating over object properties and array elements on GreatFrontEnd
// 28. What Are the Advantages of Using Spread Syntax, and How Does It Differ from Rest Syntax?
// Spread Syntax

// Introduced in ES2015, the spread syntax (...) is a powerful feature for copying and merging arrays and objects without altering the originals. It's widely used in functional programming, Redux, and RxJS.

//     Cloning Arrays/Objects: Creates shallow copies.

// const array = [1, 2, 3];
// const newArray = [...array]; // [1, 2, 3]

// const obj = { name: 'John', age: 30 };
// const newObj = { ...obj, city: 'New York' }; // { name: 'John', age: 30, city: 'New York' }

// Combining Arrays/Objects: Merges them into a new entity.

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

// const obj1 = { foo: 'bar' };
// const obj2 = { qux: 'baz' };
// const mergedObj = { ...obj1, ...obj2 }; // { foo: 'bar', qux: 'baz' }

// Passing Function Arguments: Spreads array elements as individual arguments.

// const numbers = [1, 2, 3];
// Math.max(...numbers); // Equivalent to Math.max(1, 2, 3)

// Array vs. Object Spreads: Only iterables can be spread into arrays, while arrays can also be spread into objects.

//     const array = [1, 2, 3];
//     const obj = { ...array }; // { 0: 1, 1: 2, 2: 3 }

// Rest Syntax

// The rest syntax (...) collects multiple elements into an array or object, functioning as the opposite of spread syntax.

//     Function Parameters: Gathers remaining arguments into an array.

// function addFiveToNumbers(...numbers) {
//   return numbers.map((x) => x + 5);
// }
// const result = addFiveToNumbers(4, 5, 6, 7); // [9, 10, 11, 12]

// Array Destructuring: Collects remaining elements into a new array.

// const [first, second, ...remaining] = [1, 2, 3, 4, 5];
// // first: 1, second: 2, remaining: [3, 4, 5]

// Object Destructuring: Gathers remaining properties into a new object.

// const { e, f, ...others } = { e: 1, f: 2, g: 3, h: 4 };
// // e: 1, f: 2, others: { g: 3, h: 4 }

// Rest Parameter Rules: Must be the final parameter in a function.

//     function addFiveToNumbers(arg1, ...numbers, arg2) {
//       // Error: Rest element must be last element.
//     }

// Understand the benefits of spread syntax and how it differs from rest syntax on GreatFrontEnd
// 29. How Does a Map Object Differ from a Plain Object in JavaScript?
// Map Object

//     Key Flexibility: Allows keys of any type, including objects, functions, and primitives.
//     Order Preservation: Maintains the order in which keys are inserted.
//     Size Property: Includes a size property to easily determine the number of key-value pairs.
//     Iteration: Directly iterable with methods like forEach, keys(), values(), and entries().
//     Performance: Typically offers better performance for larger datasets and frequent modifications.

// Plain Object

//     Key Types: Primarily uses strings or symbols as keys. Non-string keys are converted to strings.
//     Order: Does not guarantee the order of key insertion.
//     Size Tracking: Lacks a built-in property to determine the number of keys; requires manual counting.
//     Iteration: Not inherently iterable. Requires methods like Object.keys(), Object.values(), or Object.entries() to iterate.
//     Performance: Generally faster for small datasets and simple operations.

// // Map
// const map = new Map();
// map.set('key1', 'value1');
// map.set({ key: 'key2' }, 'value2');
// console.log(map.size); // 2

// // Plain Object
// const obj = { key1: 'value1' };
// obj[{ key: 'key2' }] = 'value2';
// console.log(Object.keys(obj).length); // 1 (keys are strings)

// Discover the differences between a Map object and a plain object in JavaScript on GreatFrontEnd
// 30. What Are the Differences Between Map/Set and WeakMap/WeakSet?

// The primary distinctions between Map/Set and WeakMap/WeakSet in JavaScript are outlined below:

//     Key Types:
//         Map and Set accept keys of any type, including objects, primitives, and functions.
//         WeakMap and WeakSet exclusively use objects as keys, disallowing primitive values like strings or numbers.

//     Memory Management:
//         Map and Set maintain strong references to their keys and values, preventing their garbage collection.
//         WeakMap and WeakSet use weak references for keys (objects), allowing garbage collection if there are no other strong references.

//     Key Enumeration:
//         Map and Set have enumerable keys that can be iterated over.
//         WeakMap and WeakSet do not allow enumeration of keys, making it impossible to retrieve lists of keys or values directly.

//     Size Property:
//         Map and Set provide a size property indicating the number of elements.
//         WeakMap and WeakSet lack a size property since their size can change due to garbage collection.

//     Use Cases:
//         Map and Set are suitable for general-purpose data storage and caching.
//         WeakMap and WeakSet are ideal for storing metadata or additional object-related information without preventing the objects from being garbage collected when they are no longer needed.

// Learn about the differences between Map/Set and WeakMap/WeakSet on GreatFrontEnd
// 31. What is a Practical Scenario for Using the Arrow => Function Syntax?

// One effective application of JavaScript's arrow function syntax is streamlining callback functions, especially when concise, inline function definitions are needed. Consider the following example:

// **Scenario: Doubling Array Elements with map

// Imagine you have an array of numbers and you want to double each number using the map method.

// // Traditional function syntax
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map(function (number) {
//   return number * 2;
// });

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// By utilizing arrow function syntax, the same outcome can be achieved more succinctly:

// // Arrow function syntax
// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers.map((number) => number * 2);

// console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Explore a use case for the new arrow => function syntax on GreatFrontEnd
// 32. How Do Callback Functions Operate in Asynchronous Tasks?

// In the realm of asynchronous programming, a callback function is passed as an argument to another function and is executed once a particular task completes, such as data retrieval or handling input/output operations. Here's a straightforward explanation:

// function fetchData(callback) {
//   setTimeout(() => {
//     const data = { name: 'John', age: 30 };
//     callback(data);
//   }, 1000);
// }

// fetchData((data) => {
//   console.log(data); // { name: 'John', age: 30 }
// });

// Explore the concept of a callback function in asynchronous operations on GreatFrontEnd
// 33. Can You Describe Debouncing and Throttling Techniques?

// Debouncing and throttling are techniques used to control the rate at which functions are executed, optimizing performance and managing event-driven behaviors in JavaScript applications.

//     Debouncing: Delays the execution of a function until a specified period has elapsed since its last invocation. This is particularly useful for scenarios like handling search input where you want to wait until the user has finished typing before executing a function.

// function debounce(func, delay) {
//   let timeoutId;
//   return (...args) => {
//     clearTimeout(timeoutId);
//     timeoutId = setTimeout(() => func.apply(this, args), delay);
//   };
// }

// Throttling: Restricts a function to be executed no more than once within a given timeframe. This is beneficial for handling events that fire frequently, such as window resizing or scrolling.

//     function throttle(func, limit) {
//       let inThrottle;
//       return (...args) => {
//         if (!inThrottle) {
//           func.apply(this, args);
//           inThrottle = true;
//           setTimeout(() => (inThrottle = false), limit);
//         }
//       };
//     }

// These strategies help in enhancing application performance by preventing excessive function calls.

// Explore the concept of debouncing and throttling on GreatFrontEnd
// 34. How Does Destructuring Assignment Work for Objects and Arrays?

// Destructuring assignment in JavaScript provides a concise way to extract values from arrays or properties from objects into individual variables.

// // Array destructuring
// const [a, b] = [1, 2];

// // Object destructuring
// const { name, age } = { name: 'John', age: 30 };

// This syntax employs square brackets for arrays and curly braces for objects, allowing for streamlined variable assignments directly from data structures.

// Explore the concept of destructuring assignment for objects and arrays on GreatFrontEnd
// 35. What is Hoisting in the Context of Functions?

// Hoisting in JavaScript refers to the behavior where function declarations are moved to the top of their containing scope during the compilation phase. This allows functions to be invoked before their actual definition in the code. Conversely, function expressions and arrow functions must be defined prior to their invocation to avoid errors.

// // Function declaration
// hoistedFunction(); // Works fine
// function hoistedFunction() {
//   console.log('This function is hoisted');
// }

// // Function expression
// nonHoistedFunction(); // Throws an error
// var nonHoistedFunction = function () {
//   console.log('This function is not hoisted');
// };

// Explore the concept of hoisting with regards to functions on GreatFrontEnd
// 36. How Does Inheritance Work in ES2015 Classes?

// In ES2015, JavaScript introduces the class syntax with the extends keyword, enabling one class to inherit properties and methods from another. The super keyword is used to access the parent class's constructor and methods.

// class Animal {
//   constructor(name) {
//     this.name = name;
//   }

//   speak() {
//     console.log(`${this.name} makes a noise.`);
//   }
// }

// class Dog extends Animal {
//   constructor(name, breed) {
//     super(name);
//     this.breed = breed;
//   }

//   speak() {
//     console.log(`${this.name} barks.`);
//   }
// }

// const dog = new Dog('Rex', 'German Shepherd');
// dog.speak(); // Output: Rex barks.

// In this example, the Dog class inherits from the Animal class, demonstrating how classes facilitate inheritance and method overriding in JavaScript.

// Explore the concept of inheritance in ES2015 classes on GreatFrontEnd
// 37. What is Lexical Scoping?

// Lexical scoping in JavaScript determines how variable names are resolved based on their location within the source code. Nested functions have access to variables from their parent scopes, enabling them to utilize and manipulate these variables.

// function outerFunction() {
//   let outerVariable = 'I am outside!';

//   function innerFunction() {
//     console.log(outerVariable); // 'I am outside!'
//   }

//   innerFunction();
// }

// outerFunction();

// In this scenario, innerFunction can access outerVariable because of lexical scoping rules, which allow inner functions to access variables defined in their outer scope.

// Explore the concept of lexical scoping on GreatFrontEnd
// 38. What is Scope in JavaScript?

// Scope in JavaScript defines the accessibility of variables and functions in different parts of the code. There are three primary types of scope:

//     Global Scope: Variables declared outside any function or block are accessible throughout the entire code.
//     Function Scope: Variables declared within a function are accessible only within that function.
//     Block Scope: Introduced in ES6, variables declared with let or const within a block (e.g., within {}) are accessible only within that block.

// // Global scope
// var globalVar = 'I am global';

// function myFunction() {
//   // Function scope
//   var functionVar = 'I am in a function';

//   if (true) {
//     // Block scope
//     let blockVar = 'I am in a block';
//     console.log(blockVar); // Accessible here
//   }

//   // console.log(blockVar); // Throws an error
// }

// console.log(globalVar); // Accessible here
// // console.log(functionVar); // Throws an error

// In this example, globalVar is accessible globally, functionVar is confined to myFunction, and blockVar is restricted to the if block.

// Explore the concept of scope in JavaScript on GreatFrontEnd
// 39. What is the Spread Operator and How is it Used?

// The spread operator (...) in JavaScript allows iterable elements (like arrays or objects) to be expanded into individual elements. It's versatile and can be used for copying, merging, and passing array elements as function arguments.

// // Copying an array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1];

// // Merging arrays
// const arr3 = [4, 5, 6];
// const mergedArray = [...arr1, ...arr3];

// // Copying an object
// const obj1 = { a: 1, b: 2 };
// const obj2 = { ...obj1 };

// // Merging objects
// const obj3 = { c: 3, d: 4 };
// const mergedObject = { ...obj1, ...obj3 };

// // Passing array elements as function arguments
// const sum = (x, y, z) => x + y + z;
// const numbers = [1, 2, 3];
// console.log(sum(...numbers)); // Output: 6

// The spread operator simplifies operations such as copying arrays or objects, merging multiple arrays or objects into one, and spreading elements of an array as individual arguments to functions.

// Explore the concept of the spread operator and its uses on GreatFrontEnd
// 40. How Does this Binding Work in Event Handlers?

// In JavaScript, the this keyword refers to the object that is executing the current piece of code. Within event handlers, this typically points to the DOM element that triggered the event. However, its value can change depending on how the handler is defined and invoked. To ensure this references the intended context, techniques like using bind(), arrow functions, or explicitly setting the context are employed.

// These methods help maintain the correct reference for this within event handling functions, ensuring consistent and predictable behavior across various event-driven scenarios in JavaScript applications.

// Explore the concept of this binding in event handlers on GreatFrontEnd
// 41. What is a Block Formatting Context (BFC) and How Does It Function?

// A Block Formatting Context (BFC) is a pivotal concept in CSS that influences how block-level elements are rendered and interact on a webpage. It creates an isolated environment where block boxes are laid out, ensuring that elements like floats, absolutely positioned elements, inline-blocks, table-cells, table-captions, and those with an overflow value other than visible (except when propagated to the viewport) establish a new BFC.

// Grasping how to initiate a BFC is essential because, without it, the containing box might fail to encompass floated child elements. This issue is akin to collapsing margins but is often more deceptive, causing entire boxes to collapse unexpectedly.

// A BFC is formed when an HTML box satisfies at least one of the following criteria:

//     The float property is set to a value other than none.
//     The position property is assigned a value that is neither static nor relative.
//     The display property is set to table-cell, table-caption, inline-block, flex, inline-flex, grid, or inline-grid.
//     The overflow property is set to a value other than visible.

// Within a BFC, each box's left outer edge aligns with the left edge of its containing block (or the right edge in right-to-left layouts). Additionally, vertical margins between adjacent block-level boxes within a BFC collapse into a single margin.

// Discover Block Formatting Context (BFC) and its Operation on GreatFrontEnd
// 42. What is z-index and How is a Stacking Context Created?

// The z-index property in CSS manages the vertical stacking order of overlapping elements. It only influences positioned elements—those with a position value other than static—and their descendants or flex items.

// In the absence of a z-index value, elements stack based on their order in the Document Object Model (DOM), with elements appearing later in the HTML markup rendered on top of earlier ones at the same hierarchy level. Positioned elements (those with non-static positioning) and their children will always overlay elements with default static positioning, regardless of their order in the HTML structure.

// A stacking context is essentially a group of elements that share a common stacking order. Within a local stacking context, the z-index values of child elements are relative to that context rather than the entire document. Elements outside of this context—such as sibling elements of a local stacking context—cannot interpose between layers within it. For instance, if element B overlays element A, a child of element A, element C, cannot surpass element B in the stacking order even if it has a higher z-index than element B.

// Each stacking context operates independently; after stacking its child elements, the entire context is treated as a single entity within the parent stacking context's order. Certain CSS properties, like an opacity less than 1, a filter that isn't none, or a transform that isn't none, can trigger the creation of a new stacking context.

// Learn about z-index and Stacking Contexts on GreatFrontEnd
// 43. How Does a Browser Match Elements to a CSS Selector?

// This topic relates to writing efficient CSS, specifically how browsers interpret and apply CSS selectors. Browsers process selectors from right to left, starting with the most specific (the key selector) and moving outward. They first identify all elements that match the rightmost part of the selector and then traverse up the DOM tree to verify if those elements meet the remaining parts of the selector.

// For example, consider the selector p span. Browsers will first locate all <span> elements and then check each span's ancestor chain to determine if it is within a <p> element. Once a <p> ancestor is found for a given <span>, the browser confirms that the <span> matches the selector and ceases further traversal for that element.

// The efficiency of selector matching is influenced by the length of the selector chain—the shorter the chain, the quicker the browser can verify matches.

// Understand How Browsers Match CSS Selectors on GreatFrontEnd
// 44. What is the Box Model in CSS and How Can You Control Its Rendering?

// The CSS box model is a fundamental concept that describes the rectangular boxes generated for elements in the document tree, determining how they are laid out and displayed. Each box comprises a content area (such as text or images) surrounded by optional padding, border, and margin areas.

// The box model is responsible for calculating:

//     The total space a block element occupies.
//     Whether borders and margins overlap or collapse.
//     The overall dimensions of a box.

// Box Model Rules

//     Dimensions Calculation: A block element's size is determined by its width, height, padding, and border.
//     Automatic Height: If no height is specified, a block element's height adjusts to its content plus padding (unless floats are involved).
//     Automatic Width: If no width is set, a non-floated block element expands to fit its parent's width minus padding, unless a max-width is specified.
//         Certain block-level elements like table, figure, and input have inherent width values and may not expand fully.
//         Inline elements like span do not have a default width and will not expand to fit.
//     Content Dimensions: An element's height and width are determined by its content.
//     Box-Sizing: By default (box-sizing: content-box), padding and border are not included in an element's width and height.

// Note: Margins do not contribute to the actual size of the box; they affect the space outside the box. The box's area is confined to the border and does not extend into the margin.
// Additional Considerations

// Understanding the box-sizing property is crucial as it alters how an element's height and width are calculated.

//     box-sizing: content-box:** The default behavior where only the content size is considered.
//     box-sizing: border-box:** Includes padding and border in the element's total width and height, excluding margin.

// Many CSS frameworks adopt box-sizing: border-box globally for a more intuitive sizing approach.

// Explore the Box Model and Its Control in CSS on GreatFrontEnd
// 45. How Do You Utilize the CSS display Property? Provide Examples.

// The display property in CSS dictates how an element is rendered in the document flow. Common values include none, block, inline, inline-block, flex, grid, table, table-row, table-cell, and list-item.

// Description:

// none

// Hides the element; it does not occupy any space in the layout. All child elements are also hidden. The element is treated as if it does not exist in the DOM.

// block

// The element occupies the full width available, starting on a new line.

// inline

// The element does not start on a new line and only occupies as much width as necessary.

// inline-block

// Combines characteristics of both inline and block. The element flows with text but can have width and height set.

// flex

// Defines the element as a flex container, enabling the use of flexbox layout for its children.

// grid

// Defines the element as a grid container, allowing for grid-based layout of its children.

// table

// Makes the element behave like a <table> element.

// table-row

// Makes the element behave like a <tr> (table row) element.

// table-cell

// Makes the element behave like a <td> (table cell) element.

// list-item

// Makes the element behave like a <li> (list item) element, enabling list-specific styling such as list-style-type and list-style-position.

// For a comprehensive list of display property values, refer to the CSS Display | MDN.

// Understand the CSS display Property with Examples on GreatFrontEnd
// 46. How Do relative, fixed, absolute, sticky, and static Positioning Differ?

// In CSS, an element's positioning is determined by its position property, which can be set to relative, fixed, absolute, sticky, or static. Here's how each behaves:

//     static:** The default positioning. Elements flow naturally within the document. The top, right, bottom, left, and z-index properties have no effect.

//     relative:** The element is positioned relative to its normal position. Adjustments using top, right, bottom, or left move the element without affecting the layout of surrounding elements, leaving a gap where it would have been.

//     absolute:** The element is removed from the normal document flow and positioned relative to its nearest positioned ancestor (an ancestor with a position other than static). If no such ancestor exists, it positions relative to the initial containing block. Absolutely positioned elements do not affect the position of other elements and can have width and height specified.

//     fixed:** Similar to absolute, but the element is positioned relative to the viewport, meaning it stays in the same place even when the page is scrolled.

//     sticky:** A hybrid of relative and fixed. The element behaves like relative until it crosses a specified threshold (e.g., scroll position), after which it behaves like fixed, sticking to its position within its parent container.

// Understanding these positioning schemes is vital for controlling the layout and behavior of elements, especially in responsive and dynamic designs.

// Learn About Positioning Schemes in CSS on GreatFrontEnd
// 47. What Should You Consider When Designing for Multilingual Websites?

// Designing and developing for multilingual websites involves various considerations to ensure accessibility and usability across different languages and cultures. This process is part of internationalization (i18n).
// Search Engine Optimization (SEO)

//     Language Attribute: Use the lang attribute on the <html> tag to specify the page's language.
//     Locale in URLs: Include locale identifiers in URLs (e.g., en_US, zh_CN).
//     Alternate Links: Utilize <link rel="alternate" hreflang="other_locale" href="url_for_other_locale"> to inform search engines about alternate language versions of the page.
//     Fallback Pages: Provide a fallback page for unmatched languages using <link rel="alternate" href="url_for_fallback" hreflang="x-default" />.

// Locale vs. Language

//     Locale: Controls regional settings like number formats, dates, and times, which may vary within a language.
//     Language Variations: Recognize that widely spoken languages have different dialects and regional variations (e.g., en-US vs. en-GB, zh-CN vs. zh-TW).

// Locale Prediction and Flexibility

//     Automatic Detection: Servers can detect a visitor's locale using HTTP Accept-Language headers and IP addresses.
//     User Control: Allow users to easily change their preferred language and locale settings to account for inaccuracies in automatic detection.

// Text Length and Layout

//     Variable Lengths: Be aware that translations can alter text length, potentially affecting layout and causing overflow issues.
//     Design Flexibility: Avoid rigid designs that cannot accommodate varying text lengths, especially for headings, labels, and buttons.

// Reading Direction

//     Left-to-Right (LTR) vs. Right-to-Left (RTL): Accommodate different text directions, such as Hebrew and Arabic, by designing flexible layouts that can adapt to both LTR and RTL orientations.

// Avoid Concatenating Translated Strings

//     Dynamic Content: Instead of concatenating strings (e.g., "The date today is " + date), use template strings with parameter substitution to accommodate different grammar structures across languages.

//     Example:

//     // English
//     const message = `I will travel on ${date}`;

//     // Chinese
//     const message = `我会在${date}出发`;

// Formatting Dates and Currencies

//     Regional Formats: Adapt date and currency formats to match regional conventions (e.g., "May 31, 2012" in the U.S. vs. "31 May 2012" in Europe).

// Text in Images

//     Scalability Issues: Avoid embedding text within images, as it complicates translation and accessibility. Use text elements styled with CSS instead to allow for easier localization.

// Cultural Perceptions of Color

//     Color Sensitivity: Be mindful that colors can carry different meanings and emotions across cultures. Choose color schemes that are culturally appropriate and inclusive.

// Understand Multilingual Design Considerations on GreatFrontEnd
// 48. How Do block, inline, and inline-block Display Types Differ?

// The display property in CSS determines how elements are rendered on the page. The block, inline, and inline-block values have distinct behaviors and use cases:
// Property	block	inline-block	inline
// Size	Fills up the width of its parent container.	Depends on content.	Depends on content.
// Positioning	Start on a new line and tolerates no HTML elements next to it (except when you add float)	Flows along with other content and allows other elements beside it.	Flows along with other content and allows other elements beside it.
// Can specify width and height	Yes	Yes	No. Will ignore if being set.
// Can be aligned with vertical-align	No	Yes	Yes
// Margins and paddings	All sides respected.	All sides respected.	Only horizontal sides respected. Vertical sides, if specified, do not affect layout. Vertical space it takes up depends on line-height, even though the border and padding appear visually around the content.
// Float	-	-	Becomes like a block element where you can set vertical margins and paddings.
// Use Cases	Layout elements like <div>, <p>, <section>.	Used for buttons, images, and form fields that need custom sizes but stay in line with text.	Links <a>, text formatting <span>, text styling - bold <b>, italics <i>.

// Learn the Differences Between block, inline, and inline-block on GreatFrontEnd
// 49. When Would You Prefer translate() Over Absolute Positioning, or Vice Versa?

// The translate() function is a part of the CSS transform property and offers a different approach to positioning compared to absolute positioning. Here's why you might choose one over the other:

//     Using translate():
//         Flow Preservation: Elements remain in their original position within the document flow, similar to position: relative.
//         Performance Benefits: Modifying transform or opacity does not trigger browser reflows or repaints; instead, it initiates a composition layer. This results in smoother and more efficient animations, as translate() leverages the GPU for rendering.
//         Layout Stability: The surrounding layout remains unaffected since the element's space is preserved.

// .element {
//   transform: translateX(50px);
// }

// Using absolute Positioning:

//     Flow Removal: The element is taken out of the normal document flow, and its position is calculated relative to the nearest positioned ancestor or the viewport.
//     Reflow Trigger: Changing an element's absolute position can cause the browser to recalculate the layout (reflow), which is more CPU-intensive.
//     Overlapping Control: Useful for precise placement of elements without affecting other elements' positions.

//     .element {
//       position: absolute;
//       top: 20px;
//       left: 30px;
//     }

// Why Choose translate()?

// For animations and dynamic movements where performance and smoothness are critical, translate() is more efficient. It avoids the costly reflows associated with changing layout-affecting properties like top and left.

// Why Choose absolute Positioning?

// When you need to position elements precisely without regard to their original place in the document flow, absolute positioning is the way to go. It's essential for creating overlays, modals, and tooltips that need to appear in specific locations on the screen.

// Understand When to Use translate() vs. Absolute Positioning on GreatFrontEnd
// 50. What Does * { box-sizing: border-box; } Do and What Are Its Advantages?

// Applying * { box-sizing: border-box; } in your CSS ensures that all elements on the page use the border-box model for calculating their width and height.
// What It Does

// By default, elements use box-sizing: content-box, where the width and height only account for the content area. When you set box-sizing: border-box, the width and height properties include the element's padding and border, but not the margin.
// Comparison Table
// Property	box-sizing: content-box (default)	box-sizing: border-box
// content	Yes	Yes
// padding	No	Yes
// border	No	Yes
// margin	No	No
// Advantages

//     Intuitive Sizing: Including padding and border within the width and height makes it easier to calculate the size of elements, aligning more closely with designers' expectations.
//     Simplified Layouts: Prevents unexpected sizing issues, especially when adding padding or border to elements, as it doesn't alter the total size.
//     Consistency Across Frameworks: Many CSS frameworks like Bootstrap, Tailwind, and Bulma set box-sizing: border-box globally to maintain consistency and predictability in element sizing.
