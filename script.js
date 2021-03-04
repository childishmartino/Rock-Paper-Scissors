var options = ['R', 'P', 'S'];
var wins = 0
var loss = 0
var ties = 0

var playGame = function () {
    var userChoice = prompt("Do you choose R, P, or S?");
    if (!userChoice) {
        return;
    }
    
    userChoice = userChoice.toUpperCase();

    var index = Math.floor(Math.random() * options.length);

    var computerChoice = options[index];

    window.alert("The computer chose " + computerChoice)

    if (userChoice === computerChoice) {
        ties ++;
        alert("You tied! Try again.");
} else if (
    (userChoice === "R" && computerChoice === "S") ||
    (userChoice === "S" && computerChoice === "P") ||
    (userChoice === "P" && computerChoice ==="R")
) {
    wins ++;
    alert("Winner");
} else {
    loss ++;
    alert("loser");
}

    alert("stats:\n Wins: " + wins + "\n Losses: " + loss + "\n Ties: " + ties);

    var playAgain = confirm ("Do you want to play again");
    if (playAgain) {
        playGame()
    }
}

playGame();
