const members = document.querySelector('#members');
const levels = ['Member', 'Silver', 'Gold']; // membership 1, 2, 3

async function getMembers() {
  const response = await fetch('data/members.json');
  const data = await response.json();
  displayMembers(data);
}


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
        >

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
document.querySelector('#grid').addEventListener('click', () => { 
  members.className = 'grid'; 
});
document.querySelector('#list').addEventListener('click', () => { 
  members.className = 'list'; 
});


// mobile menu
document.querySelector('#menu').addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('open');
});

// footer
const currentYear = new Date().getFullYear();

document.getElementById("currentyear").textContent = currentYear;

document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;
