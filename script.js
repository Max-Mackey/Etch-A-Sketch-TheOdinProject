document.addEventListener("DOMContentLoaded", function() {
    let size = 0;
    // captures the user input once submit is pressed and assigns it to the variable "size"
    const button = document.querySelector('.submit');
    button.addEventListener('click', function() {
        const theGridSize = document.querySelector('.gridSize');
        const fieldValue = theGridSize.value;
        //converts string to int
        const parsedValue = parseInt(fieldValue);
        size = (parsedValue * parsedValue);
        console.log(size);
        //ensures that user chooses a number of 4 through 64 reset size to zero if incorrect choice is made
        if (size < 16) {
            size = 0;
            alert('Too low. Please choose 4 through 64 as a size.');
        }
        else if (size > 4096) {
            size = 0;
            alert('Too high. Please choose 4 through 64 as a size. ')
        }
        const board = document.querySelector('.board');
        board.style.setProperty('--cols', parsedValue);
        board.style.setProperty('--rows', parsedValue);
        console.log(parsedValue);
    });


//creates div boxes and appends them into the game board
    const creation = document.querySelector('.submit');
    creation.addEventListener('click', function() {
        for (let i = 0; i < size; i++) {
        const div = document.createElement('div');
        div.classList.add("drawMe");
        div.style.color ='black';
        div.style.padding = 0;
        div.style.margin = 0;
        div.style.backgroundColor = 'white';
        div.textContent = "x";
        document.querySelector('.board').appendChild(div);   
        }
})
        
    

    })

    // Reset button. Wipes the board to it's original state
    const eraseBoard = document.querySelector('.reset');
    eraseBoard.addEventListener('click', function() {
        const board = document.querySelector('.board');
        board.innerHTML ='';
    });

    

