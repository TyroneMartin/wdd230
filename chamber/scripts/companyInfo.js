document.addEventListener("DOMContentLoaded", function () {
    fetch('./data/members.json')
        .then(response => response.json())
        .then(data => displayCompanyInfo(data.members.slice(0, 3))); // Display only the first three members
});

function displayCompanyInfo(members) {
    const companyInfoDiv = document.getElementById('companyInfo');

    members.forEach(member => {
        const companyDiv = document.createElement('div');

        // Company Name
        const companyName = document.createElement('h2');
        companyName.textContent = member.name;
        companyDiv.appendChild(companyName);

        // Membership Level
        const membershipLevel = document.createElement('p');
        membershipLevel.textContent = `Membership Level: ${member.membershipLevel}`;
        // membershipLevel.style.color = (member.membershipLevel === 'Gold') ? 'yellow' : 'silver';
        companyDiv.appendChild(membershipLevel);

        // Description
        const description = document.createElement('p');
        description.textContent = member.description;
        companyDiv.appendChild(description);

        companyInfoDiv.appendChild(companyDiv);
    });
}
