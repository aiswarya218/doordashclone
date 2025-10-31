// 1. Calculate the remainder of two numbers
function calculateRemainder(dividend, divisor) {
    if (divisor === 0) {
        throw new Error("Divisor cannot be zero.");
    }
    return dividend % divisor;
}                          //check float in css

// 2. Find the average of an array of numbers  
function calculateAverage(arr) {
    if (!arr || arr.length === 0) {  
        return 0; 
    }
    const sum = arr.reduce((acc, current) => acc + current, 0);   
    return sum / arr.length;
}

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
            result[i][j] = matrixA[i][j] + matrixB[i][j]; 
        }
    }
    return result;
}

// 4. Calculate the area of a rectangle, given its length and breadth ---
function areaOfRectangle(length, breadth) {
    if (length < 0 || breadth < 0) {
        throw new Error("Length and breadth must be non-negative.");
    }
    return length * breadth;
}

// 5. Check if the given matrix is a diagonal matrix ---
function isDiagonalMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        // Ensure it is a square matrix
        if (matrix[i].length !== n) {
            console.warn("Matrix is not square."); 
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

// 6. Check if the given matrix is an identity matrix ---
function isIdentityMatrix(matrix) {
    const n = matrix.length;
    for (let i = 0; i < n; i++) {
        if (matrix[i].length !== n) {
            console.warn("Matrix is not square.");
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

// 7. Returns the transpose of a given matrix ---
function transposeMatrix(matrix) {
    const rows = matrix.length;
    if (rows === 0) return [];   
    const cols = matrix[0].length;

    const result = [];
    for (let j = 0; j < cols; j++) {
        result[j] = [];
        for (let i = 0; i < rows; i++) {
            result[j][i] = matrix[i][j];
        }
    }
    return result;
}

// 8. Find the most repeated value in an array of numbers ---
function mostRepeatedValue(arr) {
    if (!arr || arr.length === 0) return null;
    const frequencyMap = {};
    let maxCount = 0;  
    let mostRepeated = arr[0];

    for (const item of arr) {
        frequencyMap[item] = (frequencyMap[item] || 0) + 1;

        if (frequencyMap[item] > maxCount) {
            maxCount = frequencyMap[item];
            mostRepeated = item;
        }
    }
    return mostRepeated;    
}

// 9. Approximates the derivative of f(x)=x^n ---
function approximateDerivative(n, x, h = 0.0001) {
    const f = (val) => Math.pow(val, n);
    return (f(x + h) - f(x)) / h; 
}

// 10. Check if the given number is a perfect square or not ---
function isPerfectSquare(num) {
    if (num < 0) return false;
    const sqrt = Math.round(Math.sqrt(num));
    return sqrt * sqrt === num;
}

// 11. Calculate the area of a triangle given its base and height ---
function areaOfTriangle(base, height) {
    if (base < 0 || height < 0) {
        throw new Error("Base and height must be non-negative.");
    }
    return 0.5 * base * height;
}

// 12. Calculate the Fibonacci series of a given number (up to n terms) ---
function fibonacciSeries(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    const series = [0, 1];
    for (let i = 2; i < n; i++) {
        series.push(series[i - 1] + series[i - 2]);
    }
    return series;
}

// 13. Check whether a given number is an Armstrong number or not ---
function isArmstrongNumber(num) {
    const strNum = String(num);
    const power = strNum.length;
    let sum = 0;

    for (let digit of strNum) {
        sum += Math.pow(parseInt(digit), power);
    }

    return sum === num;    
}

// 14. Check whether a given number is a perfect number or not ---
function isPerfectNumber(num) {
    if (num <= 1) return false;

    let sumOfDivisors = 1; // Start with 1 as a divisor (excluding the number itself)

    for (let i = 2; i * i <= num; i++) { 
        if (num % i === 0) {
            sumOfDivisors += i; 
            if (i * i !== num) { 
                sumOfDivisors += num / i;
            }
        }
    }
    return sumOfDivisors === num;
}

// 15. Convert the decimal number to a binary representation ---
function decimalToBinary(decimal) {
    if (decimal < 0) {
        throw new Error("Input must be a non-negative integer.");
    }
    // Simple way using built-in method
    return decimal.toString(2);

    /* // Manual implementation (optional)
    if (decimal === 0) return "0";
    let binary = "";
    let temp = decimal;
    while (temp > 0) {
        binary = (temp % 2) + binary;
        temp = Math.floor(temp / 2);
    }
    return binary;
    */
}

// 16. Check whether the given string is palindrome or not ---
function isPalindromeString(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// 17. Find the greatest common divisor (GCD) of two numbers (Euclidean algorithm) ---
function findGCD(a, b) {
    // Ensure inputs are non-negative integers
    a = Math.abs(Math.round(a)); 
    b = Math.abs(Math.round(b));

    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

// 18. Find the least common multiple (LCM) of two numbers ---
function findLCM(a, b) {
    // Ensure inputs are non-negative integers
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));

    if (a === 0 || b === 0) return 0;

    const gcd = findGCD(a, b);
    return (a * b) / gcd;
}

// 19. Count the number of vowels in a string ---
function countVowels(str) {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    return matches ? matches.length : 0; 
}

// 20. Calculate the factorial of a number using a recursive method ---
function factorialRecursive(n) {
    if (n < 0) {
        throw new Error("Factorial is not defined for negative numbers.");
    }
    if (n === 0) {
        return 1;
    }
    return n * factorialRecursive(n - 1);
}

// 21. Find the first n prime numbers up to the given number (limit) ---
function findPrimesUpTo(limit) { 
    if (limit < 2) return [];

    // Initialize an array where isPrime[i] is true
    const isPrime = Array(limit + 1).fill(true);
    isPrime[0] = isPrime[1] = false; // 0 and 1 are not prime

    for (let p = 2; p * p <= limit; p++) { 
        if (isPrime[p] === true) {
            // Update all multiples of p
            for (let i = p * p; i <= limit; i += p) {
                isPrime[i] = false;
            }
        }
    }

    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime[i]) {
            primes.push(i);
        }
    }
    return primes;
}

// 22. Remove duplicates in an array of numbers ---
function removeDuplicates(arr) {
    // Using a Set is the simplest and most efficient way
    return [...new Set(arr)];
}

// 23. Check whether the given string with space is palindrome or not ---
function isPalindromeStringWithSpaces(str) {
    // 1. Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

    // 2. Check for palindrome
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
}

// 24. Simplify a fraction of two numbers to its lowest term ---
function simplifyFraction(numerator, denominator) {
    if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
    }
    if (numerator === 0) {
        return { numerator: 0, denominator: 1 };
    }

    const gcd = findGCD(numerator, denominator);

    // Handle sign correctly in the denominator
    const sign = denominator < 0 ? -1 : 1;

    return {  
        numerator: numerator / gcd * sign,
        denominator: Math.abs(denominator) / gcd,
    };
}

// 25. Find the range (difference between the highest and lowest values) in an array of numbers ---
function findRange(arr) {
    if (!arr || arr.length === 0) return null;

    const min = Math.min(...arr);  
    const max = Math.max(...arr);

    return max - min; 
}


console.log("1. Remainder (17 / 5):", calculateRemainder(17, 5)); // Output: 2

console.log("2. Average of [1, 2, 3, 4, 5]:", calculateAverage([1, 2, 3, 4, 5])); // Output: 3

const matrixA = [[1, 2], [3, 4]];
const matrixB = [[5, 6], [7, 8]];
console.log("3. Add Matrices:", addMatrices(matrixA, matrixB)); // Output: [[6, 8], [10, 12]]

console.log("4. Rectangle Area (L=10, B=5):", areaOfRectangle(10, 5)); // Output: 50

const diagMatrix = [[5, 0], [0, 9]];
console.log("5. Is [[5, 0], [0, 9]] a Diagonal Matrix?:", isDiagonalMatrix(diagMatrix)); // Output: true

const identityMatrix = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];
console.log("6. Is Identity Matrix?:", isIdentityMatrix(identityMatrix)); // Output: true

const originalMatrix = [[1, 2, 3], [4, 5, 6]];
console.log("7. Transpose Matrix:", transposeMatrix(originalMatrix)); // Output: [[1, 4], [2, 5], [3, 6]]

const dataArray = [1, 3, 3, 5, 2, 3, 1, 3];
console.log("8. Most Repeated Value in [1, 3, 3, 5, 2, 3, 1, 3]:", mostRepeatedValue(dataArray)); // Output: 3

console.log("9. Approx. Derivative of f(x)=x^3 at x=2 (Exact is 12):", approximateDerivative(3, 2)); // Output: ~12.000...

console.log("10. Is 144 a Perfect Square?:", isPerfectSquare(144)); // Output: true

console.log("11. Triangle Area (Base=4, Height=5):", areaOfTriangle(4, 5)); // Output: 10

console.log("12. Fibonacci Series (10 terms):", fibonacciSeries(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

console.log("13. Is 153 an Armstrong Number?:", isArmstrongNumber(153)); // Output: true (1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153)

console.log("14. Is 28 a Perfect Number?:", isPerfectNumber(28)); // Output: true (1 + 2 + 4 + 7 + 14 = 28)

console.log("15. Decimal to Binary (42):", decimalToBinary(42)); // Output: "101010"

console.log("16. Is 'madam' a Palindrome?:", isPalindromeString("madam")); // Output: true

console.log("17. GCD of 48 and 18:", findGCD(48, 18)); // Output: 6

console.log("18. LCM of 15 and 20:", findLCM(15, 20)); // Output: 60

console.log("19. Vowel Count in 'Programming is fun':", countVowels("Programming is fun")); // Output: 5

console.log("20. Factorial of 5 (Recursive):", factorialRecursive(5)); // Output: 120

console.log("21. Prime Numbers up to 30:", findPrimesUpTo(30)); // Output: [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] 

const dupArray = [1, 5, 2, 5, 8, 1, 9, 2];
console.log("22. Remove Duplicates in [1, 5, 2, 5, 8, 1, 9, 2]:", removeDuplicates(dupArray)); // Output: [1, 5, 2, 8, 9]

console.log("23. Is 'A man a plan a canal Panama' a Palindrome (with spaces/case ignored)?:", isPalindromeStringWithSpaces("A man, a plan, a canal: Panama")); // Output: true

console.log("24. Simplify Fraction 24/36:", simplifyFraction(24, 36)); // Output: { numerator: 2, denominator: 3 }

console.log("25. Range of [10, 2, 8, 15, 5]:", findRange([10, 2, 8, 15, 5])); // Output: 13 (15 - 2)


//CLOSURE
function outerFunction() {
    const outervariable = "I am not ok";

function innerFunction() {
    console.log("outervariable");
}
return innerFunction;
}
const myClosure = outerFunction();
return myClosure();



//SORTING  Ascending order
const numbersAsc = [100, 20, 5, 42];
numbersAsc.sort((a, b) => a - b);
console.log(numbersAsc); // Output: [5, 20, 42, 100]

// Descending order
const numbersDesc = [100, 20, 5, 42];
numbersDesc.sort((a, b) => b - a);
console.log(numbersDesc); // Output: [100, 42, 20, 5]

function isEven(n) {
    return !(n&1);
}
function isOdd(n) {
    return !!(n&1);
}
console.log('Is 10 even no:, ${even(10)}');