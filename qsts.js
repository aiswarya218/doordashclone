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