export class GameBoard {
  constructor (rowNum, colNum) {
    this.rowNum = rowNum;
    this.colNum = colNum;
    this.generateBoard();
  }

  generateBoard () {
    this.board = [];
    for (let r = 0; r < this.rowNum; r++) {
      const tempArray = [];
      this.board.push(tempArray);
      for (let c = 0; c < this.colNum; c++) {
        this.board[r].push(false);
      }
    }
  }

  getNeighbors (row, col) {
    let count = 0;
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (!((row === r && col === c) || r < 0 || c < 0 || r >= this.rowNum || c >= this.colNum) && this.board[r][c]) {
          count++;
        }
      }
    }
    return count;
  }

  iterate () {
    const tempBoard = [];
    for (let r = 0; r < this.rowNum; r++) {
      const tempArray = [];
      tempBoard.push(tempArray);
      for (let c = 0; c < this.colNum; c++) {
        tempBoard[r].push(this.board[r][c]);
      }
    }
    for (let r = 0; r < this.rowNum; r++) {
      for (let c = 0; c < this.colNum; c++) {
        if (this.board[r][c]) {
          if (this.getNeighbors(r, c) < 2 || this.getNeighbors(r, c) >= 4) {
            tempBoard[r][c] = false;
          }
        } else {
          if (this.getNeighbors(r, c) === 3) {
            tempBoard[r][c] = true;
          }
        }
      }
    }
    this.board = tempBoard;
  }

  applyPattern (shape) {
    this.generateBoard();
    if (shape === 'Beacon') {
      this.board[10][10] = true;
      this.board[10][11] = true;
      this.board[11][10] = true;
      this.board[12][13] = true;
      this.board[13][12] = true;
      this.board[13][13] = true;
    } else if (shape === 'Pulsar') {
      this.board[20][20] = true;
      this.board[20][21] = true;
      this.board[20][22] = true;
    } else if (shape === 'Pulsar') {
      this.board[20][20] = true;
      this.board[20][21] = true;
      this.board[20][22] = true;
    } else {
      this.board[20][20] = true;
    }
  }
}
