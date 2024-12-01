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

document.getElementById('view-video-button').addEventListener('click', function() {
    const videoBubble = document.getElementById('video-bubble');
    videoBubble.style.display = 'block';
    videoBubble.classList.add('show');
});

// Close the video bubble when clicked outside (optional)
window.addEventListener('click', function(e) {
    const videoBubble = document.getElementById('video-bubble');
    if (e.target !== document.getElementById('view-video-button') && !videoBubble.contains(e.target)) {
        videoBubble.style.display = 'none';
    }
});

document.getElementById('play-game-button').addEventListener('click', function () {
    // Hide other sections
    document.getElementById('mail-site').style.display = 'none';
    document.getElementById('flower-site').style.display = 'none';

    // Show the Tic Tac Toe game section
    const gameSection = document.getElementById('tic-tac-toe');
    gameSection.style.display = 'block';

    // Initialize the game
    TicTac.init();
});



const TicTac = {
    cPlayer: "X", // Tracks current player (X or O)
    state: Array(9).fill(null), // Board state (null for empty cells)
    gameOver: false, // Indicates if the game is over

    // Initialize the game
    init() {
        this.cBoard();
        document
            .getElementById("reset")
            .addEventListener("click", () => this.reset());
    },

    // Create the game board dynamically
    cBoard() {
        const board = document.getElementById("board");
        board.innerHTML = ""; // Clear previous board
        this.state.forEach((_, i) => {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.dataset.index = i;
            board.appendChild(cell);
        });
        board.addEventListener("click", (e) => this.handleClick(e)); // Handle clicks on the board
        this.uMessage(`Player ${this.cPlayer}'s turn`);
    },

    // Handle a cell click
    handleClick(e) {
        const cell = e.target;
        const i = cell.dataset.index;

        // Ignore clicks if game is over or cell is taken
        if (this.gameOver || !cell.classList.contains("cell") || this.state[i])
            return;

        // Update board state and UI
        this.state[i] = this.cPlayer;
        cell.textContent = this.cPlayer;
        cell.classList.add("taken");

        // Check for winner or tie
        const winCombo = this.checkWin();
        if (winCombo) {
            this.highlight(winCombo);
            this.uMessage(`Player ${this.cPlayer} wins!`);
            this.gameOver = true;
        } else if (this.state.every((cell) => cell)) {
            this.uMessage("It's a tie!");
            this.gameOver = true;
        } else {
            // Switch players
            this.cPlayer = this.cPlayer === "X" ? "O" : "X";
            this.uMessage(`Player ${this.cPlayer}'s turn`);
        }
    },

    // Check if there's a winning combination
    checkWin() {
        const wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8], // Rows
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8], // Columns
            [0, 4, 8],
            [2, 4, 6], // Diagonals
        ];
        return wins.find((combo) =>
            combo.every((i) => this.state[i] === this.cPlayer)
        );
    },

    // Highlight winning cells
    highlight(combo) {
        combo.forEach((i) => {
            document.getElementById("board").children[i].style.color = "red";
        });
    },

    // Reset the game
    reset() {
        this.state = Array(9).fill(null);
        this.cPlayer = "X";
        this.gameOver = false;
        this.cBoard();
    },

    // Update the game status message
    uMessage(msg) {
        document.getElementById("message").textContent = msg;
    },
};

// Initial load animation
window.onload = () => {
    quoteElement.classList.add('show');
};
