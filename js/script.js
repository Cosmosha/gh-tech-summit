import speakers from './data.js';

const speakerData = speakers;

document.querySelector('.speaker').innerHTML = `<h3 class="event-title">Featured Speakers</h3>
<hr class="underliner">
<div class="speaker-container">
${speakerData.map((speaker) => `<div class="speaker-panel">
        <img src="${speaker.imageSrc}" alt="">
        <div class="speaker-info">
            <h2>${speaker.name}</h2>
            <p class="profile">${speaker.role}</p>
            <hr class="line">
            <p>${speaker.description}</p>
        </div>
    </div>`).join('')}`;

const mobileNav = document.querySelector('.mobile-nav-links');
const menuBar = document.querySelector('.fa-bars');

// ─── Event Listener ──────────────────────────────────────────────────────────

menuBar.addEventListener('click', () => {
  mobileNav.classList.toggle('show-menu');
  menuBar.classList.toggle('fa-times');
});