function getComputerChoice() {
    let choice;
    let i = Math.random();
    switch (true) {
        case (i < 0.33):
            choice = "rock";
            document.getElementById("compchoice").src = "pics/rock.png";
            document.getElementById("compchoice").style.animation = "nill";
            break;
        case ((i > 0.33) && (i < 0.6)):
            choice = "paper";
            document.getElementById("compchoice").src = "pics/paper.png";
            document.getElementById("compchoice").style.animation = "nill";
            break;
        case (i > 0.6):
            choice = "scissors";
            document.getElementById("compchoice").src = "pics/scissors.png";
            document.getElementById("compchoice").style.animation = "nill";
            break;
    }
    return choice;
}
function getPlayerChoice() {
    let choice;
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

let pchoice;