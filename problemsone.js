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


// 1. Core HTML & CSS Challenges
// Challenge (Question)	Key Concepts to Demonstrate	High-Level Approach (Answer)
// Q: Create a Responsive Navigation Bar (Navbar).	Semantic HTML (<header>, <nav>), Flexbox or CSS Grid, Media Queries, and sometimes basic JavaScript for the hamburger menu.	Use Flexbox on the <nav> or <ul> to align items horizontally. On mobile screens (using a media query for a smaller max-width), hide the links, display a hamburger icon, and use JavaScript to toggle a class that shows/hides the full menu.
// Q: Center a <div> both horizontally and vertically.	Flexbox (preferred), CSS Grid, or position: absolute with transform.	Flexbox Method (Modern): Set the parent container to display: flex;, then use justify-content: center; and align-items: center;.
// Q: Implement a Modal/Dialog Box with a backdrop.	position: fixed, z-index, CSS Transitions, and DOM manipulation (JavaScript).	Use an overlay <div> set to position: fixed; with width: 100%; and height: 100%; and a low z-index. The modal content itself should have a higher z-index and be centered. Use JavaScript to add/remove a class (e.g., .is-open) to toggle the modal's visibility.
// Q: Create a simple 3-column layout that collapses to 1 column on mobile.	CSS Grid or Flexbox, and Media Queries.	CSS Grid Method (Ideal): Set the container to display: grid; and grid-template-columns: repeat(3, 1fr);. Use a media query to change grid-template-columns: 1fr; for screen widths below a certain breakpoint.

// 2. Interactive JavaScript Challenges
// Challenge (Question)	Key Concepts to Demonstrate	High-Level Approach (Answer)
// Q: Create a dynamic table from an array of JSON objects, and add column sorting.	DOM Manipulation (createElement, textContent, appendChild), Event Listeners, and the JavaScript array method sort().	Loop through the data array to dynamically create <tr> and <td> elements. Add an event listener to each column header (<th>). The listener should call the array's .sort() method, providing a custom comparison function based on the clicked column's key, and then re-render the table body.
// Q: Implement an Accordion component.	Event Delegation (optional, but good), DOM Traversal, and toggling CSS Classes.	Attach an event listener to the parent container of all accordion items. When a header is clicked, use event.target to identify the header, and then use methods like nextElementSibling or closest() to find the corresponding content panel. Toggle a CSS class (e.g., .active) on the panel to change its max-height or opacity.
// Q: Build a simple To-Do List (add, complete, delete items).	Event Handling, DOM Manipulation, and maintaining a JavaScript Array State.	Use a JavaScript array to store the list of tasks. When a user adds a task, push it to the array and re-render the list. Attach event listeners to the Delete and Complete buttons. When clicked, remove the item from the array (for Delete) or update its property (for Complete), then re-render.

// 3. Advanced/Conceptual Challenges
// Challenge (Question)	Key Concepts to Demonstrate	High-Level Approach (Answer)
// Q: Implement a Debounced Input Field.	setTimeout() and clearTimeout() to implement the Debounce utility function.	Write a debounce(func, delay) utility function. Inside the function, use clearTimeout() to reset the timer every time the user types. The action function (func) will only be executed if the specified delay passes without any new input events.
// Q: Create an Image Carousel with Next/Previous controls.	Event Listeners, Array Index Management, and CSS Transforms (translateX).	Store images in an array. Maintain a current index state variable. The Next button increments the index (wrapping to 0 if it exceeds the length). The Previous button decrements it. Use CSS transform: translateX() on the image container to slide the images left or right based on the new index.
// Q: Fetch data from a public API and display it with Loading and Error states.	Asynchronous JavaScript (async/await or .then()), the fetch API, and try...catch for error handling.	Set a Loading state in the DOM before calling fetch. Use try...catch for the API call. If successful, hide the Loading state and display the data. If an error occurs (e.g., network issue or non-200 response), hide the Loading state and display an Error message in the DOM.