document.addEventListener("DOMContentLoaded", function() {
    // Simulate a click on the grid button once the page is loaded
    //Work around to apply css styling as it requres the user to 
    //activate grid before the styling is applied
    gridButton.click();
});


const gridButton = document.querySelector("#directory-grid");
const listButton = document.querySelector("#directory-list");
const display = document.querySelector("#directory-data");

gridButton.addEventListener("click", () => {
    display.classList.add("directory-cards");
    display.classList.remove("directory-list");

    // #directory-selector button.active css styling for color of taggle
    gridButton.classList.add("active");
    listButton.classList.remove("active");

});

listButton.addEventListener("click", () => {
    display.classList.add("directory-list");
    display.classList.remove("directory-cards");

  // #directory-selector button.active css styling for color of taggle
    listButton.classList.add("active");
    gridButton.classList.remove("active");
});

const url = 'https://tyronemartin.github.io/wdd230/chamber/data/members.json';

async function getMemberData() {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        displayMembers(data.members);
    } else {
        console.error("This data is no longer available");
    }
}

function displayMembers(members) {
    // Clear existing content
    display.innerHTML = "";

    members.forEach((member) => {
        let section = document.createElement("section");
        section.classList.add("card");
        let sectionHTML = `
        <img src="${member.imageURL}" alt="Picture of ${member.name}">
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <p>Membership Level: ${member.membershipLevel}</p>
        <a href="${member.websiteURL}" target="_blank" class="card-button">Visit Website</a>

    `;
        section.innerHTML = sectionHTML;
        display.appendChild(section);
    });
}

getMemberData();
