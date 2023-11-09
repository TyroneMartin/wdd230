// "name": "Joseph",
// "lastname": "Smith",
// "birthdate": "23 December 1805",
// "death": "27 June 1844",
// "length": 14,
// "order": 1,
// "birthplace": "Vermont",
// "numofchildren": 11,
// "imageurl": "https://asse

const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

const cards = document.querySelector('#cards');

function displayProphets(prophets) {
    prophets.forEach ((element) => {
        let section = '<h3>${prophet.name'
        
    });
}

async function  getProphetData() {
    const response = await fetch(url);
    if (response.ok) {
const data = await response.json
displayProphets (data.Prophets);

    }
    else {
        console.error("NO WORKIE!!!")
    }
}