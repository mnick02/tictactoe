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

    const printBoard = () => {
      const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
      console.log(boardWithCellValues);
      console.log("In printBoard");
    };

    return {getBoard, placeItem, printBoard};

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

