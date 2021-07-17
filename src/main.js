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
      if (game.board[r][c]) {
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
  elButton.off().on('click', async function () {
    for (let i = 1; i <= 20; i++) {
      setTimeout(function timer () {
        console.log(i);
        game.iterate();
        renderBoard(game);
        addEventListeners(game);
      }, i * 500);
    }
  });

  elCells.off().on('click', function (event) {
    const el = $(this);
    const row = el.data('row');
    const col = el.data('col');
    game.board[row][col] = !game.board[row][col];
    renderBoard(game);
    addEventListeners(game);
  });
};

const main = () => {
  const game = new GameBoard(30, 60);
  renderBoard(game);
  addEventListeners(game);
  console.log(game);
};

main();
