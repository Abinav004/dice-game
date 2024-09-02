var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice1 = "dice" + randomNumber1 + ".png";
var dice2 = "dice" + randomNumber2 + ".png";
var randomDice1 = "images/" + dice1;
var randomDice2 = "images/" + dice2;
var images = document.querySelectorAll("img");
images[0].setAttribute("src" , randomDice1);
images[1].setAttribute("src" , randomDice2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins!!" ;
} else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").textContent = "Player 2 Wins!!" ;
} else{
    document.querySelector("h1").textContent = "Draw Roll again" ;
}