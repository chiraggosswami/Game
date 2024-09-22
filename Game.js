let compNumber;  // Computer's random number
let totGuess = 1;  // Total guesses counter
let bound;  // Maximum number range

// Set the range for the game
function setRange() {
    const rangeInput = document.getElementById('max-range').value;
    
    if (rangeInput > 0) {
        bound = parseInt(rangeInput);
        document.getElementById('range-display').textContent = bound;
        compNumber = Math.floor(Math.random() * bound) + 1;
        document.getElementById('range-input').style.display = 'none';
        document.getElementById('game-section').style.display = 'block';
        console.log(`Random number generated: ${compNumber}`);  // For testing purposes
    } else {
        alert('Please enter a valid number.');
    }
}

// Check user's guess and provide feedback
function submitGuess() {
    const userGuess = parseInt(document.getElementById('user-guess').value);
    
    if (!isNaN(userGuess)) {
        if (userGuess === compNumber) {
            document.getElementById('result').textContent = `Congratulations! You guessed the correct number in ${totGuess} attempts.`;
            document.getElementById('game-section').style.display = 'none';
            document.getElementById('result').style.display = 'block';
        } else if (userGuess > compNumber) {
            document.getElementById('feedback').textContent = "Your guess is too high!";
            totGuess++;
        } else {
            document.getElementById('feedback').textContent = "Your guess is too low!";
            totGuess++;
        }
    } else {
        alert('Please enter a valid guess.');
    }
}