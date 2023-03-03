// captures the user input once submit is pressed and assings it to the variable "size"
const button = document.querySelector('.submit');
button.addEventListener('click', function() {
    const theGridSize = document.querySelector('.gridSize');
    const fieldValue = theGridSize.value;
    //converts string to int
    let size = parseInt(fieldValue);
    //ensures that user chooses a number of 4 through 64
    //reset size to zero if incorrect choice is made
    if (size < 4) {
        size = 0;
        alert('Too low. Please choose 4 through 64 as a size.');
    }
    else if (size > 64) {
        size = 0;
        alert('Too high. Please choose 4 through 64 as a size. ')
    }
    else {
        size = parseInt(fieldValue);
    }
});



