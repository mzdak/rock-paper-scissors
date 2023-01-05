function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;     //get get random number between 1 and 3.
    //MDN says that this results in a no-uniform distributipn.Change later.
    console.log(choice)
    return choice
}

function getUserChoice(){
    let choice = prompt("Choose Rock Paper or Scissor: ").toLowerCase();
    console.log(choice)
    let choiceValue;
    if (choice === "rock"){
        choiceValue = 1;
    }else if(choice === "paper"){
        choiceValue = 2;
    }else if(choice === "scissor"){
        choiceValue = 3;
    }else{
        return "Wrong input."
    }

    return choiceValue;
}

function playRound(computerChoice, userChoice){
    if(computerChoice===userChoice){
        return "It's a draw!"
    } else if(computerChoice===1 && userChoice===2 || computerChoice===2 && userChoice===3 || computerChoice===3 &&userChoice===1){
        return "You win!"
    } else{return "You lose..."}
}

function game(){
    let userWin = 0
    let compWin = 0
    for(let i=1; i<= 5; i++){
        let result = playRound(getComputerChoice(), getUserChoice())
        console.log(result)
        if (result === "You win!"){
            userWin +=1
        } else if(result === "You lose..."){
            compWin +=1
        }
    }

    if(userWin>compWin){
        console.log("You win the game!")
    } else if(compWin > userWin){
        console.log("You lost the game...")
    } else{ console.log("The game ended in a draw.")}
}

game()