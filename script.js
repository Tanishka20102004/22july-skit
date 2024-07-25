let currentPlayer = 'X';
let moves = ['', '', '', '', '', '', '', '', ''];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],                            
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(event) {
    const cellIndex = event.target.id.split('-')[1];
    if (moves[cellIndex] === '') {
        event.target.textContent = currentPlayer;
        moves[cellIndex] = currentPlayer;
        
        if (checkWin(currentPlayer)) {
            document.getElementById('result').textContent = `Player ${currentPlayer} wins!`;
            disableBoard();
        } 
       
    
        else if (moves.every(move => move !== '')) {
            document.getElementById('result').textContent = "It's a draw!";
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
       
    }
}

function checkWin(player) {
    return winConditions.some(condition =>
        condition.every(index => moves[index] === player)
    );
}

function disableBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.removeEventListener('click', makeMove));
}
