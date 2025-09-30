// map reduce filter
const arr = [1, 2, 3, 4, 5];

// Using map to create a new array with each element squared
const squared = arr.map(x => x * x);
console.log("Squared:", squared); // [1, 4, 9, 16, 25]  
// Using filter to create a new array with elements greater than 2
const filtered = arr.filter(x => x > 2);
console.log("Filtered (greater than 2):", filtered); // [3, 4, 5]
// Using reduce to sum all elements in the array
const sum = arr.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum:", sum); // 15
// Chaining map, filter, and reduce
const chainedResult = arr
    .map(x => x * 2)          // Double each element
    .filter(x => x > 5)       // Keep elements greater than 5
    .reduce((acc, x) => acc + x, 0); // Sum the remaining elements  
console.log("Chained Result:", chainedResult); // 18 (6 + 8 + 10)
// Note: The original array remains unchanged after these operations.
console.log("Original Array:", arr); // [1, 2, 3, 4, 5]
// Output:
// Squared: [1, 4, 9, 16, 25]
// Filtered (greater than 2): [3, 4, 5]
// Sum: 15
// Chained Result: 18
// Original Array: [1, 2, 3, 4, 5]
// Note: The original array remains unchanged after these operations.
// Note: The original array remains unchanged after these operations.