/* --- VARIABLES --- */
const choices = ['✊', '🤚', '✌️'];
const player1 = document.getElementById('player-1');
const player2 = document.getElementById('player-2');
const resultArea = document.getElementById('result-area');
const playBtn = document.getElementById('play-btn');

/* --- FUNCTIONS --- */
const generateChoice = () => {
  let r = Math.floor(Math.random() * 3);
  return choices[r];
};

const insertHTML = (choice1, choice2, result) => {
  player1.innerHTML = choice1;
  player2.innerHTML = choice2;
  resultArea.innerHTML = result;
  resultArea.style.color = 'black';
};

const decideWinner = (a, b, player1Name, player2Name) => {
  if ((a === '✊' && b === '✊') || (a === '🤚' && b === '🤚') || (a === '✌️' && b === '✌️')) {
    return "It's a draw!";
  } else if ((a === '✊' && b === '✌️') || (a === '🤚' && b === '✊') || (a === '✌️' && b === '🤚')) {
    return `${player1Name} won!`;
  } else {
    return `${player2Name} won!`;
  }
};

const play = () => {
  const player1Name = document.getElementById('player1-name').value;
  const player2Name = document.getElementById('player2-name').value;

  if (player1Name === '' || player2Name === '') {
    resultArea.innerHTML = "Please enter both players' names.";
    resultArea.style.color = 'red';
  } else {
    let choice1 = generateChoice();
    let choice2 = generateChoice();
    let result = decideWinner(choice1, choice2, player1Name, player2Name);

    insertHTML(choice1, choice2, result);
  }
};

/* --- EVENT LISTENERS --- */
playBtn.addEventListener('click', play);
