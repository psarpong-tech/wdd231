const members = document.querySelector('#members');
const levels = ['Member', 'Silver', 'Gold']; // membership 1, 2, 3

// Get the Members from members.json
async function getMembers() {
  try{
    const response = await fetch('data/members.json');

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    displayMembers(data);

  } catch (error) {
    console.error(error);
  }  
}

// Display the members
function displayMembers(data) {
  members.innerHTML = "";

  data.forEach(member => {
    const card = document.createElement('section');
    card.classList.add('member-card');

    card.innerHTML = `
      <div class="card-header">
        <h2>${member.name}</h2>
        <p class="tagline">${member.tagline}</p>
      </div>

      <div class="card-content">
        <img 
          src="images/${member.image}" 
          alt="${member.name} logo" 
          width="96" 
          height="96"
          loading="lazy">

        <div class="business-info">
          <p><strong>ADDRESS:</strong> ${member.address}</p>
          <p><strong>PHONE:</strong> ${member.phone}</p>
          <p><strong>URL:</strong> 
            <a href="${member.website}" target="_blank">
              ${member.website}
            </a>
          </p>
          <p><strong>MEMBERSHIP:</strong> ${levels[member.membership - 1]}</p>
        </div>
      </div>
    `;

    members.appendChild(card);
  });
}

getMembers();

// grid / list toggle
const gridButton = document.querySelector('#grid');
const listButton = document.querySelector('#list');

// Grid view
gridButton.addEventListener('click', () => {
  members.className = 'grid';

  gridButton.classList.add('active');
  listButton.classList.remove('active');
});

// List view
listButton.addEventListener('click', () => {
  members.className = 'list';

  listButton.classList.add('active');
  gridButton.classList.remove('active');
});
