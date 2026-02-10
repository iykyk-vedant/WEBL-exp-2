// Variable to store the current active light
let currentLight = "red";

// Function to update the UI based on the current active light
function updateLights() {
    // Reset all lights to inactive
    document.getElementById("red").classList.remove("active");
    document.getElementById("yellow").classList.remove("active");
    document.getElementById("green").classList.remove("active");

    // Activate the current light
    document.getElementById(currentLight).classList.add("active");
}

// Function to determine the next light in the sequence
function getNextLight(current) {
    // Using switch statement to determine the next light
    switch(current) {
        case "red":
            return "green";
        case "green":
            return "yellow";
        case "yellow":
            return "red";
        default:
            return "red"; // Default fallback
    }
}

// Event listener for the button click
document.getElementById("changeButton").addEventListener("click", function() {
    // Determine the next light in the sequence
    currentLight = getNextLight(currentLight);
    
    // Update the UI to reflect the new active light
    updateLights();
});

// Initialize the lights
updateLights();