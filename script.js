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
        //ensures that user chooses a number of 4 through 100 reset size to zero if incorrect choice is made
        if (size < 16) {
            size = 0;
            alert('Too low. Please choose 4 through 100 as a size.');
        }
        else if (size > 10000) {
            size = 0;
            alert('Too high. Please choose 4 through 100 as a size. ')
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
            div.style.border ='solid 1px rgba(0, 0, 0, .05)';
            div.style.padding = 0;
            div.style.margin = 0;
            div.style.backgroundColor = 'white';
            document.querySelector('.board').appendChild(div);   
        }

        // creating mouse down and move move logic to color divs black
        const drawMe = document.querySelectorAll('.drawMe');
        drawMe.forEach(function(element) {
            element.addEventListener('mousedown', function(){
                element.style.backgroundColor ='black';
            })
            element.addEventListener('mousemove', function(event) {
                if (event.buttons === 1) {
                    element.style.backgroundColor ='black';
                }
            });     
        });

        // attempting to create rainbow color once a button is pushed on the webpage
        const rainbow = document.querySelector('.rainbow');
        rainbow.addEventListener('mousedown', function (event) {
            if (event.button === 0) { //check if left mouse button is pressed
                const drawMeElements = document.querySelectorAll('.drawMe');
                drawMeElements.forEach(function(element) {
                    element.addEventListener('mousemove', function (event) {
                        if (event.buttons ===1 ) { //checks if left mouse is held down
                            const red = Math.floor(Math.random() * 256);
                            const green = Math.floor(Math.random() * 256);
                            const blue = Math.floor(Math.random() * 256);
                            element.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
                        }
                    });
                });
            }
        });
    });
        // Reset button. Wipes the board to it's original state
    const eraseBoard = document.querySelector('.reset');
    eraseBoard.addEventListener('click', function() {
    const board = document.querySelector('.board');
    board.innerHTML =''; })
})