function getComputerChoice(){
    const pick=['rock','paper','scissors'];
    return (pick[Math.floor(Math.random() * pick.length)]);
}

function playRound(playerSelection,computerSelection){
    if(playerSelection==='rock'){
        if(computerSelection==='scissors'){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if(computerSelection==='paper'){
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else{
            return `${playerSelection} and ${computerSelection} is a tie`;
        }
    }

    else if(playerSelection==='scissors'){
        if(computerSelection==='rock'){
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else if(computerSelection==='paper'){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else{
            return `${playerSelection} and ${computerSelection} is a tie`;
        }
    }

    else if(playerSelection==='paper'){
        if(computerSelection==='scissors'){
            return `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else if(computerSelection==='rock'){
            return `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else{
            return `${playerSelection} and ${computerSelection} is a tie`;
        }
    }
}
