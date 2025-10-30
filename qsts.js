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



    function maxWater(arr) {
        let left = 1;
        let right = arr.length - 2;  
        let lMax = arr[left - 1];
        let rMax = arr[right + 1];
        let res = 0;

        while (left <= right) {
            if (rMax <= lMax) {
                res += Math.max(0, rMax - arr[right]);
                rMax = Math.max(rMax, arr[right]);
                right -= 1;
            }
            else {
                res += Math.max(0, lMax - arr[left]);
                lMax = Math.max(lMax, arr[left]);
                left += 1;
            }
        }
        return res;   
    }
    let arr = [2, 1, 5, 3, 1, 0, 4];
    console.log(maxWater(arr));  


//BUBBLE SORTING 
   function bubbleSort(arr) {
      const n = arr.length;
      let swapped;
        for (let i = 0; i < n - 1; i++) {
            swapped = false;
            for (let j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                    swapped = true;
                }
            }
            if (!swapped) {
                break;
            }
        }
        let bubbleArr = [5, 1, 4, 2, 8];
        console.log("Original Array (Bubble Sort):", bubbleArr);
        console.log("Sorted Array (Bubble Sort):", bubbleSort(bubbleArr));     //[1, 2, 4, 5, 8]
    }     


//QUICK SORTING
 function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2);
    const pivot = arr[pivotIndex];

    const remaining = arr.slice(0, pivotIndex).concat(arr.slice(pivotIndex + 1));
    const less = [];
    const greater = [];
     for (const element of remaining) {
        if (element <= pivot) {
            less.push(element);
        }
        else {
            greater.push(element);
        }
     }

     return [
        ...quickSort(less),
        pivot,
        ...quickSort(greater)
     ];
    }
let quickArr = [8, 3, 1, 5, 4, 9, 2];
console.log("Original Array (Quick Sort):", quickArr);
console.log("Sorted Array (Quick Sort):", quickSort(quickArr));  //[1,2,3,4,5,8,9]


function maxWater(arr) {
    let res = 0;
    for (let i = 1; i < arr.length - 1; i++) {
        let left = arr[i];
        for (let j = 0; j < i; j++)
            left = Math.Emax(left, arr[j]);
        let right = arr[i];
        for (let j = i +1; j < arr.length; j++)
            right = Math.max(right, arr[j]);
        res += Math.min(left, right) - arr[i];
    }
    return res;
}
let arr1 = [2, 1, 5, 3, 1, 0, 4];
console.log(maxWater(arr));



function fetchData() {
    return fetch("https://api.example.com/data")
      .then((response) => response.json())
      .then((data) => {
         console.log(data);
      });
}
async function processData() {
    try {
        const data = await fetchData();
    }
    catch (error) {
        console.log(error);
    }
}
processData();


function printNumbers() {
    for (var i = 0; i < 5; i++) {
        setTimeout(function() {
            console.log(i);
        }, 1000);
    }
}
printNumbers(); // prints 5 five times due to closure capturing the same 'i' variable



// CREATING A PROMISE
  function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;
            if (success) {
                resolve({ data: "API data retrieved successfully!" });
            }
            else {
                reject(new Error("Network connection timed out."));
            }
        }, 1500);
    });
  }

  //CONSUMING A PROMISE(.then() and .catch())
    console.log("Starting data fetch...");
    fetchData()
        .then(result => {
            console.log("Success! Data received:");
            console.log(result.data);
            return "Processed: " + result.data;
        })
        .then(processedData => {
            console.log("Next Step (Chaining):");
            console.log(processedData);
        })
        .catch(error => {
            console.error("Error! Failed to fetch data:");
            console.error(error.message);
        })
        .finally(() => {
            console.log("--- Fetch operation concluded ---");
        });
    console.log("This message appears immediately because this fetch is asynchronous");

    // PENDING - initial state, neither fulfilled nor rejected.
    // FULFILLED - meaning that the operation completed successfully.
    // REJECTED - meaning that the operation failed.  
    
//Closure - makeCounter fn acts as a factory that creates and returns inner function
    function makeCounter() {
        let count = 0;
        return function() {
            count += 1;
            return count;
        };
    }

const counter1 = makeCounter();
console.log(counter1()); // Output: 1
console.log(counter1()); // Output: 2
console.log(counter1()); // Output: 3

const counter2 = makeCounter();
console.log(counter2()); // Output: 1
console.log(counter1()); // Output: 4


// Time Complexity - Big O Notation

// O(1) - Constant Time
  function checkFirst(arr) {
    if (arr.length === 0) return null;
    return arr[0];
  }
  const persons = { name: "Alice", age: 30 };
  console.log(person.age);

//O(n) - Linear Time
    function sumArray(arr) {
        let sum = 0;
        for (let i = 0;  i < arr.length; i++) {
            sum += arr[i];
        }
        return sum;
    }
    const doubled = arr.map(x => x * 2);

//O(n^2) - Quadratic Time
   function hasDuplicates(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr[i] === arr[j]) {
                return true;
            }
        }
        return false;
    }
}