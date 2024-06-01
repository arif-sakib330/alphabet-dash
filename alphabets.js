// function play() {
//   const homeSection = document.getElementById("home-section");
//   homeSection.classList.add("hidden");

//   const playSection = document.getElementById("play-section");
//   playSection.classList.remove("hidden");
// }

// reuseable function
// console.log("ur alpha:jdkajd");

function continueGame() {
  // get alphabets
  const alphabet = getAlphabets();
  console.log(alphabet);

  // display
  const displayAlpha = document.getElementById("display-alpha");
  displayAlpha.innerText = alphabet;

  // keys bg color
  setBgOfKey(alphabet);
}

function playGame() {
  hiddenRemove("play-section");
  hiddenAdd("home-section");
  continueGame();
}
