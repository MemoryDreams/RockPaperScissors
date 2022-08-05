function getComputerChoice() {
    let choice;
    let i = Math.random();
    document.getElementById("compchoice").style.animation = "rotation 2s infinite linear";
    let l = Math.random();
    switch (true) {
        case (l < 0.25):
            setTimeout(2000);
            break;
        case ((l > 0.25) && (l < 0.5)):
            setTimeout(3500);
            break;
        case ((l > 0.5) && (l < 0.75)):
            setTimeout(5500);
            break;
        case (l > 0.75):
            setTimeout(8000);
            break;
    }
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

function getPlayerChoice(choice) {
    switch (choice) {
        case 'rock':
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            document.getElementById("humanchoice").src = "pics/rock.png";
            document.getElementById("humanchoice").style.animation = "nill";
            break;
        case 'paper':
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            document.getElementById("humanchoice").src = "pics/paper.png";
            document.getElementById("humanchoice").style.animation = "nill";
            break;
        case 'scissors':
            document.getElementById("rock").disabled = true;
            document.getElementById("paper").disabled = true;
            document.getElementById("scissors").disabled = true;
            document.getElementById("humanchoice").src = "pics/scissors.png";
            document.getElementById("humanchoice").style.animation = "nill";
            break;
    }
};

function reset() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("humanchoice").src = "pics/favicon.png";
    document.getElementById("humanchoice").style.animation = "rotation 2s infinite linear";
    document.getElementById("compchoice").src = "pics/favicon.png";
}

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