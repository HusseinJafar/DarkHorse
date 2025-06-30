// script.js

function changeColor(cardId) {
    const card = document.getElementById(cardId);
    const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#33FFF5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
}

function toggleVisibility(cardId) {
    const card = document.getElementById(cardId);
    if (card.style.display === 'none') {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
}

function showAlert() {
    alert('Hello! This is an alert from JavaScript.');
}