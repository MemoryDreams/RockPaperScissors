let pchoice;
let PCscore = 0;
let Humanscore = 0;

function getComputerChoice() {
    let choice;
    let i = Math.random();
    document.getElementById("compchoice").style.animation = "rotation 2s infinite linear";
    let l = Math.random();
    switch (true) {
        case (l < 0.25):
            setTimeout(20000);
            break;
        case ((l > 0.25) && (l < 0.5)):
            setTimeout(35000);
            break;
        case ((l > 0.5) && (l < 0.75)):
            setTimeout(55000);
            break;
        case (l > 0.75):
            setTimeout(80000);
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
    document.getElementById("reset").disabled = true;
    pchoice = choice;
    switch (choice) {
        case 'rock':
            document.getElementById("humanchoice").src = "pics/rock.png";
            break;
        case 'paper':
            document.getElementById("humanchoice").src = "pics/paper.png";
            break;
        case 'scissors':
            document.getElementById("humanchoice").src = "pics/scissors.png";
            break;
    }
    document.getElementById("humanchoice").style.animation = "nill";
    document.getElementById("rock").disabled = true;
    document.getElementById("paper").disabled = true;
    document.getElementById("scissors").disabled = true;
    theGame(getComputerChoice(), choice);
};

function reset() {
    document.getElementById("rock").disabled = false;
    document.getElementById("paper").disabled = false;
    document.getElementById("scissors").disabled = false;
    document.getElementById("humanchoice").src = "pics/favicon.png";
    document.getElementById("humanchoice").style.animation = "rotation 2s infinite linear";
    document.getElementById("compchoice").src = "pics/favicon.png";
    document.getElementById("compchoice").style.animation = "rotation 2s infinite linear";
}

function upScore() {
    document.getElementById("scores").innerText = Humanscore + ":" + PCscore;
}

function theGame(compChoice, playerChoice) {

    let result;

    if (playerChoice === compChoice) {
        result = "draw";
        document.getElementById("result").innerText = "It's a draw!";
    } else 
    {
        switch (playerChoice) {
            case "rock":
                if (compChoice === "scissors") {
                    result = "win";
                    document.getElementById("result").innerText = "You win!";
                    Humanscore++;
                } else {
                    result = "lose";
                    document.getElementById("result").innerText = "You lose!";
                    PCscore++;
                }
                break;
            case "scissors":
                if (compChoice === "paper") {
                    result = "win";
                    document.getElementById("result").innerText = "You win!";
                    Humanscore++;
                } else {
                    result = "lose";
                    document.getElementById("result").innerText = "You lose!"
                    PCscore++;
                }
                break;
            case "paper":
                if (compChoice === "rock") {
                    result = "win";
                    document.getElementById("result").innerText = "You win!";
                    Humanscore++;
                } else {
                    result = "lose";
                    document.getElementById("result").innerText = "You lose!"
                    PCscore++;
                }
                break;
        }
    }
    upScore();
    document.getElementById("reset").disabled = false;
    return result;
}
