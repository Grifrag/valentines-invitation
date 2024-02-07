// Function to play audio and unmute after a delay
function playAudio() {
    // Get the background music element
    var backgroundMusic = document.getElementById("backgroundMusic");

    // Unmute the audio after a delay of 5 seconds (5000 milliseconds)
    setTimeout(function() {
        backgroundMusic.muted = false;
    }, 5000);

    // Play the audio
    backgroundMusic.play();
}

// Function to show happy cat
function showHappyCat() {
    // Play the audio when the "Yes" button is clicked
    playAudio();

    // Skip the first 2 seconds of the song
    setTimeout(function() {
        document.getElementById("backgroundMusic").currentTime = 2; // Skip first 2 seconds
    }, 0);

    // Get the happy cat gif element
    var happyCatGif = document.getElementById("happyCatGif");

    // Set the source of the happy cat gif
    happyCatGif.src = "happy-cat.gif"; // Replace with the actual filename of your happy cat gif

    // Display the happy cat gif
    happyCatGif.style.display = "block";

    // Hide the button container after clicking
    document.getElementById("buttonContainer").style.display = "none";
}

// Add event listener for the "No" button if needed
document.getElementById("noButton").addEventListener("click", function () {
    alert("That's okay! Maybe next time.");
    // Hide the button container after clicking
    document.getElementById("buttonContainer").style.display = "none";
    
    // Pause the background music
    document.getElementById("backgroundMusic").pause();
});
