//declaring global variables
let humanScore = 0, computerScore = 0;

//Creating random number generator
function genRandom()
{
    return Math.floor(Math.random() * 3);
}
//Function for computer
function getComputerChoice()
{
    ranNum=genRandom();
    if(ranNum===0)
    {
        return "rock";
    }
    else if(ranNum===1)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

function getHumanChoice()
{
    //Getting user input
    let choice = prompt("Rock, Paper or Scissors?Pick one.");
    choice=choice.toLowerCase()
    return choice;

}

function playRound(humanChoice, computerChoice)
{
    
    let message=" ";

    if((humanChoice==="rock" && computerChoice==="paper") || (humanChoice==="scissors" && computerChoice==="rock") || (humanChoice==="paper" && computerChoice==="scissors"))
    {
        

        //Incrementing computer score
        computerScore+=1;
        if(humanChoice==="rock")
        {
            message="You lose, Paper beats Rock!";
        }
        else if(humanChoice==="scissors")
        {
            message="You lose, Rock beats Scissors!";
        }
        else if(humanChoice==="paper")
        {
            message="You lose, Scissors beats Paper !";
        }
        
    }
    else if((humanChoice==="paper" && computerChoice==="rock") || (humanChoice==="rock" && computerChoice==="scissors") || (humanChoice==="scissors" && computerChoice==="paper"))
    {
        //Incrementing human score
        humanScore+=1;
        if(humanChoice==="rock")
        {
            message="You win, Rock beats Scissors!";
        }
        else if(humanChoice==="scissors")
        {
            message="You win, Scissors beats Paper !";
        }
        else if(humanChoice==="paper")
        {
            message="You win, Paper beats Rock !";
        }
        
    }
    else
    {
        message="It's a draw!";
    }
    console.log(message);
    return message;

}


