const btn = document.querySelectorAll('img');
const userScore = document.querySelector('#your-score');
const compScore = document.querySelector('#comp-score');
const result =document.querySelector('#result')
const main =document.querySelector('#main')
const roundResult = document.createElement('p');

let userWin = 0;
let compWin = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    if(choice==1){
        return 'rock';
    }
    if(choice==2){ 
        return 'paper';
    }
    if(choice==3) {
        return 'scissors';
    }
    
}

function compareChoices(computerChoice, userChoice){
    if(computerChoice==='rock' && userChoice==='rock' ||
    computerChoice==='paper' && userChoice==='paper' ||
     computerChoice==='scissors' &&userChoice==='scissors'){
        roundResult.innerHTML = `It's a draw.<br> You both chose ${userChoice.toUpperCase()}`
    } 
    else if(computerChoice==='rock' && userChoice==='paper'||
    computerChoice==='paper' && userChoice==='scissors'||
    computerChoice==='scissors' &&userChoice==='rock'){
        roundResult.innerHTML = `You win. <br>${userChoice.toUpperCase()} beats ${computerChoice.toUpperCase()}.`
        userWin +=1;
        userScore.textContent = `Player: ${userWin}`;
    }
    
    else {
        roundResult.innerHTML = `You lose.<br> ${computerChoice.toUpperCase()} beats ${userChoice.toUpperCase()}.`
        compWin += 1;
        compScore.textContent = `Computer: ${compWin}`;
    }
}

function gameOver(){
    if(userWin == 5){
        userScore.textContent = `Player: ${userWin}`;
        compScore.textContent = `Computer: ${compWin}`;
        if(confirm("You've Won!\nDo you want to play again?")){
            location.reload()
        }
        
    }
    if(compWin == 5){
        userScore.textContent = `Player: ${userWin}`;
        compScore.textContent = `Computer: ${compWin}`;
        if(confirm('You Lose...\nDo you want to play again?')){
            location.reload()
        }
    }
}

function playRound(computerChoice, userChoice){

    compareChoices(computerChoice, userChoice);

    roundResult.setAttribute(
        'style', 'display:flex; justify-content: center; align-items:center; font-size:1.5em; text-align: center; font-weight: bold');
    main.appendChild(roundResult);

    gameOver()
}


btn.forEach(button => {
    button.addEventListener('click', function(e){
        playRound(getComputerChoice(), e.target.alt);
    });
})