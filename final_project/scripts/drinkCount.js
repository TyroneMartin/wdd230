// Get the current order count from localStorage or default to 0
var currentOrderCount = localStorage.getItem('orderCount') || 0;

// Update the HTML element with the current order count
document.getElementById('total-Drink-Count').textContent = currentOrderCount;

// Increment the order count
currentOrderCount++;

// Save the updated order count back to localStorage
localStorage.setItem('orderCount', currentOrderCount);
