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
    //Getting userr input
    let choice = prompt("Rock, Paper or Scissors?Pick one.");
    return choice.toLowerCase();

}
