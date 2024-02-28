let plyrcnt = 0;
let compcnt = 0;

function getComputerChoice(){
    const pick=['rock','paper','scissors'];
     return (pick[Math.floor(Math.random() * pick.length)]);
}

function playRound(playerSelection,computerSelection){
    if(playerSelection==='rock'){
        if(computerSelection==='scissors'){
            plyrcnt++;
             console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else if(computerSelection==='paper'){
            compcnt++;
             console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else{
             console.log(`${playerSelection} and ${computerSelection} is a tie`);
        }
    }

    else if(playerSelection==='scissors'){
        if(computerSelection==='rock'){
            compcnt++;
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else if(computerSelection==='paper'){
            plyrcnt++;
             console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else{
             console.log(`${playerSelection} and ${computerSelection} is a tie`);
        }
    }

    else if(playerSelection==='paper'){
        if(computerSelection==='scissors'){
            compcnt++;
             console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else if(computerSelection==='rock'){
            plyrcnt++;
             console.log(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else{
             console.log(`${playerSelection} and ${computerSelection} is a tie`);
        }
    }
}

function playGame(){
    for(let i = 0;i<5;i++){
        playerSelection = prompt("Enter your choice: ").toLowerCase();
        computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
    if(plyrcnt>compcnt){
        console.log(`You win the game with the score of ${plyrcnt}-${compcnt}`);
    }
    else if(compcnt>plyrcnt){  
        console.log(`You took an L,the score is ${plyrcnt}-${compcnt}`);
    }
    else{
        console.log(`It is a tie with the score of ${plyrcnt}-${compcnt}`);
    }
}

playGame();