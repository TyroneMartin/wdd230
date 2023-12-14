document.getElementById('submit').addEventListener('click', function() {
    // Get the current order count from localStorage or default to 0
       var currentOrderCount = localStorage.getItem('total-Drink-Count') || 0;
    
   // Increment the order count
       currentOrderCount++;
   
       // Save the updated order count back to localStorage 
       localStorage.setItem('total-Drink-Count', currentOrderCount);
   });
   