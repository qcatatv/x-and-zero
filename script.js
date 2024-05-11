let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        let cell = document.getElementsByClassName('cell')[index];
        cell.innerText = currentPlayer;
        if (checkWinner()) {
            alert(currentPlayer + " win the game!");
            applyWinAnimation();
            setTimeout(resetBoard, 1500); // reset after 1.5 seconds!
            return;
        }
        if (checkDraw()) {
            alert("The game ended in a draw!");
            resetBoard();
            return;
        }
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function applyWinAnimation() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winningConditions) {
        if (board[condition[0]] !== '' && board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]]) {
            for (let index of condition) {
                document.getElementsByClassName('cell')[index].classList.add('winning-cell');
            }
            return;
        }
    }
}

function checkWinner() {
    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for (let condition of winningConditions) {
        if (board[condition[0]] !== '' && board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]]) {
            return true;
        }
    }
    return false;
}

function checkDraw() {
    return !board.includes('');
}

function resetBoard() {
    currentPlayer = 'X';
    board = ['', '', '', '', '', '', '', '', ''];
    let cells = document.getElementsByClassName('cell');
    for (let cell of cells) {
        cell.innerText = '';
        cell.classList.remove('winning-cell'); // remove winning-cell class
    }
}
