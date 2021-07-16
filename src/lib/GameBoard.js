export class GameBoard {
  constructor (rowNum, colNum) {
    this.rowNum = rowNum;
    this.colNum = colNum;
    this.generateBoard();
  }

  generateBoard () {
    this.board = [];
    for (let r = 0; r < this.rowNum; r++) {
      const temp = [];
      this.board.push(temp);
      for (let c = 0; c < this.colNum; c++) {
        this.board[r].push(new Cell(r, c));
      }
    }
  }

  getNeighbors (row, col) {
    const array = [];
    for (let r = row - 1; r <= row + 1; r++) {
      for (let c = col - 1; c <= col + 1; c++) {
        if (!((row === r && col === c) || r < 0 || c < 0 || r >= this.rowNum || c >= this.colNum) && this.board[r][c].state) {
          array.push(this.board[r][c]);
        }
      }
    }
    return array;
  }

  iterate () {
    for (let r = 0; r < this.rowNum; r++) {
      for (let c = 0; c < this.colNum; c++) {
        if (this.board[r][c].state) {
          if (this.getNeighbors(r, c).length < 2 || this.getNeighbors(r, c).length >= 4) {
            this.board[r][c].state = false;
          }
        } else {
          if (this.getNeighbors(r, c).length === 3) {
            this.board[r][c].state = true;
          }
        }
      }
    }
  }
}

class Cell {
  constructor (row, col) {
    this.row = row;
    this.column = col;
    this.state = false;
  }
}
