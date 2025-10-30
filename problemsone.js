//CALCULATE REMAINDER OF 2 NOS

function calculateRemainder(dividend,divisor) {
    if (divisor === 0) {
        throw new Error("Divisor cannot be zero.");
    }
       let absDividend = dividend;
    if (absDividend < 0) absDividend = -absDividend; // Manual absolute value
    let absDivisor = divisor;
    if (absDivisor < 0) absDivisor = -absDivisor; // Manual absolute value
    let remainder = absDividend;

    while (remainder >= absDivisor) {
        remainder -= absDivisor;
    }

    if (dividend < 0 && remainder !== 0) {
        return remainder - absDivisor;
    }

    return remainder;
}
console.log("Remainder is",calculateRemainder(2,9));


//PALINDROME
function Palindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str = reversedStr;
}
console.log("Palindrome is",Palindrome("amma"));

// //GCD
// function findGCD(a,b) {
//     a = Math.abs(Math.round(a));
//     b = Math.abs(Math.round(b));
//   while (b) {
//     [a,b] = [b,a%b];
//   }
//   return a;
// }
// console.log("GCD is",findGCD(2,7));

//LCM
function findLCM(a,b) {
    a = Math.abs(Math.round(a));
    b = Math.abs(Math.round(b));
  if (a === 0 | b === 0)
    return 0;
const gcd = findGCD(a,b);
return (a * b/gcd);
}
console.log("LCM is",findLCM(5,7));


function findLCMWithoutGCD(a, b) {
    // 1. Handle non-positive inputs
    if (a === 0 || b === 0) {
        return 0;
    }
    
    // 2. Ensure numbers are positive integers for calculation
    let num1 = Math.abs(Math.round(a));
    let num2 = Math.abs(Math.round(b));

    // 3. Determine the starting point for iteration
    // The LCM must be at least the larger of the two numbers.
    let start = Math.max(num1, num2);
    let end = num1 * num2; // The product is a guaranteed multiple (though not always the LCM)

    let lcm = start;

    // 4. Iterate and check for the first common multiple
    // Loop increments by 'start' (the larger number) for efficiency
    while (lcm <= end) {
        // Check if the current multiple is divisible by BOTH numbers
        if (lcm % num1 === 0 && lcm % num2 === 0) {
            return lcm; // Found the LCM
        }
        
        // Move to the next multiple of the larger number
        lcm += start; 
    }
    
    // Fallback: The product of the numbers (should be caught in the loop unless num1*num2 is huge)
    return end; 
}

// --- Example Usage ---
console.log("LCM of 12 and 18 is:", findLCMWithoutGCD(12, 18)); // Output: 36
console.log("LCM of 7 and 5 is:", findLCMWithoutGCD(7, 5));     // Output: 35
console.log("LCM of 10 and 10 is:", findLCMWithoutGCD(10, 10)); // Output: 10