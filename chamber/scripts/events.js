
// Sample events - replace these with actual chamber events
const events = [
    {
        title: "Women In Business Meetup",
        date: "November 28, 2026",
        time: "9:00 AM",
        location: "Conference Hall, Goaso, Ghana",
        description: "A meetup to help local women business owners connect, share ideas, and learn from each other."
    },
    {
        title: "Digital Business Meetup",
        date: "December 5, 2026",
        time: "2:00 PM",
        location: "Agyabes Hall, Goaso, Ghana",
        description: "An opportunity for entrepreneurs who own online shops to connect, introduce themselves, and build partnerships."
    },
    {
        title: "The Business Market Show",
        date: "December 19, 2026",
        time: "9:00 AM",
        location: "Kukuom-Goaso, Ghana",
        description: "A market exhibition where local businesses can showcase their products and services."
    }
];

// Select the events container
const eventsContainer = document.querySelector('#current-events');

// Display the events
function displayEvents(events) {
    events.forEach(event => {
        const card = document.createElement('section');
        const title = document.createElement('h3');
        const date = document.createElement('p');
        const time = document.createElement('p');
        const location = document.createElement('p');
        const description = document.createElement('p');

        card.classList.add('event-card');

        title.textContent = event.title;
        date.textContent = `Date: ${event.date}`;
        time.textContent = `Time: ${event.time}`;
        location.textContent = `Location: ${event.location}`;
        description.textContent = event.description;

        

        card.appendChild(title);
        card.appendChild(date);
        card.appendChild(time);
        card.appendChild(location);
        card.appendChild(description);

        eventsContainer.appendChild(card);
    });
}

displayEvents(events);
