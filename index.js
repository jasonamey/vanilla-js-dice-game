const button = document.querySelector("button");
const player1 = document.querySelector("player1");
const viewers = document.querySelectorAll(".viewer");
const player2 = document.querySelector("player2");
const output = document.querySelector(".output");

button.addEventListener("click", () => {
  playGame();
});

const diceNums = [
  [4],
  [0, 8],
  [0, 4, 8],
  [0, 2, 6, 8],
  [0, 2, 4, 6, 8],
  [0, 2, 3, 5, 6, 8],
];

function roll() {
  return Math.floor(Math.random() * 6);
}

function createDie(num) {
  const newDie = document.createElement("div");
  newDie.classList.add("dice");
  const dieArray = diceNums[num];
  let pointer = 0;
  for (let i = 0; i < 9; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (dieArray[pointer] === i) {
      dot.classList.add("black");
      pointer++;
    } else {
      dot.classList.add("white");
    }
    newDie.appendChild(dot);
  }
  return newDie;
}

function winner(player1, player2) {
  if (player1 === player2) {
    return "Tie!";
  } else if (player1 > player2) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
}
function clearBoard(viewer) {
  console.log(viewer);
  while (viewer.firstChild) {
    viewer.removeChild(viewer.firstChild);
  }
}

function playGame() {
  clearBoard(viewers[0]);
  clearBoard(viewers[1]);
  const player1 = roll();
  const player2 = roll();
  const die1 = createDie(player1);
  const die2 = createDie(player2);
  viewers[0].appendChild(die1);
  viewers[1].appendChild(die2);
  output.innerText = winner(player1, player2) + "....roll again ?";
}

// for (let i = 0; i < 20; i++) {
//   console.log(roll());
// }
