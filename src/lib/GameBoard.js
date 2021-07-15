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
        this.board[r].push(new Cell());
      }
    }
  }

  // iterate () {
  //   for (let r = 0; r < this.rowNum; r++) {
  //     for (let c = 0; c < this.colNum; c++) {
  //       if (this.board[r][c + 1]) {
  //         this.board[r][c] = true;
  //       }
  //     }
  //   }
  // }
}

class Cell {
  constructor () {
    this.state = false;
  }
}
