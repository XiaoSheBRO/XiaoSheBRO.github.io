# play around

::: normal-demo # 井字棋

```html
<div class="container">
  <div class="board" id="board">
    <div class="cell" onclick="makeMove(0, 0)"></div>
    <div class="cell" onclick="makeMove(0, 1)"></div>
    <div class="cell" onclick="makeMove(0, 2)"></div>
    <div class="cell" onclick="makeMove(1, 0)"></div>
    <div class="cell" onclick="makeMove(1, 1)"></div>
    <div class="cell" onclick="makeMove(1, 2)"></div>
    <div class="cell" onclick="makeMove(2, 0)"></div>
    <div class="cell" onclick="makeMove(2, 1)"></div>
    <div class="cell" onclick="makeMove(2, 2)"></div>
  </div>
</div>
```

```js
const board = document.getElementById('board')
const cells = document.querySelectorAll('.cell')
let currentPlayer = 'X'
let gameBoard = [
  ['', '', ''],
  ['', '', ''],
  ['', '', ''],
]

function makeMove(row, col) {
  if (gameBoard[row][col] === '') {
    gameBoard[row][col] = currentPlayer
    cells[row * 3 + col].textContent = currentPlayer
    if (checkWin(row, col)) {
      alert(currentPlayer + ' wins!')
      resetBoard()
    } else if (checkDraw()) {
      alert("It's a draw!")
      resetBoard()
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
    }
  }
}

function checkWin(row, col) {
  const symbol = gameBoard[row][col]
  if (
    (gameBoard[row][0] === symbol && gameBoard[row][1] === symbol && gameBoard[row][2] === symbol) ||
    (gameBoard[0][col] === symbol && gameBoard[1][col] === symbol && gameBoard[2][col] === symbol) ||
    (gameBoard[0][0] === symbol && gameBoard[1][1] === symbol && gameBoard[2][2] === symbol) ||
    (gameBoard[0][2] === symbol && gameBoard[1][1] === symbol && gameBoard[2][0] === symbol)
  ) {
    return true
  }
  return false
}

function checkDraw() {
  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      if (gameBoard[row][col] === '') {
        return false
      }
    }
  }
  return true
}

function resetBoard() {
  gameBoard = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]
  cells.forEach((cell) => {
    cell.textContent = ''
  })
  currentPlayer = 'X'
}
```

```css
.board {
  display: grid;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(3, 100px);
  gap: 2px;
  margin: 20px 200px;
  border: 2px solid black;
  width: 304px;
  justify-content: center;
}
.cell {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border: 1px solid black;
  cursor: pointer;
}
```

:::
