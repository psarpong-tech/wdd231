const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
    try{
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Request failed with status ${response.status}');
        }
        const data = await response.json();
        //console.table(data.prophets);
        displayProphets(data.prophets);
    } catch (error) {
        console.error(error);
    }       
}

getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        const card = document.createElement('section');
        const fullName = document.createElement('__');
        const portrait = document.createElement('img');

        fullName.textContent = '${prophet.___} ____________';
        
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', 'portrait of ${prophet.____} _________________');
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(____________);
        card.appendChild(portrait);

        cards.appendChild(card)
    })
}
