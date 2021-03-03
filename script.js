var userChoice = prompt("Do you choose R, P, or S?");
var options = ['R', 'P', 'S'];
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

var compare = function (userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert("You tied! Try again.");
        return "tie";
    }
    else {
        if (userChoice === "R") {
            if (computerChoice === "S") {
                alert("Winner Winner Chicken Dinner");
                return "R wins";
            }
            else {
                alert("Better luck next time.");
                return "loser";
            }
        }
        if (userChoice === "P") {
            if (computerChoice === "R") {
                alert("Winner")
                return "S wins";
            }
            else {
                alert ("Better luck next time.");
                return "loser";
            }
        }
        if (userChoice === "S") {
            if (computerChoice === "P") {
                alert("Winner Winner Chicken Dinner");
                return "P wins";
            }
            else {
                alert("Better luck next time.");
                return "loser";
            }
        }
    }
}
var result = compare(userChoice,computerChoice);
