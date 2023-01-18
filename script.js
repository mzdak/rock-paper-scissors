const btn = document.querySelectorAll('img');
const userScore = document.querySelector('#your-score');
const compScore = document.querySelector('#comp-score');
const result =document.querySelector('#result')
const main =document.querySelector('#main')
const roundResult = document.createElement('p');

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice==1) return 'rock';
    if(choice==2) return 'paper';
    if(choice==3) return 'scissors'
}

let userWin = 0;
let compWin = 0;

function playRound(computerChoice, userChoice){
    console.log(computerChoice);
    console.log(userChoice);
    if(computerChoice==='rock' && userChoice==='rock' ||
    computerChoice==='paper' && userChoice==='paper' ||
     computerChoice==='scissors' &&userChoice==='scissors'){
        roundResult.innerHTML = `It's a draw.`
        console.log("It's a draw!")
    } 
    else if(computerChoice==='rock' && userChoice==='paper'||
    computerChoice==='paper' && userChoice==='scissors'||
    computerChoice==='scissors' &&userChoice==='rock'){
        roundResult.innerHTML = `You win. <br>${userChoice} beats ${computerChoice}.`
        console.log("Paper beats rock. You win!");
        userWin +=1;
        userScore.textContent = `Player: ${userWin}`;
    }
    
    else {
        roundResult.innerHTML = `You lose.<br> ${computerChoice} beats ${userChoice}.`
        console.log("You lose...");
        compWin += 1;
        compScore.textContent = `Computer: ${compWin}`;
    }

    if(userWin == 5){
        console.log("You win the game!");
        if(confirm("You've Won!\nDo you want to play again?")){
            userWin = 0;
            compWin = 0;
            userScore.textContent = `Player: ${userWin}`;
            compScore.textContent = `Computer: ${compWin}`;
            roundResult.innerHTML = '';
        }
        
    }
    if(compWin == 5){
        console.log("You lose the game!")
        if(confirm('You Lose...\nDo you want to play again?')){
            userWin = 0;
            compWin = 0;
            userScore.textContent = `Player: ${userWin}`;
            compScore.textContent = `Computer: ${compWin}`;
            roundResult.innerHTML = '';
        }
    }

    roundResult.setAttribute('style', 'display:flex; justify-content: center; align-items:center; font-size:1.5em');
    main.appendChild(roundResult);
}


btn.forEach(button => {
    button.addEventListener('click', function(){

        playRound(getComputerChoice(), button.alt);
    });
})