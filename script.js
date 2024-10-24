document.getElementById('envelope').addEventListener('click', function() {
    document.getElementById('closed-envelope').style.opacity = '0';
    document.querySelector('.thought-bubble').style.display = 'none';
    
    // Hide envelope after fade out
    setTimeout(function() {
        document.getElementById('envelope').style.display = 'none';
        document.getElementById('message-container').style.display = 'flex';
    }, 500);
});
// Mail Site: Decline button avoids the user on hover
document.getElementById('decline-button').addEventListener('mouseover', function() {
    var x = Math.random() * window.innerWidth;
    var y = Math.random() * window.innerHeight;
    this.style.position = 'absolute';
    this.style.left = x + 'px';
    this.style.top = y + 'px';
});

// Mail Site: Switch to flower site on "Accept" button click
document.getElementById('accept-button').addEventListener('click', function() {
    document.getElementById('mail-site').style.display = 'none';
    document.getElementById('flower-site').style.display = 'flex';
    setTimeout(function() {
        document.getElementById('quote').classList.add('show');
    }, 500);
});



const quotes = [
    "Love is the flower you've got to let grow.",
    "You are my sunshine on a cloudy day.",
    "A flower cannot blossom without sunshine, and man cannot live without love.",
    "Every flower is a soul blossoming in nature."
];

const flowerGif = document.getElementById('flower-gif');
const quoteElement = document.getElementById('quote');
let currentIndex = 0;

flowerGif.addEventListener('click', () => {
   currentIndex = (currentIndex + 1) % quotes.length;

    if(currentIndex ==quotes.length-1)
        {
            currentIndex =0;
        }
    console.log("Flower clicked");
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
