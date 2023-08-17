/* --- VARIABLES --- */
const choices = ["✊", "🤚", "✌️"];
const player1 = document.getElementById("player-1");
const player2 = document.getElementById("player-2");
const player1NameDisplay = document.getElementById("player1-name-display");
const player2NameDisplay = document.getElementById("player2-name-display");
const resultArea = document.getElementById("result-area");
const playBtn = document.getElementById("play-btn");
const addPlayer1Btn = document.getElementById("add-player1");
const addPlayer2Btn = document.getElementById("add-player2");

/* --- FUNCTIONS --- */
const generateChoice = () => {
  let r = Math.floor(Math.random() * 3);
  return choices[r];
};

const insertHTML = (emoji, playerName, playerElement) => {
  playerElement.querySelector(".emoji").textContent = emoji;
  playerElement.querySelector(".name-display").textContent = playerName;
};

const decideWinner = (a, b, player1Name, player2Name) => {
  if (
    (a === "✊" && b === "✊") ||
    (a === "🤚" && b === "🤚") ||
    (a === "✌️" && b === "✌️")
  ) {
    return "It's a draw!";
  } else if (
    (a === "✊" && b === "✌️") ||
    (a === "🤚" && b === "✊") ||
    (a === "✌️" && b === "🤚")
  ) {
    return `${player1Name} won!`;
  } else {
    return `${player2Name} won!`;
  }
};

const play = () => {
  const player1Name = document.getElementById("player1-name").value;
  const player2Name = document.getElementById("player2-name").value;

  if (player1Name === "" || player2Name === "") {
    resultArea.innerHTML = "Please enter both players' names.";
    resultArea.style.color = "red";
  } else {
    let choice1 = generateChoice();
    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2, player1Name, player2Name);

    insertHTML(choice1, player1Name, player1);
    insertHTML(choice2, player2Name, player2);

    resultArea.innerHTML = result;
    resultArea.style.color = "black";
  }
};

/* --- EVENT LISTENERS --- */
playBtn.addEventListener("click", play);

addPlayer1Btn.addEventListener("click", () => {
  const playerNameInput = document.getElementById("player1-name");
  player1NameDisplay.textContent = playerNameInput.value;
});

addPlayer2Btn.addEventListener("click", () => {
  const playerNameInput = document.getElementById("player2-name");
  player2NameDisplay.textContent = playerNameInput.value;
});
