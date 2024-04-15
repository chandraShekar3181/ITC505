const nameDropdown = document.getElementById("name-dropdown");
const verbDropdown = document.getElementById("verb-dropdown");
const placeDropdown = document.getElementById("place-dropdown");
const foodDropdown = document.getElementById("food-dropdown");
const storyResult = document.getElementById("story-result");
const generateBtn = document.getElementById("generate-btn");
const clearBtn = document.getElementById("clear-btn");
const previousBtn = document.getElementById("previous-btn");
const exitBtn = document.getElementById("exit-btn");

let previousStory = '';

generateBtn.addEventListener("click", generateStory);
clearBtn.addEventListener("click", clearStory);
previousBtn.addEventListener("click", showPreviousStory);
exitBtn.addEventListener("click", exitGame);

function generateStory() {
  const name = nameDropdown.value;
  const verb = verbDropdown.value;
  const place = placeDropdown.value;
  const food = foodDropdown.value;

  if (!name || !verb || !place || !food) {
    alert("Please select an option from each dropdown.");
    return;
  }

  const story = `${name} was ${verb} at ${place} and enjoyed ${food}.`;
  storyResult.textContent = story;
  previousStory = story;
}

function clearStory() {
  storyResult.textContent = "";
}

function showPreviousStory() {
  storyResult.textContent = previousStory;
}

function exitGame() {
  window.close();
}
