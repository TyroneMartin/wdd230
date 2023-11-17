let meetdate = new Date();
let dayofweek = meetdate.getDay();

if (dayofweek == 1 ||dayofweek == 2 || dayofweek == 3 ){
    let meetgreet = document.getElementById("meetgreetContainer");
    meetgreet.style.display = "block";
}

// Get the close button with the ID "meetgreet"
let closeButton = document.getElementById("meetgreet");

// Add click event listener to the close button
closeButton.addEventListener("click", function() {
    // Get the meet and greet container
    let meetgreet = document.getElementById("meetgreetContainer");

    // Check if the meet and greet container is present
    if (meetgreet) {
        // Hide the meet and greet container
        meetgreet.style.display = "none";
    }
});
