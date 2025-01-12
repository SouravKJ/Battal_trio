const choices = ["stone", "paper", "scissor"];
const countdownElement = document.getElementById("countdown");
const computerChoiceImage = document.getElementById("computer-choice-image");
let countdownInterval; // To store the interval ID for countdown

function showComputerChoice(callback) {
    let countdown = 0;

    // Clear previous choice image
    computerChoiceImage.style.display = "none";
    computerChoiceImage.src = "";
    countdownElement.textContent = ` ${choices[countdown]}`;
    countdownElement.style.display = "block"; // Ensure countdown is visible

    // Clear previous interval if it exists
    clearInterval(countdownInterval);

    // Countdown logic
    countdownInterval = setInterval(() => {
        countdown++;
        if (countdown < 3) {
            countdownElement.textContent = `${choices[countdown]}`;
        } else {
            clearInterval(countdownInterval);
            const computerChoice = choices[Math.floor(Math.random() * choices.length)];
            const choiceToImage = {
                stone: "images/stone.png",
                paper: "images/paper.png",
                scissor: "images/scissor.png"
            };
            
            countdownElement.style.display = "none";  // Hide countdown

            // Display computer's choice image
            computerChoiceImage.style.display = "inline-block";
            computerChoiceImage.src = choiceToImage[computerChoice];

            // Call the callback with the computer's choice
            callback(computerChoice);
        }
    }, 1000); // Update every second
}

function playGame(userChoice) {
    const choiceToImage = {
        stone: "images/stone.png",
        paper: "images/paper.png",
        scissor: "images/scissor.png"
    };

    // Update user choice image
    document.getElementById("user-choice-image").src = choiceToImage[userChoice];

    // Call showComputerChoice and pass a callback to get the computer's choice
    showComputerChoice((computerChoice) => {
        // Determine the result
        let result = "";
        if (computerChoice === userChoice) {
            result = "It's a tie!";
        } else if (
            (computerChoice === "stone" && userChoice === "scissor") ||
            (computerChoice === "scissor" && userChoice === "paper") ||
            (computerChoice === "paper" && userChoice === "stone")
        ) {
            result = "Computer wins!";
        } else {
            result = "You win!";
        }

        // Display the result
        document.getElementById("result").textContent = `Result: ${result}`;
    });
}

function resetGame() {
    // Clear the countdown and computer choice images
    clearInterval(countdownInterval); // Stop the countdown interval
    document.getElementById("computer-choice-image").src = "images/CHOICE1.png";
    document.getElementById("user-choice-image").src = "images/CHOICE2.png";
    document.getElementById("result").textContent = "Result: ";

    // Reset the countdown display
    ;
}

// Helper function to capitalize choices
function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}
