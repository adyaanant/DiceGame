var randomNumber1 = Math.floor((Math.random()*6));
var randomNumber2 = Math.floor((Math.random()*6));

var images= ["/Dicee Challenge - Starting Files\\images\\dice1.png",
            "/Dicee Challenge - Starting Files\\images\\dice2.png",
            "/Dicee Challenge - Starting Files\\images\\dice3.png",
            "/Dicee Challenge - Starting Files\\images\\dice4.png",
            "/Dicee Challenge - Starting Files\\images\\dice5.png",
            "/Dicee Challenge - Starting Files\\images\\dice6.png" ];

document.querySelector(".img1").setAttribute("src",images[randomNumber1]);
document.querySelector(".img2").setAttribute("src",images[randomNumber2]);

if(randomNumber1>randomNumber2)
{
    document.querySelector("h1").textContent = "Player 1 Wins!";
}
if(randomNumber1<randomNumber2)
{
    document.querySelector("h1").textContent = "Player 2 Wins!";
}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").textContent = "It's a Draw!";
}


