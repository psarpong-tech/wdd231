
const spotlights = document.querySelector('#spotlights');
const membersURL = 'data/members.json';

async function getSpotlights() {
    try {
        const response = await fetch(membersURL);

        if (response.ok) {
            const members = await response.json();
            displaySpotlights(members);
        } else {
            throw new Error(`HTTP error: ${response.status}`);
        }
    } catch (error) {
        console.error('Error loading business spotlights:', error);
    }
}

function displaySpotlights(members) {
    // Select only Gold and Silver members
    const qualifiedMembers = members.filter(
        member => member.membership === 2 || member.membership === 3
    );

    // Randomly shuffle the qualified members
    const shuffledMembers = qualifiedMembers.sort(
        () => Math.random() - 0.5
    );

    // Randomly choose two members
    const numberOfSpotlights = 2;
    const selectedMembers = shuffledMembers.slice(0, numberOfSpotlights);

    
    selectedMembers.forEach(member => {
        const card = document.createElement('section');
        const logo = document.createElement('img');
        const name = document.createElement('h3');
        const phone = document.createElement('p');
        const address = document.createElement('p');
        const website = document.createElement('a');
        const membership = document.createElement('p');

        // Company logo
        logo.setAttribute('src', `images/${member.image}`);
        logo.setAttribute('alt', `${member.name} logo`);
        logo.setAttribute('loading', 'lazy');

        // Company details
        name.textContent = member.name;
        phone.textContent = `Phone: ${member.phone}`;
        address.textContent = `Address: ${member.address}`;

        website.textContent = 'Visit Website';
        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.setAttribute('rel', 'noopener noreferrer');

        membership.textContent =
            `Membership: ${member.membership === 3 ? 'Gold' : 'Silver'}`;

        // Create the business information container
        const details = document.createElement('div');
        details.classList.add('business-details');

        details.appendChild(name);
        details.appendChild(phone);
        details.appendChild(address);
        details.appendChild(website);
        details.appendChild(membership);

        // Create the spotlight card
        const content = document.createElement('div');
        content.classList.add('spotlight-content');

        content.appendChild(logo);
        content.appendChild(details);

        card.classList.add('spotlight-card');
        card.appendChild(content);

        spotlights.appendChild(card);
    });
}

getSpotlights();
