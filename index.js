var animatedDice;

function randomDiceImage() {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);
  var img1, img2;

  console.log(randomNumber1); 
  console.log(randomNumber2); 

  img1 = document.querySelector(".img1").classList.add("invisible");
  img2 = document.querySelector(".img2").classList.add("invisible");
  
  // Roll Dice - add animated dice
  showAnimatedDice()

  setTimeout(() => {
    img1 = document.querySelector(".img1").classList.remove("invisible");
    img2 = document.querySelector(".img2").classList.remove("invisible");

    var randomImg1 = document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
    var randomImg2 = document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

    // Remove animated dice
    removeAnimatedDice()

    return randomImg1, randomImg2;
    
  }, 1000);

  // Check for Winner
  setTimeout(() => {
    if (randomNumber1 > randomNumber2) {
        return document.querySelector("#winner").innerHTML = "🚩Player 1 wins"
    } else if (randomNumber1 === randomNumber2) {
        return document.querySelector("#winner").innerHTML = "Draw!!!🏳"
    } else {
        return document.querySelector("#winner").innerHTML = "Player 2 wins🚩"
    }
  }, 1000);
}

function showAnimatedDice() {
  animatedDice = document.querySelectorAll(".anim-dice")
  for(var i = 0; i < animatedDice.length; i++){
    animatedDice[i].classList.add('show-dice');
  }  
}

function removeAnimatedDice() {
  animatedDice = document.querySelectorAll(".anim-dice")
  for(var i = 0; i < animatedDice.length; i++){
    animatedDice[i].classList.remove('show-dice');
  } 
}
