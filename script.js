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
    

    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
      //console.log("In printBoard");
      //console.log("BORAD IS: ")
      //console.log(checkScore(board));
      //console.log("HELLLO");
    };


    return {getBoard, placeItem, checkWinner, printBoard};

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
    const board = Gameboard();

    const players = [
        {
            name: playerOneName,
            token: 1
        },
        {
            name: playerTwoName,
            token: 2
        }
    ];
    let activePlayer = players[0];

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0];
    };
    const getActivePlayer = () => activePlayer;

    const printNewRound = () => {
        board.printBoard();
        //console.log("In printNewRound");
        console.log(`${getActivePlayer().name}'s turn.`);
    };

    const playRound = (column, rowIndex) => {
        console.log(
            `Placing
            ${getActivePlayer().name}'s token on board`
        );
        const place = board.placeItem(column, rowIndex, getActivePlayer().token);
        //console.log(getActivePlayer().token);

        if (place) {
            console.log("In place");
            if (board.checkWinner(getActivePlayer().token)) {
                board.printBoard();
                console.log(`${getActivePlayer().name} wins!`)
                return;
            }
            console.log(`${board.checkWinner(getActivePlayer.token)}: is value of winner`);
        }

        switchPlayerTurn();
        printNewRound();

    };
    printNewRound();

    return {
        playRound,
        getActivePlayer
    };
}

const game = GameController();

