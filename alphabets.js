// function play() {
//   const homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");

//   const playSection = document.getElementById("play-section");
//   playSection.classList.remove("hidden");
// }

// reuseable function
// console.log("ur alpha:jdkajd");

function keyUpEvent(event) {
  const playerPressed = event.key;
  // console.log("player pressed:", playerPressed);

  // end game
  if (playerPressed === "0") {
    // gameOver();
    console.log("pressed :0");
  }

  // expected key
  const displayKeyId = document.getElementById("display-alpha");
  const displayAlpha = displayKeyId.innerText;
  const expectedAlpha = displayAlpha.toLocaleLowerCase();
  console.log(playerPressed, expectedAlpha);

  // check key
  if (playerPressed === expectedAlpha) {
    const currentScore = getTextValue("current-score");
    const newScore = currentScore + 1;

    updateTextValue("current-score", newScore);

    // ----------------------------------
    /***
     * // updated score
    const currentScoreId = document.getElementById("current-score");
    const scoreText = currentScoreId.innerText;
    const score = parseInt(scoreText);

    // new score
    const newScore = score + 1;
    // display score
    currentScoreId.innerText = newScore;
     * 
     */

    removeBgOfKey(expectedAlpha);
    continueGame();
  } else {
    const currentLife = getTextValue("current-life");
    const newLife = currentLife - 1;
    updateTextValue("current-life", newLife);
    if (newLife === 0) {
      gameOver();
    }

    // ---------------------------------
    /**
     *
    const currentLifeId = document.getElementById("current-life");
    const lifeText = currentLifeId.innerText;
    const life = parseInt(lifeText);
    const newLife = life - 1;
    currentLifeId.innerText = newLife;
    console.log(newLife);
     * 
     */
  }
}

document.addEventListener("keyup", keyUpEvent);

function continueGame() {
  // get alphabets
  const alphabet = getAlphabets();
  //  console.log(alphabet);

  // display
  const displayAlpha = document.getElementById("display-alpha");
  displayAlpha.innerText = alphabet;

  // keys bg color
  setBgOfKey(alphabet);
}

function playGame() {
  hiddenRemove("play-section");
  hiddenAdd("final-score");
  hiddenAdd("home-section");

  // play again
  updateTextValue("current-life", 3);
  updateTextValue("current-score", 0);
  continueGame();
}

function gameOver() {
  hiddenAdd("play-section");
  hiddenRemove("final-score");

  const lastScore = getTextValue("current-score");
  console.log(lastScore);
  updateTextValue("game-score", lastScore);

  // clear hight
  const currentAlpha = getElementText("display-alpha");
  // console.log(currentAlpha);
  removeBgOfKey(currentAlpha);
}
