"use strict";
var DOMDisplay = /** @class */ (function () {
    function DOMDisplay() {
        this.getElement = function (selector) { return document.querySelector(selector); };
        this.getAllElements = function (selector) { return document.querySelectorAll(selector); };
    }
    DOMDisplay.prototype.bindHandler = function (clickHandler) {
        document.addEventListener('click', function (event) {
            var clicked = event.target;
            var isColumn = clicked.className === 'col';
            if (isColumn) {
                var cell = clicked;
                var row = +cell.parentElement.dataset.row;
                var col = +cell.dataset.col;
                clickHandler(row, col);
            }
        });
    };
    DOMDisplay.prototype.createElement = function (tag, className, dataset) {
        var element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        if (dataset)
            element.dataset[dataset[0]] = dataset[1];
        return element;
    };
    DOMDisplay.prototype.printGameBoard = function (boardData) {
        var _this = this;
        var game = this.getElement('#game');
        var gameBoard = this.createElement('div', 'board', undefined);
        game.append(gameBoard);
        boardData.forEach(function (row, i) {
            var boardRow = _this.createElement('div', 'row', ['row', i]);
            gameBoard.append(boardRow);
            row.forEach(function (col, j) {
                var boardcol = _this.createElement('div', 'col', ['col', j]);
                boardRow.append(boardcol);
            });
        });
    };
    DOMDisplay.prototype.updateBoard = function (row, col, currentPlayer) {
        var playerToken = this.createElement('span', currentPlayer, undefined);
        playerToken.textContent = currentPlayer;
        var boardRow = this.getElement("[data-row=\"".concat(row, "\"]"));
        var cell = boardRow.querySelector("[data-col=\"".concat(col, "\"]"));
        cell.append(playerToken);
    };
    DOMDisplay.prototype.clearGameBoard = function () {
        var cells = this.getAllElements('.col');
        cells.forEach(function (cell) {
            cell.textContent = '';
        });
    };
    DOMDisplay.prototype.printScoreBoard = function (scoreData) {
        var game = this.getElement('#game');
        var scoreBoard = this.createElement('div', 'score');
        game.append(scoreBoard);
        var playerOneScore = this.createElement('div', 'x');
        playerOneScore.textContent = "Player 1: ".concat(scoreData.x);
        playerOneScore.id = 'score-x';
        var playerTwoScore = this.createElement('div', 'o');
        playerTwoScore.textContent = "Player 2 ".concat(scoreData.o);
        playerTwoScore.id = 'score-o';
        scoreBoard.append(playerOneScore, playerTwoScore);
    };
    DOMDisplay.prototype.updateScore = function (currentScore, currentPlayer) {
        var currentPlayerScore = this.getElement("#score-".concat(currentPlayer));
        var player = currentPlayer === 'x' ? 'Player 1' : 'Player 2';
        var d = currentScore[currentPlayer];
        currentPlayerScore.textContent = "".concat(player, ": ").concat(d);
    };
    DOMDisplay.prototype.printMessage = function (winner) {
        var message = this.createElement('div', 'message');
        var player = winner === 'x' ? 'Player 1' : 'Player 2';
        message.textContent = winner ? "".concat(player, " wins!") : "Nobody wins";
        var game = this.getElement('#game');
        game.append(message);
    };
    DOMDisplay.prototype.clearMessage = function () {
        var message = this.getElement('.message');
        message.remove();
    };
    return DOMDisplay;
}());
var TicTacToe = /** @class */ (function () {
    function TicTacToe(display) {
        var _this = this;
        this.clickCell = function (row, col) {
            var canContinue = _this.board[row][col] === '';
            if (canContinue && !_this.waiting) {
                _this.board[row][col] = _this.currentPlayer;
                _this.display.updateBoard(row, col, _this.currentPlayer);
                var win = _this.isGameWon(row, col);
                var stalemate = _this.board.map(function (row) { return row.filter(function (col) { return col === ''; }); }).filter(function (row) { return row.length > 0; });
                if (!_this.waiting) {
                    if (win) {
                        _this.increaseScore();
                        _this.display.updateScore(_this.score, _this.currentPlayer);
                        _this.gameOver(_this.currentPlayer);
                    }
                    else if (stalemate.length < 1) {
                        _this.gameOver();
                    }
                    else {
                        _this.switchPlayer();
                    }
                }
            }
        };
        this.gameOver = function (winner) {
            _this.waiting = true;
            _this.display.printMessage(winner);
            setTimeout(function () {
                _this.resetBoard();
                _this.waiting = false;
            }, _this.wait);
        };
        this.createBoard = function () { return [['', '', ''], ['', '', ''], ['', '', '']]; };
        this.resetBoard = function () {
            _this.display.clearMessage();
            _this.display.clearGameBoard();
            _this.board = _this.createBoard();
        };
        this.isGameWon = function (row, col) {
            if (
            // Horizontal win
            (_this.board[row][0] === _this.currentPlayer &&
                _this.board[row][1] === _this.currentPlayer &&
                _this.board[row][2] === _this.currentPlayer) ||
                // Vertical win
                (_this.board[0][col] === _this.currentPlayer &&
                    _this.board[1][col] === _this.currentPlayer &&
                    _this.board[2][col] === _this.currentPlayer) ||
                // Diagonal win
                ((_this.board[0][0] === _this.currentPlayer &&
                    _this.board[1][1] === _this.currentPlayer &&
                    _this.board[2][2] === _this.currentPlayer) ||
                    (_this.board[2][0] === _this.currentPlayer &&
                        _this.board[1][1] === _this.currentPlayer &&
                        _this.board[0][2] === _this.currentPlayer)))
                return true;
            return false;
        };
        this.switchPlayer = function () {
            _this.currentPlayer = _this.currentPlayer === _this.players.x ? _this.players.o : _this.players.x;
        };
        this.increaseScore = function () {
            _this.score[_this.currentPlayer] += 1;
        };
        this.display = display;
        this.board = this.createBoard();
        this.players = { x: 'x', 'o': 'o' };
        this.wait = 1500;
        this.waiting = false;
        this.score = { x: 0, o: 0 };
        this.currentPlayer = this.players.x;
        this.display.bindHandler(this.clickCell);
    }
    TicTacToe.prototype.startGame = function () {
        this.display.printScoreBoard(this.score);
        this.display.printGameBoard(this.board);
    };
    return TicTacToe;
}());
var ticTacToe = new TicTacToe(new DOMDisplay());
ticTacToe.startGame();
//# sourceMappingURL=tictactoe.js.map