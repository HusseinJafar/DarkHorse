// script.js

function changeColor(cardId) {
    const card = document.getElementById(cardId);
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5', '#FFBD33', '#8E44AD', '#16A085'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
    // Add subtle animation for a smooth transition
    card.style.transition = 'background-color 0.5s ease';
}

function toggleVisibility(cardId) {
    const card = document.getElementById(cardId);
    if (getComputedStyle(card).opacity === '0' || getComputedStyle(card).display === 'none') {
        // Show with fade in
        card.style.display = 'block';
        setTimeout(() => {
            card.style.opacity = '1';
        }, 10);
    } else {
        // Fade out then hide
        card.style.opacity = '0';
        setTimeout(() => {
            card.style.display = 'none';
        }, 300);
    }
}

function showAlert() {
    alert('Hello! Hope you enjoy this upgraded webpage.');
}