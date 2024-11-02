/*
 * input is board state, position, color
 * move logic    - must capture and must be within bounds
 * capture logic - check if there is same color piece in given line
 * output is boolean
 */
function isValidMove(board, row, col, player) {
    // Check if the cell is empty
    if (board[row][col] !== 0) return false;

    // Determine the opponent's piece
    const opponent = player === 1 ? 2 : 1;
    
    // Possible directions (8 directions)
    // S, N, E, W, SE, NE, SW, NW
    const directions = [
        // row, col
        // cardinal directions
        [0, 1], [0, -1], [1, 0], [-1, 0],  // horizontal and vertical
        // SE,     NE,      SW,       NW
        [1, 1], [1, -1], [-1, 1], [-1, -1] // diagonals
    ];

    // Helper function to check if a line in a given direction captures pieces
    function capturesInDirection(row, col, dirRow, dirCol) {
        let i = row + dirRow; 
        let j = col + dirCol;
        let foundOpponent = false;

        while (i >= 0 && i < board.length && j >= 0 && j < board[0].length) {
            if (board[i][j] === opponent) {
                foundOpponent = true;  // Found an opponent piece
            } else if (board[i][j] === player) {
                return foundOpponent; // Valid capture if flanked by player’s piece
            } else {
                break; // Empty cell or out of bounds, so not valid
            }

            // Move further in the same direction
            i += dirRow;
            j += dirCol;
        }

        return false;
    }

    // Check all directions to see if any captures occur
    for (const [dirRow, dirCol] of directions) {
        if (capturesInDirection(row, col, dirRow, dirCol)) {
            return true; // If any direction captures, the move is valid
        }
    }

    return false; // No valid captures in any direction
}

let board = [
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 1, 0, 0, 0],
    [0, 0, 2, 1, 2, 0, 0, 0],
    [0, 0, 1, 2, 1, 0, 0, 0],
    [0, 0, 0, 1, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0]
];

// [1][3]
// [row][col]
console.log(isValidMove(board, 3, 5, 1)); // Expected output: true or false based on the board
console.log(isValidMove(board, 3, 5, 2)); // Expected output: true or false based on the board

