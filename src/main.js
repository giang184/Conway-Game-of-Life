import 'regenerator-runtime';
import './styles/main.css';
import $ from 'jquery';
import { GameBoard } from './lib/GameBoard';

const renderBoard = (game) => {
  const elBoard = $('#game-board');
  elBoard.css('gridTemplateColumns', `repeat(${game.colNum}, var(--cell-size))`);

  elBoard.html('');

  for (let r = 0; r < game.rowNum; r++) {
    for (let c = 0; c < game.colNum; c++) {
      let cellContent = '';
      if (game.board[r][c].state === true) {
        cellContent = '<img src="assets/black.svg">';
      }
      elBoard.append(`
        <div class="cell" data-row="${r}" data-col="${c}">
          ${cellContent}
        </div>
      `);
    }
  }
};

const addEventListeners = (game) => {
  const elCells = $('.cell');
  const elButton = $('#iterate');
  elButton.off().on('click', function () {
    game.board[1][1].state = !game.board[1][1].state;
    console.log(1);
    renderBoard(game);
    console.log(2);
    addEventListeners(game);
  });

  elCells.one('click', function (event) {
    const el = $(this);
    const row = el.data('row');
    const col = el.data('col');

    game.board[row][col].state = !game.board[row][col].state;

    renderBoard(game);
    console.log(3);
    addEventListeners(game);
  });
};

const main = () => {
  const game = new GameBoard(30, 50);
  renderBoard(game);
  addEventListeners(game);
};

main();
