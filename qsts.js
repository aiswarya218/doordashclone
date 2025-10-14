// //Reverse a string

// const reverseString = (str) => {
//     const strArray = str.split('');
//     const reversedArray =strArray.reverse();
//     return reversedArray.join('');
// };
// console.log(reverseString("hello"));

// //Accepts an array of nos and returns largest no in array

// const findMax = (arr) => {
//     if (arr.length === 0) {
//         return undefined;
//     }
//     return Math.max(...arr);
   
//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > max) {
//             max = arr[i];
//         }
//     }
//     return max;  
// };
// console.log(findMax([3, 1, 9, 2, 5]));


// //Check palindrome

// const isPalindrome = (str) => {
//     const normalizedStr = str.toLOwerCase().replace(/[^a-z0-9]/g, '');
//     const reversedStr = normalizedStr.split('').reverse().joint('');
//     return normalizedStr === reversedStr;
// };
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("hello"));

// //Count Vowels
// const countVowels = (str) => {
//     const lowerStr = str.toLowerCase();
//     let count = 0;
//     const vowels = ['a','e','i','o','u'];
//     for (let char of lowerStr) {
//         if (vowels.includes(char)) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countVowels("Programming"));

// //Remove duplicates from an array

// const removeDuplicates = (arr) => {
//     const uniqueSet = new Set(arr);
//     return Array.from(uniqueSet);
// };
// console.log(removeDuplicates([1,2,2,3,4,3,5]));

// /

// const rizzBuzz = () => {
//     for(let i = 1; i <= 100; i++) {
//         let output = '';

//     if (i % 3 === 0 && i % 5 === 0) {
//         output = "FizzBuzz";
//     }
//     else if (i % 3 === 0) {
//         onmutput = "Fizz";
//     }
//     else if (i % 5 === 0) {
//         output = "Buzz";
//     }
//     else {}
// }
// console.log (removeDuplicates) = ([1, 2, 3, 4, 5, 6, 2]);   



// // Flatten a nested Array

// const flattenArray = (arr) => {
//     return arr.flat(Infinity);

//     let result = [];
//     for ( const element of arr) {
//         if (Array.isArray(element)) {
//             result.push(...flattenArray(element));
//         }
//         else {
//             result.push(element);
//         }
//     }
//     return result;
// };
// console.log(flattenArray([1, [2, [3,4]], 5, [6]]));



// Group By Property

const groupBy = (arr, property) => {
    return arr.reduce((accumulator, currentObject) => {
        const key = currentObject[property];

    if (!accumulator[key]) {
        accumulator[key] = [];
    }
    accumulator[key].push(currentObject);

    return accumulator;
    }, {});
};

const products = [
    { name: 'Laptop', category: 'Electronics' },
    { name: 'T-shirt', category: 'Apparel' },
    { name: 'Phone', category: 'Electronics' },
    { name: 'Jeans', category: 'Apparel' }
]
console.log(groupBy(products, 'category'));


//Factorial Calculation

const factorial = (n) => {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
};
console.log(factorial(5));


//Anagrams

const areAnagrams = (str1, str2) => {
    const cleanAndSort = (str) => {
        return str
          replace(/[^\w]/g, '')
          .toLowerCase()
          .split('')
          .sort()
          .join('');
    };
    return cleanAndSort(str1) === cleanAndSort(str2);
};

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));
console.log(areAnagrams("Dormitory", "dirty room"));



call
   const person = { name: 'Alice' };
   function greet(greeting) {
    console.log(`${greeting}, my name is ${this.name}`);
   }
   greet.call(person, 'Hello');

apply()
    const person1 = { name: 'Bob' };
    function introduce(greeting, age) {
      console.log(`${greeting}, my name is ${this.name} and  I am ${age} years old.`);
    }
    introduce.apply(person1, ['Hi', 30]);

bind()
    const person2 = { name: 'Charlie' };
    function sayGoodbye() {
        console.log(`Goodbye, from ${this.name}`);
    }
    const boundSayGoodbye = sayGoodbye.bind(person2);
    boundSayGoodbye();


// Promise - allows you to associate handlers with an asynchronous action eventual success
//           or failure reason. 
//           it provides a structured way to handle asynchronous ConvolverNode, offering cleaner alternative to traditional callback
//           functions,especially while dealing with many asynchronous tasks.
// three states --  pending, fulfilled and rejected


// Call By Value (Primitive)
    // This means a copy of the actual value is passed to the function's parameter. 
    // Any modifications made to the parameter inside the function will not affect the original variable outside the function. 
// eg:   function modifyPrimitive(num) {
//         num = num + 10;
//         console.log("Inside function (primitive):", num);
//     }
//         let originalNumber = 10;
//         modifyPrimitive(originalNumber);
//         console.log("Outside function (primitive):", originalNumber);

// Call By ReferenceError(Non-Primitive/Objects)  (pass by sharing)
    //    a reference (or memory address) to the original object is passed to the function's parameter.
    //    Any modifications made to the properties of the object inside the function will affect the original object outside the function, because both the original variable and the function parameter point to the same object in memory.
    //    However, if you reassign the parameter to a completely new object inside the function, the original object will remain unchanged, as the parameter now points to a different memory location.
    // eg:   function modifyObject(obj) {
    //       obj.name = "Mary";
    //       console.log("Inside function (object):", obj);
    //       }
    //       let originalObject = { name: "Sunny" };
    //       modifyObject(originalObject);
    //       console.log("Outside function (object):", originalObject);
