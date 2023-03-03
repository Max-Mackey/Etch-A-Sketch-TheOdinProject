# Etch-A-Sketch-TheOdinProject
Etch-A-Sketch Project for the Fundamental Lessons in The Odin Project
    // Reset button. Wipes the board to it's original state
const eraseBoard = document.querySelector('.reset');
eraseBoard.addEventListener('click', function() {
    const board = document.querySelector('.board');
    board.innerHTML =''; )}