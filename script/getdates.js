let year = new Date(); // Variable year is created to store the Date function 
let presentYear = year.getFullYear(); // Retrive the year current year
document.getElementById("currentYear").textContent = presentYear; // Output the curent year
document.getElementById("lastUpdated").textContent = document.lastModified; //Output last modified using the lastModifued fuction 

