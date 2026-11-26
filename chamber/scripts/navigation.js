const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    const isExpanded = navButton.classList.toggle('show');

    navLinks.classList.toggle('show');

    navButton.setAttribute('aria-expanded', isExpanded);
    navButton.setAttribute(
        'aria-label',
        isExpanded ? 'Close navigation menu' : 'Open navigation menu'
    );
});

