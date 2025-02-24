let results = document.getElementById("result");
let computer = document.getElementById("computer");
let user = document.getElementById("userInput");
let pCounter=0;
let cCounter = 0;
function playGame(pChoice){
compChoice = ["rock", "paper", "scissor"];
let cChoice = compChoice[Math.floor(Math.random()*3)];
switch(pChoice){
    case "rock":
        user.innerText = "PLAYER : ✊";
       break;
    case "paper":
        user.innerText = "PLAYER : 🤚";
       break;
    case "scissor":
        user.innerText = "PLAYER : ✌️";
        break;

}
switch(cChoice){
    case "rock":
       computer.innerText = "COMPUTER : ✊";
       break;
    case "paper":
       computer.innerText = "COMPUTER : 🤚";
       break;
    case "scissor":
        computer.innerText = "COMPUTER : ✌️";
        break;

}
if((pChoice=== "scissor" && cChoice === "paper") || (pChoice=== "rock" && cChoice === "scissor") || (pChoice=== "paper" && cChoice === "rock")){
    results.innerText= "PLAYER WINS";
    results.style.color = "green";
    pCounter++;
    document.getElementById("p").innerText=`Player : ${pCounter}`;
}
else if(pChoice===cChoice){
    results.innerText="IT'S A TIE";
    results.style.color = "blue";
}
else{
    results.innerText="COMPUTER WINS";
    results.style.color = "red";
    cCounter++;
    document.getElementById("c").innerText=`Computer : ${cCounter}`;
}
}
