const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const display = document.querySelector(".cards"); // Update to target the correct element

gridButton.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.remove("list");
});

listButton.addEventListener("click", () => {
    display.classList.add("list");
    display.classList.remove("grid");
});

const url = 'https://tyronemartin.github.io/wdd230/chamber/members.json';

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
            <h3>${member.name}</h3>
            <p>Address: ${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <img src="${member.imageURL}" alt="Picture of ${member.name}">
            <p>Membership Level: ${member.membershipLevel}</p>
        `;
        section.innerHTML = sectionHTML;
        display.appendChild(section);
    });
}

getMemberData();
