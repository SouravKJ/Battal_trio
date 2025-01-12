// script.js

function playGame(userChoice) {
    const choices = ["stone", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    const choiceToImage = {
        stone: "images/stone.png",
        paper: "images/paper.png",
        scissor: "images/scissor.png"
    };

    // Update the choices on the webpage
    document.getElementById("computer-choice-image").src = choiceToImage[computerChoice];
    document.getElementById("user-choice-image").src = choiceToImage[userChoice];


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
}
function resetGame() {
    document.getElementById("computer-choice-image").src = "images/CHOICE1.png";
    document.getElementById("user-choice-image").src = "images/CHOICE2.png";
    document.getElementById("result").textContent = "Result: ";
}   
// Helper function to capitalize choices
function capitalize(choice) {
    return choice.charAt(0).toUpperCase() + choice.slice(1);
}
