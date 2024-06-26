'use strict'

let board = [1,0,0,0,0,0,0,0,0,0];
let player = 1;
let winner;

const COMBO = [[0, 1, 2], [3, 4, 5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]]

function checkWin() {
    let zeroNums = 0;
    for (let i = 0; i < board.length; i++) {if (board[i] === 0) zeroNums++}
    if (zeroNums === 0 ) winner = 'Достойная ничья'

    let p1,p2,p3;
    for (let indexes of COMBO) {
        [p1,p2,p3] = indexes
        if (board[p1] === 1 && board[p2] === 1 && board[p3] === 1) {
            winner = 'Победил 1 игрок'}
        else if (board[p1] === 2 && board[p2] === 2 && board[p3] === 2) {
            winner = 'победил 2 игрок'}
        }
    if (winner) {
        alert(winner)}
    }


function handleCellClick(index){
    let cell = board[index];
    if (cell === 0 && !winner) {
        board[index] = player;
        player = player == 1 ? 2 : 1
        console.log(board)
        render()
        checkWin()
    }
}

function render() {
    const board_obj = document.getElementById('board');
    board_obj.innerHTML = '';
    let cell, cell_obj;
    for (let i = 0; i != board.length;i++) {
        cell = board[i];

        cell_obj = document.createElement('div');
        cell_obj.classList.add('cell')
        let calback_func = () => handleCellClick(i);
        cell_obj.onclick = calback_func;

        if (cell === 1) {
            cell_obj.innerText = 'X';
        }
        else if (cell == 2) {
            cell_obj.innerText = 'O';
        }

        board_obj.appendChild(cell_obj);
    }
}

render();