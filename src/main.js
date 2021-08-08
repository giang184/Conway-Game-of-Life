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
  const elClearButton = $('#clear');

  elCells.off().on('click', function (event) {
    event.preventDefault();
    const el = $(this);
    const row = el.data('row');
    const col = el.data('col');
    game.board[row][col] = !game.board[row][col];
    renderBoard(game);
    addEventListeners(game);
  });

  elClearButton.off().on('click', async function () {
    game.generateBoard();
    renderBoard(game);
    addEventListeners(game);
  });

  $('form#pattern').off().submit(async function (event) {
    event.preventDefault();
    const shape = $('#shape').val();
    game.applyPattern(shape);
    renderBoard(game);
    addEventListeners(game);
  });

  $('form#iteration').off().submit(async function (event) {
    event.preventDefault();
    const num = parseInt($('#number').val());
    const speed = parseInt($('#myRange').val());
    console.log(typeof num);
    console.log(num);
    for (let i = 1; i <= num; i++) {
      setTimeout(function timer () {
        console.log(i);
        game.iterate();
        renderBoard(game);
        addEventListeners(game);
      }, i * speed);
    }
  });
};

const main = () => {
  const game = new GameBoard(25, 50);
  renderBoard(game);
  addEventListeners(game);
};

main();
