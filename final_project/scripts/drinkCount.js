document.getElementById('submit-order').addEventListener('click', function() {
    // Retrieve the current value from local storage (default to 0 if not set)
    var currentOrderCount = localStorage.getItem('total-Drink-Count') || 0;

    // Increment the value
    currentOrderCount++;

    localStorage.setItem('total-Drink-Count', currentOrderCount);
});