const membershipContainer = document.querySelector("#membership-container");
const modal = document.querySelector("#level-modal");
const modalContent = document.querySelector("#modal-content");
const closeModal = document.querySelector("#close-modal");


async function getMemberships() {
    try {
        const response = await fetch("data/member-levels.json");

        if (!response.ok) {
            throw new Error("Could not fetch membership data.");
        }

        const memberships = await response.json();
        displayMemberships(memberships);

    } catch (error) {
        console.error("Error loading memberships:", error);
        membershipContainer.textContent = "Membership information could not be loaded.";
    }
}


function displayMemberships(memberships) {
    memberships.forEach((membership) => {
        
        const card = document.createElement("div");
        card.classList.add("membership-card");

        const title = document.createElement("h3");
        title.textContent = membership.name;

        const image = document.createElement("img");
        image.src = membership.image;
        image.alt = `${membership.name} illustration`;
        image.loading = "lazy";

        const button = document.createElement("button");
        button.textContent = "View Benefits";
        button.type = "button";
        button.classList.add("modal-btn");

        button.addEventListener("click", () => {
            const benefitsList = membership.benefits
                .map((benefit) => `<li>${benefit}</li>`)
                .join("");

            modalContent.innerHTML = `
                <h2>${membership.name}</h2>
                <p>${membership.description}</p>
                <ul>${benefitsList}</ul>
                <h4>Cost: </h4>
                <div>
                    ${membership.cost.map(cost =>
                        `<p>${cost}</p>`
                    ).join("")}
                </div>    
            `;

            modal.showModal();
        }); 
        
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(button);

        membershipContainer.appendChild(card);
    });
}

closeModal.addEventListener("click", () => {
    modal.close();
});

// Generate the current date and time
const timestamp = document.querySelector("#timestamp");

if (timestamp) {
    timestamp.value = new Date().toISOString();
}

getMemberships();


