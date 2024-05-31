function hiddenAdd(elementId) {
  const add = document.getElementById(elementId);
  add.classList.add("hidden");
}
function hiddenRemove(elementId) {
  const remove = document.getElementById(elementId);
  remove.classList.remove("hidden");
}

function getAlphabets() {
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphaString.split("");
  //   console.log(alphabets);

  // number
  const randomNum = Math.random() * 25;
  const index = Math.round(randomNum);

  const alphabet = alphabets[index];
  //   console.log(alphabet);
  return alphabet;
}
