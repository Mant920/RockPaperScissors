//buttons
const buttons=document.querySelectorAll("button");

const output=document.querySelector("#result");
let content=document.createElement("p");


//declaring global variables
let humanScore = 0, computerScore = 0;
const MAXIMUM_POINTS = 5;

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
        return "scissor";
    }
}


function playRound(button,computerChoice)
{
    
    let message=" ";
    
        if((button==1 &&computerChoice=="paper")||(button==1&&computerChoice=="scissor"))
        {
        
            if(computerChoice=="paper")
            {
                message="You lose, Paper beats Rock!";
                computerScore+=1;

            }
            else if(computerChoice=="scissor")
            {
                message="You win, Rock beats Scissor!";
                //Incrementing human score
                humanScore+=1;
            }
            
            
        }
        else if((button==2 &&computerChoice=="rock")||(button==2 && computerChoice=="scissor"))
        {
            
                if(computerChoice=="rock")
                {
                    message="You win, Paper beats Rock!";
                    humanScore+=1;
                }
                else if(computerChoice=="scissor")
                {
                    message="You lose, Scissor beats Paper !";
                    //Incrementing computer score
                    computerScore+=1;
                }
                
            
        }
        else if((button==3 &&computerChoice=="rock")||(button==3 &&computerChoice=="paper"))
        {
                if(computerChoice=="rock")
                {
                    message="You lose, Rock beats Scissor!";
                    computerScore+=1;
                }
                else if(computerChoice=="paper")
                {
                    message="You win, Scissor beats Paper !";
                    humanScore+=1;
                }
        }
        else
        {
            message="It's a draw!";
        }
    console.log(message);
    content.textContent = `Computer choice: `+computerChoice+`,    `+message+` Your score: `+humanScore+` Computer score: `+computerScore;
    content.style.textAlign="center";
    
    if(humanScore==5)
    {
        content.textContent ="You Win! You scored 5 points first!";
        humanScore=0;
        computerScore=0;
    }
    else if(computerScore==5)
    {
        content.textContent ="You Lose! Computer scored 5 points first!";
        humanScore=0;
        computerScore=0;
    }
 

}
output.appendChild(content);

buttons.forEach((button)=>{
    let btn =button.id;
    button.addEventListener("click",()=>{
        playRound(btn,getComputerChoice());
        console.log(btn);

    });
});
