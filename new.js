// Calculate the remainder of 2 nos 

function calculateRemainder(dividend,divisor) {
    if (divisor === 0) {
        throw new Error ("divisor cant be zero");
    }
    return dividend % divisor;
}
console.log("Remainder is", calculateRemainder(3,5));

// Calculate area of rectangle

function arearect(length,breadth) {
    if (length < 0 || breadth < 0) {
       throw new Error("length and breadth cant be non negative nos");
    }  
    return length * breadth;          
}
console.log("Area of rectangle is", arearect(2,3));

//Calculate area of triangle

function areatri(length,breadth) {
    if (length < 0 || breadth < 0) {
        throw new error("length and breadth cant be non negative numbers");
    }
    return 0.5*length*breadth;
}
console.log("Area of triangle is", areatri(2,3));

//Perfect square or not

function isPerfect(num) {
    if (num<0) return false;
    if (num===0) return true;
    let i = 1;
    while (true) {
        if (i > num / i) {
            return false;
        }
        if (i * i === num) {
            return true;
        }
        i++
    }
}
console.log("Is it:", isPerfect(32));

//Fibonacci series upto n terms

function fibonacciSeries(n) {
    if (n<=0) return [];
    if (n===1) return [0];

    const series = [0,1];
    for (let i=2; i< n; i++) {
        series[i] = series[i - 1] + series[i - 2];
    }
    return true;
}

//Count Vowels

function countVowels(str) {
    let count = 0;
    for (let i = 0; i < str; i++) {
        let char = str[i];
        if (
            char === 'a' || char == 'A' ||
            char === 'e' || char == 'E' ||
            char === 'i' || char == 'I' ||
            char === 'o' || char == 'O' ||
            char === 'u' || char == 'U'
        )
        {
            count++;
        }
    }
}


//Factorial using recursion

function factorial(n) {
    if (n<0) {
        throw new Error("Factorial is not defined for negative numbers");
    }
    if (n===0) {
        return 1;
    }
    return n*factorial(n-1);
}

//Swap two variables
let a = 5;
let b = 10;
[a,b] = [b,a];
console.log(`a: ${a}, b: ${b}`);


//Swap two arrays
let arrayA = [1,2,3];
let arrayB = ['a','b','c','d'];
console.log('Before swap:');
console.log('ArrayA:',arrayA);
console.log('ArrayB:',arrayB); 

[arrayA,arrayB] = [arrayB,arrayA];

console.log('After swap:');
console.log('arrayA:',arrayA);
console.log('arrayB:',arrayB);


//Flatten array
const nestedArray = [1, [2,3], [4,5]];
const flattenArray = [].concat(...nestedArray);


//Range btw highest and lowest no from array
  function Range(arr) {
    if (!arr || arr.length === 0) return null;
    let minVal = arr[0];
    let maxVal = arr[0];
     for (let i = 1; i<arr.length; i++) {
        const current = arr[i];
        if (current > maxVal) {
            maxVal = current;
        } 
        if (current < minVal) {
            minVal = current;
        }
     }
     return maxVal - minVal;
  }
console.log("Find the range:", Range([2,44,6,2,3]));


function Range(arr) {
    if (!arr || arr.length === 0) return null;
    let minVal = arr[0];
    let maxVal = arr[0];
       for (let i = 1; i < arr.length; i++) {
         const current = arr[i];
         if (current > maxVal) {
            maxVal = current;
         }
         if (current < minVal) {
            minVal = current;
         }
       }
       return maxVal - minVal;
}


//Remove Duplicates

function removeDupllicates(arr) {
    const seen = {};
    const result = [];
    let resultIndex = 0;

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        if (seen[item] === undefined) {
            seen[item] = true;
            result[resultIndex] = item;
            resultIndex++;
        }
    }
    return result;
}