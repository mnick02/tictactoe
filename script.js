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

    const placeItem = (column, player) => {
        const openCells = board.filter((row) => 
        row[column].getValue() === 0).map((row, index) =>
        ({cell: row[column], rowIndex: index }));

        const targetCell = openCells.find(cell => cell.rowIndex === rowIndex);

        if(targetCell) {
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
    };

    

}