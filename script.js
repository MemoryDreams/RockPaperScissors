function getComputerChoice() {
    
};

function getPlayerChoice() {

};

let result;

function theGame(compChoice, playerChoice) {

    let result;

    if (playerChoice === compChoice) {
        result = "draw";
    } else 
    {
        switch (playerChoice) {
            case "rock":
                if (compChoice === "scissors") {
                    result = "win";
                } else {
                    result = "lose";
                }
                break;
            case "scissors":
                if (compChoice === "paper") {
                    result = "win";
                } else {
                    result = "lose";
                }
                break;
            case "paper":
                if (compChoice === "rock") {
                    result = "win";
                } else {
                    result = "lose";
                }
                break;
        }
    }
    return result;
}

