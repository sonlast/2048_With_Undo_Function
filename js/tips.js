var messages = [
  '...primarily utilize the RIGHT and DOWN arrow keys to move the tiles and manipulate the game board.',
  'To minimize the risk of the cell with the highest value moving away from the bottom-right corner, consider using the UP arrow key only when the right column is completely filled. By doing so, you can maintain the desired positioning of the highest value cell in the bottom-right corner more effectively.',
  'Reserve the use of the LEFT arrow key as a last resort and avoid using it unless there are no other available moves left. By minimizing the usage of the LEFT arrow key, you can prioritize other directions and maintain the positioning of the game board towards the desired corner.',
  'Strive to maintain a full vertical column on the right side of the game board. Focusing on filling up the right column helps in maintaining a compact and organized arrangement of tiles, potentially facilitating strategic moves and preventing valuable tiles from dispersing across the board.',
  // Add more tips as needed

];

var currentIndex = 0;

function showAlert(message) {
  var alertMessage = document.getElementById("alert-message");
  alertMessage.textContent = message;
  document.getElementById("custom-alert").style.display = "block";
}

function closeAlert() {
  document.getElementById("custom-alert").style.display = "none";
}

function showNextMessage() {
  currentIndex++;
  if (currentIndex >= messages.length) {
    currentIndex = 0; 
    closeAlert(); 
    return;
  }

  var message = messages[currentIndex];
  showAlert(message);
}
