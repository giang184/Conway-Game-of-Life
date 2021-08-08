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
      this.board[3][3] = true;
      this.board[3][4] = true;
      this.board[4][3] = true;
      this.board[5][6] = true;
      this.board[6][5] = true;
      this.board[6][6] = true;
    } else if (shape === 'Glider') {
      this.board[3][3] = true;
      this.board[4][4] = true;
      this.board[5][2] = true;
      this.board[5][3] = true;
      this.board[5][4] = true;
    } else if (shape === 'Spaceship') {
      this.board[3][4] = true;
      this.board[3][5] = true;
      this.board[4][3] = true;
      this.board[4][4] = true;
      this.board[4][5] = true;
      this.board[4][6] = true;
      this.board[5][3] = true;
      this.board[5][4] = true;
      this.board[5][6] = true;
      this.board[5][7] = true;
      this.board[6][5] = true;
      this.board[6][6] = true;
    } else if (shape === 'Pulsar') {
      this.board[1][3] = true;
      this.board[1][4] = true;
      this.board[1][5] = true;
      this.board[1][9] = true;
      this.board[1][10] = true;
      this.board[1][11] = true;

      this.board[3][1] = true;
      this.board[4][1] = true;
      this.board[5][1] = true;
      this.board[3][6] = true;
      this.board[4][6] = true;
      this.board[5][6] = true;
      this.board[3][8] = true;
      this.board[4][8] = true;
      this.board[5][8] = true;
      this.board[3][13] = true;
      this.board[4][13] = true;
      this.board[5][13] = true;

      this.board[6][3] = true;
      this.board[6][4] = true;
      this.board[6][5] = true;
      this.board[6][9] = true;
      this.board[6][10] = true;
      this.board[6][11] = true;

      this.board[8][3] = true;
      this.board[8][4] = true;
      this.board[8][5] = true;
      this.board[8][9] = true;
      this.board[8][10] = true;
      this.board[8][11] = true;

      this.board[9][1] = true;
      this.board[10][1] = true;
      this.board[11][1] = true;
      this.board[9][6] = true;
      this.board[10][6] = true;
      this.board[11][6] = true;
      this.board[9][8] = true;
      this.board[10][8] = true;
      this.board[11][8] = true;
      this.board[9][13] = true;
      this.board[10][13] = true;
      this.board[11][13] = true;

      this.board[13][3] = true;
      this.board[13][4] = true;
      this.board[13][5] = true;
      this.board[13][9] = true;
      this.board[13][10] = true;
      this.board[13][11] = true;
    }
  }
}
