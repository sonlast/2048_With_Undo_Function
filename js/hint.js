// Global variables
let moveCount = 0;
const hintButton = document.querySelector('.hint-button');
const tipContainer = document.querySelector('.tip-container');

// Array of tips for the game
const tips = [
  'Try to keep the highest tile in one of the corners.',
  'Focus on merging smaller tiles to create larger ones.',
  'Don\'t let the grid fill up completely. Plan ahead!',
  'Pay attention to the next few moves and think strategically.',
  'Create and maintain a clear path for moving tiles around.',
  // Add more tips as needed
];

// Function to enable the hint button
function enableHintButton() {
  hintButton.disabled = false;
}

// Function to get a random tip from the tips array
function getRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  return tips[randomIndex];
}

// Function to show the hint for the next move
function showNextMoveHint() {
  const tip = getRandomTip();
  tipContainer.textContent = `Next Move Tip: ${tip}`;
}

// Function to handle each move
function handleMove() {
  moveCount++;

  if (moveCount % 5 === 0) {
    enableHintButton();
    showNextMoveHint();
  }

  // Perform the move logic here
  // ...
}

// Event listener for the hint button
hintButton.addEventListener('click', () => {
  // Generate and display a random hint for the player
  const randomTip = getRandomTip();
  alert(`Tip: ${randomTip}`);
});
