window.addEventListener("load", function () {
  const output = document.getElementById('output');
  const nextButton = document.getElementById('nextButton');
  const restartButton = document.getElementById('restartButton');

  // Store your story in an array
  const story = [
    "Once upon a time, there was a brave adventurer.",
    "The adventurer set out on a journey to find a hidden treasure.",
    "On the way, the adventurer faced many challenges and met new friends.",
    "Finally, after a long and perilous journey, the adventurer found the treasure."
  ];

  let currentIndex = 0; // Keep track of the current index of the story

  function displayText(text) {
    output.innerHTML = `<p>${text}</p>`; // Replace the previous text with the new one
  }

  function progressStory() {
    if (currentIndex < story.length) {
      const currentStoryPart = story[currentIndex];
      displayText(currentStoryPart);
      currentIndex++;
    } else {
      displayText("The End"); // Show a message when the story ends
      nextButton.style.display = "none"; // Hide the "Next" button
      restartButton.style.display = "block"; // Show the "Restart" button
    }
  }

  function restartGame() {
    currentIndex = 0; // Reset the current index to start the story again from the beginning
    displayText(""); // Clear the output area
    nextButton.style.display = "block"; // Show the "Next" button
    restartButton.style.display = "none"; // Hide the "Restart" button
    gameLoop(); // Restart the game loop
  }

  // Add click event listeners to the "Next" and "Restart" buttons
  nextButton.addEventListener('click', progressStory);
  restartButton.addEventListener('click', restartGame);

  function gameLoop() {
    // Add this line to scroll to the top of the page when the game loop starts
    window.scrollTo(0, 0);

    // Rest of your game loop code goes here
  }

  // Start the game loop
  gameLoop();

});

