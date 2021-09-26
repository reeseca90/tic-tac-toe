const game = (function() {

    let gameState = ['','','','','','','','',''];
    let player1Turn = true;

    function assignBox({marker}, selectedBox) {
        let box = document.getElementById(selectedBox);
        box.textContent = marker;
        gameState[selectedBox] = marker;
        checkWinner();
    }

    function selectBox() {
        const selectedBox = this.id;

        if (document.getElementById(selectedBox).textContent == '') {
            if (player1Turn) {
                assignBox(player1, selectedBox);
                player1Turn = false;
            } else {
                assignBox(player2, selectedBox);
                player1Turn = true;
            }
        } else {
            alert('That box has already been selected!');
        }
    }

    function checkWinner() {
        if ((gameState[0] == 'X' && gameState[3] == 'X'  && gameState[6] == 'X') || (gameState[1] == 'X' && gameState[4] == 'X'  && gameState[7] == 'X') || (gameState[2] == 'X' && gameState[5] == 'X'  && gameState[8] == 'X') || (gameState[0] == 'X' && gameState[1] == 'X'  && gameState[2] == 'X') || (gameState[3] == 'X' && gameState[4] == 'X'  && gameState[5] == 'X') || (gameState[6] == 'X' && gameState[7] == 'X'  && gameState[8] == 'X') || (gameState[0] == 'X' && gameState[4] == 'X'  && gameState[8] == 'X') || (gameState[2] == 'X' && gameState[4] == 'X'  && gameState[6] == 'X')) {
            winnerBox.textContent = `${player1.name} wins!`;
            disableBoard();
        } else if ((gameState[0] == 'O' && gameState[3] == 'O'  && gameState[6] == 'O') || (gameState[1] == 'O' && gameState[4] == 'O'  && gameState[7] == 'O') || (gameState[2] == 'O' && gameState[5] == 'O'  && gameState[8] == 'O') || (gameState[0] == 'O' && gameState[1] == 'O'  && gameState[2] == 'O') || (gameState[3] == 'O' && gameState[4] == 'O'  && gameState[5] == 'O') || (gameState[6] == 'O' && gameState[7] == 'O'  && gameState[8] == 'O') || (gameState[0] == 'O' && gameState[4] == 'O'  && gameState[8] == 'O') || (gameState[2] == 'O' && gameState[4] == 'O'  && gameState[6] == 'O')) {
            winnerBox.textContent = `${player2.name} wins!`;
            disableBoard();
        } else if (gameState[0] != '' && gameState[1] != '' && gameState[2] != '' && gameState[3] != '' && gameState[4] != '' && gameState[5] != '' && gameState[6] != '' && gameState[7] != '' && gameState[8] != '') {
            winnerBox.textContent = `It's a tie!`;
            disableBoard();
        }
    }

    function newGame() {
        gameState = ['','','','','','','','',''];
        player1Turn = true;
        boxes.forEach(element => element.textContent = '');
        winnerBox.textContent = '';
        enableBoard();
    }

    function disableBoard() {
        boxes.forEach(element => element.removeEventListener('click', selectBox));
    }

    function enableBoard() {
        boxes.forEach(element => element.addEventListener('click', selectBox));
    }

    const boxes = document.querySelectorAll('div.box');
    boxes.forEach(element => element.addEventListener('click', selectBox));

    document.getElementById('reset').addEventListener('click', newGame);

    const winnerBox = document.getElementById('outputs');

})();

const playerGen = (playerName, playerMarker) => {
    const name = playerName;
    const marker = playerMarker;

    return {
        name,
        marker
    };
}

const player1 = playerGen(prompt('Player 1 name:', 'player1'), 'X');
const player2 = playerGen(prompt('Player 2 name:', 'player2'), 'O');
