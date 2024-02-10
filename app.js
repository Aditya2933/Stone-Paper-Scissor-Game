let userScore=0;
let compScore=0;
let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");

const mesg=document.querySelector(".msg");
const drawGame=()=>{
    mesg.innerText="Game was draw. Play Again";
    mesg.style.backgroundColor="#081b31";
}

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log(`You win!  Your${userChoice} beats ${compChoice}`);
        mesg.innerText="You Win";
        mesg.style.backgroundColor="green";
    }
    else{
        console.log("You lose!");
        compScore++;
        compScorePara.innerText=compScore;
        mesg.innerText=`You Loose!  ${compChoice} beats your ${userChoice}`;
        mesg.style.backgroundColor="red";
    }
};
const genCompChoice=()=>{
    const options=["Rock","Paper","Scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};

const playGame=(userChoice) =>{
    console.log("Userchoice =",userChoice);
    const compChoice= genCompChoice();
    console.log("Comp choice =",compChoice);
    if (userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="Rock"){
            userWin=compChoice==="Paper"?false:true;
        }
    else if(userChoice==="Paper"){
        userWin=compChoice==="Scissors"?false:true;
    }else{
        userWin=compChoice==="Rock"?false:true;
    }
    showWinner(userWin,userChoice,compChoice)
    };
};


const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=> {
    
    choice.addEventListener("click",() => {
        const userChoice=choice.getAttribute("Id");
        playGame(userChoice);
    });
});

