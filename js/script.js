import speakers from './data.js';

const speakerData = speakers;
const speakerList = document.querySelector('.speaker');

speakerList.innerHTML = `<h3 class="event-title">Featured Speakers</h3>
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
    </div>
    `).join('')}
    <div class="moreBtn">
    <a href="#" class="more">MORE <i class="fa fa-angle-down"></i></a>
</div>`;

const mobileNav = document.querySelector('.mobile-nav-links');
const menuBar = document.querySelector('.fa-bars');

// ─── Functions ───────────────────────────────────────────────────────

function showMenu() {
  mobileNav.classList.toggle('show-menu');
  menuBar.classList.toggle('fa-times');
}

// ─── Event Listener ──────────────────────────────────────────────────────────
menuBar.addEventListener('click', showMenu);
window.onload = speakerList;

// menuBar.addEventListener('click', () => {
//   mobileNav.classList.toggle('show-menu');
//   menuBar.classList.toggle('fa-times');
// });