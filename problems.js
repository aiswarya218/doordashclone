//  1. Calculate the remainder of two numbers

function calculateRemainder(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Divisor cannot be zero.");
    }

    let absDividend = dividend;
    if (absDividend < 0) absDividend = -absDividend; 

    let absDivisor = divisor;
    if (absDivisor < 0) absDivisor = -absDivisor; 

    let remainder = absDividend;

    // Repeated subtraction
    while (remainder >= absDivisor) {
        remainder -= absDivisor;
    }

    // Apply the sign of the original dividend (standard remainder definition)
    if (dividend < 0 && remainder !== 0) {
        return remainder - absDivisor;
    }

    return remainder;
}
console.log("Remainder is", calculateRemainder(3,9));

//  2. Find the average of an array of numbers

function calculateAverage(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }

    let sum = 0;
    let length = 0;

    for (let i = 0; i < arr.length; i++) { 
        sum += arr[i];
        length++;
    }

    if (length === 0) return 0;
    return sum / length;
}
console.log("Average is", calculateAverage([2,8,44,3]));

// 3. Add two matrices

function addMatrices(matrixA, matrixB) {
    const rows = matrixA.length;
    if (rows === 0) return [];
    const cols = matrixA[0].length;

    if (rows !== matrixB.length || cols !== matrixB[0].length) {
        throw new Error("Matrices must have the same dimensions for addition.");
    }

    const result = [];
    for (let i = 0; i < rows; i++) {
        result[i] = [];
        for (let j = 0; j < cols; j++) {
            // Basic addition - no built-in logic to replace
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }
    return result;
}

// 4. Calculate the area of a rectangle

function areaOfRectangle(length, breadth) {
    if (length < 0 || breadth < 0) {
        throw new Error("Length and breadth must be non-negative.");
    }
    return length * breadth;
}

// 5. Check if the given matrix is a diagonal matrix

function isDiagonalMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        // Ensure it is a square matrix
        if (matrix[i].length !== n) {
            return false;
        } 
        for (let j = 0; j < n; j++) {
            // Check non-diagonal elements
            if (i !== j && matrix[i][j] !== 0) {
                return false;
            }
        }
    }
    return true;
}
const identityMatrix = [
    [1, 0, 0], 
    [0, 1, 0],
    [0, 0, 1]
];

console.log("Is Diagonal", isDiagonalMatrix(identityMatrix)); 

// 6. Check if the given matrix is an identity matrix

function isIdentityMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) { 
            return false;
        }
        for (let j = 0; j < n; j++) {
            if (i === j) {
                // Diagonal elements must be 1
                if (matrix[i][j] !== 1) return false; 
            } else {
                // Non-diagonal elements must be 0
                if (matrix[i][j] !== 0) return false;
            }
        }
    }
    return true;
}

// 7. Returns the transpose of a given matrix

function transposeMatrix(matrix) {
    const rows = matrix.length;
    if (rows === 0) return [];
    const cols = matrix[0].length;

    const result = [];
    for (let j = 0; j < cols; j++) { // Loop over columns first
        result[j] = [];
        for (let i = 0; i < rows; i++) { // Then loop over rows
            // Swap indices (i, j) to (j, i)
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

// 8. Find the most repeated value in an array of numbers

function mostRepeatedValue(arr) {
    if (!arr || arr.length === 0) return null;
    const frequencyMap = {};
    let maxCount = 0;
    let mostRepeated = arr[0];

    // Using a standard for loop
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        // Manual frequency count (replaces frequencyMap[item] || 0)
        if (frequencyMap[item] === undefined) {
            frequencyMap[item] = 1;
        } else {
            frequencyMap[item] = frequencyMap[item] + 1;
        }

        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostRepeated = item;
        }
    }
    return mostRepeated;
}

// 9. Approximates the derivative of $f(x)=x^n$

function customPower(base, exp) {
    if (exp === 0) return 1;
    if (exp < 0) return 1 / customPower(base, -exp); // Handle negative exponents
    
    let result = 1;
    for (let i = 0; i < exp; i++) {
        result *= base;
    }
    return result;
}

//with Math.pow
function approximateDerivative(n, x, h = 0.0001) {
    const f = (val) => customPower(val, n); // Use custom power function
    return (f(x + h) - f(x)) / h;
}

// 10. Check if the given number is a perfect square or not

function isPerfectSquare(num) {
    if (num < 0) return false;
    if (num === 0) return true;

    // We only need to check integers up to num/2 (or less efficiently, up to num)
    // A more efficient method is to check up to i * i <= num.
    let i = 1;
    while (true) {
        // Manual check for i * i > num
        if (i > num / i) {
            return false;
        }
        
        if (i * i === num) {
            return true;
        }
      i++;
    }
}

// 11. Calculate the area of a triangle given its base and height

function areaOfTriangle(base, height) {
    if (base < 0 || height < 0) {
        throw new Error("Base and height must be non-negative.");
    }
    // No significant built-in function to replace here, basic multiplication and division by 2.
    return (base * height) / 2;
}

// 12. Calculate the Fibonacci series of a given number (up to n terms)

function fibonacciSeries(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        // Basic array push is a method, but fundamental to array manipulation.
        // If 'push' is forbidden, we must use manual index assignment:
        // series[i] = series[i - 1] + series[i - 2];
        series[i] = series[i - 1] + series[i - 2];
    }
    return series;
}

// 13. Check whether a given number is an Armstrong number or not

function isArmstrongNumber(num) {
    if (num < 0) return false;

    // 1. Manually count the number of digits (power)
    let tempCount = num;
    let power = 0;
    while (tempCount > 0) {
        tempCount = (tempCount - (tempCount % 10)) / 10; // Manual floor division
        power++;
    }

    // 2. Calculate the sum of digits raised to the power
    let sum = 0;
    let tempSum = num;

    while (tempSum > 0) {
        let digit = tempSum % 10; // Get the last digit
        sum += customPower(digit, power); // Use customPower from section 9

        tempSum = (tempSum - digit) / 10; // Manual floor division
    }

    return sum === num;
}  

// 14. Check whether a given number is a perfect number or not

function isPerfectNumber(num) {
    if (num <= 1) return false;

    let sumOfDivisors = 1; // Start with 1 as a divisor

    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
            sumOfDivisors += i;
            // Manual check for i * i !== num
            if (i > num / i) { // This means i * i > num. We can use i * i !== num for precision.
                // Assuming integer arithmetic is precise enough:
                if (i * i !== num) {
                    sumOfDivisors += num / i;
                }
            } else if (i * i < num) {
                sumOfDivisors += num / i;
            }
        }
    }
    return sumOfDivisors === num;
}


// 15. Convert the decimal number to a binary representation

function decimalToBinary(decimal) {
    if (decimal < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    if (decimal === 0) return "0";

    let binary = "";
    let temp = decimal;

    while (temp > 0) {
        let remainder = temp % 2; // Last bit (0 or 1)
        
        // Manual string concatenation (adding to the left)
        // If simple '+' for string is disallowed, a manual array of chars would be needed.
        // Assuming simple string concatenation is permissible:
        binary = remainder + binary; 
        
        // Manual floor division by 2
        temp = (temp - remainder) / 2; 
    }
    return binary;
}

// 16. Check whether the given string is palindrome or not

function isPalindromeString(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        if (str[start] !== str[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

// 17. Find the greatest common divisor (GCD) of two numbers (Euclidean algorithm)

function findGCD(a, b) {
    // Manual absolute value and integer conversion (truncating decimal part)
    let numA = a;
    let numB = b;
    
    if (numA < 0) numA = -numA;
    if (numB < 0) numB = -numB;

    // Convert to integer by truncating (manual Math.round for non-negative is simpler here)
    // A simple truncation for positive numbers:
    numA = numA - (numA % 1); // Remove decimal part
    numB = numB - (numB % 1);

    while (numB !== 0) {
        let remainder = calculateRemainder(numA, numB); // Use our custom remainder
        numA = numB;
        numB = remainder;
    }
    return numA;
}

// 18. Find the least common multiple (LCM) of two numbers

function findLCM(a, b) {
    // Manual absolute value and integer conversion
    let numA = a;
    let numB = b;

    if (numA < 0) numA = -numA;
    if (numB < 0) numB = -numB;
    
    numA = numA - (numA % 1);
    numB = numB - (numB % 1);
    
    if (numA === 0 || numB === 0) return 0;

    const gcd = findGCD(numA, numB);

    // No Math.abs for (a * b) since numA and numB are already positive.
    return (numA * numB) / gcd;
}

// 19. Count the number of vowels in a string

function countVowels(str) {
    let count = 0;
    
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        
        // Manual check for both upper and lower case vowels
        if (
            char === 'a' || char === 'A' ||
            char === 'e' || char === 'E' ||
            char === 'i' || char === 'I' ||
            char === 'o' || char === 'O' ||
            char === 'u' || char === 'U' 
        ) 
        {
            count++;
        }
    }
    return count;
}

// 20. Calculate the factorial of a number using a recursive method

function factorialRecursive(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    // Base case
    if (n === 0) {
        return 1;
    }
    // Recursive step
    return n * factorialRecursive(n - 1);
}

// 21. Find the first n prime numbers up to the given number (limit)

function findPrimesUpTo(limit) {
    if (limit < 2) return [];

    // Manual array initialization (replaces Array(limit + 1).fill(true))
    const isPrime = [];
    for (let k = 0; k <= limit; k++) {
        isPrime[k] = true;
    }

    isPrime[0] = false; // 0 is not prime
    isPrime[1] = false; // 1 is not prime

    // Sieve logic remains the same (uses loops and basic arithmetic)
    for (let p = 2; p * p <= limit; p++) {
        if (isPrime[p]) {
            for (let i = p * p; i <= limit; i += p) {
                isPrime[i] = false;
            }
        }
    }

    const primes = [];
    // Manual array "push" (using index assignment)
    let primeIndex = 0;
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes[primeIndex] = i;
            primeIndex++;  
        }
    }
    return primes;
}


// 22. Remove duplicates in an array of numbers

function removeDuplicates(arr) {
    const seen = {};   
    const result = []; 
    let resultIndex = 0;   

    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];

        // Check if item has been 'seen'
        if (seen[item] === undefined) {
            seen[item] = true; // Mark as seen
            
            // Manual array "push"
            result[resultIndex] = item;
            resultIndex++;
        }
    }
    return result;
}

// 23. Check whether the given string with space is palindrome or not

function isAlphaNumeric(char) {
    const code = char.charCodeAt(0);

    // 0-9
    if (code >= 48 && code <= 57) return true;
    // A-Z
    if (code >= 65 && code <= 90) return true;
    // a-z
    if (code >= 97 && code <= 122) return true;         

    return false;
}

/**
 * Helper to convert to lower case without .toLowerCase()
 * @param {string} char 
 * @returns {string}
 */
function toLower(char) {
    const code = char.charCodeAt(0);
    // If it is A-Z (ASCII 65-90), convert to a-z by adding 32
    if (code >= 65 && code <= 90) {
        return String.fromCharCode(code + 32);
    }
    return char;
}

/**
 * Checks if a string is a palindrome, ignoring spaces and case, without built-in methods.
 * @param {string} str - The input string.
 * @returns {boolean} True if the processed string is a palindrome.
 */
function isPalindromeStringWithSpaces(str) {
    let start = 0;
    let end = str.length - 1;

    while (start < end) {
        // Skip non-alphanumeric characters from the start
        while (start < end && !isAlphaNumeric(str[start])) {
            start++; 
        }

        // Skip non-alphanumeric characters from the end
        while (start < end && !isAlphaNumeric(str[end])) {
            end--;
        }
        if (start >= end) break; // Check again after skipping

        // Compare characters case-insensitively using custom logic
        if (toLower(str[start]) !== toLower(str[end])) {
            return false;
        }

        start++;
        end--;
    }
    return true;
}

// 24. Simplify a fraction of two numbers to its lowest term

function simplifyFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    if (numerator === 0) {
        return { numerator: 0, denominator: 1 };
    }

    const gcd = findGCD(numerator, denominator); // Uses refactored GCD

    // Handle sign correctly in the denominator (manual calculation)
    let sign = 1;
    if (denominator < 0) {
        sign = -1;
    }
    
    // Manual absolute value for denominator
    let absDenominator = denominator;
    if (absDenominator < 0) absDenominator = -absDenominator;

    return {
        numerator: (numerator / gcd) * sign,
        denominator: absDenominator / gcd,
    };
}

// 25. Find the range (difference between the highest and lowest values) in an array of numbers

function findRange(arr) {
    if (!arr || arr.length === 0) return null;

    let minVal = arr[0];
    let maxVal = arr[0];

    for (let i = 1; i < arr.length; i++) {
        const current = arr[i];

        // Manual comparison for max
        if (current > maxVal) { 
            maxVal = current; 
        } 

        // Manual comparison for min
        if (current < minVal) {
            minVal = current;
        }
    }

    return maxVal - minVal;
}

//26. Find whether two words are anagram.

function areAnagrams(str1, str2) {
    const cleanAndSort = (str) => {
        return str.replace (/[^\w]/g,'').toLowerCase().split('').sort().join('');
};
return cleanAndSort(str1) === cleanAndSort(str2);
}
console.log("Check whether:" +areAnagrams("iceman","cinema"));


// BINARY SEARCH  
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2); // Calculate the middle index

    // If the middle element is the target, return its index
    if (arr[mid] === target) {
      return mid;
    } 
    // If the target is smaller than the middle element, search in the left half
    else if (arr[mid] < target) {
      left = mid + 1;
    } 
    // If the target is larger than the middle element, search in the right half
    else {
      right = mid - 1;
    }
  }

  // If the target is not found, return -1
  return -1;
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const targetValue = 9;

const index = binarySearch(sortedArray, targetValue);

if (index !== -1) {
  console.log(`Target ${targetValue} found at index ${index}.`); // Output: Target 9 found at index 4.
} else {
  console.log(`Target ${targetValue} not found in the array.`);
}

const nonExistentTarget = 10;
const notFoundIndex = binarySearch(sortedArray, nonExistentTarget);
console.log(`Target ${nonExistentTarget} found at index ${notFoundIndex}.`); // Output: Target 10 found at index -1.


//Flatten an array
const nestedArray = [1, [2, 3], [4, 5]];

// The empty array's concat method is called with the spread array contents
const flatArray = [].concat(...nestedArray);

// Result: [1, 2, 3, 4, 5]


//Swap two variables
let a = 5;
let b = 10;

[a, b] = [b, a]; // Swaps the values

console.log(`a: ${a}, b: ${b}`); // Output: a: 10, b: 5


//Swap two arrays
let arrayA = [1, 2, 3];
let arrayB = ['a', 'b', 'c', 'd'];

console.log('Before Swap:');
console.log('arrayA:', arrayA); // Output: arrayA: [1, 2, 3]
console.log('arrayB:', arrayB); // Output: arrayB: ['a', 'b', 'c', 'd']

// The Swap
[arrayA, arrayB] = [arrayB, arrayA];

console.log('\nAfter Swap:');
console.log('arrayA:', arrayA); // Output: arrayA: ['a', 'b', 'c', 'd']
console.log('arrayB:', arrayB); // Output: arrayB: [1, 2, 3]

//To empty an object
function isObjectEmptyManual(obj) {
  // Use hasOwnProperty to ensure we only count the object's own properties
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      return false; // Found at least one property
    }
  }
  return true; // No properties found
}

// --- Example ---
const obj = {};
console.log(isObjectEmptyManual(obj)); // Output: true

//flatten without builtin fns

function flattenIterative(arr) {
  const flattened = [];
  // Create a copy of the array and reverse it to use it as a stack (LIFO)
  const stack = [...arr].reverse(); 

  // While the stack is not empty
  while (stack.length) {
    // Pop the last element (which was the first element of the original array)
    const element = stack.pop();

    // Check if the element is an array
    if (Array.isArray(element)) {
      // If it's an array, push its elements onto the stack in reverse order
      // so they are processed in the correct order (left-to-right).
      stack.push(...element.reverse());
    } else {
      // If it's a single value, push it to the result array
      flattened.push(element);
    }
  }

  return flattened;
}

const nestArray = [1, [2, 3], [4, [5, [6]]]];
const flatedArray = flattenIterative(nestedArray);

console.log(flatedArray);
// Output: [1, 2, 3, 4, 5, 6]