let gameBoard = document.getElementById('game-board');

function generatePuzzle() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let square = gameBoard.rows[i].cells[j];
            square.addEventListener('click', () => {
                square.classList.toggle('lit');
                let affectedSquares = [
                    [i - 1, j], [i + 1, j], [i, j - 1], [i, j + 1],
                    [i - 1, j - 1], [i - 1, j + 1], [i + 1, j - 1], [i + 1, j + 1]
                ];
                affectedSquares.forEach(coords => {
                    let [row, col] = coords;
                    if (row >= 0 && row < 5 && col >= 0 && col < 5) {
                        let affectedSquare = gameBoard.rows[row].cells[col];
                        affectedSquare.classList.toggle('lit');
                    }
                });
                if (isSolved()) {
                    window.alert('Congratulations! You solved the puzzle!');
                }
            });
            if (Math.random() < 0.5) {
                square.classList.add('lit');
            }
        }
    }
}

function isSolved() {
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            let square = gameBoard.rows[i].cells[j];
            if (!square.classList.contains('lit')) {
                return false;
            }
        }
    }
    return true;
}

generatePuzzle();
