function hiddenAdd(elementId) {
  const add = document.getElementById(elementId);
  add.classList.add("hidden");
}
function hiddenRemove(elementId) {
  const remove = document.getElementById(elementId);
  remove.classList.remove("hidden");
}

function setBgOfKey(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
  // console.log(element);
}
function removeBgOfKey(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-400");
  // console.log(element);
}

function getTextValue(elementId) {
  const elementIdText = document.getElementById(elementId);
  const elementIdTextValue = elementIdText.innerText;
  const value = parseInt(elementIdTextValue);
  return value;
}

function updateTextValue(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementText(elementId) {
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

function getAlphabets() {
  const alphaString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphaString.split("");
  // console.log(alphabets);

  // number
  const randomNum = Math.random() * 25;
  const index = Math.round(randomNum);

  const alphabet = alphabets[index];
  // console.log(alphabet);
  return alphabet;
}
