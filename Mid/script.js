// Story data for the new adventure
const storyData = {
    start: {
        text: "'Forest Adventure' is an interactive storytelling game set in a mysterious jungle. The player wakes up with no memory of how they got there and must navigate through various choices to uncover the secrets of the jungle and find a way out. As the player progresses through the game, they encounter different scenarios such as discovering hidden temples, encountering wild creatures, and uncovering ancient ruins. Each decision the player makes leads to different outcomes, with multiple endings awaiting them depending on their choices. The game offers a blend of exploration, decision-making, and mystery, providing an immersive experience for players as they delve deeper into the jungle's secrets. With visually engaging images accompanying the narrative and a dynamic storyline influenced by player choices, 'Forest Adventure' promises an exciting and unpredictable journey for those brave enough to embark on it.",
    
        choices: ["Start", "Exit"],
        consequences: ["start1", "exit"],
        image: "01.jpg"
    },
    
      start1: {
        text: "You wake up in a dense jungle, surrounded by towering trees and strange sounds. You have no memory of how you got here.",
        choices: ["Explore deeper into the jungle", "Search for a way out"],
        consequences: ["explore", "search"],
        image: "01.jpg"
      },
      exit: {
        text: "Thank You For The Visit! Have A Nice Day.",
        choices: ["start"],
        consequences: ["start1"],
        image: "01.jpg"
      },
    explore: {
        text: "As you venture deeper into the jungle, you come across a hidden temple covered in vines. It seems ancient and mysterious.",
        choices: ["Enter the temple", "Continue exploring the jungle"],
        consequences: ["temple", "explore_more"],
        image: "02.jpg"
    },
    temple: {
        text: "Inside the temple, you discover an elaborate chamber filled with relics and traps. You sense danger lurking around every corner.",
        choices: ["Proceed cautiously", "Retreat from the temple"],
        consequences: ["proceed", "start"],
        image: "03.jpg"
    },
    proceed: {
        text: "You navigate through the traps and reach the heart of the temple, where a legendary artifact awaits. You feel its power calling out to you.",
        choices: ["Claim the artifact", "Leave the temple"],
        consequences: ["win", "start"],
        image: "04.jpg"
    },
    search: {
        text: "You decide to search for a way out of the jungle. After hours of wandering, you stumble upon an ancient ruin.",
        choices: ["Investigate the ruin", "Keep searching for an exit"],
        consequences: ["ruin", "search_more"],
        image: "05.jpg"
    },
    ruin: {
        text: "As you explore the ruin, you uncover a hidden chamber deep underground. It holds secrets beyond your wildest imagination.",
        choices: ["Enter the chamber", "Return to the surface"],
        consequences: ["enter_chamber", "start"],
        image: "06.jpeg"
    },
    enter_chamber: {
        text: "Inside the chamber, you find an ancient artifact glowing with mystical energy. You sense its power could change the world.",
        choices: ["Claim the artifact", "Leave the chamber"],
        consequences: ["win", "start"],
        image: "07.jpeg"
    },
    explore_more: {
        text: "You continue exploring the jungle, encountering wild creatures and natural wonders. The mysteries of the jungle seem endless.",
        choices: ["Keep exploring", "Return to the starting point"],
        consequences: ["explore_more", "start"],
        image: "08.png"
    },
    search_more: {
        text: "You persist in your search for an exit, determined to find your way out of the jungle. The journey is perilous, but you press on.",
        choices: ["Press forward", "Rest and reconsider"],
        consequences: ["search_more", "start"],
        image: "09.png"
    },
    win: {
        text: "Congratulations! You have successfully completed your adventure and obtained the legendary artifact!",
        image: "001.jpeg"
    }
};

// Function to start the game
function startGame() {
    // Set initial state
    currentStage = "start";

    // Refresh page display
    updatePage();
}

// Function to update the page based on user choices
function updatePage() {
    const currentData = storyData[currentStage];
    document.getElementById("story-text").textContent = currentData.text;

    // Clear previous choices
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    // Display current choices
    currentData.choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.textContent = choice;
        button.onclick = () => makeChoice(currentData.consequences[index]);
        choicesContainer.appendChild(button);
    });

    // Display current image
    const storyImage = document.getElementById("story-image");
    storyImage.src = currentData.image;
}

// Function to handle user choices and navigate to the next stage
function makeChoice(choice) {
    currentStage = choice;
    updatePage();

    // Check if it's an ending stage
    if (!storyData[choice].choices) {
        endGame();
    }
}

// Function to end the game and display the final image
function endGame() {
    const currentData = storyData[currentStage];

    // Display final message
    document.getElementById("story-text").textContent = currentData.text;

    // Remove any choices buttons
    const choicesContainer = document.getElementById("choices-container");
    choicesContainer.innerHTML = "";

    // Display final image
    const storyImage = document.getElementById("story-image");
    storyImage.src = currentData.image;
}

// Initialize the game
let currentStage = "";
startGame();

// Display last modified date
document.getElementById('lastModified').textContent = document.lastModified;

// Function to restart the game
function restartGame() {
    startGame(); // Call the startGame function to reset the game
}

// Function to exit the game
function exitGame() {
    // You can add any exit actions here, such as redirecting to another page or displaying a message
    alert("Thank you for playing!");
}

