//gameboard stored in array in gameboard obj
//players stord in obj, obj to control game flow

function Gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let i = 0; i < rows; i++) {
        board[i] = [];
        for(let j = 0; j < columns; j++) {
            board[i].push(Cell());
        }
    }

    const getBoard = () => board;

    const placeItem = (column, rowIndex, player) => {
        if (board[rowIndex][column].getValue() === 0) {
            board[rowIndex][column].addItem(player);
            return true;
        }
        else {
            return false;
        }
    };

    const checkWinner = (player) => {
        console.log("in Winner");
        //console.log(`This is player: ${player}`);
        
        for (let i = 0; i < rows; i++) {
            //console.log(`i is: ${i}`);
            //console.log(board[i][0].getValue);
            if (board[i][0].getValue() === player &&
                board[i][1].getValue() === player &&
                board[i][2].getValue() === player) {
                
                return true;
            }
        }

                
        for (let j = 0; j < columns; j++) {
            if (board[0][j].getValue() === player &&
                board[1][j].getValue() === player &&
                board[2][j].getValue() === player) {
                return true;
            }
        }

        if (board[0][0].getValue() === player && 
            board[1][1].getValue() === player && 
            board[2][2].getValue() === player) {
            return true;
        }

        if (board[2][0].getValue() === player && 
        board[1][1].getValue() === player && 
        board[0][2].getValue() === player) {
        return true;
    }

        return false;
    }

    const isBoardFull = () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                if (board[i][j].getValue() === 0) {
                    return false;
                }
            }
        }
        return true;
    }
    

    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
    };


    return {getBoard, placeItem, checkWinner, printBoard, isBoardFull};

}

function Cell() {
    let val = 0;

    const addItem = (player) => {
        val = player;
    };

    const getValue = () => val;

    return {
        addItem,
        getValue
    };
}

function GameController (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) {
    let board = Gameboard();
    let gameOver = false;

    const players = [
        {
            name: playerOneName,
            token: "X"
        },
        {
            name: playerTwoName,
            token: "O"
        }
    ];
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (column, rowIndex) => {
        if (gameOver) {
            console.log("The Game is over!");
            return;
        }

        console.log(
            `Placing
            ${getActivePlayer().name}'s token on board`
        );
        const place = board.placeItem(column, rowIndex, getActivePlayer().token);

        if (place) {
            console.log("In place");
            if (board.checkWinner(getActivePlayer().token)) {
                board.printBoard();
                console.log(`${getActivePlayer().name} wins!`);
                gameOver = true;
                return;
            }
            console.log(`${board.checkWinner(getActivePlayer.token)}: is value of winner`);
        }

        if (board.isBoardFull()){
            board.printBoard();
            console.log("It's a tie!")
            gameOver = true;
            return;
        }

        switchPlayerTurn();
        printNewRound();

    };

    const resetGame = () => {
        board = Gameboard();
        gameOver = false;
        activePlayer = players[0];
        printNewRound();
    };

    printNewRound();

    return {
        playRound,
        getActivePlayer,
        resetGame
    };
}

const game = GameController();

