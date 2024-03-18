let plyrcnt = 0;
let compcnt = 0;

const resultsDiv = document.createElement("div");
document.body.appendChild(resultsDiv);

function getComputerChoice(){
    const pick=['rock','paper','scissors'];
     return (pick[Math.floor(Math.random() * pick.length)]);
}

function playRound(playerSelection,computerSelection){
    if(playerSelection==='rock'){
        if(computerSelection==='scissors'){
            plyrcnt++;
             resultsDiv.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
        }
        else if(computerSelection==='paper'){
            compcnt++;
             resultsDiv.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
        }
        else{
            resultsDiv.textContent =`${playerSelection} and ${computerSelection} is a tie`;
        }
    }

    else if(playerSelection==='scissors'){
        if(computerSelection==='rock'){
            compcnt++;
            resultsDiv.textContent =(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else if(computerSelection==='paper'){
            plyrcnt++;
            resultsDiv.textContent =(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else{
            resultsDiv.textContent =(`${playerSelection} and ${computerSelection} is a tie`);
        }
    }

    else if(playerSelection==='paper'){
        if(computerSelection==='scissors'){
            compcnt++;
            resultsDiv.textContent =(`You lose! ${computerSelection} beats ${playerSelection}`);
        }
        else if(computerSelection==='rock'){
            plyrcnt++;
            resultsDiv.textContent =(`You win! ${playerSelection} beats ${computerSelection}`);
        }
        else{
             resultsDiv.textContent = (`${playerSelection} and ${computerSelection} is a tie`);
        }
    }

    resultsDiv.textContent+=` \nPlayer:${plyrcnt} - Computer:${compcnt}`;

    if(plyrcnt>=5){
        resultsDiv.textContent += "\n\n Congrats! You win the game!";
    }

    else if(compcnt>=5){
        resultsDiv.textContent += " \n\n You took an L, better luck next time";
    }
}




const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    let playerSelection = button.textContent.toLowerCase();
    
    button.addEventListener("click",()=>{
        let computerSelection = getComputerChoice();
        playRound(playerSelection,computerSelection)});
})

// function playGame(){
//     for(let i = 0;i<5;i++){
//         playerSelection = prompt("Enter your choice: ").toLowerCase();
//         computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection,computerSelection));
//     }
//     if(plyrcnt>compcnt){
//         console.log(`You win the game with the score of ${plyrcnt}-${compcnt}`);
//     }
//     else if(compcnt>plyrcnt){  
//         console.log(`You took an L,the score is ${plyrcnt}-${compcnt}`);
//     }
//     else{
//         console.log(`It is a tie with the score of ${plyrcnt}-${compcnt}`);
//     }
// }

// playGame();