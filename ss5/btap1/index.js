const words = ["Kha", "Duy", "Thanh Phu", "Hao", "Thuan"];
let chosenWord = "";
let displayedWord = [];
let remainingGuesses = 5;
const wordDisplay = document.querySelector(".word-display");
const guessInput = document.querySelector(".guess-input");
const guessButton = document.querySelector(".guess-button");
const remainingGuessesDisplay = document.querySelector(".remaining-guesses");
const resultMessage = document.querySelector(".result-message");
const restartButton = document.querySelector(".restart-button");

function initializeGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    displayedWord = Array.from(chosenWord).map(char => (char === " " ? " " : "*"));
    remainingGuesses = 5;
    wordDisplay.textContent = displayedWord.join("");
    remainingGuessesDisplay.textContent = `Remaining guesses: ${remainingGuesses}`;
    resultMessage.textContent = "";
    guessInput.value = "";
    guessInput.disabled = false;
    guessButton.disabled = false;
    restartButton.style.display = "none";
}

function updateWordDisplay(letter) {
    let found = false;
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i].toLowerCase() === letter.toLowerCase()) {
            displayedWord[i] = chosenWord[i];
            found = true;
        }
    }
    wordDisplay.textContent = displayedWord.join("");
    return found;
}

function checkGameOver() {
    if (!displayedWord.includes("*")) {
        resultMessage.textContent = "Congratulations! You've guessed the word!";
        endGame();
    } else if (remainingGuesses <= 0) {
        resultMessage.textContent = `Game Over! The word was: ${chosenWord}`;
        endGame();
    }
}

function endGame() {
    guessInput.disabled = true;
    guessButton.disabled = true;
    restartButton.style.display = "inline-block";
}

guessInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        guessButton.click();
    }
});

guessButton.addEventListener("click", () => {
    const guess = guessInput.value.trim().toLowerCase();
    if (guess) {
        let correctGuess = false;
        for (let char of guess) {
            if (updateWordDisplay(char)) {
                correctGuess = true;
            }
        }
        if (!correctGuess) {
            remainingGuesses--;
            remainingGuessesDisplay.textContent = `Remaining guesses: ${remainingGuesses}`;
        }
        guessInput.value = "";
        checkGameOver();
    }
});

restartButton.addEventListener("click", initializeGame);

// Initialize the game when the page loads
window.onload = initializeGame;
