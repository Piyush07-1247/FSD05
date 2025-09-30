// using map reduce filter for different products and their prices
const products = [
    { name: "Laptop", price: 1000 },    
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 300 },
    { name: "Monitor", price: 200 },
    { name: "Keyboard", price: 50 }
];

// Using map to create a new array with product names
const productNames = products.map(product => product.name);
console.log("Product Names:", productNames); // ["Laptop", "Phone", "Tablet", "Monitor", "Keyboard"]
// Using filter to create a new array with products priced above $300
const expensiveProducts = products.filter(product => product.price > 300);
console.log("Expensive Products:", expensiveProducts); // [{ name: "Laptop", price: 1000 }, { name: "Phone", price: 500 }]
// Using reduce to calculate the total price of all products
const totalPrice = products.reduce((total, product) => total + product.price, 0);
console.log("Total Price:", totalPrice); // 2050