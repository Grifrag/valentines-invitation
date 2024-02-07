function showHappyCat() {
    // Get the happy cat gif element
    var happyCatGif = document.getElementById("happyCatGif");

    // Set the source of the happy cat gif
    happyCatGif.src = "happy-cat.gif"; // Replace with the actual filename of your happy cat gif

    // Display the happy cat gif
    happyCatGif.style.display = "block";

    // Hide the button container after clicking
    document.getElementById("buttonContainer").style.display = "none";
}

// Add function for the "No" button if needed
document.getElementById("noButton").addEventListener("click", function () {
    alert(":(");
    // Hide the button container after clicking
    document.getElementById("buttonContainer").style.display = "none";
});
