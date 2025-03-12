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

    const placeItem = (column, player) => {
        const openCells = board.filter((row) => 
        row[column].getValue() === 0).map(row =>
        row[column]);
    }

    if (!placeItem.length) {
        return;
    }
}