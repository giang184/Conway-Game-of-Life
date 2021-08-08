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
      this.board[11][13] = true;
      this.board[11][14] = true;
      this.board[11][15] = true;
      this.board[11][19] = true;
      this.board[11][20] = true;
      this.board[11][21] = true;

      this.board[13][11] = true;
      this.board[14][11] = true;
      this.board[15][11] = true;
      this.board[13][16] = true;
      this.board[14][16] = true;
      this.board[15][16] = true;
      this.board[13][18] = true;
      this.board[14][18] = true;
      this.board[15][18] = true;
      this.board[13][23] = true;
      this.board[14][23] = true;
      this.board[15][23] = true;

      this.board[16][13] = true;
      this.board[16][14] = true;
      this.board[16][15] = true;
      this.board[16][19] = true;
      this.board[16][20] = true;
      this.board[16][21] = true;

      this.board[18][13] = true;
      this.board[18][14] = true;
      this.board[18][15] = true;
      this.board[18][19] = true;
      this.board[18][20] = true;
      this.board[18][21] = true;

      this.board[19][11] = true;
      this.board[20][11] = true;
      this.board[21][11] = true;
      this.board[19][16] = true;
      this.board[20][16] = true;
      this.board[21][16] = true;
      this.board[19][18] = true;
      this.board[20][18] = true;
      this.board[21][18] = true;
      this.board[19][23] = true;
      this.board[20][23] = true;
      this.board[21][23] = true;

      this.board[23][13] = true;
      this.board[23][14] = true;
      this.board[23][15] = true;
      this.board[23][19] = true;
      this.board[23][20] = true;
      this.board[23][21] = true;
    } else if (shape === 'Pulsar') {
      this.board[20][20] = true;
      this.board[20][21] = true;
      this.board[20][22] = true;
    } else {
      this.board[20][20] = true;
    }
  }
}
