let message = "Hello, World!";  // Corrected variable name

console.log("Start");

const bookTicket = (callback) => {
  setTimeout(() => {
    console.log("Booking ticket...");
    callback();
  }, 2000); // Simulate a delay of 2 seconds
};

// Function to display message
const showMessage = () => {
  message = "Displaying message...";
  console.log(message);
};

// Update message before calling function
message = "Ticket booked!";
console.log(message);

// Call bookTicket with showMessage as callback
bookTicket(showMessage);
// Output:
// Start
// Ticket booked!
// Booking ticket...
// Displaying message...