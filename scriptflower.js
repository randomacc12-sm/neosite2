const quotes = [
    "Love is the flower you've got to let grow.",
    "You are my sunshine on a cloudy day.",
    "A flower cannot blossom without sunshine, and man cannot live without love.",
    "Every flower is a soul blossoming in nature."
];

const flower = document.getElementById('flower-gif');
const quoteElement = document.getElementById('quote');
let currentIndex = 0;

flower.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % quotes.length;
    
    quoteElement.classList.remove('show');
    setTimeout(() => {
        quoteElement.textContent = quotes[currentIndex];
        quoteElement.classList.add('show');
    }, 300);
});

// Initial load animation
window.onload = () => {
    quoteElement.classList.add('show');
};
