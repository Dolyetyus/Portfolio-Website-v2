function openCV() {
    window.open('files/resume.pdf', '_blank');
}

document.getElementById('lastUpdated').textContent = 'CV last updated: 12/11/2024';

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('open');
}