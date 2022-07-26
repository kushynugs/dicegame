var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
  }
  else if (randomNumber1<randomNumber2){
      document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
    }

    else if (randomNumber1===randomNumber2){
        document.querySelector("h1").innerHTML = "It Was a Tie!";
      }








//Red Flag https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/triangular-flag_1f6a9.png <img src='images/dice5.png'></img>
