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



document.getElementById('flower-gif').addEventListener('click', function() {
    const quotes = [
        "Love is the flower you've got to let grow.",
        "You are my sunshine on a cloudy day.",
        "A flower cannot blossom without sunshine, and man cannot live without love.",
        "Every flower is a soul blossoming in nature."
    ];
    
    let currentIndex = 0;
    
    // Increment index and wrap around if it exceeds the length of the quotes array
    currentIndex = (currentIndex + 1) % quotes.length;

    // Log to check if click event is working
    console.log("Flower clicked, currentIndex: ", currentIndex);

    // Remove previous quote and update
    document.getElementById('quote').classList.remove('show');
    setTimeout(() => {
        document.getElementById('quote').textContent = quotes[currentIndex];
        document.getElementById('quote').classList.add('show');
    }, 300);
});

// Initial load animation
window.onload = () => {
    document.getElementById('quote').classList.add('show');
};
