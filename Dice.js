function roll(){

var randomNumber1= Math.floor(Math.random()*6)+1;
var randomNumber2= Math.floor(Math.random()*6)+1;

var dice1="images/dice"+randomNumber1+".png";
var dice2="images/dice"+randomNumber2+".png";

document.querySelector(".dice .img1").setAttribute("src",dice1);
document.querySelector(".dice .img2").setAttribute("src",dice2);

if(randomNumber1>randomNumber2)
document.querySelector("h1").textContent=("🚩Player 1 has wins");
else if(randomNumber1<randomNumber2)
document.querySelector("h1").textContent=("Player 2 has wins🚩");
else
document.querySelector("h1").textContent=("Draw!");
}
