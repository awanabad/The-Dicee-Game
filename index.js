var randomNumber1 = Math.floor(Math.random()*6)+1;

var imagePath1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", imagePath1);

var randomNumber2 = Math.floor(Math.random()*6)+1;

var imagePath2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", imagePath2);

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML="Player 1 Wins! Re-Roll?";
    document.querySelector(".medal1").classList.add("show");
} else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML="Player 2 Wins! Re-Roll?";
    document.querySelector(".medal2").classList.add("show");
} else 
{
    document.querySelector("h1").innerHTML="Looks like a Draw! Re-Roll?";
}