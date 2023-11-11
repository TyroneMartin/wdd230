// Get the current year and display it
let year = new Date(); 
let presentYear = year.getFullYear(); 
document.getElementById("currentYear").textContent = presentYear; 
document.getElementById("currentYear1").textContent = presentYear; 
document.getElementById("lastUpdated").textContent = document.lastModified; 

function updateTime() {
  // Get the current time
  let currentTime = new Date();
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  // Convert 24-hour time format to 12-hour time format
  let amPM = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12; // The hour '0' should be '12'

  // Format the time
  let formattedTime = `${hours}:${minutes} ${amPM}`;

  // Update the time in the DOM
  document.getElementById("currentTime").textContent = formattedTime;
}

// Update time initially
updateTime();

// Update time every second (1000 milliseconds)
setInterval(updateTime, 1000);